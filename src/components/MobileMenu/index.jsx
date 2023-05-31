import React, { useState, useEffect, useContext } from "react";
import * as Constants from '../Constants'
import Logo from "../Logo";
import copyToClipboard from "../../functions/copyToClipboard";
import { ScrollContext } from "../../contexts/scroll";
import { ThemeContext } from "../../contexts/theme";
import { i18n } from "../../translate/i18n";
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import styles from './MobileMenu.module.css'

const Menu = () => {
    const { scrollToSection, aboutRef, skillsRef, projectsRef, experienceRef, sayhelloRef } = useContext(ScrollContext)
    const { scheme } = useContext(ThemeContext)
    const [menu, setMenu] = useState(false);
    const menuIsOpen = () => setMenu(!menu)
    const iconSize = 40
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

    // remove home menu when menu is open
    useEffect(() => {
        const right_menu = document.getElementsByClassName('right_menu')[0]
        if (menu) {
            right_menu.style.display = 'none'
        } else {
            right_menu.style.display = 'flex'
        }
    }, [menu])

    const closeAndScroll = (section) => {
        menuIsOpen()
        scrollToSection(section)
    }

    return (
        <>
            {menu ? (
                <div className={styles.menu} style={{backgroundColor: scheme.bgColor}}>
                    <button className={styles.closeMenu} onClick={menuIsOpen}>
                        <HiX size={iconSize} />
                    </button>

                    <div className={styles.header} style={{backgroundColor: scheme.bgColorSecondary}}>
                        <Logo className={styles.logo} />
                        <p>João Mororó</p>
                    </div>
                    <div className={styles.options}>
                        <button style={{color: scheme.color}} onClick={() => closeAndScroll(aboutRef)}>{i18n.t('menu.about_me')}</button>
                        <button style={{color: scheme.color}} onClick={() => closeAndScroll(skillsRef)}>{i18n.t('menu.skills')}</button>
                        <button style={{color: scheme.color}} onClick={() => closeAndScroll(experienceRef)}>{i18n.t('menu.experience')}</button>
                        <button style={{color: scheme.color}} onClick={() => closeAndScroll(projectsRef)}>{i18n.t('works.some_works')}</button>
                        <button style={{color: scheme.color}} onClick={() => closeAndScroll(sayhelloRef)}>{i18n.t('menu.contact_me')}</button>
                    </div>
                    <div className={styles.socials}>
                        <a style={{color: scheme.color}} href={Constants.LINKS.github} target="_blank" rel="noreferrer"><BsGithub size={socialIconSize} /></a>
                        <a style={{color: scheme.color}} href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><BsLinkedin size={socialIconSize} /></a>
                        <button style={{color: scheme.color}} onClick={() => copyToClipboard(Constants.LINKS.discord)}><BsDiscord size={socialIconSize} /></button>
                    </div>
                </div>
            ) : (
                <button className={styles.openMenu} style={{ color: scheme.color }} onClick={menuIsOpen}>
                    <HiMenuAlt2 size={iconSize} />
                </button>
            )}
        </>
    )
}

export default Menu