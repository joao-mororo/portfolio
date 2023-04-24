import React, { useState, useEffect, useContext } from "react";
import Logo from "../Logo";
import * as Constants from '../Constants'
import { ScrollContext } from "../../contexts/scroll";
import { i18n } from "../../translate/i18n";
import {
    X,
    List,
} from "react-bootstrap-icons";
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { toast } from "react-toastify";
import './Menu.style.css'

const Menu = () => {
    const { scrollToSection, aboutRef, projectsRef, experienceRef, sayhelloRef } = useContext(ScrollContext)
    const [menu, setMenu] = useState(false);
    const menuIsOpen = () => setMenu(!menu)
    const iconSize = 40
    const iconColor = '#fff'
    const socialIconSize = 23

    // remove body scroll when menu is open
    useEffect(() => {
        const scroll = document.getElementsByTagName('body')[0]
        if (menu) {
            scroll.style.overflowY = 'hidden'
        } else {
            scroll.style.overflowY = 'scroll'
        }
    }, [menu])

    const closeAndScroll = (section) => {
        menuIsOpen()
        scrollToSection(section)
    }

    function changeLanguage() {
        let language = localStorage.getItem(Constants.I18N_STORAGE_KEY)

        if (language === 'en') {
            localStorage.setItem(Constants.I18N_STORAGE_KEY, 'pt')
        } else {
            localStorage.setItem(Constants.I18N_STORAGE_KEY, 'en')
        }

        window.location.reload(false)
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.info(i18n.t('sidebar.toast_user'), Constants.DEFAULT_TOAST_CONFIG)
    }

    return (
        <>
            {menu ? (
                <div className="menu">
                    <button id="closeMenu" onClick={menuIsOpen}>
                        <X size={iconSize} color={iconColor} />
                    </button>

                    <div id="menu-header">
                        <Logo />
                        <p>João Mororó</p>
                    </div>
                    <div id="menu-options">
                        <button onClick={() => closeAndScroll(aboutRef)}>{i18n.t('menu.about_me')}</button>
                        <button onClick={() => closeAndScroll(experienceRef)}>{i18n.t('menu.experience')}</button>
                        <button onClick={() => closeAndScroll(projectsRef)}>{i18n.t('works.some_works')}</button>
                        <button onClick={() => closeAndScroll(sayhelloRef)}>{i18n.t('menu.contact_me')}</button>
                        <button onClick={changeLanguage}>{i18n.t('menu.translate')}</button>
                    </div>
                    <div id="menu-socials">
                        <a href={Constants.LINKS.github} target="_blank" rel="noreferrer"><BsGithub size={socialIconSize} /></a>
                        <a href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><BsLinkedin size={socialIconSize} /></a>
                        {/* <a href={Constants.LINKS.instagram} target="_blank" rel="noreferrer"><Instagram size={socialIconSize} /></a> */}
                        <button onClick={() => copyToClipboard(Constants.LINKS.discord)}><BsDiscord size={socialIconSize} /></button>
                    </div>
                </div>
            ) : (
                <button id="openMenu" onClick={menuIsOpen}>
                    <List size={iconSize} color={iconColor} />
                </button>
            )}
        </>
    )
}

export default Menu