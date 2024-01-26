import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data';
import './Info.css';

function Info() {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Añade la clase 'visible' después de un breve retraso para cada elemento
    const timeoutIds = personalInfo.map((_, index) =>
      setTimeout(() => {
        setVisibleItems((prevVisibleItems) => [...prevVisibleItems, index]);
      }, (index + 1) * 200)
    );

    // Agrega la clase 'visible' al contenedor principal después de un breve retraso
    const infoElement = document.querySelector('.info');
    if (infoElement) {
      setTimeout(() => {
        infoElement.classList.add('visible');
      }, 100);
    }

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="info">
      {personalInfo.map(({ id, title, description, isLink }, index) => (
        <div className={`info__item_info ${visibleItems.includes(index) ? 'visible' : ''}`} key={id}>
          <span className="info__title">{title}:</span>
          {isLink ? (
            <a className="url" href={description} target="_blank" rel="noopener noreferrer">
              {description}
            </a>
          ) : (
            <span className="info_description">{description}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Info;
