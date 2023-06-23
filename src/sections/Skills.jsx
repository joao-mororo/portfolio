import React, { useContext } from "react";
import '../styles/Skills.css'

import SkillCard from "../components/SkillCard";
import Header from '../components/Header'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsGit } from 'react-icons/bs'

import { i18n } from "../translate/i18n";
import { ScrollContext } from "../contexts/scroll";
import Carousel from "../components/Carousel";

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

    const { skillsRef } = useContext(ScrollContext)

    return (
        <section className="skills" ref={skillsRef}>
            <Header>{i18n.t('skills.header')}</Header>
            <Carousel>
                <SkillCard icon={<HtmlCssLogo />} text={i18n.t('skills.htmlcss')} />
                <SkillCard icon={<SiJavascript />} text={i18n.t('skills.javascript')} />
                <SkillCard icon={<FaReact />} text={i18n.t('skills.react')} />
                <SkillCard icon={<SiNextdotjs />} text={i18n.t('skills.next')} />
            </Carousel>
            <Carousel>
                <SkillCard icon={<GrMysql />} text={i18n.t('skills.mysql')} />
                <SkillCard icon={<FaNodeJs />} text={i18n.t('skills.node')} />
                <SkillCard icon={<BsGit />} text={i18n.t('skills.git')} />
                <SkillCard icon={<FaDocker />} text={i18n.t('skills.docker')} />
            </Carousel>
        </section>
    )
}

export default Skills