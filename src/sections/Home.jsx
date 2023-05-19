import React, { useContext } from "react";
import Menu from "../components/MobileMenu/Menu";
import ScrollAnimation from "../components/ScrollAnimation";
import Sidebar from "../components/Sidebar/Sidebar";
import Sound from "../components/Sound";
import JackEffect from "../components/JackEffect";
import { useMediaQuery } from "react-responsive";
import { Button } from 'react-bootstrap'
import { i18n } from "../translate/i18n";
import { ScrollContext } from "../contexts/scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'

const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const { scrollToSection, sayhello } = useContext(ScrollContext)

    return (
        <section className="home">
            {(isDesktopOrLaptop || (isTabletOrMobile && !isPortrait)) && <Sidebar />}
            {(isTabletOrMobile && isPortrait) && <Menu />}
            {isTabletOrMobile &&
                <Button as="button" className="btn-sayhello" onClick={() => scrollToSection(sayhello)} variant="primary">{i18n.t('home.say_hello')}</Button>
            }
            <div className="home-message">
                <h1>
                    <JackEffect>{i18n.t('home.hi')}</JackEffect>
                    <JackEffect>{i18n.t('home.im')}</JackEffect>
                    <JackEffect>{i18n.t('home.developer')}</JackEffect>
                </h1>
                <footer>Front-End Developer | React.js</footer>
            </div>
            <ScrollAnimation />
            {isDesktopOrLaptop && <Sound />}
        </section>
    )
}

export default Home