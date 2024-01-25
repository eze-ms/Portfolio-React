// En el componente Info.jsx
import React, { useEffect } from 'react';
import { personalInfo } from '../data';
import "./Info.css";

function Info() {
  useEffect(() => {
    // Añade la clase 'visible' después de un breve retraso
    const timeoutId = setTimeout(() => {
      const infoElement = document.querySelector('.info');
      if (infoElement) {
        infoElement.classList.add('visible');
      }
    }, 100); // Ajusta el valor del retraso según sea necesario

    return () => clearTimeout(timeoutId); // Limpia el timeout en caso de que el componente se desmonte
  }, []);

  return (
    <div className="info">
      {personalInfo.map(({ title, description }, index) => (
        <div className="info__item_info" key={index}>
          <span className="info__title">{title}:</span>
          <span className="info_description"> {description}</span>
        </div>
      ))}
    </div>
  );
}

export default Info;
