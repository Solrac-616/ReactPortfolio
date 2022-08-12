import React from 'react';
import { motion } from "framer-motion";
import { useRef } from 'react';
import "./Info.css";

import Images from "../../Constants/index.jsx";


const Info = () => {
  const scrollRef = useRef(null);

  return (
    <div id='section5' className="info-container">
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
        className="info">
            <p>I'm ready to work with you..</p>
            <a href={require('../../PDF/CarlosBritoCurriculoOnPageEng.pdf')} download="CarlosBritoCurriculoOnPageEng.pdf">Download PDF</a>
        </motion.div>

        <div className="wave wd3" style={{ backgroundImage: `url(${Images.waveDown3})` }}></div>
        
        <div className="wave wd1" style={{ backgroundImage: `url(${Images.waveDown1})` }}></div>

    </div>
  )
}

export default Info