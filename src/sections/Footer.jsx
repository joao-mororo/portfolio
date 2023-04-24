import React from 'react'
import Copyright from '../components/Copyright/Copyright'
import Logo from '../components/Logo'
import * as Constants from '../components/Constants'
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { i18n } from '../translate/i18n'
import { toast } from "react-toastify";
import '../styles/Footer.css'

const Footer = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.info(i18n.t('sidebar.toast_user'), Constants.DEFAULT_TOAST_CONFIG)
    }

    return (
        <footer className='footer'>
            <Logo />
            <div className='footer-socials'>                        
                <a href={Constants.LINKS.github} target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <button onClick={() => copyToClipboard(Constants.LINKS.discord)}><BsDiscord /></button>
            </div>
            <Copyright>João Mororó</Copyright>
        </footer>
    )
}

export default Footer