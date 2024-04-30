import React, { useState } from 'react';
import axios from 'axios';
import { FiSend } from 'react-icons/fi';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envía los datos del formulario al servidor
      const response = await axios.post('/procesarFormulario.php', formData);
      setMessage('¡El mensaje se ha enviado correctamente! En breve nos pondremos en contacto contigo.');
      setSuccess(true); // Marcamos el envío como exitoso
      // Lógica adicional después de enviar el formulario
    } catch (error) {
      setMessage('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      // Manejo de errores
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      {message && <div>{message}</div>}
      {success && <div>{message}</div>}
      <form onSubmit={handleSubmit} className="contact__form">
        {/* Inputs del formulario */}
        <button type="submit" className='button send'>
          Enviar mensaje
          <span className="button__icon contact__button-icon">
            <FiSend/>
          </span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
