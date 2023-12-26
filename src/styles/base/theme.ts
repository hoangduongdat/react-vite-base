import { createTheme } from '../../utils/themeUtil'

const baseColorTheme = createTheme({
    default: 'black',
    defaultLight: '#ff4d4d',
    primary: 'red',
    primaryLight: '#4d4dff',
    secondary: 'white'
})

// const darkColorTheme = createTheme({
// default: 'black',
// defaultLight: '#ff4d4d',
// primary: 'red',
// primaryLight: '#4d4dff',
// secondary: 'white'
// })

const baseTheme = {
    ...baseColorTheme
}

export { baseColorTheme, baseTheme }
