import React from "react";
import Section from "../../components/Section";
import DownloadCV from "../../components/DownloadCV";
import programmingIMG from "../../images/sitemap-amico.svg";
import { i18n } from "../../translate/i18n";
import styles from "./About.module.css";

const About = () => {
    return (
        // <section className={styles.section} ref={aboutRef}>
        <Section
            direction="row"
            background="var(--blue)"
            flex
            justifyContent="center"
            alignItems="center"
            id="about"
            shadow="0px 0px 100px 0px var(--blue)"
        >
            <div className={styles.description}>
                <h1 className={styles.header}>{i18n.t("about.title")}</h1>
                <div>
                    <p>{i18n.t("about.body")}</p>
                </div>
                <div className={styles.downloadCV}>
                    <DownloadCV />
                </div>
            </div>
            <div className={styles.avatar}>
                <img src={programmingIMG} alt="avatar" />
            </div>
        </Section>
        // </section>
    );
};

export default About;
