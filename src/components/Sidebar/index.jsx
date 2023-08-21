import React, { useContext } from "react";
import * as Constants from "../../data/Constants";
import changeLanguage from "../../functions/changeLanguage";
import copyToClipboard from "../../functions/copyToClipboard";
import { ScrollContext } from "../../contexts/scroll";
import { ThemeContext } from "../../contexts/theme";
import {
    BsPersonFill,
    BsTranslate,
    BsGridFill,
    BsLinkedin,
    BsGithub,
    BsDiscord,
    BsTools,
    BsSunFill,
    BsMoonFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const { aboutRef, skillsRef, experienceRef, sayhelloRef } =
        useContext(ScrollContext);
    const { toggleTheme, theme, scheme } = useContext(ThemeContext);
    const iconSize = 25;

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className={styles.sidebar}
            style={{ backgroundColor: scheme.bgColorSecondary }}
        >
            <button
                className={styles.button}
                onClick={() => scrollToSection("about")}
            >
                <BsPersonFill size={iconSize} />
            </button>

            <button
                className={styles.button}
                onClick={() => scrollToSection("skills")}
            >
                <BsTools size={iconSize} />
            </button>

            <button
                className={styles.button}
                onClick={() => scrollToSection("experience")}
            >
                <BsGridFill size={iconSize} />
            </button>

            <a
                className={styles.button}
                href={Constants.LINKS.github}
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub size={iconSize} />
            </a>

            <a
                className={styles.button}
                href={Constants.LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin size={iconSize} />
            </a>

            <button
                className={styles.button}
                onClick={() => copyToClipboard(Constants.LINKS.discord)}
            >
                <BsDiscord size={iconSize} />
            </button>

            <button
                className={styles.button}
                onClick={() => scrollToSection("contact")}
            >
                <MdEmail size={iconSize} />
            </button>

            <button className={styles.button} onClick={() => toggleTheme()}>
                {theme === "dark" ? (
                    <BsMoonFill size={iconSize} />
                ) : (
                    <BsSunFill size={iconSize} />
                )}
            </button>

            <button className={styles.button} onClick={changeLanguage}>
                <BsTranslate size={iconSize} />
            </button>
        </div>
    );
};

export default Sidebar;
