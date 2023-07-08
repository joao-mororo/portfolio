import React, { useContext } from 'react'
import * as Constants from '../../data/Constants'
import Copyright from '../../components/Copyright'
import Logo from '../../components/Logo'
import copyToClipboard from '../../functions/copyToClipboard'
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { ThemeContext } from '../../contexts/theme';
import styles from './Footer.module.css'

const Footer = () => {
    const { scheme } = useContext(ThemeContext)

    return (
        <footer className={styles.section} style={{backgroundColor: scheme.bgColorSecondary}}>
            <Logo className={styles.logo} />
            <div className={styles.socials}>                        
                <a href={Constants.LINKS.github} target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <button onClick={() => copyToClipboard(Constants.LINKS.discord)}><BsDiscord /></button>
            </div>
            <Copyright color="#fff">João Mororó</Copyright>
        </footer>
    )
}

export default Footer