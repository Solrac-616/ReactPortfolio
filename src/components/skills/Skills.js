import React from 'react'
import Skill from './Skill'
import "./Skills.css"

import Images from "../../Constants/index.jsx";


const Skills = () => {
  return (
    <div id='section3' className="skills-section">
        <div className="skills-container">

            <div className="skills-title">
                <h2>Habilidades</h2>
            </div>

            <div className="skills-row" >

                <Skill png={Images.html} alt="react"/>
                <Skill png={Images.css} alt="react"/>
                <Skill png={Images.javascript} alt="react"/>
                <Skill png={Images.react} alt="react"/>
                <Skill png={Images.nodejs} alt="react"/>
                <Skill png={Images.git} alt="react"/>
                
            </div>

        </div>
    </div>
  )
}

export default Skills