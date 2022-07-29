import React from 'react';

const Skill = (props) => {
  return (
    <div className="skill">
        <img src={props.png} alt={`Icon ${props.alt}`} />
    </div>
  )
}

export default Skill