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
          <p>Venezuelan graduated with a mention in Electronic Technology, with more than 2 years of professional work experience developing Frontend and Backend projects using Wordpress, Divi, Elementor, React, NodeJs, tailwind and Bootstrap tools. Medium-high knowledge of HTML, CSS and Javascript and basic knowledge of PHP, Typescript, C++ and assembler, with great ability to solve logic problems, understanding HTML flow management, CSS animations, Framer motion, and JavaScript logic (implementing JQuery or TypeScript). With basic understanding of MySQL, MongoDB databases and knowledge of APIs integration with Axios and Redux </p>
          <br />
          <p>Experienced in projects with Node.js, React, Github, and Bootstrap technologies. Study and implementation of RESTful API in NodeJs for managing an ecommerce in React. Willing to learn and apply new techniques that can be applied to other programming languages such as Python and PHP; likewise, Web Design UX – UI.</p>
        </div>
        <div className="about-img">
          <img src={Images.about} alt="About" />
        </div>
      </motion.div>

    </div>
  )
}

export default About