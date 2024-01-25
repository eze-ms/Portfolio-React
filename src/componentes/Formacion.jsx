import React from 'react'
import { formation } from '../data';

function Formacion() {
    return (
        <div className="info">
          {formation.map(({ school, description }, index) => (
            <div className="info__item" key={index}>
              <span className="info__school">{school}</span>
              <span className="info_description">{description}</span>
            </div>
          ))}
        </div>
      );
}

export default Formacion
