'use client'
import { random } from 'superb'
import { IndexButton } from '../IndexButton'
import { useEffect, useState } from 'react'
import MenuContentWrap from './MenuContentWrap'
import { TextField } from '@mui/material'

export default ({ postfix }: { postfix: string }) => {
    const [search, setSearch] = useState('')
    const [items, setItems] = useState([] as string[])

    useEffect(() => {
        setItems(Array.from({ length: 50 }).map(() => `${random()} ${postfix}`))
    }, [])

    return (
        <MenuContentWrap>
            <TextField label="Search items..." variant="outlined" value={search} onChange={({ target: { value } }) => setSearch(value)} />
            {items
                .filter(item => (search ? item.includes(search) : true))
                .map((content, i) => (
                    <IndexButton key={i}>{content}</IndexButton>
                ))}
        </MenuContentWrap>
    )
}
