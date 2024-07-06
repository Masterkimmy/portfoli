import React from 'react';
import "./About.css"
import one from "../../../image/masterkimmy.png"

const About = () => {
  return (
    <div className='section'>
           <img className='img' src={one} alt="" />
       <div className='person'>
          <div className='senior'>
            <h1>About Me</h1>
            <p>Hi there i am master Kimmy, Passionate Fronted Developer With a Knack For Creating Engaging Uers experiences. skilled in HTML,CSS, and JavaScript.</p>
          </div>
         <div className='nothing'>
            <div className='problem'>
                <span className='html'>&#10004;</span>
                <p>problem-solver</p>
              </div>
              <div className='problem'>
                <span className='html'>&#10004;</span>
                <p>critical thinker</p>
              </div>
              <div className='problem'>
                <span className='html'>&#10004;</span>
                <p>9 years of leadership</p>
              </div>
         </div>
       </div>
    </div>
  )
}

export default About
