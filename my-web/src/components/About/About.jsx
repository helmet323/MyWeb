import React from "react";
import "./about.css"
import Photo from "../../assets/Photo.jpg";

function About() {
    return (
        <div className="about__container" id="home">
            <img className="about__profile" src={Photo} alt="" />
            <div className="about__heading">
                Hi, I'm Tommy Su. I am an aspiring software developer with a passion for technology.
            </div>
        </div>
    );
}

export default About;
