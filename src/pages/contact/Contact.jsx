import React from 'react'
import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

import{
  FiSend
}from 'react-icons/fi'

import "./Contact.css";



const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Contacto</h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">¡No seas tímid@!</h3>
          <p className="contact__description">
            No dudes en ponerte en contacto conmigo. Siempre estoy abierto a discutir sobre nuevas propuestas, ideas creativas u oportunidades para aportar mejoras a los proyectos.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Escríbeme</span>
                <h4 className="info__desc">macchiezequiel@gmail.com</h4>
              </div>
               
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Llámame</span>
                <h4 className="info__desc">691569610</h4>
              </div>
             
            </div>
          </div>  
          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/ezems/" className="contact__socials-link">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/eze-ms/" className="contact__socials-link">
              <FaGithub/>
            </a>
          </div>
        </div>
        
        <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input 
                  type="text" 
                  placeholder='Nombre' 
                  className='form__control'/>
              </div>
              <div className="form__input-div">
                <input 
                  type="email" 
                  placeholder='Email' 
                  className='form__control'/>
              </div>
              <div className="form__input-div">
                <input 
                  type="text" 
                  placeholder='Asunto' 
                  className='form__control'/>
              </div>
            </div>

            <div className="form__input-div-txt">
                <textarea 
                  type="text" 
                  placeholder="Mensaje" 
                  className="form__control textarea">
                </textarea>
            </div>

            <button className='button'>
              Enviar mensaje
              <span className="button__icon contact__button-icon">
                  <FiSend/>
                </span>
            </button>
               
        </form>
      </div>
    </section>
  )
}

export default Contact
