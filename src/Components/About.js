import React from 'react'
import "./Component.css"

const About = () => {
    return (
        <div className="aboutContainer">
            <h1>About</h1>
            <div className="aboutText">
                <div className="contentBox">
                    <div>
                        <img id ="myPic" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg" alt=""></img>
                    </div>
                        
                </div>
                    
                <div className="contentBox">
                    <div>
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
        </div>
    )
}

export default About;
