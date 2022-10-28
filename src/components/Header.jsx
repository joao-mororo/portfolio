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
    Download
} from 'react-bootstrap-icons'
import { Button } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import Modal from 'react-modal';

export default function Header() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    Modal.setAppElement('#root')

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgb(20, 20, 20, 0.75)'
        },
        content: {
            backgroundColor: 'rgb(20, 20, 20)',
            border: 'solid 1px #0d6efd',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
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
                    {isDesktopOrLaptop && <><Button variant="outline-primary">{i18n.t('header.downloadCV')}</Button></>}
                    <Button variant="primary">{i18n.t('header.say_hello')}</Button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={modalStyle}
                >
                    <X id="closeButton" size={30} onClick={closeModal} />
                    <div id="modalItems">
                        <a className="modalItem" href={Constants.LINKS.github} onClick={closeModal} target="_blank" rel="noreferrer"> <Github size={25} /> Github</a>
                        <a className="modalItem" href={Constants.LINKS.linkedin} onClick={closeModal} target="_blank" rel="noreferrer"> <Linkedin size={25} /> LinkedIn</a>
                        <a className="modalItem" href={Constants.LINKS.instagram} onClick={closeModal} target="_blank" rel="noreferrer"> <Instagram size={25} /> Instagram</a>
                        <a className="modalItem" type="button" onClick={changeLenguage}><Translate size={25} /> Translate</a>
                        <a className="modalItem" href="./curriculo.pdf" download="CV - João Vitor Pereira Mororó" onClick={closeModal}> <Download size={25} /> {i18n.t('header.downloadCV')}</a>
                    </div>

                </Modal>

            </div>
            {/* <hr /> */}
        </>
    )
}