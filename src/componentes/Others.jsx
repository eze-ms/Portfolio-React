import React from 'react'
import { otherPersonalSkills } from '../data';


function Others() {
    return (
        <div className="skills">
          {otherPersonalSkills.map(({ title, icon }, index) => (
            <div className="info__item" key={index}>
              <span className="info__title">{title}</span>
              <span className="info_icon">{icon}</span>
            </div>
          ))}
        </div>
      );
}

export default Others
