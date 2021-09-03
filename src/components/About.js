import React from "react";
import mypic from "./images/mypic.png";

function About()
{
    return (
        <div className="about">
      <article className="about-sec" style={{marginBottom: 50}}>
      <div className="Mypic">
        <img src={mypic} alt="My Pic" height="300" width="300"></img>
       </div>
       <div className="content">
           <h1>Hello !</h1>
           <h2>i'm Suman Patra</h2>
           <p>Currently pursuing B.tech in Computer science and engineering.</p>
           <p>Web Developer/ Software Developer</p>
           <p>My skills are web development, c, java, python, AWS</p>
           <p>I like coding, travelling, listening music</p>
       </div>
      </article>
        </div>
    );
    
}

export default About;
