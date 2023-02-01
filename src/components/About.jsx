import React from "react"
import avatar from '../images/avatar.png'
import { i18n } from "../translate/i18n"
import '../css/About.css'

export default function About() {
    return (
        <section id="about">
            <div id="description">
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
            <div id="avatar">
                <img src={avatar} alt="avatar" />
            </div>
        </section>
    )
}