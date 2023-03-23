import React from 'react'
import './ToTopButton.style.css'
import { BsArrowUp } from 'react-icons/bs'

const ToTopButton = () => {
    function toTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    function scrollFunction() {
        let mybutton = document.getElementsByClassName('toTopButton')[0]
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    window.onscroll = function () { scrollFunction() };

    return (
        <button className="toTopButton" onClick={toTop} title="Go to top"><BsArrowUp size={20} /></button>
    )
}

export default ToTopButton