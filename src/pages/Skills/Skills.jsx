import React from 'react'
import './Skills.css'
import rocke from './rocket.jpg'
import lap from './laptop.jpg'
import glob from './globe.jpg'
const Skills = () => {
  return (
    <div className='skil'>
    <h1 id='s1'>Skill-Set</h1>
      <section className='skillset'>
      <div><img src={lap} alt="3" />Public Relations</div>
       <div><img src={rocke} alt="1" />Web Development.</div>
       <div><img src={glob} alt="2" />Data Structures</div>
       <div><img src={lap} alt="3" />Public Relations</div>
      </section>
      
    </div>
  )
}
export default Skills
