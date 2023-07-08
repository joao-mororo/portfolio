import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from './contexts/theme'

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import SayHello from "./sections/SayHello";
import Footer from "./sections/Footer";
import ToTopButton from "./components/ToTopButton";

import './styles/index.css'

function App() {
  const { scheme } = useContext(ThemeContext)
  return (
    <div className="App" style={{transition: '.3s', backgroundColor: scheme.bgColor}}>
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
      <Projects />
      <SayHello />
      <Footer />
    </div>
  );
}

export default App;
