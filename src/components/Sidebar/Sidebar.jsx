import React, { useContext } from "react";
import {
    PersonFill,
    ChatDotsFill,
    Translate
} from "react-bootstrap-icons";
import { BsGridFill, BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs'
import * as Constants from '../Constants'
import { toast } from "react-toastify";
import { i18n } from "../../translate/i18n";
import './Sidebar.style.css'
import { ScrollContext } from "../../contexts/scroll";

export default function Sidebar() {
    const { scrollToSection, about, experience, sayhello } = useContext(ScrollContext)
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

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.info(i18n.t('sidebar.toast_user'), Constants.DEFAULT_TOAST_CONFIG)
    }

    return (
        <div className="sidebar">


            <button
                onClick={() => scrollToSection(about)}
            >
                <PersonFill size={iconSize} />
            </button>

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

            {/* <a 
                href={Constants.LINKS.instagram}
                target="_blank"
                rel="noreferrer"
            >
                <BsInstagram size={iconSize} />
            </a> */}

            <button
                onClick={() => copyToClipboard(Constants.LINKS.discord)}
            >
                <BsDiscord size={iconSize} />
            </button>

            <button
                onClick={() => scrollToSection(experience)}
            >
                <BsGridFill size={iconSize} />
            </button>

            <button
                onClick={() => scrollToSection(sayhello)}
            >
                <ChatDotsFill size={iconSize} />
            </button>

            <button
                onClick={changeLanguage}
            >
                <Translate size={iconSize} />
            </button>
        </div>
    )
}