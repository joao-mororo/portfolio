import React from "react";
import { ArrowUp } from "react-bootstrap-icons";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import SayHello from "./components/SayHello";
import Copyright from './components/Copyright'
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
      <button id="toTopButton" onClick={toTop} title="Go to top"><ArrowUp size={20} /></button>
      <Home />
      <About />
      <Skills />
      <Experience />
      <SayHello />
      <Copyright name="João Vitor" />
      {/* <Timeline events={Constants.timeline_events} /> */}
    </>
  );
}

export default App;
