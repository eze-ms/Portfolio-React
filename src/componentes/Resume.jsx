import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import '../css/Resume.css';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home_container'>
            <span className="home_subtitle">Hola, </span>
            <span> mi nombre es</span>
            
            <h1 className='home_title text-cs'><span>Ezequiel Macchi</span> </h1>
            <span className="text-css">Soy Desarrollador Front-end</span>
        </div>

        <p className="home_text">
            Mi enfoque se centra en la creación de un código limpio, 
            funcional e impactante para garantizar experiencias visuales atractivas en cada proyecto.
        </p>
        <p className="location">Barcelona, España<i className="fa-solid fa-map-pin"></i></p>

        <div className="home_social_links">
            <Link to="#" className="nav_logo text-css"><FaGithub /></Link>
            <Link to="#" className="nav_logo text-css"><FaLinkedin /></Link>
            <Link to="#" className="nav_logo text-css mail"><IoMdMail /></Link>
        </div>
        <div className="container_download">
            <Link to="#" className="btn_download"></Link>Descargar CV</div>
    </section>
  );
}

export default Home;
