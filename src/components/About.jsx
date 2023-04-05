import React, { useContext } from "react"

import programmingIMG from '../images/undraw_programming_re_kg9v.svg'
import waveTop from '../images/wave-top.svg'
import waveDown from '../images/wave-down.svg'

import { ScrollContext } from "../contexts/scroll"

import { i18n } from "../translate/i18n"
import '../styles/About.css'

export default function About() {
    const {about} = useContext(ScrollContext)
    return (
        <>
            {/* <img className="img-wave" src={waveTop} alt="" /> */}

            <section className="about" ref={about}>
                <div className="description">
                    <header>{i18n.t('about.about_me')}</header>
                    <div>
                        {/* <p>Sou um desenvolvedor Front-End localizado no Brasil. Tenho um interesse particular em sites responsivos e criação de experiências de usuário intuitivas e dinâmicas.</p>
                    <p>Pessoa bem organizada, solucionadora de problemas e com atenção aos detalhes. Fã de jogos e séries de TV. Uma pessoa reservada mas que interaje bem com os colegas.</p>
                    <p>Interessado em todo espectro de frontend, e um interesse crescente por back-end.</p> */}
                        <p>{i18n.t('about.p1')}</p>
                        <p>{i18n.t('about.p2')}</p>
                        <p>{i18n.t('about.p3')}</p>
                    </div>
                </div>
                <div className="avatar">
                    <img src={programmingIMG} alt="avatar" />
                </div>
            </section>

            {/* <img className="img-wave" src={waveDown} alt="" /> */}
        </>
    )
}