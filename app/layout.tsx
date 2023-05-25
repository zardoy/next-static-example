import './app.css'
import Header from './components/Header'
import { getSelectedLanguage } from './i18n'
import 'iconify-icon'

function RootLayout({ children }) {
    const lang = getSelectedLanguage()

    return (
        <html lang={lang}>
            <head />
            <body className="bg-slate-100 text-lg">
                <Header selectedLanguage={lang} />
                <div className="py-10 px-0 container sm:p-10">{children}</div>
            </body>
        </html>
    )
}

export default RootLayout
