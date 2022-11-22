import React from "react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";
import { Download, Check } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { i18n } from "../translate/i18n";
import '../css/Home.css'
import '..'
import Menu from "./Menu";

export default function AboutMe(props) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div id="Home">
            {(isDesktopOrLaptop || (isTabletOrMobile && !isPortrait)) && <Sidebar />}
            {(isTabletOrMobile && isPortrait) && <Menu />}
            <div>
                <h1>
                    <p>{i18n.t('about_me.hi')}</p>
                    <p>{i18n.t('about_me.im')}</p>
                    <p>{i18n.t('about_me.developer')}</p>
                </h1>
                <p>Front-End Developer | React.js</p>
            </div>
        </div>
    )
}