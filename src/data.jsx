import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaSass, FaJs, FaDatabase } from 'react-icons/fa';
import { SiMysql, SiJquery, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiAdobexd, SiFigma, SiWordpress } from 'react-icons/si';
import { SiMui } from "react-icons/si";


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

export const aboutLinks = [
    {
        id: 1,
        name: "Datos personales",
        path: "/personal"
    },
    {
        id: 2,
        name: "Skills",
        path: "/skills"
    },
    {
        id: 3,
        name: "Otros",
        path: "/others"
    },
    {
        id: 4,
        name: "Educación y Certificaciones",
        path: "/formation"
    },
    {
        id: 5,
        name: "SofSkills",
        path: "/sofskills"
    }
    
];

export const personalInfo = [

    {
        id: 1,
        title: 'Nombre',
        description: 'Ezequiel',
    },

    {
        id:2,
        title: 'Primer Apellido',
        description : 'Macchi',
    },

    {
        id:3,
        title: 'Segundo Apedillo',
        description : 'Soeane',
    },

    {
        id:4,
        title: 'Pais',
        description : 'España',
    },

    {
        id:5,
        title: 'Ciudad',
        description : 'Barcelona',
    },

    {
        id:6,
        title: 'Teléfono',
        description : '691 569 610',
    },

    {
        id:7,
        title: 'Email',
        description : 'macchiezequiel@gmail.com',
    }
];

export const personalSkills = [
    {   
        id: '1',
        title: 'JavaScript',
        icon: <FaJs className='nav__icon'/>
    },
    {
        id: '2',
        title: 'React',
        icon: <FaReact className='nav__icon'/>
    },
    {
        id: '3',
        title: 'TypeScript',
        icon: <SiTypescript className='nav__icon'/>
    },
    {
        id: '4',
        title: 'HTML5',
        icon: <FaHtml5 className='nav__icon'/>
    },
    {
        id: '5',
        title: 'CSS',
        icon: <FaCss3Alt className='nav__icon'/>
    },
    {
        id: '6',
        title: 'Sass',
        icon: <FaSass className='nav__icon'/>
    },
    {
        id: '7',
        title: 'NextJs',
        icon: <SiNextdotjs className='nav__icon'/>
    },
    {
        id: '8',
        title: 'MySQL',
        icon: <SiMysql className='nav__icon'/>
    },
    {
        id: '9',
        title: 'PHP',
        icon: <FaPhp className='nav__icon'/>
    },
    {
        id: '10',
        title: 'jQuery',
        icon: <SiJquery className='nav__icon'/>
    },
    {
        id: '11',
        title: 'Database (SQL/NoSQL)',
        icon: <FaDatabase className='nav__icon'/>
    },
    {
        id: '12',
        title: 'MySql',
        icon: <SiMysql className='nav__icon'/>
    }
];

export const otherPersonalSkills = [
    {
        id: '1',
        title: 'Github',
        icon: <FaGithub className='nav__icon'/>
    },
    {
        id: '2',
        title: 'Material UI',
        icon: <SiMui className='nav__icon'/>
    },
    {
        id: '3',
        title: 'Bootstrap',
        icon: <FaBootstrap className='nav__icon'/>
    },
    {
        id: '4',
        title: 'Adobe XD',
        icon: <SiAdobexd className='nav__icon'/>
    },
    {
        id: '5',
        title: 'Figma',
        icon: <SiFigma className='nav__icon'/>
    },
    {
        id: '6',
        title: 'Adobe Il',
        icon: <SiAdobeillustrator className='nav__icon'/>
    },
    {
        id: '7',
        title: 'Adobe Ps',
        icon: <SiAdobephotoshop className='nav__icon'/>
    },
    {
        id: '8',
        title: 'Adobe In',
        icon: <SiAdobeindesign className='nav__icon'/>
    },
    {
        id: '9',
        title: 'Adobe Pr',
        icon: <SiAdobepremierepro className='nav__icon'/>
    },
    {
        id: '10',
        title: 'Adobe Ae',
        icon: <SiAdobeaftereffects className='nav__icon'/>
    },
    {
        id: '11',
        title: 'WordPress',
        icon: <SiWordpress className='nav__icon'/>
    },
];

export const formation = [
    {
        id: 1,
        school: "Escola Espai",
        description: "Postgrado en Desarrollo Front-end"
    },
    {
        id: 2,
        school: "BAU",
        description: "Diplomatura en Diseño Gráfico"
    },
    {
        id: 3,
        school: "Escola Espai",
        description: "CFGS sistemas de Telecomunicaciones e Informáticos"
    }
];

export const softSkills = [
    {
        id: 1,
        skill: "Comunicación efectiva",
        
    },
    {
        id: 2,
        skill: "Trabajo en equipo",
        
    },
    {
        id: 3,
        skill: "Adaptabilidad al cambio",
        
    },
    {
        id: 4,
        skill: "Resolución de problemas",
        
    },
    {
        id: 5,
        skill: "Aprendizaje continuo",
        
    },
    {
        id: 6,
        skill: "Empatía",
        
    },
    {
        id: 7,
        skill: "Gestión del tiempo",
        
    },
    {
        id: 8,
        skill: "Atención al detalle",
        
    },
    {
        id: 9,
        skill: "Capacidad analítica",
        
    }
];