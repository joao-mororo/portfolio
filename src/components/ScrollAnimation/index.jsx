import React, { useContext } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { ThemeContext } from '../../contexts/theme'
import styles from './ScrollDown.module.css'

const ScrollAnimation = () => {
    const { scheme } = useContext(ThemeContext)
    return (
        <span className={styles.icon} style={{color: scheme.color}}><IoIosArrowDown /></span>
    )
}

export default ScrollAnimation