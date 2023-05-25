import './app.css'
import Header from './components/Header'

export default function RootLayout({ children }) {
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
