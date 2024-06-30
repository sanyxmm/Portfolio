import React from 'react'
import './Work.css'
import img from './radioo.png'
const Work = () => {
  return (
    <div className='work'>
      <h1 id='w1'>My Works</h1>
     <div>
     <section className='workk'>
        <div>
            <img src={img} alt="" />
            <h1>projects name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga?</p>
            <button>View Project</button>
        </div>
        <div>
            <img src={img} alt="" />
            <h1>projects name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga?</p>
            <button>View Project</button>
        </div>
        <div>
            <img src={img} alt="" />
            <h1>projects name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga?</p>
            <button>View Project</button>
        </div>
      </section>
     </div>
    </div>
  )
}

export default Work
