import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import styles from './Header.module.css'

const Header = ({children}) => {
    const { scheme } = useContext(ThemeContext)
    return (
        <header className={styles.header}>
            <span className={styles.code}>{'<'}</span>
            <span style={{color: scheme.color}}>{children}</span>
            <span className={styles.code}>{'/>'}</span>
        </header>
    )
}

export default Header