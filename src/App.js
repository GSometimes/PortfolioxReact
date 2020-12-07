import React from "react"
import './App.css';
import './Components/Component.css';
import { Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import About from "./Components/About"
import Main from "./Components/Main"
import NavButton from "./Components/NavButton"

function App() {
  return (
    <>
    <div className="App">
      <NavButton />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
    {/* <div className="parallax"></div> */}
    <div className="footer">Designs by Sometimes</div>
    </>
  );
}

export default App;
