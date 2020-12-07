import React, {useState} from 'react'
import "./Component.css"


function NavButton(props) {
    const [toggle, setToggle] = useState("");

    const expand = toggle ? "width1" : "";

    return(
        <>
        <div className="iconBox">
        <div className="navIcon" onClick={() => setToggle(!toggle)}></div>
        </div>
        <div className={`navBox ${expand}`}>
            <div className="navLink">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        </>
    )
}

export default NavButton;