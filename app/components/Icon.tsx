'use client'
import { Icon } from '@iconify/react'
import React from 'react'
export default ({ children, ...props }: { children } & Omit<React.ComponentProps<typeof Icon>, 'icon' | 'children'>) => {
    return <Icon {...props} icon={children} />
}
