import React from 'react';
import Typed from 'react-typed';
import "./Cover.css";
import "./Bubbles.css";
import "./Waves.css"
import img1 from "../../media/programing.png";
import img2 from "../../media/wave.svg";
import img3 from "../../media/wave2.svg";

import skillReact from "../../media/react2.png";
import skillScript from "../../media/javascript2.png";
import skillCss from "../../media/css2.png";
import skillHtml from "../../media/html2.png";
import skillNode from "../../media/nodejs2.png";
import skillGit from "../../media/git2.png";


const Cover = () => {
  return (
    <div id='section1' className='cover-container' >
      <div className="bubbles">
          <div className="bubble">
            <img src={skillReact} alt="" />
          </div>
          <div className="bubble">
            <img src={skillGit} alt="" />
          </div>
          <div className="bubble">
            <img src={skillNode} alt="" />
          </div>
          <div className="bubble">
            <img src={skillScript} alt="" />
          </div>
          <div className="bubble">
            <img src={skillHtml} alt="" />
          </div>
          <div className="bubble">
            <img src={skillCss} alt="" />
          </div>
      </div>

      <div className="banner-container">
        <div className="name-container">
          <div className="saludo">
            <p>Hi! this is my </p>
          </div>
          <div className="title-wave-container">
            <h1>Portafolio</h1>
            <h1>Portafolio</h1>
            <h1>Portafolio</h1>
          </div>
          <div className="cover-typed">
            <p>I am Carlos Brito: </p>
            <Typed
              strings={["Junior Frontend Developer Wordpress", "Junior Frontend Developer Javascript", "Junior Frontend Developer React"]}
              typeSpeed={100}
              backSpeed={150}
              backDelay={2}
              loop
              smartBackspace
            />
          </div>
        </div>
 
        <div className="banner-img">
          <img src={img1} alt="Dev Junior" />
        </div>
      </div>

      <div className="wave w1" style={{ backgroundImage: `url(${img3})` }}></div>
      <div className="wave w2" style={{ backgroundImage: `url(${img2})` }}></div>

    </div>
  )
}

export default Cover