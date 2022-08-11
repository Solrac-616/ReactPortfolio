import React from 'react';
import "./Info.css";

import Images from "../../Constants/index.jsx";


const Info = () => {
  return (
    <div id='section5' className="info-container">
        <div className="info">
            <p>I'm ready to work with you..</p>
            <a href={require('../../PDF/CarlosBritoCurriculoOnPageEng.pdf')} download="CarlosBritoCurriculoOnPageEng.pdf">Download PDF</a>
        </div>

        <div className="wave wd3" style={{ backgroundImage: `url(${Images.waveDown3})` }}></div>
        
        <div className="wave wd1" style={{ backgroundImage: `url(${Images.waveDown1})` }}></div>

    </div>
  )
}

export default Info