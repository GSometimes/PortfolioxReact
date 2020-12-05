import React from "react"
import './App.css';
import './Components/NavButton.css';
import { Switch, Route } from "react-router-dom";


import Main from "./Components/Main"
import NavButton from "./Components/NavButton"

function App() {
  return (
    <>
    <div className="App">
      <NavButton />
    </div>
    </>
  );
}

export default App;
