import React from "react"
import avatar from '../images/avatar.png'
import '../css/About.css'

export default function About() {
    return (
        <div id="About">
            <div id="description">
                <h1>Me, Myself and I</h1>
                <p>Eu comecei na programação em 2018, durante um curso técnico no ensino médio, desde então sigo cresçendo na área para me tornar um programador cada vez melhor</p>
            </div>
            <div id="avatar">
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
}