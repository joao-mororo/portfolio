import React, { useContext } from "react";
import * as Constants from '../Constants'
import { ScrollContext } from "../../contexts/scroll";
import { ThemeContext } from "../../contexts/theme";
import { BsPersonFill, BsTranslate, BsGridFill, BsLinkedin, BsGithub, BsDiscord, BsTools, BsSunFill, BsMoonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { toast } from "react-toastify";
import { i18n } from "../../translate/i18n";
import './Sidebar.style.css'

const Sidebar = () => {
    const { scrollToSection, aboutRef, skillsRef, experienceRef, sayhelloRef } = useContext(ScrollContext)
    const { toggleTheme, theme } = useContext(ThemeContext) 
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
                className="sidebar-item"
                onClick={() => scrollToSection(aboutRef)}
            >
                <BsPersonFill size={iconSize} />
            </button>

            <button
                className="sidebar-item"
                onClick={() => scrollToSection(skillsRef)}
            >
                <BsTools size={iconSize} />
            </button>

            <button
                className="sidebar-item"
                onClick={() => scrollToSection(experienceRef)}
            >
                <BsGridFill size={iconSize} />
            </button>

            <a
                className="sidebar-item"
                href={Constants.LINKS.github}
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub size={iconSize} />
            </a>

            <a
                className="sidebar-item"
                href={Constants.LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin size={iconSize} />
            </a>

            <button
                className="sidebar-item"
                onClick={() => copyToClipboard(Constants.LINKS.discord)}
            >
                <BsDiscord size={iconSize} />
            </button>

            <button
                className="sidebar-item"
                onClick={() => scrollToSection(sayhelloRef)}
            >
                <MdEmail size={iconSize} />
            </button>

            <button
                className="sidebar-item"
                onClick={() => toggleTheme()}
            >
                {theme === 'dark' ? <BsMoonFill size={iconSize} /> : <BsSunFill size={iconSize} />}
            </button>

            <button
                className="sidebar-item"
                onClick={changeLanguage}
            >
                <BsTranslate size={iconSize} />
            </button>
        </div>
    )
}

export default Sidebar