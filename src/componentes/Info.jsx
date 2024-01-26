import React, { useEffect } from 'react';
import { personalInfo } from '../data';
import './Info.css';

function Info() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const infoElement = document.querySelector('.info');
      if (infoElement) {
        infoElement.classList.add('visible');
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="info">
      {personalInfo.map(({ id, title, description, isLink }) => (
        <div className="info__item_info" key={id}>
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
