'use client'
import { random } from 'superb'
import { IndexButton } from '../IndexButton'
import { useEffect, useState } from 'react'
import MenuContentWrap from './MenuContentWrap'
import { TextField } from '@mui/material'
import { useTranslation } from '../i18n'

//@ts-ignore
export default async ({ postfix }: { postfix: string }): JSX.Element => {
    const { t } = await useTranslation()

    const [search, setSearch] = useState('')
    const [items, setItems] = useState([] as string[])

    useEffect(() => {
        setItems(Array.from({ length: 50 }).map(() => `${random()} ${postfix}`))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <MenuContentWrap>
            <TextField label={t('Search items...')} variant="outlined" value={search} onChange={({ target: { value } }) => setSearch(value)} />
            {items
                .filter(item => (search ? item.includes(search) : true))
                .map((content, i) => (
                    <IndexButton key={i}>{content}</IndexButton>
                ))}
        </MenuContentWrap>
    )
}
