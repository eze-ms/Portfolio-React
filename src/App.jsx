import React, { useState } from 'react';
// import { Link, Router, Routes } from 'react-router-dom';
import { Contexto } from './componentes/Contexto';  
import Header from './componentes/Header';


import './App.css';

function App() {

  const [temaOscuro, cambiarTema] = useState(false);

  return (
    <div className="App">
      <Contexto.Provider
        value={
          {
            temaOscuro,
            cambiarTema,
          }
        }
      >
        <Header />
        

      </Contexto.Provider>
    </div>
  );
}

export default App;
