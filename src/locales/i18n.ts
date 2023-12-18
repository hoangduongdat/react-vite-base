import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import English from './eng.json'
import Vietnamese from './vie.json'

const resources = {
    eng: {
        translation: English
    },
    vie: {
        translation: Vietnamese
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'eng',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue)
}

export default i18n
