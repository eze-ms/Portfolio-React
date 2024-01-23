import React from 'react';
import NavBar from './componentes/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contacto from './pages/contact/Contact';
 
import { Route, Routes } from 'react-router-dom';




import './App.css';

function App() {


  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>

     
    </div>
  );
}

export default App;
