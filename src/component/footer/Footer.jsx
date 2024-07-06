import React from 'react';
import './Footer.css'
import git from "../../../image/github icon.png";
import twitter from "../../../image/twitter icon.png";
import whatsapp from "../../../image/whatsapp icon.png";
import link from "../../../image/Linkedin icon.png"
import tosh from "../../../image/Group 27.png"

const Footer = () => {
  return (
    <div className='works'>
      <h1>Have works for me?</h1>
      <h2>Let Have A Chat</h2>
     <div className='git'>
    <button className='hub'>  <a href="https://github.com/Masterkimmy"><img src={git} alt="" /></a> </button>
      <img src={twitter} alt="" />
      <img src={whatsapp} alt="" />
     <button className='hub'> <a href="https://www.linkedin.com/in/abdulkareem-abdulhakeem-025282306/"> <img src={link} alt="" /></a></button>
     </div>
     <div className='reserved'>
     <img className='cc' src={tosh} alt="" />
      <p>Master Kimmy. all right reserved.</p>
     </div>
    </div>
  )
}

export default Footer
