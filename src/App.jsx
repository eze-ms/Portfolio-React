import './App.css';
import React from 'react';
import Themes from './componentes/Themes';
import NavBar from './componentes/NavBar';  
import { Element } from 'react-scroll';
// import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contacto from './pages/contact/Contact';

function App() { 
  return (
    <div className="App">
      <main>
        <NavBar /> 
        <Themes />
        {/* <Element name="home" className="element" >
        <Home />
        </Element> */}
        <Element name="about" className="element" >
          <About />  
        </Element>
        <Element name="portfolio" className="element" >
          <Portfolio /> 
        </Element>
        <Element name="contacto" className="element" >
          <Contacto />  
        </Element>       
      </main>
    </div>
  );
}
export default App;
