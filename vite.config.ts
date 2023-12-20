import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

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
        devSourcemap: true
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
    }
})
