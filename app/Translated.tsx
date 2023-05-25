'use client'

import { useTranslation } from 'react-i18next'

export default ({ children }): JSX.Element => {
    const [t] = useTranslation()

    return <>{t(children)}</>
}
