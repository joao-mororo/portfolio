import React from "react";
import { i18n } from "../translate/i18n";
import Header from "./Header/Header";
import '../styles/Experience.css'

export default function Experience() {
    return (
        <div id="experience">
            <div id="academic-formation">
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
            <div id="profissional-experience">
                <Header>{i18n.t('experience.profissional_experience_header')}</Header>
                <details>
                    <summary>{i18n.t('experience.profissional_experience.moura_title')}</summary>
                    <p>{i18n.t('experience.profissional_experience.moura_description')}</p>
                </details>
            </div>
        </div>
    )
}