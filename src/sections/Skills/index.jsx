import React from "react";

import Section from "../../components/Section";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Card from "./Card";

import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsGit } from "react-icons/bs";
import { HtmlCssLogo, WordpressElementor } from "./DoubleIcons";

import { i18n } from "../../translate/i18n";

const Skills = () => {
    return (
        <Section
            id="skills"
            flex
            direction="column"
            alignItems="center"
            width="total"
        >
            <Header>{i18n.t("skills.header")}</Header>

            {/* frontend skills */}
            <Carousel>
                <Card icon={<HtmlCssLogo />} text={i18n.t("skills.htmlcss")} />
                <Card
                    icon={<SiJavascript />}
                    text={i18n.t("skills.javascript")}
                />
                <Card icon={<FaReact />} text={i18n.t("skills.react")} />
                <Card icon={<SiNextdotjs />} text={i18n.t("skills.next")} />
                <Card
                    icon={<WordpressElementor />}
                    text={i18n.t("skills.wordpress")}
                />
            </Carousel>

            {/* backend skills */}
            <Carousel>
                <Card icon={<GrMysql />} text={i18n.t("skills.mysql")} />
                <Card icon={<FaNodeJs />} text={i18n.t("skills.node")} />
                <Card icon={<BsGit />} text={i18n.t("skills.git")} />
                <Card icon={<FaDocker />} text={i18n.t("skills.docker")} />
            </Carousel>
        </Section>
    );
};

export default Skills;
