import React, { useState } from "react";
import * as Constants from './Constants'
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

    return (
        <>
            {menu 
                ?
                <div id="Menu">
                    <a type="button" id="closeMenu" onClick={menuIsOpen}>
                        <X size={iconSize} color={iconColor} />
                    </a>

                    <div id="menuHeader">
                        <Code size={70} />
                        <p>João Vitor</p>
                    </div>
                    <div id="menuOptions">
                        <a href="#About" onClick={menuIsOpen}>About me</a>
                        <a href="#sayHello" onClick={menuIsOpen}>Contact me</a>
                        <a type="button" onClick={changeLanguage}>Translate</a>
                    </div>
                    <div id="menuSocial">
                        <a href={Constants.LINKS.github} target="_blank" rel="noreferrer"><Github size={socialIconSize} /></a>
                        <a href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={socialIconSize} /></a>
                        <a href={Constants.LINKS.instagram} target="_blank" rel="noreferrer"><Instagram size={socialIconSize} /></a>
                    </div>
                </div>
                :
                <a type="button" id="openMenu" onClick={menuIsOpen}>
                    <List size={iconSize} color={iconColor} />
                </a>
            }
        </>
    )
}