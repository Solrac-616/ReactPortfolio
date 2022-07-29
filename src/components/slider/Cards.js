import React from 'react'
import "./Cards.css";
import backgroundWave from "../../media/wave-cards.svg"

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
          <div className="card" style={{ backgroundImage: `url(${backgroundWave})` }} >
            <div className="content">
                <h3>{props.number}</h3>
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
                <a href={props.link}>view project</a>
            </div>
          </div>
      </div>

  )
}

export default Cards