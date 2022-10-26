import React from "react";
import Moon from "./Moon";
import { Download, Check } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { i18n } from "../translate/i18n";
import '../css/AboutMe.css'
import '../'

export default function AboutMe(props) {
    const [downloaded, setDownloaded] = React.useState(false)

    // adjust height
    React.useEffect(() => {
        let screenHeight = window.screen.height
        let aboutMe = document.getElementById('aboutMe')
        aboutMe.style.height = `${screenHeight - 60}px`
        console.log(screenHeight)
    }, [])

    function downloadCheck() {
        setDownloaded(true)
        console.log(downloaded)
        return setTimeout(() => {setDownloaded(false)}, 2000)
    }

    return (
        <div id="aboutMe">
            {/* <Moon /> */}
            
            <div className="description">
                <h1 className="descriptionTitle">{i18n.t('about_me.title')}</h1>
                <p className="descriptionBody">{i18n.t('about_me.body')}</p>
                <Button disabled={downloaded} onClick={downloadCheck} variant="outline-primary" size="lg" href="./curriculo.pdf" download="CV - João Vitor Pereira Mororó">
                    {downloaded === true
                        ? <span><Check size={30} /> <p>{i18n.t('about_me.CVDownloaded')}</p></span>
                        : <span><Download size={26} /> <p>{i18n.t('about_me.downloadCV')}</p></span>
                    }
                </Button>
                    
                
            </div>
        </div>
    )
}