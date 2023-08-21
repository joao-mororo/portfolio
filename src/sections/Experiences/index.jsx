import React, { useContext } from "react";
import Header from "../../components/Header";
import Experience from "./Experience";
import { i18n } from "../../translate/i18n";
import { ScrollContext } from "../../contexts/scroll";
import styles from "./Experiences.module.css";

const Experiences = () => {
    const { experienceRef } = useContext(ScrollContext);

    return (
        <section className={styles.section} ref={experienceRef}>
            <div className={styles.academic_formation}>
                <Header>
                    {i18n.t("experience.academic_formation_header")}
                </Header>
                <Experience
                    summary={i18n.t("experience.academic_formation.tech_title")}
                    content={i18n.t(
                        "experience.academic_formation.tech_description"
                    )}
                />
                <Experience
                    summary={i18n.t(
                        "experience.academic_formation.higher_title"
                    )}
                    content={i18n.t(
                        "experience.academic_formation.higher_description"
                    )}
                />
                <Experience
                    summary={i18n.t(
                        "experience.academic_formation.course_title"
                    )}
                    content={i18n.t(
                        "experience.academic_formation.course_description"
                    )}
                />
            </div>
            <div className={styles.profissional_experience}>
                <Header>
                    {i18n.t("experience.profissional_experience_header")}
                </Header>
                <Experience
                    summary={i18n.t(
                        "experience.profissional_experience.moura_title"
                    )}
                    content={i18n.t(
                        "experience.profissional_experience.moura_description"
                    )}
                />
                <Experience
                    summary={i18n.t(
                        "experience.profissional_experience.aeg_title"
                    )}
                    content={i18n.t(
                        "experience.profissional_experience.aeg_description"
                    )}
                />
            </div>
        </section>
    );
};

export default Experiences;
