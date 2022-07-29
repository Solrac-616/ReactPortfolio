import React from 'react';
import "./Scrollbar.css"

const Scrollbar = ({isScrolling}) => {
  return (
    <div className="scroll-progress-container" style={{width: `${isScrolling}%`}}>
        <div className="scroll-barr-gradient"></div>
    </div>
  )
}

export default Scrollbar