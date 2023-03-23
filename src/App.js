import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SayHello from "./components/SayHello";
import Copyright from './components/Copyright'
import ToTopButton from "./components/ToTopButton/ToTopButton";

import projects from "./data/projects";
import './styles/index.css'

function App() {
  return (
    <>
      <ToTopButton />
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
