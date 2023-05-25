import React from 'react'
import styles from './Header.module.css'

const Header = ({children}) => {
    return (
        <header className={styles.header}>
            <span className={styles.code}>{'<'}</span>
            <span className={styles.text}>{children}</span>
            <span className={styles.code}>{'/>'}</span>
        </header>
    )
}

export default Header