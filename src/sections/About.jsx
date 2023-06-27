import React, { useContext } from "react"
import DownloadCV from "../components/DownloadCV"
import programmingIMG from '../images/undraw_programming_re_kg9v.svg'
import { ScrollContext } from "../contexts/scroll"
import { i18n } from "../translate/i18n"
import '../styles/About.css'

export default function About() {
    const { aboutRef } = useContext(ScrollContext)
    return (
        <section className="about" ref={aboutRef}>
            <div className="description">
                <h1 className="header">{i18n.t('about.title')}</h1>
                <div>
                    <p>{i18n.t('about.body')}</p>
                    {/* <p>{i18n.t('about.p1')}</p>
                        <p>{i18n.t('about.p2')}</p>
                        <p>{i18n.t('about.p3')}</p> */}
                </div>
                <div className="downloadCV">
                    <DownloadCV />
                </div>
            </div>
            <div className="avatar">
                <img src={programmingIMG} alt="avatar" />
            </div>
        </section>
    )
}