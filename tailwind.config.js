import { themeObjectTailwind } from './src/utils/themeUtil'
import { baseColorTheme } from './src/styles/base/theme'
/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...(themeObjectTailwind(baseColorTheme) ?? {})
        },

        extend: {}
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
}
