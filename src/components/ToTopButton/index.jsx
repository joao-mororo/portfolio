import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import styles from './ToTopButton.module.css'

const ToTopButton = () => {

    function toTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    function scrollFunction() {
        let mybutton = document.getElementsByClassName('toTopButton')[0]
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    window.onscroll = function () { scrollFunction() };

    return (
        <button 
            className={`${styles.button} toTopButton`} 
            onClick={toTop} 
        >
            <IoIosArrowUp />
        </button>
    )
}

export default ToTopButton