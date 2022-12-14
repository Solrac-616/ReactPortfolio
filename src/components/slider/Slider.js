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
            <h2>Mis Proyectos</h2>
        </div>
        <div className="container">
          <Cards number="1" id="cardP1" title="Artemisa" desc="Desarrollo en tecnología de WordPress y Divi. Implementación de lenguajes en Landing, Home Page y portafolio. Colaboración en mantenimiento general." link="http://artemisa.com.ve/" />

          <Cards number="2" id="cardP2" title="API RESTful" desc="Elaboracion de una API RESTful en el entorno de Node, aplicando el conjunto de peticiones para la gestion de usuarios y el manejo de bases de datos relacionadas." link="https://github.com/Solrac-616/API-RESTful" />

          <Cards number="3" id="cardP3" title="Movies Website" desc="Adaptacion de template genrico de una web de Peliculas en HTML a componentes y logica de React. " link="https://github.com/Solrac-616/Movies-Web" />
        </div>
    </div>
  )
}

export default Slider;