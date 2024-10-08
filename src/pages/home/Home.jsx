import React from 'react'
// import { Link } from 'react-router-dom';
import Profile from '../../assets/purple.gif';
import "./Home.css"
import{ FaLinkedin,FaGithub } from 'react-icons/fa';

const Home = ({gif}) => {
  
  return (
    <div id="home">
      <section className='home section grid'>
      {!gif && <img src={Profile} alt='' className='gif' />}
      {gif && <img src={gif} alt="Theme Motion" className="theme__motion" />}

      <div className="home__content">
        <div className="home__data">

          <p className='saludo'>Hola,</p>
          <h1 className="home__title">
            Soy <span className='title__bold'>Ezequiel.</span>
          </h1>
          <h2 className="home__subtitle">
            <span>Desarrollador Full-stack</span>
          </h2>
          <p className="home__description">
            Como desarrollador full-stack, transformo ideas en aplicaciones web completas, desde interfaces intuitivas hasta sistemas backend robustos. Mi objetivo es ofrecer soluciones rápidas, escalables y bien diseñadas que generen impacto. ¡Explora más sobre mi trabajo!
          </p>


          <div className='box__content-button-socials'>
          {/* <Link to='/about' className='button'>Más acerca de mí <span className="button__icon"><FaArrowRight /></span>
          </Link> */}
          <div className="contact__socials-home">
            <a href="https://www.linkedin.com/in/ezems/" className="contact__socials-link">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/eze-ms/" className="contact__socials-link">
              <FaGithub/>
            </a>
          </div>
          </div>
          
        </div>
      </div>

      

      <div className="color__block"></div>
      </section>
    </div>
    
  );
};
export default Home