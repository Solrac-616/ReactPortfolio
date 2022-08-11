import React from 'react'
import "./Cards.css";

import Images from "../../Constants/index.jsx";

const Cards = (props) => {
  
  const backPr1 = document.querySelector('.pr1');
  const backPr2 = document.querySelector('.pr2');
  const backPr3 = document.querySelector('.pr3');

  function backProyect ()
  {
    backPr1.classList.remove("pr-active");
    backPr2.classList.remove("pr-active");
    backPr3.classList.remove("pr-active");
    
    if (props.id === "cardP1") {
      backPr1.classList.add("pr-active");
    }

    if (props.id === "cardP2") {
      backPr2.classList.add("pr-active")
    }

    if (props.id === "cardP3") {
      backPr3.classList.add("pr-active")
    }
  }


  return (
      <div className="card-container" id={props.id} onMouseEnter={backProyect}>
          <div className="snakes"></div>
          <div className="card" style={{ backgroundImage: `url(${Images.waveCards})` }} >
            <div className="content">
                <h3>{props.number}</h3>
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
                <a rel='noopener noreferrer' href={props.link} target="_blank">ver Proyecto</a>
            </div>
          </div>
      </div>

  )
}

export default Cards