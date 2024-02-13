import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import "./Contact.css";

const Contact = () => {
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obligatorio'),
    email: Yup.string().email('Formato de correo no válido').required('Campo obligatorio'),
    subject: Yup.string().required('Campo obligatorio'),
    message: Yup.string().required('Campo obligatorio'),
  });

  // Configura Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,

    validate: (values) => {
      const errors = {};
  
      // Validación del correo electrónico
      if (!values.email) {
        errors.email = 'Campo obligratorio';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Correo electrónico inválido';
      }
  
      // Otras validaciones para los demás campos
  
      return errors;
    },
    onSubmit: (values) => {
    console.log(values);
    },
  });

  return (
    <div id="contacto">

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
        
        <form className="contact__form" onSubmit={formik.handleSubmit}>
            <div className="form__input-group">
              <div className="form__input-div">
                <input 
                  type="text" 
                  placeholder='Nombre' 
                  className='form__control'
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error-message">{formik.errors.name}</div>
                )}
              </div>
              <div className="form__input-div">
                <input 
                  type="email" 
                  placeholder='Email' 
                  name='email'
                  className='form__control'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error-message">{formik.errors.email}</div>
                )}
              </div>

              <div className="form__input-div">
                <input 
                  type="text" 
                  placeholder="Asunto" 
                  className="form__control"
                  name="subject"  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="error-message">{formik.errors.subject}</div>
                )}
              </div>
            </div>

            <div className="form__input-div-txt">
              <textarea
                  placeholder="Mensaje"
                  className="form__control textarea"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="error-message">{formik.errors.message}</div>
              )}
            </div>

            <button className='button send'>
              Enviar mensaje
              <span className="button__icon contact__button-icon">
                  <FiSend/>
                </span>
            </button>
               
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact

