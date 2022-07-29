import React from 'react';
import Cards from './Cards';
import "./Cards.css"
import "./Slider.css";

import Images from "../../Constants/index.jsx";

const Slider = () => {

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

        <div className="pr-back pr1" style={{ backgroundImage: `url(${Images.artemisa})` }}></div>
        <div className="pr-back pr2" style={{ backgroundImage: `url(${Images.github})` }}></div>
        <div className="pr-back pr3" style={{ backgroundImage: `url(${Images.moviesWeb})` }}></div>

        <div className="proyects-title">
            <h2>My Projects</h2>
        </div>
        <div className="container">
          <Cards number="1" id="cardP1" title="Artemisa" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, laboriosam." />

          <Cards number="2" id="cardP2" title="API RESTful" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, laboriosam." />

          <Cards number="3" id="cardP3" title="Movies Website" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, laboriosam." />
        </div>
    </div>
  )
}

export default Slider;