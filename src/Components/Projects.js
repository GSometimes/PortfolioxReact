import React from 'react'
import './Component.css'

const Projects = () => {
    return (
        <>
        <div id="projects"className="projectContainer1">
            <h1>Portfolio By Sometimes</h1>
            <div className="contentBox">
                    <p>Portfolio by Sometimes version 1, this is the first iteration of my portfolio that I made starting out at General Assembly.
                        It is a project focused on the first foundations of being a developer utilizing HTML, Bootstrap, CSS Grid/Flexbox and Javascript.
                        This first iteration evolved into the page that you are currently browsing and as I continue to grow as a developer the iterations will continue. You can view the project <a href="http://www.portfoliobysometimes.com/" alt="" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
            </div>
            <div className="projectImage1"></div>
        </div>
        <div className="projectContainer2">
            <h1>The Man They Called Cayde</h1>
            <div className="contentBox">
                    <p>The Man They Called Cayde is the first iteration of an interactive application built in react that pulls API data of a lore book from Destiny 2.
                        This was the second project that I created while at General Assembly. Destiny has been a part of my life for the last 6 years and my inspiration for this app was to take a small part of something that I hold dearly and share it with others. As I grow I look to grow the library. 
                        You can view the project <a href="https://cayde6.netlify.app/" alt="" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
            </div>
            <div className="projectImage2"></div>
        </div>
        <div className="projectContainer3">
            <h1>Cineprime</h1>
            <div className="contentBox">
                    <p> Cineprime was my first group project that I worked on along side a great team. 
                        It is a movie tracker/planner application that allows you to preview TV shows and Movies and add them to a watch list. 
                        In this project, I contributed to the wireframing, frontend framework design and responsiveness and helped with implementing sign in/out capabilities. 
                        You can view the project <a href="https://cineprime.netlify.app/" alt="" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
            </div>
            <div className="projectImage3"></div>
        </div>
        <div className="projectContainer4">
            <h1>Little Black Book</h1>
            <div className="contentBox">
                    <p> Little Black Book was my Capstone project at General Assembly. It is a personal blog that houses thoughts I had during the program 
                        and offers a thank you to those that helped and support me and continue to do so. My mentor always talked about having a place to release your thoughts and that was
                        how this project came to fruition. It showcases a unique animation and a start to a style I'm looking to be known for as I grow as a developer. 
                        You can view the project <a href="https://littleblackbook.netlify.app/" alt="" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
            </div>
            <div className="projectImage4"></div>
        </div>
        </>
    )
}

export default Projects;
