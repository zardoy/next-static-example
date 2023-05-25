'use client'
import './app.css'
import Header from './components/Header'
import { useInitI18n } from './i18n'

export default function RootLayout({ children }) {
    // without export i18n can be used directly
    useInitI18n()

    return (
        <html>
            <head />
            <body className="bg-slate-100 text-lg">
                <Header />
                <div className="py-10 px-0 container sm:p-10">{children}</div>
            </body>
        </html>
    )
}
