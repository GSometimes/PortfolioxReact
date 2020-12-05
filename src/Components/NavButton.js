import React, {useState} from 'react'
import "./NavButton.css"


function NavButton(props) {
    const [toggle, setToggle] = useState("");

    const expand = toggle ? "width1" : "";

    return(
        <>
        <div className="navIcon" onClick={() => setToggle(!toggle)}></div>
        <div className={`navBox ${expand}`}>
            <ul className="navLink">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    )
}

export default NavButton;