import React, { useEffect } from 'react';
import { personalSkills } from '../data';
import "./Skills.css"


function Skills() {
  useEffect(() => {
    // Añade la clase 'visible' después de un breve retraso
    const timeoutId = setTimeout(() => {
      const infoElement = document.querySelector('.skills');
      if (infoElement) {
        infoElement.classList.add('visible');
      }
    }, 100); // Ajusta el valor del retraso según sea necesario

    return () => clearTimeout(timeoutId); // Limpia el timeout en caso de que el componente se desmonte
  }, []);
    return (
        <div className="skills ">
          {personalSkills.map(({ title, icon }, index) => (
            <div className="info__item_skills" key={index}>
              <span className="info_icon">{icon}</span>
              <span className="info__title_skills">{title}</span>
            </div>
          ))}
        </div>
      );
}

export default Skills
