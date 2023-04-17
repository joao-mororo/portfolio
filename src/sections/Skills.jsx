import React from "react";
import '../styles/Skills.css'

import SkillCard from "../components/SkillCard";
import Header from '../components/Header/Header'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'

import { i18n } from "../translate/i18n";

const HtmlCssLogo = () => {
    const htmlStyle = {
        transform: 'rotate(-20deg)',
        padding: '0',
        margin: '0'
    }

    const cssStyle = {
        transform: 'rotate(20deg)',
        padding: '0',
        margin: '0'
    }

    return (
        <>
            <FaHtml5 style={htmlStyle} /><FaCss3Alt style={cssStyle} />
        </>
    )
}

const Skills = () => {

    return (
        <section className="skills">
            <Header>{i18n.t('skills.header')}</Header>
            <div className="skills-grid">
                <SkillCard icon={<HtmlCssLogo />} text={i18n.t('skills.htmlcss')} />
                <SkillCard icon={<SiJavascript />} text={i18n.t('skills.javascript')} />
                <SkillCard icon={<FaReact />} text={i18n.t('skills.react')} />
                <SkillCard icon={<GrMysql />} text={i18n.t('skills.mysql')} />
                <SkillCard icon={<SiMongodb />} text={i18n.t('skills.mongo')} />
                <SkillCard icon={<FaNodeJs />} text={i18n.t('skills.node')} />
            </div>
        </section>
    )
}

export default Skills