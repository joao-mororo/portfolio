import React, { useContext } from "react";
import "../styles/Skills.css";

import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import Carousel from "../components/Carousel";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaWordpress,
} from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiElementor } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsGit } from "react-icons/bs";

import { i18n } from "../translate/i18n";
import { ScrollContext } from "../contexts/scroll";

const HtmlCssLogo = () => {
    const htmlStyle = {
        transform: "rotate(-20deg)",
        padding: "0",
        margin: "0",
    };

    const cssStyle = {
        transform: "rotate(20deg)",
        padding: "0",
        margin: "0",
    };

    return (
        <>
            <FaHtml5 style={htmlStyle} />
            <FaCss3Alt style={cssStyle} />
        </>
    );
};

const WordpressElementor = () => {
    const WordpressStyle = {
        position: "relative",
        top: "-1.5rem",
        marginRight: ".5rem",
    };

    const ElementorStyle = {};

    return (
        <>
            <FaWordpress style={WordpressStyle} />
            <SiElementor style={ElementorStyle} />
        </>
    );
};

const Skills = () => {
    const { skillsRef } = useContext(ScrollContext);

    return (
        <section id="skills" className="skills section" ref={skillsRef}>
            <Header>{i18n.t("skills.header")}</Header>

            {/* frontend skills */}
            <Carousel>
                <SkillCard
                    icon={<HtmlCssLogo />}
                    text={i18n.t("skills.htmlcss")}
                />
                <SkillCard
                    icon={<SiJavascript />}
                    text={i18n.t("skills.javascript")}
                />
                <SkillCard icon={<FaReact />} text={i18n.t("skills.react")} />
                <SkillCard
                    icon={<SiNextdotjs />}
                    text={i18n.t("skills.next")}
                />
                <SkillCard
                    icon={<WordpressElementor />}
                    text={i18n.t("skills.wordpress")}
                />
            </Carousel>

            {/* backend skills */}
            <Carousel>
                <SkillCard icon={<GrMysql />} text={i18n.t("skills.mysql")} />
                <SkillCard icon={<FaNodeJs />} text={i18n.t("skills.node")} />
                <SkillCard icon={<BsGit />} text={i18n.t("skills.git")} />
                <SkillCard icon={<FaDocker />} text={i18n.t("skills.docker")} />
            </Carousel>
        </section>
    );
};

export default Skills;
