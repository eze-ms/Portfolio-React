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

      const circles = document.querySelectorAll('.circle');
      circles.forEach((circle, index) => {
        setTimeout(() => {
          circle.classList.add('visible');
        }, index * 100); // Ajusta el tiempo de retraso según sea necesario
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <div>
      <div className="info__school">
        {formation.map(({ school, description }, index) => (
          <div className="info__item" key={index}>
            {[...Array(index + 1)].map((_, circleIndex) => (
              <div className={`circle circle${circleIndex + 1}`} key={circleIndex}></div>
            ))}
            <span className="info__item__school">{school}</span>
            <ul className="info__item__description">
              {Array.isArray(description) ? (
                description.map(({ title }, descIndex) => (
                  <li key={descIndex}>{title}</li>
                ))
              ) : (
                <li>{description}</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formacion;
