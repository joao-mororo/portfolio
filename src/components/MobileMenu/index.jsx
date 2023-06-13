import React, { useState, useEffect, useContext } from "react";
import * as Constants from '../../data/Constants'
import Logo from "../Logo";
import copyToClipboard from "../../functions/copyToClipboard";
import SocialButton from "./SocialButton";
import OptionButton from "./OptionButton";
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
                        <OptionButton onClick={() => closeAndScroll(aboutRef)}>{i18n.t('menu.about_me')}</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(skillsRef)}>{i18n.t('menu.skills')}</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(experienceRef)}>{i18n.t('menu.experience')}</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(projectsRef)}>{i18n.t('works.some_works')}</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(sayhelloRef)}>{i18n.t('menu.contact_me')}</OptionButton>
                    </div>
                    <div className={styles.socials}>
                        <SocialButton as="a" href={Constants.LINKS.github}><BsGithub size={socialIconSize} /></SocialButton>
                        <SocialButton as="a" href={Constants.LINKS.linkedin}><BsLinkedin size={socialIconSize} /></SocialButton>
                        <SocialButton as="button" onClick={() => copyToClipboard(Constants.LINKS.discord)}><BsDiscord size={socialIconSize} /></SocialButton>
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