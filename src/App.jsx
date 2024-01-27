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
      <main>
        <NavBar /> 
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about/*" element={<About />} /> {/* El comodín * captura todas las subrutas de /about */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacto" element={<Contacto />} />

          <Route index element={<Home />} />

        </Routes>

        {/* <About /> */}
      </main>
    </div>
  );
}

export default App;
