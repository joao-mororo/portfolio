import React from "react";
import {
    PersonFill,
    ChatDotsFill,
    Translate
} from "react-bootstrap-icons";
import { BsGridFill, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
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
                <BsGithub size={iconSize} />
            </a>

            <a 
                href={Constants.LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin size={iconSize} />
            </a>

            <a 
                href={Constants.LINKS.instagram}
                target="_blank"
                rel="noreferrer"
            >
                <BsInstagram size={iconSize} />
            </a>

            <a 
                href="#experience"
            >
                <BsGridFill size={iconSize} />
            </a>

            <a 
                href="#sayHello"
            >
                <ChatDotsFill size={iconSize} />
            </a>

            <button 
                onClick={changeLanguage}
            >
                <Translate size={iconSize} />
            </button>
        </div>
    )
}