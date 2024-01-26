import React, { useEffect } from 'react';
import { formation } from '../data';
import './Formacion.css';



function Formacion() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const infoElement = document.querySelector('.info__school');
      if (infoElement) {
        infoElement.classList.add('visible');
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  
    return (
        <div className="info__scool">
          {formation.map(({ school, description }, index) => (
            <div className="info__item" key={index}>
              <span className="info__item__school">{school}</span>
              <span className="info__item__description">{description}</span>
            </div>
          ))}
        </div>
      );
}

export default Formacion
