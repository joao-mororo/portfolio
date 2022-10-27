import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Timeline from "./components/Timelime";
import * as Constants from './components/Constants'

function App() {

  React.useEffect(() => {
    document.title = 'Portfolio - João Vitor Pereira Mororó'
  })

  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      {/* <Timeline events={Constants.timeline_events} /> */}
    </>
  );
}

export default App;
