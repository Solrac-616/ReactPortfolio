import React from 'react'
import Skill from './Skill'
import { motion } from "framer-motion";
import { useRef } from 'react';
import "./Skills.css"

import Images from "../../Constants/index.jsx";


const Skills = () => {
  const scrollRef = useRef(null);

  return (
    <div id='section3' className="skills-section">
        <motion.div
        initial={{
          y: 200,
          opacity: 0       
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
        viewport={{root: scrollRef}}
        className="skills-container">

            <div className="skills-title">
                <h2>Skills</h2>
            </div>

            <div className="skills-row" >

                <Skill png={Images.html} alt="html"/>
                <Skill png={Images.css} alt="css"/>
                <Skill png={Images.javascript} alt="JavaScript"/>
                <Skill png={Images.react} alt="react"/>
                <Skill png={Images.nodejs} alt="Node"/>
                <Skill png={Images.git} alt="Git"/>
                
            </div>

        </motion.div>
    </div>
  )
}

export default Skills