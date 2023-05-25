'use client'
import { usePathname, useRouter } from 'next/navigation'
import Icon from './Icon'
import backIcon from '@iconify-icons/mdi/chevron-left'
import classNames from 'classnames'

export default () => {
    const router = useRouter()
    const pathname = usePathname()

    const goBack = () => router.push(window.location.pathname.split('/').slice(0, -1).join('/'))

    return (
        <div className="px-10 py-5 flex items-center sticky bg-white">
            <button
                className={classNames(
                    'text-2xl rounded w-8 h-8 flex items-center justify-center mr-1 hover:bg-slate-200 cursor-pointer',
                    pathname === '/' && 'invisible',
                )}
                type="button"
                onClick={goBack}
            >
                <Icon>{backIcon}</Icon>
            </button>
            User Data Viewer
        </div>
    )
}
