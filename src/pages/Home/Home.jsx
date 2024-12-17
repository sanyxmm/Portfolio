import React from 'react'
import './Home.css'
import skatee from './skate-removebg.png'
import skatee2 from './skate2.png'
const Home = () => {
  return (
   <div>
     <div className='MOB-VIEW'>
        <div className='home-mob'>
        <div>
        <h3>  Hello i'm Sanyam <img width="18" height="18" src="https://img.icons8.com/emoji/18/waving-hand-emoji.png" alt="waving-hand-emoji"> </h3>
        <h3>Sanyam Choudhary&ensp;</h3>
        <h3>FullStack Developer&ensp;</h3></div>
        </div>
      <img src={skatee2} alt="" id='imagee2' />
    </div>
    <div className='DESK-VIEW'>
       <img src={skatee} alt="" id='imagee' />
      <div className='home'>     
        <div id='h1' > &ensp;<span style={{color:"white",fontSize:"5vw",fontWeight:"bolder"}}>H</span>ello i'm &ensp;</div>
        <div id='h2'>Sanyam Choudhary&ensp;</div>
        <div id='h3'> FullStack Developer&ensp;</div>
      </div>
    </div>
   </div>
  )
}
export default Home
