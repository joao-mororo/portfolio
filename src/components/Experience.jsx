import React, { useContext } from "react";
import Header from "./Header/Header";
import { i18n } from "../translate/i18n";
import { ScrollContext } from "../contexts/scroll";
import '../styles/Experience.css'

export default function Experience() {
    const { experience } = useContext(ScrollContext)
    return (
        <div className="experience" ref={experience}>
            <div className="academic-formation">
                <Header>{i18n.t('experience.academic_formation_header')}</Header>
                <details>
                    <summary>{i18n.t('experience.academic_formation.tech_title')}</summary>
                    <p>{i18n.t('experience.academic_formation.tech_description')}</p>
                </details>
                <details>
                    <summary>{i18n.t('experience.academic_formation.higher_title')}</summary>
                    <p>{i18n.t('experience.academic_formation.higher_description')}</p>
                </details>
                <details>
                    <summary>{i18n.t('experience.academic_formation.course_title')}</summary>
                    <p>{i18n.t('experience.academic_formation.course_description')}</p>
                </details>
            </div>
            <div className="profissional-experience">
                <Header>{i18n.t('experience.profissional_experience_header')}</Header>
                <details>
                    <summary>{i18n.t('experience.profissional_experience.moura_title')}</summary>
                    <p>{i18n.t('experience.profissional_experience.moura_description')}</p>
                </details>
            </div>
        </div>
    )
}