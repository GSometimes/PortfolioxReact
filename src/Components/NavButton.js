import React, {useState} from 'react'
import "./NavButton.css"


function NavButton(props) {
    const [toggle, setToggle] = useState("");

    const expand = toggle ? "width1" : "";

    return(
        <>
        <div className="navIcon" onClick={() => setToggle(!toggle)}></div>
        <div className={`navBox ${expand}`}>
            <p className="navLink">Cheese</p>
        </div>
        </>
    )
}

export default NavButton;