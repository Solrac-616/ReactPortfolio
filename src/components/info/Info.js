import React from 'react';
import "./Info.css";

import Images from "../../Constants/index.jsx";


const Info = () => {
  return (
    <div id='section5' className="info-container">
        <div className="info">
            <h2>Let's Work together and create Something Unique</h2>
            <a href={require('../../PDF/Curriculo.pdf')} download="Curriculo.pdf">Descargar PDF</a>
        </div>

        <div className="wave wd3" style={{ backgroundImage: `url(${Images.waveDown3})` }}></div>
        
        <div className="wave wd1" style={{ backgroundImage: `url(${Images.waveDown1})` }}></div>

    </div>
  )
}

export default Info