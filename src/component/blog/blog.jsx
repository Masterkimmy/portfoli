import React from 'react'
import "./blog.css"
import man from "../../../image/lovecalculator copy.png"
import toto from "../../../image/chatgptlanding.png"
import mell from "../../../image/adviceapi.png"

function blog() {
  return (
    <div className='menu'>
        <h1 className='meee'>Recent Post</h1>
       <div className='mango'>
            <div className='not'>
                        <img src={man} alt="" />
                        <div className='blog'>
                            <h1>Love Calculator</h1>
                            <p>I've Build Love Calculator that helps Users Determine their Compatibility With Someone Special.</p>
                        </div>         
                </div>
                <div className='not'>
                        <img src={toto} alt="" />
                        <div className='blog'>
                            <h1>Chat GPT</h1>
                            <p>the Chat GPT Project is Basically Special technology Called GPT (Generative pre-trained Transformer).</p>
                        </div>
                    </div>
                    <div className='not'>
                        <img src={mell} alt="" />
                        <div className='blog'>
                            <h1>Advice API</h1>
                            <p>The Advice API is a Tools That Provide HelpFull Suggestion and Guidance On Various Topic.</p>
                        </div>
                    </div>
       </div>
            <button className='see'>See All Blogs</button>
    </div>
  )
}

export default blog
