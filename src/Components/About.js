import React from 'react'
import "./Component.css"

const About = () => {
    return (
        <>
        <div id="about" className="aboutContainer">
            <h1>About</h1>
            <div className="aboutText">
                <div className="contentBox">
                        <p id="aboutMe">I want to start by saying if you made it here then it must be for a reason and I thank you for taking the time to view my portfolio. 
                        I would love the opportunity to work with you and I hope to hear from you. I am a father, foodie, 
                        and wino who’s always looking to make lasting memories. 
                        My son is my motivation, my “why” and the reason I do what I do at the level I do it. 
                        From food to code, I am a Chef turned Designer. 
                        I am a self-motivated creative mind looking to make the world a prettier place, one design at a time, 
                        so please reach out and let’s make the world a prettier place together.</p>
                </div>
            </div>
        </div>
        <div className="imageContainer"></div>
        </>
    )
}

export default About;
