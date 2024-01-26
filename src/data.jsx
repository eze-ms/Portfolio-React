import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaReact, FaPhp, FaHtml5, FaCss3Alt, FaSass, FaJs, FaDatabase, FaVuejs, FaJira } from 'react-icons/fa';
import { SiMysql, SiJquery, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiMui, SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiAdobexd, SiFigma, SiWordpress } from 'react-icons/si';


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
        path: "/about/info"
    },
    {
        id: 2,
        name: "Skills",
        path: "/about/skills"
    },
    {
        id: 3,
        name: "Otros",
        path: "/about/others"
    },
    {
        id: 4,
        name: "Educación y Certificaciones",
        path: "/about/formation"
    },
    {
        id: 5,
        name: "SoftSkills",
        path: "/about/softskills"
    }
    
];

export const personalInfo = [
    {
      id: 1,
      title: 'Nombre',
      description: 'Ezequiel',
      isLink: false,
    },
    {
      id: 2,
      title: 'Apellidos',
      description: 'Macchi Seoane',
      isLink: false,
    },
    {
      id: 3,
      title: 'Pais',
      description: 'España',
      isLink: false,
    },
    {
      id: 4,
      title: 'Ciudad',
      description: 'Barcelona',
      isLink: false,
    },
    {
      id: 5,
      title: 'Teléfono',
      description: '691 569 610',
      isLink: false,
    },
    {
      id: 6,
      title: 'Email',
      description: 'macchiezequiel@gmail.com',
      isLink: false,
    },
    {
      id: 7,
      title: 'LinkedIn',
      description: 'https://www.linkedin.com/in/ezems/',
      isLink: true,
    },
    {
      id: 8,
      title: 'GitHub',
      description: 'https://github.com/eze-ms',
      isLink: true,
    },
];

export const personalSkills = [
    {
      id: '1',
      title: 'JavaScript',
      icon: <FaJs className='nav__icon' />,
    },
    {
      id: '2',
      title: 'React',
      icon: <FaReact className='nav__icon' />,
    },
    {
      id: '3',
      title: 'TypeScript',
      icon: <SiTypescript className='nav__icon' />,
    },
    {
      id: '4',
      title: 'Vue.Js',
      icon: <FaVuejs className='nav__icon' />,
    },
    {
      id: '5',
      title: 'HTML5',
      icon: <FaHtml5 className='nav__icon' />,
    },
    {
      id: '6',
      title: 'CSS',
      icon: <FaCss3Alt className='nav__icon' />,
    },
    {
      id: '7',
      title: 'Sass',
      icon: <FaSass className='nav__icon' />,
    },
    {
      id: '8',
      title: 'NextJs',
      icon: <SiNextdotjs className='nav__icon' />,
    },
    {
      id: '9',
      title: 'MySQL',
      icon: <SiMysql className='nav__icon' />,
    },
    {
      id: '10',
      title: 'PHP',
      icon: <FaPhp className='nav__icon' />,
    },
    {
      id: '11',
      title: 'jQuery',
      icon: <SiJquery className='nav__icon' />,
    },
    {
      id: '12',
      title: 'Database',
      icon: <FaDatabase className='nav__icon' />,
    }
]

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
    {
        id: '12',
        title: 'Jira',
        icon: <FaJira className='nav__icon'/>
    }
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
        description: "CFGS Sistemas de Telecomunicaciones e Informáticos"
    },
    {
      id: 4,
      school: "IT Academy",
      description: [
        { title: "Bases de datos MySQL" },
        { title: "SEO" },
        { title: "Scrum" },
        { title: "Metodologías Agile" }
      ]
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