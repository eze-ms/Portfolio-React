import React from 'react'
import { softSkills } from '../data';

function SoftSkills() {
    return (
        <div className="info">
          {softSkills.map(({ skill }, index) => (
            <div className="info__item" key={index}>
              <span className="info__skill">{skill}</span>
              
            </div>
          ))}
        </div>
    );
}

export default SoftSkills
