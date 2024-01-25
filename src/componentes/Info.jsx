import React from 'react';
import { personalInfo } from '../data';

function Info() {
  return (
    <div className="info">
      {personalInfo.map(({ title, description }, index) => (
        <div className="info__item" key={index}>
          <span className="info__title">{title}</span>
          <span className="info_description">{description}</span>
        </div>
      ))}
    </div>
  );
}
export default Info;
