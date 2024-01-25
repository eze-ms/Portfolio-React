import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Info from '../../componentes/Info';
import Skills from '../../componentes/Skills';
import Others from '../../componentes/Others';
import Formacion from '../../componentes/Formacion';
import SoftSkills from '../../componentes/SoftSkills';
import { aboutLinks } from '../../data';
import Profile from '../../assets/me.webp'

import "./About.css";
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/cv-eze.pdf';

const About = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setShowAbout(true);
  };

  return (
    <main className='section_container'>
      <section className='about_section'>

        <div className='about__container'>
          <img src={Profile} alt='' className='home__img' />
          <div className="box_about__me">
            <h3 className='section__title'>Sobre <span>de mí</span></h3>
            <div className='about__info'>
              <p className='about__description'>
                Como desarrollador front-end junior, poseo un impresionante conjunto de habilidades en HTML, CSS,
                JavaScript, React, SCSS y PHP. Con una base profesional en diseño, mi experiencia se centra en la
                creación de interfaces dinámicas y atractivas mediante la redacción de código limpio y optimizado, así
                como en la utilización de herramientas y técnicas de desarrollo de vanguardia. Disfruto trabajando en un
                entorno colaborativo donde puedo aprender y compartir conocimientos con mis compañeros para producir
                aplicaciones web excepcionales.
              </p>
            </div>
            <a href={CV} download='' className='button'>
              Download CV <span className='button__icon'><FaDownload /></span>
            </a>
            <nav className='nav_about'>
              <div className={`${showAbout ? 'nav__menu show-menu' : 'nav__menu'}`}>
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
                className={`${showAbout ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                onClick={() => setShowAbout(!showAbout)}
              ></div>
            </nav>
            {/* Muestra el componente correspondiente según la ruta activa */}
            {activeLink === '/about/info' && <Info />}
            {activeLink === '/about/skills' && <Skills />}
            {activeLink === '/about/others' && <Others />}
            {activeLink === '/about/formation' && <Formacion />}
            {activeLink === '/about/softskills' && <SoftSkills />}
        </div>
          
         
         

           

           

        </div>
      </section>
    </main>
  );
};

export default About;
