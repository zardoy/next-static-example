import Icon from './components/Icon'

export function IndexButton({ icon, children, href }: { children; icon?; href? }) {
    const Component = href !== undefined ? 'a' : 'div'

    return (
        <Component className="block px-4 py-4 bg-white text-2xl font-light rounded" href={href}>
            {icon && <Icon>{icon}</Icon>} {children}
        </Component>
    )
}
