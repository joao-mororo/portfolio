import React, { useState } from "react";
import '../css/SayHello.css'
import * as Constants from './Constants'
import { Button } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import { i18n } from "../translate/i18n";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SayHello() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function clear() {
        // document.getElementById('name').value = ''
        // document.getElementById('email').value = ''
        // document.getElementById('subject').value = ''
        // document.getElementById('message').value = ''
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    function submit() {
        if (name === '' || email === '' || subject === '' || message === '') {
            toast.error(i18n.t('say_hello.empty'), Constants.DEFAULT_TOAST_CONFIG)
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send(
            Constants.EMAILJS.serviceID,
            Constants.EMAILJS.templateID,
            templateParams,
            Constants.EMAILJS.publicKey
        ).then(() => {
            toast.info(i18n.t('say_hello.toast_success'), Constants.DEFAULT_TOAST_CONFIG)
            clear()
        }, (err) => {
            toast.error(i18n.t('say_hello.toast_error'), Constants.DEFAULT_TOAST_CONFIG)
        })

    }

    return (
        <div id="sayHello">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form autoComplete="off">
                <input
                    id="name"
                    className="formInput"
                    type="text"
                    placeholder={i18n.t('say_hello.name')}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    id="email"
                    className="formInput"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    id="subject"
                    className="formInput"
                    type="text"
                    placeholder={i18n.t('say_hello.subject')}
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                />

                <textarea
                    id="message"
                    className="formInput"
                    placeholder={i18n.t('say_hello.message')}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <section>
                    <Button id="clear" onClick={clear} variant="outline-primary" size="lg">{i18n.t('say_hello.clear')}</Button>
                    <Button id="submit" onClick={submit} variant="primary" size="lg">{i18n.t('say_hello.send')}</Button>
                </section>

            </form>
        </div>
    )
}