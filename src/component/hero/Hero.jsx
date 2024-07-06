import React, { useEffect } from 'react';
import "./Hero.css";
import well from "../../../image/masterkimmy.png"
import AOS from "aos";
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
      AOS.init({duration:2000});
  }, [])


  return (

    <div className='hero'>
     <div data-aos="fade-up" className='top'>
        <h1 className='web'><span className='get'>Get To know Everything </span> About me on this website!</h1>
       <p className='tosh'>Hi there i am master Kimmy, Passionate Fronted Developer With a Knack For Creating Engaging Uers experiences. skilled in HTML,CSS, and JavaScript.</p>
      <button className='btn'>learn more</button>
     </div>
      <div>
        <img className='img' src={well} alt="" />
      </div>
    </div>

    

    
  
  
  )
}

export default Hero
