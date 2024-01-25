import React from 'react'
// import Profile from '../../assets/me.webp';
import Info from '../../componentes/Info';
// import Stats from '../../componentes/Stats';
import "./About.css"
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/cv-eze.pdf'



const About = () => {
  return (
    <main className='section_container'>
      <section className="about">
        <h2 className="section__title">Sobre <span>de mí</span></h2>

        <div className="about__container">
          {/* <img src={Profile} alt='' className='home__img' /> */}
          <div className="about__info">
            <p className="home__description">Como desarrollador  front-end junior, poseo un impresionante conjunto de habilidades en HTML, CSS, JavaScript, React, SCSS y PHP. Con una base profesional en diseño, 
                mi experiencia se centra en la creación de interfaces dinámicas y atractivas mediante la redacción de código limpio y optimizado, así como en la utilización de herramientas y técnicas de desarrollo de vanguardia. 
                Disfruto trabajando en un entorno colaborativo donde puedo aprender y compartir conocimientos con mis compañeros para producir aplicaciones web excepcionales.</p>
          </div>
          <ul className="info_list_grid">
            <Info />
          </ul>

          <a href={CV} download='' className='button'>Download CV <span className="button__icon"><FaDownload /></span></a>
        </div>
      </section>
    </main> 
  )
}

export default About
 