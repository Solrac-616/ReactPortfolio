import React from 'react';
import Typed from 'react-typed';
import { motion } from "framer-motion";
import "./Cover.css";
import "./Bubbles.css";
import "./Waves.css";

import Images from "../../Constants/index.jsx";
import { useRef } from 'react';


const Cover = () => {
  const scrollRef = useRef(null);

  return (
    <div id='section1' className='cover-container' >
      <div className="bubbles">
          <div className="bubble">
            <img src={Images.react} alt="React" />
          </div>
          <div className="bubble">
            <img src={Images.git} alt="Git" />
          </div>
          <div className="bubble">
            <img src={Images.nodejs} alt="Node" />
          </div>
          <div className="bubble">
            <img src={Images.javascript} alt="JavaScript" />
          </div>
          <div className="bubble">
            <img src={Images.html} alt="HTML" />
          </div>
          <div className="bubble">
            <img src={Images.css} alt="CSS" />
          </div>
      </div>

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
      className="banner-container">
        <div className="name-container">
          <div className="saludo">
            <p>Hello!! this is my portfolio</p>
          </div>
          <div className="title-wave-container">

            <h1>Portfolio</h1>

          </div>
          <div className="cover-typed">
            <p>I'm Carlos Brito: </p>
            <Typed
              strings={["Full Stack Developer Node", "Full Stack Developer MongoDb", "Full Stack Developer React", "Full Stack Developer MySql", "Full Stack Developer and WordPress.. just in case"]}
              typeSpeed={100}
              backSpeed={150}
              backDelay={2}
              loop
              smartBackspace
            />
          </div>
        </div>
 
        <div className="banner-img">
          <img src={Images.dev} alt="Dev Junior" />
        </div>
      </motion.div>

      <div className="wave w1" style={{ backgroundImage: `url(${Images.wave2})` }}></div>
      <div className="wave w2" style={{ backgroundImage: `url(${Images.wave1})` }}></div>

    </div>
  )
}

export default Cover