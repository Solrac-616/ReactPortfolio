import React from 'react';
import "./Info.css";
import img1 from "../../media/wavdown1.svg";
import img2 from "../../media/wavdown2.svg";
import img3 from "../../media/wavdown3.svg";


const Info = () => {
  return (
    <div id='section5' className="info-container">
        <div className="info">
            <h2>Let's Work together and create Something Unique</h2>
            <a href={require('../../PDF/Curriculo.pdf')} download="Curriculo.pdf">Descargar PDF</a>
        </div>

        <div className="wave wd3" style={{ backgroundImage: `url(${img3})` }}></div>
        
        <div className="wave wd1" style={{ backgroundImage: `url(${img1})` }}></div>

    </div>
  )
}

export default Info