import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

export const links = [
    {   
        id: 1, 
        name: "Home", 
        icon: <FaHome  className='nav__icon' />, 
        path: "/home" 
    },
    {   
        id: 2, 
        name: "About", 
        icon: <FaUser className='nav__icon' />, 
        path: "/about" 
    },
    {   
        id: 3, 
        name: "Portfolio", 
        icon: <FaFolderOpen className='nav__icon' />, 
        path: "/portfolio" 
    },{   
        id: 4, 
        name: "Contacto", 
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: "/contacto" 
    },
   
  ];