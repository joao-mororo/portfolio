import React from "react";
import { ToastContainer } from "react-toastify";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import SayHello from "./sections/SayHello";
import Footer from "./sections/Footer";
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
      {/* <Copyright>João Vitor</Copyright> */}
      <Footer />
    </>
  );
}

export default App;
