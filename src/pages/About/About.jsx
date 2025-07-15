import React from 'react'
import './About.css'
import surfer from './surfer.png'
import resume from './sanyam-cv.pdf'
const About = () => {
  return (
    <div className='about'>
     <section id='description'>

        <h1 id='a1'>About me</h1>
        <br />
        <li id='a2'>Hello! i'm Sanyam Choudhary</li>
        <br />
       <li>I am a dedicated and passionate Computer Science student with a strong foundation in Web development and data structures. With a focus on building efficient and scalable web applications.</li>
       <li id='line'>I am excited about the opportunity to work with talented teams and continue growing both personally and professionally in the tech industry.</li>
       <li>I'm always open to feedback and new opportunities. Let's connect!</li>
       <div style={{marginTop:"-17%" }}>
        <a   href={resume}
        download="Sanyam-Choudhary-CV"
        target="_blank"
        rel="noreferrer"><button id='button'>Download CV</button></a>
     </div>
     </section>
     <section>
      <img src={surfer} alt="" />
     </section>
    </div>
  )
}

export default About
