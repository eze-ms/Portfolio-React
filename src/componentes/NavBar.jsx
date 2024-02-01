import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { links } from '../data';
import "./NavBar.css"


const NavBar = () => {
    const [showMenu, SetShowMenu] = useState(false);

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
                className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                onClick={() => SetShowMenu(!showMenu)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default NavBar
