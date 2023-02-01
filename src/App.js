import React from "react";
import { BsArrowUp } from 'react-icons/bs'

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SayHello from "./components/SayHello";
import Copyright from './components/Copyright'

import projects from "./data/projects";
import './css/index.css'

function App() {

  function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function scrollFunction() {
    let mybutton = document.getElementById('toTopButton')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  window.onscroll = function() {scrollFunction()};

  return (
    <>
      <button id="toTopButton" onClick={toTop} title="Go to top"><BsArrowUp size={20} /></button>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects projects={projects} />
      <SayHello />
      <Copyright name="João Vitor" />
    </>
  );
}

export default App;
