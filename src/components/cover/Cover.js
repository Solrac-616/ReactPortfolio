import React from 'react';
import Typed from 'react-typed';
import "./Cover.css";
import "./Bubbles.css";
import "./Waves.css";

import Images from "../../Constants/index.jsx";


const Cover = () => {
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

      <div className="banner-container">
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
          <img src={Images.dev} alt="Dev Junior" />
        </div>
      </div>

      <div className="wave w1" style={{ backgroundImage: `url(${Images.wave2})` }}></div>
      <div className="wave w2" style={{ backgroundImage: `url(${Images.wave1})` }}></div>

    </div>
  )
}

export default Cover