import React, { useState, useEffect } from "react";
import * as Constants from './Constants'
import { i18n } from "../translate/i18n";
import { 
    X,
    List,
    Github,
    Linkedin,
    Instagram,
    Code
} from "react-bootstrap-icons";
import '../css/Menu.css'

export default function Menu() {
    const [menu, setMenu] = useState(false);
    const menuIsOpen = () => setMenu(!menu)
    const iconSize = 40
    const iconColor = '#fff'
    const socialIconSize = 23

    function changeLanguage() {
        let language = localStorage.getItem(Constants.I18N_STORAGE_KEY)

        if (language === 'en') {
            localStorage.setItem(Constants.I18N_STORAGE_KEY, 'pt')
        } else {
            localStorage.setItem(Constants.I18N_STORAGE_KEY, 'en')
        }

        window.location.reload(false)
    }

    // remove body scroll when menu is open
    useEffect(() => {
        const scroll = document.getElementsByTagName('body')[0]
        if (menu) {
            scroll.style.overflowY = 'hidden'
        } else {
            scroll.style.overflowY = 'scroll'
        }
    }, [menu])

    // remove Say Hello button when menu is open
    useEffect(() => {
        const button = document.getElementById('sayHello-button')
        if (menu && button) {
            button.style.display = 'none'
        } else if (!menu && button) {
            button.style.display = 'block'
        }
    }, [menu])

    return (
        <>
            {menu 
                ?
                <div id="Menu">
                    <button id="closeMenu" onClick={menuIsOpen}>
                        <X size={iconSize} color={iconColor} />
                    </button>

                    <div id="menuHeader">
                        <Code size={70} />
                        <p>João Vitor</p>
                    </div>
                    <div id="menuOptions">
                        <a href="#About" onClick={menuIsOpen}>{i18n.t('menu.about_me')}</a>
                        <a href="#experience" onClick={menuIsOpen}>{i18n.t('menu.experience')}</a>
                        <a href="#sayHello" onClick={menuIsOpen}>{i18n.t('menu.contact_me')}</a>
                        <a type="button" onClick={changeLanguage}>{i18n.t('menu.translate')}</a>
                    </div>
                    <div id="menuSocial">
                        <a href={Constants.LINKS.github} target="_blank" rel="noreferrer"><Github size={socialIconSize} /></a>
                        <a href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={socialIconSize} /></a>
                        <a href={Constants.LINKS.instagram} target="_blank" rel="noreferrer"><Instagram size={socialIconSize} /></a>
                    </div>
                </div>
                :
                <button id="openMenu" onClick={menuIsOpen}>
                    <List size={iconSize} color={iconColor} />
                </button>
            }
        </>
    )
}