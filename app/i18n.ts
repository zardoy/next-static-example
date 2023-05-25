'use client'
import { useEffect } from 'react'
import i18next from 'i18next'
import Backend, { HttpBackendOptions } from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const useInitI18n = () => {
    useEffect(() => {
        void i18next
            .use(Backend)
            .use(initReactI18next)
            .init({
                // lng: navigator.language.split('-')[0]!,
                lng: 'en',
                fallbackLng: 'en',
                debug: process.env.NODE_ENV === 'development',
                interpolation: {
                    escapeValue: false,
                },
                lowerCaseLng: true,

                backend: {
                    loadPath: './locales/{{lng}}.json',
                } satisfies HttpBackendOptions,
            })
    }, [])
}
