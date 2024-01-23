import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Contexto, Temas } from './Contexto';
import { BsSun, BsMoon } from 'react-icons/bs';
import '../css/Header.css';
import { links } from '../componentes/Data';

function Header(props) {
    const contexto = useContext(Contexto);
    const tema = contexto.temaOscuro ? Temas.oscuro : Temas.claro;
    const[ShowMenu, SetShowMenu] = useState(false )

    return (
        <header id='header' style={tema}>
            <nav className="nav">
                <Link to="#" className="nav_logo text-css">Macchi</Link>
                <div className={`${ShowMenu ? 'nav_menu show-menu':'nav_menu'}`}>
                    <ul className='nav_list'>
                        {links.map(({ name, path }, index)=>{
                            return (
                                <li className="nav_item" key={index}>
                                    <Link to="#" className='nav_link'>{name}</Link> 
                                     
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='nav_btns'>
                    <div className='theme_toggler'>
                        <button type="button" onClick={() => {
                            contexto.cambiarTema(!contexto.temaOscuro);
                            }}>
                            {contexto.temaOscuro ? <BsSun /> : <BsMoon />}
                        </button>
                    </div>
                </div>
                 <div className='nav_toogle' onClick={() =>
                    SetShowMenu(!ShowMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            
            
        </header>
    );
}

export default Header;
