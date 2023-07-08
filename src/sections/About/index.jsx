import React, { useContext } from "react"
import DownloadCV from "../../components/DownloadCV"
import programmingIMG from '../../images/undraw_programming_re_kg9v.svg'
import { ScrollContext } from "../../contexts/scroll"
import { i18n } from "../../translate/i18n"
import styles from './About.module.css'

const About = () => {
    const { aboutRef } = useContext(ScrollContext)
    return (
        <section className={styles.section} ref={aboutRef}>
            <div className={styles.description}>
                <h1 className={styles.header}>{i18n.t('about.title')}</h1>
                <div>
                    <p>{i18n.t('about.body')}</p>
                </div>
                <div className={styles.downloadCV}>
                    <DownloadCV />
                </div>
            </div>
            <div className={styles.avatar}>
                <img src={programmingIMG} alt="avatar" />
            </div>
        </section>
    )
}

export default About