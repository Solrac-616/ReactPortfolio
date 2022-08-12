import React from 'react';
import { motion } from "framer-motion";
import "./About.css"
import { useRef } from 'react';

import Images from "../../Constants/index.jsx";

const About = () => {
  const scrollRef = useRef(null);

  return (
    <div id='section2' className="about-container">

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
      className="about-content">
        <div className="about-desc">
          <h3>Let me tell you about me</h3>
          <p>Venezuelan graduate of the Simón Bolívar University, in the mention of Electronic Technology, with more than 1 year of professional work experience developing Frontend projects using WordPress, Divi and Elementor tools. Medium-high knowledge in HTML, CSS and Javascript, with great ability to solve logic problems, understanding the handling of HTML flow and CSS animations.</p>
          <br />
          <p>Experienced in projects with Node.js, React, Github, and Bootstrap technologies. Willing to learn and apply new techniques that can be applied in other programming languages such as Python and PHP; likewise, in Web Design, UX - UI.</p>
        </div>
        <div className="about-img">
          <img src={Images.about} alt="About" />
        </div>
      </motion.div>

    </div>
  )
}

export default About