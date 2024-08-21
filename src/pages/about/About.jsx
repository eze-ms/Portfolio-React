import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Info from '../../componentes/Info';
import Skills from '../../componentes/Skills';
import Others from '../../componentes/Others';
import Formacion from '../../componentes/Formacion';
import { aboutLinks } from '../../data';
import Profile from '../../assets/me.webp';
import CV from '../../assets/cv-eze.pdf';
import "./About.css";

const About = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setShowAbout(true);
  };

  return (
    <div id="about">
       <section className='about section grid'>
       <h3 className='section__title'>Acerca de <span>mí</span></h3>
        <div className='about__container container'>
          <img src={Profile} alt='' className='about__img' />
          <div className="box_about__me">
            <div className='about__info'>
            <p className='about__description_1'>
              Con una sólida base en front-end y una transición exitosa al desarrollo full-stack, manejo todo el proceso de creación de aplicaciones web optimizadas para ofrecer una experiencia de usuario fluida y un rendimiento sólido. Utilizo tecnologías como JavaScript, React, Vue.js, Node.js y MongoDB para construir soluciones escalables y eficientes.
            </p>
            <p className='about__description_2'>
              En este portafolio, verás cómo combino diseño intuitivo con arquitectura robusta en proyectos reales que resuelven problemas concretos. Cada proyecto está diseñado para maximizar la usabilidad y rendimiento, aplicando las mejores prácticas en cada etapa del desarrollo. ¡Explora mis proyectos para ver cómo puedo aportar valor a tus ideas!
            </p>
            </div>
            <a href={CV} download='' className='button'>
              Download CV <span className='button__icon'><FaDownload /></span>
            </a>
            <div className='prueba'>
            <nav className='nav_about'>
              <div className={`${showAbout ? 'nav__menu_about show-menu' : 'nav__menu_about'}`}>
                <ul className='info_list_grid_about'>
                  {aboutLinks.map(({ name, path }, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink
                        to={path}
                        onClick={() => handleLinkClick(path)}
                        className={activeLink === path ? 'nav__link active-nav' : 'nav__link'}
                      >
                        <h4 className='nav__name_about'>{name}</h4>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${showAbout ? 'nav__toggle_about animate-toggle' : 'nav__toggle_about'}`}
                onClick={() => setShowAbout(!showAbout)}
              ></div>
            </nav>
            {/* Muestra el componente correspondiente según la ruta activa */}
            {activeLink === '/about/info' && <Info />}
            {activeLink === '/about/skills' && <Skills />}
            {activeLink === '/about/others' && <Others />}
            {activeLink === '/about/formation' && <Formacion />}
            </div>
            
          </div>
        </div>
      </section>
     </div>

   
  );
};

export default About;