import React, { useState } from "react";
import Header from "./Header/Header";
import { Button } from "react-bootstrap";
import { i18n } from "../translate/i18n";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import * as Constants from "./Constants";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SayHello.css";

export default function SayHello() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    function clear() {
        // document.getElementById('name').value = ''
        // document.getElementById('email').value = ''
        // document.getElementById('subject').value = ''
        // document.getElementById('message').value = ''
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    function submit() {
        setSending(true);

        if (name === "" || email === "" || subject === "" || message === "") {
            toast.error(i18n.t("say_hello.empty"), Constants.DEFAULT_TOAST_CONFIG);
            setSending(false);
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send(
            Constants.EMAILJS.serviceID,
            Constants.EMAILJS.templateID,
            templateParams,
            Constants.EMAILJS.publicKey
        ).then(() => {
            toast.info(
                i18n.t("say_hello.toast_success"),
                Constants.DEFAULT_TOAST_CONFIG
            );
            clear();
        },
            (err) => {
                toast.error(
                    i18n.t("say_hello.toast_error"),
                    Constants.DEFAULT_TOAST_CONFIG
                );
            }
        ).finally(() => setSending(false));
    }

    return (
        <div id="sayHello">
            <Header>{i18n.t("home.say_hello")}</Header>
            <form autoComplete="off">
                <input
                    id="name"
                    className="formInput"
                    type="text"
                    placeholder={i18n.t("say_hello.name")}
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
                    placeholder={i18n.t("say_hello.subject")}
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                />

                <textarea
                    id="message"
                    className="formInput"
                    placeholder={i18n.t("say_hello.message")}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <section>
                    <Button
                        disabled={sending}
                        id="submit"
                        onClick={submit}
                        variant="outline-primary"
                        size="lg"
                    >
                        {!sending ? (
                            <>{i18n.t("say_hello.send")} <IoSend /></>
                        ) : (
                            <>{i18n.t("say_hello.sending")}</>
                        )}
                    </Button>
                </section>
            </form>
        </div>
    );
}
