import React, { useEffect, useState } from 'react';
import { otherPersonalSkills } from '../data';
import './Others.css';

function Others() {
  const [visibleSkills, setVisibleSkills] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisibleSkills(true);
    }, 100);

    const timeoutIds = otherPersonalSkills.map((_, index) =>
      setTimeout(() => {
        const skillsElement = document.querySelector(`.info__item_others_skills:nth-child(${index + 1})`);
        if (skillsElement) {
          skillsElement.classList.add('visible');
        }
      }, (index + 1) * 200)
    );

    return () => {
      clearTimeout(timeoutId);
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className={`others ${visibleSkills ? 'visible' : ''}`}>
      {otherPersonalSkills.map(({ title, icon }, index) => (
        <div className={`info__item_others_skills`} key={index}>
          <span className="info_icon">{icon}</span>
          <span className="info__title_other_skills">{title}</span>
        </div>
      ))}
    </div>
  );
}

export default Others;
