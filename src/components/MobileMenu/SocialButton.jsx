import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'

const SocialButton = ({ children, as = 'button', href, onClick }) => {
    const { scheme } = useContext(ThemeContext)
    const As = as

    return (
        <As
            style={{ color: scheme.color }}
            onClick={onClick}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </As>
    )
}

export default SocialButton