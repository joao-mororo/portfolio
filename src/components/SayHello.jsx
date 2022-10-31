import React, {useState} from "react";
import '../css/SayHello.css'
import { Button } from "react-bootstrap";

export default function SayHello() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function clear() {
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('subject').value = ''
        document.getElementById('message').value = ''
    }

    function submit() {
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Preencha todos os campos')
            return
        }
    }

    return (
        <div id="sayHello">
            <form autoComplete="off">
                <input 
                    id="name" 
                    className="formInput" 
                    type="text" 
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)} 
                />

                <input 
                    id="email" 
                    className="formInput" 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />  

                <input 
                    id="subject" 
                    className="formInput" 
                    type="subject" 
                    placeholder="Subject" 
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea 
                    id="message" 
                    className="formInput" 
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <section>
                <Button id="clear" onClick={clear} variant="outline-primary" size="lg">Limpar</Button>
                <Button id="submit" onClick={submit} variant="primary" size="lg">Enviar</Button>
                </section>
                
            </form>
        </div>
    )
}