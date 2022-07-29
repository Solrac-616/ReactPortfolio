import React from 'react';
import "./About.css"

import Images from "../../Constants/index.jsx";

const About = () => {

  return (
    <div id='section2' className="about-container">

      <div className="about-content">
      <div className="about-desc">
            <h3>Dejame contarte sobre Mi</h3>
            <p>Venezolano graduado de la Universidad Simón Bolívar, en la mención de Tecnología Electrónica, con más de 1 año de experiencia laboral profesional desarrollando proyectos Fronted utilizando las herramientas de WordPress, Divi y Elementor. Conocimiento medio-alto en HTML, CSS y Javascript, con gran capacidad para resolver problemas de lógica, comprendiendo el manejo del flujo HTML y animaciones CSS.</p>
            <br/>
            <p>Experimentado en proyectos con tecnologías Node.js, React, Github, y Bootstrap. Con disposición en aprender y aplicar nuevas técnicas que puedan ser aplicadas en otros lenguajes de programación como Phyton y PHP; así mismo, en Diseño web, UX - IU</p>
        </div>
        <div className="about-img">
            <img src={Images.about} alt="About" />
        </div>
      </div>

    </div>
  )
}

export default About