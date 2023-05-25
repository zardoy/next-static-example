'use client'
import { usePathname, useRouter } from 'next/navigation'
import backIcon from '@iconify-icons/mdi/chevron-left'
import classNames from 'classnames'
import mdiLanguageBox from '@iconify-icons/mdi/language-box'
import { MenuItem, Select } from '@mui/material'
import { Icon } from '@iconify-icon/react'
import { useCookies } from 'react-cookie'

const languages = [
    ['en', 'English'],
    // ['es', 'Spanish'],
    // ['fi', 'Finnish'],
    // ['fr', 'French'],
    // ['ru', 'Russian'],
    ['nl', 'Dutch'],
] as const

export default ({ selectedLanguage }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [_, setCookie] = useCookies()

    const goBack = () => router.push(window.location.pathname.split('/').slice(0, -1).join('/'))

    const changeLanguage = (lang: string) => {
        setCookie('lang', lang)
        // reload is required since translations are also used in server-side components
        window.location.reload()
    }

    return (
        <div className="px-10 py-5 flex items-center justify-between sticky bg-white">
            <div className="flex items-center">
                <button
                    className={classNames(
                        'text-2xl rounded w-8 h-8 flex items-center justify-center mr-1 hover:bg-slate-200 cursor-pointer',
                        pathname === '/' && 'invisible',
                    )}
                    type="button"
                    onClick={goBack}
                >
                    <Icon icon={backIcon} />
                </button>
                User Data Viewer
            </div>
            <div>
                <Icon className="text-2xl" icon={mdiLanguageBox} />
                <Select variant="outlined" onChange={({ target: { value } }) => changeLanguage(value)} value={selectedLanguage}>
                    {languages.map(([code, name]) => (
                        <MenuItem value={code} key={code}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    )
}
