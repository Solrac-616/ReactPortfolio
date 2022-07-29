import React from 'react'
import Skill from './Skill'
import "./Skills.css"

import skillReact from "../../media/react.png";
import skillScript from "../../media/javascript.png";
import skillWordpress from "../../media/wordpress.png";
import skillBootstrap from "../../media/bootstrap.png";
import skillCss from "../../media/css.png";
import skillHtml from "../../media/html.png";
import skillNode from "../../media/nodejs.png";
import skillGit from "../../media/git.png";

const Skills = () => {
  return (
    <div id='section3' className="skills-section">
        <div className="skills-container">

            <div className="skills-title">
                <h2>SKILLS</h2>
            </div>

            <div className="skills-row">

                <Skill png={skillHtml} alt="react"/>
                <Skill png={skillCss} alt="react"/>
                <Skill png={skillScript} alt="react"/>
                <Skill png={skillReact} alt="react"/>
                <Skill png={skillNode} alt="react"/>
                <Skill png={skillGit} alt="react"/>
                
            </div>

        </div>
    </div>
  )
}

export default Skills