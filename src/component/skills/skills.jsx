import React from 'react'
import './skills.css'

const skills = () => {
  return (
    <div className='all'>
      <h1 className='myskills'>My Skills</h1>
      <div className='front'>
            <div className='design'>
                    <h1 className='back'>FRONT-END TECHNOLOGIES</h1>
                    <div  className='ball'>
                        <div className='tools'>
                                <span className='own'>&#10004;</span>
                                <p>HTML 5</p>
                        </div>
                        <div className='tools'>
                            <span className='own'>&#10004;</span>
                            <p>CSS 3</p>
                        </div>
                        <div className='tools'>
                                <span className='own'>&#10004;</span>
                                <p>BOOTSTRAP 5</p>
                        </div>
                            <div className='tools'>
                                <span className='own'>&#10004;</span>
                                <p>MATERIAL UI</p>
                            </div>
                        <div className='tools'>
                                <span className='own'>&#10004;</span>
                                <p>VUE.JS</p>
                        </div>
                            <div className='tools'>
                                <span className='own'>&#10004;</span>
                                <p>ANGULAR.JS</p>
                            </div>
                </div>
            </div>
                <div className='deck'>
                    <h1 className='back'>BACK-END TECHNOLOGIES</h1>
                    <div className='ball'>
                        <div className='too'>
                            <span className='own'>&#10004;</span>
                            <p>NODE.JS</p>
                        </div>
                        <div className='too'>
                            <span className='own'>&#10004;</span>
                            <p>EXPRESS.JS</p>
                        </div>
                        <div className='too'>
                            <span className='own'>&#10004;</span>
                            <p>PYTHON DJANGO</p>
                        </div>
                        <div className='too'>
                            <span className='own'>&#10004;</span>
                            <p>FLASK</p>
                        </div>
                            <div className='too'>
                                <span className='own'>&#10004;</span>
                                <p>.NET</p>
                            </div>
                        <div className='too'>
                            <span className='own'>&#10004;</span>
                            <p>Java</p>
                        </div>
                        <div className='too'>
                            <span className='own'>&#10004;</span>
                            <p>PHP LARAVEL</p>
                        </div>
                    </div>
            </div>
        </div>
       <div className='god'>
          <div className='second'>
                 <div className='design'>
                    <h1 className=''>DATABASE</h1>
                    <div className='balling'>
                        <div className='tools'>
                                <span className='allo'>&#10004;</span>
                                <p>MYSQL</p>
                        </div>
                        <div className='tools'>
                                <span className='allo'>&#10004;</span>
                                <p>MONGODB</p>
                        </div>
                        <div className='tools'>
                                <span className='allo'>&#10004;</span>
                                <p>MONGOOSE</p>
                        </div>
                        <div className='tools'>
                                <span className='allo'>&#10004;</span>
                                <p>POSTGRESQL</p>
                        </div>
                    </div>
                </div>
                <div className='design'>
                    <h1 className='ux'>UI/UX DESIGN</h1>
                    <div className='lower'>
                        <div className='tool'>
                            <span className='allow'>&#10004;</span>
                            <p>FIGMA</p>
                        </div>
                        <div className='tool'>
                            <span className='allow'>&#10004;</span>
                            <p>CANVA</p>
                        </div>
                        <div className='tool'>
                            <span className='allow'>&#10004;</span>
                            <p>ADOBE SUITE</p>
                        </div>
                        <div className='tool'>
                            <span className='allow'>&#10004;</span>
                                <p>SKETCH & AZURE</p>
                        </div>
                    </div>
                </div>
          </div>
                    <button className='check'>Check my works</button>
            </div>
       </div>
  )
}

export default skills
