import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { i18n } from "../translate/i18n";
import '../css/Home.css'

export default function AboutMe(props) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div id="Home">
            {(isDesktopOrLaptop || (isTabletOrMobile && !isPortrait)) && <Sidebar />}
            {(isTabletOrMobile && isPortrait) && <Menu />}
            {isTabletOrMobile &&
                <Button as="a" id="sayHello-button" href="#sayHello" variant="primary">{i18n.t('home.say_hello')}</Button>
            }
            <div id="home-message">
                <h1>
                    <p>{i18n.t('home.hi')}</p>
                    <p>{i18n.t('home.im')}</p>
                    <p>{i18n.t('home.developer')}</p>
                </h1>
                <footer>Front-End Developer | React.js</footer>
            </div>
        </div>
    )
}