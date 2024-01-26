import React, { useEffect, useState } from 'react';
import { personalSkills } from '../data';
import "./Skills.css";

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisibleSkills(true);
    }, 100);

    const timeoutIds = personalSkills.map((_, index) =>
      setTimeout(() => {
        const skillElement = document.querySelector(`.info__item_skills:nth-child(${index + 1})`);
        if (skillElement) {
          skillElement.classList.add('visible');
        }
      }, (index + 1) * 200)
    );

    return () => {
      clearTimeout(timeoutId);
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className={`skills ${visibleSkills ? 'visible' : ''}`}>
      {personalSkills.map(({ title, icon }, index) => (
        <div className={`info__item_skills`} key={index}>
          <span className="info_icon">{icon}</span>
          <span className="info__title_skills">{title}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
