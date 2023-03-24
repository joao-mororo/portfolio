import React from "react";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SayHello from "./components/SayHello";
import Copyright from './components/Copyright/Copyright'
import ToTopButton from "./components/ToTopButton/ToTopButton";

import projects from "./data/projects";
import './styles/index.css'

function App() {
  return (
    <>
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

      <ToTopButton />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects projects={projects} />
      <SayHello />
      <Copyright>João Vitor</Copyright>
    </>
  );
}

export default App;
