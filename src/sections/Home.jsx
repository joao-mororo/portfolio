import React, { useContext } from "react";
import Menu from "../components/MobileMenu";
import ScrollAnimation from "../components/ScrollAnimation";
import Sidebar from "../components/Sidebar";
import Sound from "../components/Sound";
import JackEffect from "../components/JackEffect";
import changeLanguage from "../functions/changeLanguage";
import { ThemeContext } from "../contexts/theme";
import { useMediaQuery } from "react-responsive";
import { i18n } from "../translate/i18n";
import { BsSunFill, BsMoonFill, BsTranslate } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'

const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const { theme, scheme, toggleTheme } = useContext(ThemeContext)

    return (
        <section 
            className="home" 
            style={{backgroundImage: `linear-gradient(to top, var(--blue) -20%, transparent ${isDesktopOrLaptop ? '20%' : '25%'})`}}
        >
            {(isDesktopOrLaptop || (isTabletOrMobile && !isPortrait)) && <Sidebar />}
            {(isTabletOrMobile && isPortrait) && <Menu />}
            <div className="home-message">
                <h1>
                    <JackEffect>{i18n.t('home.hi')}</JackEffect>
                    <JackEffect>{i18n.t('home.im')}</JackEffect>
                    <JackEffect>{i18n.t('home.developer')}</JackEffect>
                </h1>
                <footer>Front-End Developer | React.js</footer>
            </div>

            <ScrollAnimation />

            <div className="right_menu">
                {isTabletOrMobile && (
                    <>
                        <button className="btn-theme" style={{ color: scheme.color }} onClick={() => toggleTheme()}>
                            {theme === 'dark' ? <BsMoonFill /> : <BsSunFill />}
                        </button>

                        <button className="btn-translate" style={{ color: scheme.color }} onClick={() => changeLanguage()}>
                            <BsTranslate />
                        </button>
                    </>
                )}
                <Sound />
            </div>
        </section>
    )
}

export default Home