import React, {useState} from 'react'
import Burguer from './Burguer';
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({isScrolling}) => {
    const topPage = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const [open, setOpen] = useState(false);

    const handClick = () => {
      setOpen(!open)
    }

  return (
    <nav className={`navbar ${isScrolling > 2 ? "scrolling" : null}`}>

      <div className="nav-container">
        <div className="navbar-logo" onClick={topPage}>
            Carlos Brito
        </div>

        <div className={`links ${open ? 'activo' : ''}`}>
          
          <div className="nav-link">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
                Home
            </Link>
          </div>
          <div className="nav-link">
          <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
                Resumen
            </Link>
          </div>
          <div className="nav-link">
          <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
                Proyectos
            </Link>
          </div>
          <div className="nav-link">
          <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
                Habilidades
            </Link>
          </div>
          
          
        </div>

        <Burguer activated={open} handClick={handClick}/>
      </div>
        
    </nav>
  )
}

export default Navbar