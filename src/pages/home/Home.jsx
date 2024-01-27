import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />
       
      <div className="home__content">
        <div className="home__data">
          <p className='saludo'>Hola,</p>
          <h1 className="home__title">
            Soy <span className='title__bold'>Ezequiel.</span>
          </h1>
          <h2 className="home__subtitle">
            <span>Desarrollador Front-end</span>
          </h2>
          <p className="home__description">Mi enfoque se centra en la creación de un código limpio, funcional e impactante para garantizar experiencias visuales atractivas en cada proyecto.</p>

          <Link to='/about' className='button'>Más acerca de mí <span className="button__icon"><FaArrowRight /></span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};
export default Home
