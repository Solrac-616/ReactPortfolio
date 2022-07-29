import React from 'react'
import "./Burguer.css"

const Burguer = (props) => {
  return (
    <div className="wrapper">
        <div onClick={props.handClick} className={`icon nav-icon-5 ${props.activated ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Burguer