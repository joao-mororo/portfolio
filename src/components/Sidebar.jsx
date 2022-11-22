import React from "react";
import {
    PersonFill,
    Github,
    Linkedin,
    Instagram,
    ChatDotsFill,
    Translate
} from "react-bootstrap-icons";
import * as Constants from './Constants'
import '../css/Sidebar.css'

export default function Sidebar() {
    const iconSize = 25

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
        <div id="sidebar">
            <a 
                href="#About"
            >
                <PersonFill size={iconSize} />
            </a>

            <a 
                href={Constants.LINKS.github}
                target="_blank"
                rel="noreferrer"
            >
                <Github size={iconSize} />
            </a>

            <a 
                href={Constants.LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
            >
                <Linkedin size={iconSize} />
            </a>

            <a 
                href={Constants.LINKS.instagram}
                target="_blank"
                rel="noreferrer"
            >
                <Instagram size={iconSize} />
            </a>

            <a 
                href="#sayHello"
            >
                <ChatDotsFill size={iconSize} />
            </a>

            <a 
                type="button" 
                onClick={changeLanguage}
            >
                <Translate size={iconSize} />
            </a>
        </div>
    )
}