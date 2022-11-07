import React from "react";
import '../css/Header.css'
import 'react-bootstrap-icons'
import * as Constants from './Constants'
import { i18n } from "../translate/i18n";
import {
    Translate,
    Github,
    Linkedin,
    Instagram,
    List,
    X,
    Download,
    Code
} from 'react-bootstrap-icons'
import { Button } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import Modal from 'react-modal';

export default function Header() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    Modal.setAppElement('#root')

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgb(29, 29, 29, 0.75)'
        },
        content: {
            backgroundColor: 'rgb(29, 29, 29)',
            border: 'solid 1px #0d6efd',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '0'
        }
    }

    function changeLenguage() {
        let language = localStorage.getItem(Constants.I18N_STORAGE_KEY)

        if (language === 'en') {
            localStorage.setItem(Constants.I18N_STORAGE_KEY, 'pt')
        } else {
            localStorage.setItem(Constants.I18N_STORAGE_KEY, 'en')
        }

        window.location.reload(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }


    return (
        <>
            <div id="header">
                {isDesktopOrLaptop &&
                    <>
                        <div id="buttons">
                            <a className="circleButton" href={Constants.LINKS.github} target="_blank" rel="noreferrer"><Github className="icon" size={Constants.ICONS_SIZE} /></a>
                            <a className="circleButton" href={Constants.LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin className="icon" size={Constants.ICONS_SIZE} /></a>
                            <a className="circleButton" href={Constants.LINKS.instagram} target="_blank" rel="noreferrer"><Instagram className="icon" size={Constants.ICONS_SIZE} /></a>
                            <a className="circleButton" type="button" onClick={changeLenguage}><Translate className="icon" size={Constants.ICONS_SIZE} /></a>
                        </div>
                    </>
                }
                {isTabletOrMobile &&
                    <>
                        <a id="menuButton" type="button" onClick={openModal}><List size={Constants.ICONS_SIZE} /></a>
                    </>
                }

                <div id="rightButtons">
                    {isDesktopOrLaptop && <><Button as="a" href="./curriculo.pdf" download="CV - João Vitor Pereira Mororó" variant="outline-primary">{i18n.t('header.downloadCV')}</Button></>}
                    <Button as="a" href="#sayHello" variant="primary">{i18n.t('header.say_hello')}</Button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={modalStyle}
                >
                    <X id="closeButton" size={30} onClick={closeModal} />
                    <div id="modalHeader">
                        <h1><Code color="#0d6efd" size={80} /></h1>
                        <span>Web Developer</span>
                    </div>
                    <div id="modalItems">
                        <a className="modalItem" href={Constants.LINKS.github} onClick={closeModal} target="_blank" rel="noreferrer">Github</a>
                        <a className="modalItem" href={Constants.LINKS.linkedin} onClick={closeModal} target="_blank" rel="noreferrer">LinkedIn</a>
                        <a className="modalItem" href={Constants.LINKS.instagram} onClick={closeModal} target="_blank" rel="noreferrer">Instagram</a>
                        <a className="modalItem" type="button" onClick={changeLenguage}>Translate</a>
                        <a className="modalItem" href="./curriculo.pdf" download="CV - João Vitor Pereira Mororó" onClick={closeModal}>{i18n.t('header.downloadCV')}</a>
                    </div>

                </Modal>

            </div>
            {/* <hr /> */}
        </>
    )
}