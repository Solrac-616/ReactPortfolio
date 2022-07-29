import React from 'react'
import "./Loader.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from  'react-loader-spinner';

const Loader = () => {
  
  return (
    <div className='load-page'>
        <Rings color="#03a9f4" height={200} width={200}/>
          <p>LOADING PORTFOLIO . . .</p>
    </div>
  )
}

export default Loader