import React, {useState, useEffect} from 'react';
import './App.css';
import About from './components/about/About';
import Cover from "./components/cover/Cover";
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Loader from './components/Loader/Loader';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Slider from './components/slider/Slider';

function App() {
/*----------------------------------------------------------SCROLL NAVBAR*/ 
const [scrollTop, setScrollTop] = useState(0);
const onScroll = () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrolled = (winScroll/height) * 100;
  setScrollTop(scrolled); 
}

useEffect(() => {
  window.addEventListener("scroll", onScroll);

  return () =>  window.removeEventListener("scroll", onScroll);
}, []);

/*----------------------------------------------------------loading -  por tiempo*/
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3500);
  // }, []);


  /*-----------------------------------------------------------PRUEBAS */

  

  return (
    <div className="App">

      <Navbar isScrolling={scrollTop} />
      
      <Cover />

      <About />

      <Slider />

      <Skills />

      <Info />

      <Footer/>
    </div>
  );
}

export default App;
