import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { headers, cookies } from 'next/headers'

// turbopack bug workaround
const availableLanguages = ['nl']

const initI18next = async () => {
    // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend((language, _namespace) => {
                if (!availableLanguages.includes(language)) return
                return import(`./locales/${language}.json`)
            }),
        )
        .init(getOptions())
    return i18nInstance
}

export const getSelectedLanguage = () => {
    return cookies().get('lang')?.value || headers().get('Accept-Language')?.split(',')[0]?.split('-')[0] || 'en'
}

const getOptions = () => {
    return {
        lng: getSelectedLanguage(),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        lowerCaseLng: true,
        // debug: process.env.NODE_ENV === 'development',
    }
}

export async function useTranslation() {
    const i18nextInstance = await initI18next()
    return {
        t: i18nextInstance.getFixedT<null>(getOptions().lng /* Array.isArray(ns) ? ns[0] : ns, options.keyPrefix */),
        i18n: i18nextInstance,
    }
}
