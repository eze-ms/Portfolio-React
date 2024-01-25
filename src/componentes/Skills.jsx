import React from 'react'
import { personalSkills } from '../data';


function Skills() {
    return (
        <div className="skills">
          {personalSkills.map(({ title, icon }, index) => (
            <div className="info__item" key={index}>
              <span className="info__title">{title}</span>
              <span className="info_icon">{icon}</span>
            </div>
          ))}
        </div>
      );
}

export default Skills
