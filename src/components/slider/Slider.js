import React from 'react';
import Cards from './Cards';
import { motion } from "framer-motion";
import { useRef } from 'react';
import "./Cards.css"
import "./Slider.css";

import Images from "../../Constants/index.jsx";

const Slider = () => {
  const scrollRef = useRef(null);

  const backPr1 = document.querySelector('.pr1');
  const backPr2 = document.querySelector('.pr2');
  const backPr3 = document.querySelector('.pr3');

  function resetBack ()
  {
    backPr1.classList.remove("pr-active");
    backPr2.classList.remove("pr-active");
    backPr3.classList.remove("pr-active");
  }

  return (
    <div id='section4' className="proyects-container" onMouseLeave={resetBack}>

        <div className="pr-back pr1" style={{ backgroundImage: `url(${Images.garibaldy})` }}></div>
        <div className="pr-back pr2" style={{ backgroundImage: `url(${Images.github})` }}></div>
        <div className="pr-back pr3" style={{ backgroundImage: `url(${Images.moviesWeb})` }}></div>

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
        className="align-slider">
          <div className="proyects-title">
            <h2>My projects</h2>
          </div>
          <div className="container">
            <Cards number="1" id="cardP1" title="Garibaldy" desc="Web page development with React + Vite with dynamic animations in Framer motion and light-dark theme change." link="https://development.garibaldy.com/" />

            <Cards number="2" id="cardP2" title="API RESTful" desc="Elaboration of a RESTful API in the Node environment, applying the set of requests for the management of users and the management of related databases." link="https://github.com/Solrac-616/API-RESTful" />

            <Cards number="3" id="cardP3" title="Movies Website" desc="Adaptation of a generic template of an HTML Movies website to React components and logic." link="https://github.com/Solrac-616/Movies-Web" />
          </div>
        </motion.div>
    </div>
  )
}

export default Slider;