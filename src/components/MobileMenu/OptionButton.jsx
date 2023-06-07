import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'

const OptionButton = ({ children, onClick }) => {
    const { scheme } = useContext(ThemeContext)

    return (
        <button style={{ color: scheme.color }} onClick={onClick}>{children}</button>
    )
}

export default OptionButton