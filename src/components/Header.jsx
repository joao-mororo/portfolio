import React from "react";
import '../css/Header.css'
import 'react-bootstrap-icons'
import * as Constants from './Constants'
// import {Translate} from 'react-bootstrap-icons/dist/icons/translate'
import {
    Translate,
    SunFill,
    MoonFill,
    Github,
    Linkedin,
    Instagram
} from 'react-bootstrap-icons'

export default function Header() {
    const [theme, setTheme] = React.useState('dark')

    function changeTheme() {
        let body = document.getElementsByTagName("BODY")[0];
        let hr = document.getElementsByTagName("HR")[0];
        let eventPeriod = document.getElementsByClassName('eventPeriod');
        let eventName = document.getElementsByClassName('eventName')
        let timedot = document.getElementsByClassName('timedot')
        if (theme === 'dark') {
            setTheme('white')
            body.style.backgroundColor = "white";
            hr.style.backgroundColor = "black";
            for (let i in Constants.timeline_events) {
                eventPeriod[i].style.color = 'black'
                eventName[i].style.color = 'black'
                // timedot[i].style.backgroundColor = 'white'
            }
        } else if (theme === 'white') {
            setTheme('dark')
            body.style.backgroundColor = "black";
            hr.style.backgroundColor = "white";
            for (let i in Constants.timeline_events) {
                eventPeriod[i].style.color = 'white'
                eventName[i].style.color = 'white'
                // timedot[i].style.backgroundColor = 'black'
            }     
        }
    }

    function changeLenguage() {

    }

    return (
        <div className="header">
            <div className="socialNetworks">
                <a href={Constants.links.github} target="_blank" rel="noopener noreferrer"><Github color="white" size={25} /></a>
                <a href={Constants.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin color="white" size={25} /></a>
                <a href={Constants.links.instagram} target="_blank" rel="noopener noreferrer"><Instagram color="white" size={25} /></a>
            </div>
            <div className="menu">
                <a href="#">About me</a>
                <a href="#">Timeline</a>
                <a href="#">Projects</a>
            </div>
            <div className="settings">
                {theme === 'dark'
                    ? <SunFill onClick={changeTheme} color='white' size={30} />
                    : <MoonFill onClick={changeTheme} color='white' size={30} />    
                }
                <Translate onClick={changeLenguage} color='white' size={30}/>
            </div>
        </div>
    )
}