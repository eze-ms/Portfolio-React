import React, { useState, useEffect } from 'react';
import Close from '../assets/close.svg';
import "./PortfolioItem.css"

function PortfolioItem({ img, title, text, details, img2 }) {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`portfolio__item ${isVisible ? 'visible' : ''}`}>
      <img src={img} alt="" className="portfolio__img" />
    
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
        <div>
          <p className='description'>{text}</p>
        </div>
      </div>
      {modal && (
        <div className="portfolio__modal">
          <div className='portfolio__modal-content'>
            <img 
              src={Close} 
              alt="" 
              className="modal__close" 
              onClick={toggleModal} />
            <h4 className="modal__title">{title}</h4>
            
            <ul className='modal__list grid'>
              {details.map(({ icon, title, desc, text2 }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className='item__icon'>{icon}</span>
                    <div>
                      <span className="item__title">{title}: </span>
                      <span className="item__details">{desc}</span>
                      <span className="item__title2">{text2}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={details[0].img2} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
