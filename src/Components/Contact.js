import React from 'react'
import "./Component.css"
import "../App.css"

const Contact = () => {
    return (
        <div id="contact" className="contactContainer">
            <h1>Contact</h1>
            <div className="flexContainer">
                <div className="contentBox">
                    <h1 className="header">Let's Work Together</h1>
                </div>
                <div className="contentBox">
                    <p className="contact">Connect by <a href="mailto:gsometimes@outlook.com">Email</a></p>
                    <p className="contact">View my <a href="https://github.com/GSometimes" target="_blank" rel="noopener noreferrer">Github</a></p>
                    <p className="contact">Connect on <a href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                </div>
            </div>

        </div>
    )
}

export default Contact;
