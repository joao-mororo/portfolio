import React from "react";
import { Download, Check } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { i18n } from "../translate/i18n";
import '../css/Home.css'
import '..'

export default function AboutMe(props) {
    const [downloaded, setDownloaded] = React.useState(false)

    // adjust height
    // React.useEffect(() => {
    //     // let screenHeight = window.screen.height
    //     let aboutMe = document.getElementById('aboutMe')
    //     let header = document.getElementById('header')
    //     let skills = document.getElementById('skills')
    //     // aboutMe.style.height = `${screenHeight - skills.style.height}px`
    //     aboutMe.style.height = `${ - (header.style.height + skills.style.height)}px`
    // }, [])

    function downloadCheck() {
        setDownloaded(true)
        console.log(downloaded)
        return setTimeout(() => { setDownloaded(false) }, 2000)
    }

    return (
        <div id="Home">
            {/* <h1 className="descriptionTitle">{i18n.t('about_me.title')}</h1>
                <p className="descriptionBody">{i18n.t('about_me.body')}</p> */}
            <h1>
                <p>{i18n.t('about_me.hi')}</p>
                <p>{i18n.t('about_me.im')}</p>
                <p>{i18n.t('about_me.developer')}</p>
            </h1>
            <p>Front-End Developer | React.js</p>
            {/* <Button disabled={downloaded} onClick={downloadCheck} variant="outline-primary" size="lg" href="./curriculo.pdf" download="CV - João Vitor Pereira Mororó">
                {downloaded === true
                    ? <span><Check size={30} /> <p>{i18n.t('about_me.CVDownloaded')}</p></span>
                    : <span><Download size={26} /> <p>{i18n.t('about_me.downloadCV')}</p></span>
                }
            </Button> */}
        </div>
    )
}