import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { links } from '../data';
import "./NavBar.css";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false); // Nuevo estado para controlar el cierre del menú

    // Función para alternar la visibilidad del menú
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setCloseMenu(false); // Al abrir el menú, se restablece el estado de cierre a false
    };

    // Función para cerrar el menú
    const handleCloseMenu = () => {
        setShowMenu(false);
        setCloseMenu(true); // Al hacer clic en un elemento de navegación, se establece el estado de cierre a true
    };

    return (
        <nav className='nav'>
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <ul className="nav__list">
                    {links.map(({ name, icon, path }, index)=>{
                        return (
                            <li className='nav__item' key={index}>
                                <Link 
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    to={path} 
                                    className="nav__link"
                                    onClick={handleCloseMenu} // Llama a la función para cerrar el menú al hacer clic en un elemento de navegación
                                >
                                    {icon}
                                    <h3 className='nav__name'>{name}</h3>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div 
                className={`${(showMenu || closeMenu) ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} // Actualiza la clase del botón de alternancia basándote en el estado de cierre del menú
                onClick={toggleMenu} // Añade esta línea para alternar el menú al hacer clic
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default NavBar;
