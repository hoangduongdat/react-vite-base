import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import postcssNesting from 'tailwindcss/nesting'
import path from 'path'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 3000
    },
    // envDir: './env',
    envPrefix: 'VITE_',
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [postcssImport, postcssNesting, tailwindcss, autoprefixer]
        }
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
    }
})
