import React, {useState} from 'react'
import "./Component.css"


function NavButton(props) {
    const [toggle, setToggle] = useState("");

    const expand = toggle ? "width1" : "";

    return(
        <>
        <div className="navIcon" onClick={() => setToggle(!toggle)}></div>
        <div className={`navBox ${expand}`}>
            <div className="navLink">
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
        </>
    )
}

export default NavButton;