import React from "react";
import '../styles/Skills.css'
import htmlLogo from '../images/html5.svg'
import cssLogo from '../images/css3-alt.svg'
import jsLogo from '../images/square-js.svg'
import reactLogo from  '../images/react.svg'

export default function Skills() {

    return (
        <section id="skills">
            <img className="skillLogo" src={htmlLogo} alt="htmlLogo" />
            <img className="skillLogo" src={cssLogo} alt="cssLogo" />
            <img className="skillLogo" src={jsLogo} alt="jsLogo" />
            <img className="skillLogo" src={reactLogo} alt="reactLogo" />
        </section>
    )
}