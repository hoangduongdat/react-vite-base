const applyTheme = (theme: { [x: string]: string | null }) => {
    const root = document.documentElement
    Object.keys(theme).forEach((cssVar) => {
        root.style.setProperty(cssVar, theme[cssVar])
    })
}

const createTheme = (theme: { [x: string]: string }) => {
    const arrKeys = Object.keys(theme).map((key) => `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`)
    const arrValues = Object.values(theme)
    const themeObject = Object.fromEntries(arrKeys.map((_, i) => [arrKeys[i], arrValues[i]]))

    return {
        ...themeObject
    }
}

const themeObjectTailwind = (theme: { [x: string]: string }) => {
    const arrKeys = Object.keys(theme).map((key) => key.slice(2))
    const arrValues = Object.keys(theme).map((key) => `var(${key})`)
    const themeObject = Object.fromEntries(arrKeys.map((_, i) => [arrKeys[i], arrValues[i]]))

    return {
        ...themeObject
    }
}

export { themeObjectTailwind, applyTheme, createTheme }
