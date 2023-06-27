import React, { useContext } from "react";
import Header from "../components/Header";
import { i18n } from "../translate/i18n";
import { ScrollContext } from "../contexts/scroll";
import { ThemeContext } from "../contexts/theme";
import '../styles/Experience.css'

const P = ({ children }) => {
    const { scheme } = useContext(ThemeContext)

    return (
        <p style={{ color: scheme.color }}>{children}</p>
    )
}

export default function Experience() {
    const { experienceRef } = useContext(ScrollContext)
    
    return (
        <div className="experience section" ref={experienceRef}>
            <div className="academic-formation">
                <Header>{i18n.t('experience.academic_formation_header')}</Header>
                <details>
                    <summary>{i18n.t('experience.academic_formation.tech_title')}</summary>
                    <P>{i18n.t('experience.academic_formation.tech_description')}</P>
                </details>
                <details>
                    <summary>{i18n.t('experience.academic_formation.higher_title')}</summary>
                    <P>{i18n.t('experience.academic_formation.higher_description')}</P>
                </details>
                <details>
                    <summary>{i18n.t('experience.academic_formation.course_title')}</summary>
                    <P>{i18n.t('experience.academic_formation.course_description')}</P>
                </details>
            </div>
            <div className="profissional-experience">
                <Header>{i18n.t('experience.profissional_experience_header')}</Header>
                <details>
                    <summary>{i18n.t('experience.profissional_experience.moura_title')}</summary>
                    <P>{i18n.t('experience.profissional_experience.moura_description')}</P>
                </details>
            </div>
        </div>
    )
}