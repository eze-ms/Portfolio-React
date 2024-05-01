import { FaRegUser,FaLinkedin, FaCode, FaGithub, FaBootstrap, FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaReact, FaPhp, FaHtml5, FaCss3Alt, FaSass, FaJs, FaDatabase, FaVuejs, FaJira } from 'react-icons/fa';
import { FiLink, FiFileText } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { SiMysql, SiJquery, SiNextdotjs, SiTypescript, SiMui, SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiAdobexd, SiFigma, SiWordpress } from 'react-icons/si';
import { LuKeySquare } from "react-icons/lu";


import Work1 from './assets/cover_bmw_c.webp';
import Work1_1 from './assets/cover_bmw_c_2.webp';
import Work2 from './assets/task_app.webp';
import Work2_2 from './assets/task_app.webp';
import Work3 from './assets/vertigo_cover_4.webp';
import Work3_3 from './assets/vertigo_2.webp';
import Work4 from './assets/casa_cuadrau.webp';
import Work4_4 from './assets/casa_cuadrau_2.webp';
import Work5 from './assets/guitar.webp';
import Work5_5 from './assets/guitar-2.webp'
import Work6 from './assets/cover-design-studio.webp';
import Work6_6 from './assets/studio.webp';

import Theme1 from './assets/blue.svg';
import Theme2 from './assets/goldenrod.svg';
import Theme3 from './assets/green.svg';
import Theme4 from './assets/magenta.svg';
import Theme5 from './assets/orange.svg';
import Theme6 from './assets/purple.svg';
import Theme7 from './assets/red.svg';
import Theme8 from './assets/skyblue.svg';
import Theme9 from './assets/crocodile.svg';
import Theme10 from './assets/black.svg';

import Theme1Motion from './assets/blue.gif';
import Theme2Motion from './assets/goldenrod.gif';
import Theme3Motion from './assets/green.gif';
import Theme4Motion from './assets/magenta.gif';
import Theme5Motion from './assets/orange.gif';
import Theme6Motion from './assets/purple.gif';
import Theme7Motion from './assets/red.gif';
import Theme8Motion from './assets/skyblue.gif';
import Theme9Motion from './assets/white.gif';
import Theme10Motion from './assets/black.gif';



export const links = [
    {   
        id: 1, 
        name: "Home", 
        icon: <FaHome  className='nav__icon' />, 
        path: "home" 
    },
    {   
        id: 2, 
        name: "About", 
        icon: <FaUser className='nav__icon' />, 
        path: "about" 
    },
    {   
        id: 3, 
        name: "Proyectos", 
        icon: <FaFolderOpen className='nav__icon' />, 
        path: "portfolio" 
    },{   
        id: 4, 
        name: "Contacto", 
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: "contacto" 
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
        name: "Educación y certificaciones",
        path: "/about/formation"
    }
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nombre',
    description: 'Ezequiel',
  },
  {
    id: 2,
    title: 'Apellidos',
    description: 'Macchi Seoane',
  },
  {
    id: 3,
    title: 'Pais',
    description: 'España',
  },
  {
    id: 4,
    title: 'Ciudad',
    description: 'Barcelona',
  },
  {
    id: 5,
    title: 'Teléfono',
    description: '691 569 610',
  },
  {
    id: 6,
    title: 'Email',
    description: 'macchiezequiel@gmail.com',
  },
  {
    id: 7,
    title: (
      <>
        Linkedin <FaLinkedin />
      </>
    ),
    description: (
      <a href="https://www.linkedin.com/in/ezems/" target="_blank" rel="noopener noreferrer" className="item__details">
        <FiLink />
      </a>
    ),
  }, // Añadida coma aquí
  
  {
    id: 8,
    title: (
      <>
        GitHub <FaGithub />
      </>
      
    ),
    description: (
      <a href="https://github.com/eze-ms/" target="_blank" rel="noopener noreferrer" className="item__details">
        <FiLink />
      </a>
    ),
    // isLink: true,
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
        description: "• Desarrollo e implementación de aplicaciones web."
    },

    {
      id: 2,
      school: "Udemy",
      description: "• Typescript."
    },

    {
      id: 3,
      school: "IT Academy",
      description: [
        { title: "• Bases de datos MySQL." },
        { title: "• SEO." },
        { title: "• Programación de una API con PHP y MySQL." },
        { title: "• Scrum." },
        { title: "• Metodologías Agile." },
        { title: "• Wordpress." },
        { title: "• Low Code/Bootstrap." }

      ]
    },

    {
        id: 4,
        school: "BAU, Centro Universitario de Artes y Diseño",
        description: "• Diplomatura en Diseño Gráfico."
    },
    
    {
        id: 5,
        school: "CESF, Centre d'estudis Sant Francesc",
        description: "• Técnico Superior en Sistemas de Telecomunicaciones e Informáticos."
    }
   

];

export const portfolio = [
  {
    id: '1',
    img: Work1,
    title: 'BMW Motorrad',
    text: 'Sitio PHP con gestión de sesiones, validación de formularios, registro/inicio de sesión seguro, landing page atractiva, base de datos integrada y filtrado por categorías.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'BMW Motorrad',
        img2: Work1_1,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'PHP, JavaScript, BBDD',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="http://www.demomotorrad.com.mialias.net/index.php" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Demo-Motorrad" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaRegUser />,
        title: 'Usuario',
        text2: 'demomo976',
      },
      {
        icon: <LuKeySquare />,
        title: 'Contraseña',
        text2: '3ZYxKE0Q',
      },
    ],
  },
  {
    id: '2',
    img: Work2,
    title: 'Task App',
    text: 'Aplicación de gestión de tareas en REACT con Redux para el estado y React Router para la navegación. Emplea componentes reutilizables para la interfaz.',

    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Task App',
        img2: Work2_2,

      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'React',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://taskappdev.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/TaskApp" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '3',
    img: Work3,
    title: 'Vertigo',
    text:'Tienda online desarrollada en JAVASCRIPT. Los productos se obtienen de archivos JSON y se pueden filtrar según marca y color, ofreciendo una experiencia de compra personalizada y eficiente.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Vertigo',
        img2: Work3_3,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'JavaScript',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://eze-ms.github.io/vertigo-demo/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/vertigo-demo" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '4',
    img: Work4,
    title: 'Casa Cuadrau',
    text:'Sitio web estático y adaptable a dispositivos móviles, donde se han implementado animaciones prescindiendo por completo de la necesidad de plugins adicionales.',

    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Casa Cuadrau',
        img2: Work4_4,

      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'HTML5, CSS3',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://eze-ms.github.io/cuadrau-demo/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/cuadrau-demo" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '5',
    img: Work5,
    title: 'Guitar LA',
    text:'Proyecto en VUE.Js que emplea herramientas de gestión de estado para manejar la aplicación. Incluye una base de datos simulada y utiliza componentes para modularizar la interfaz y simplificar el manejo del carrito de compras',

    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Casa Cuadrau',
        img2: Work5_5,

      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'HTML5, CSS3',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://la-guitar.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Guitarla" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '6',
    img: Work6,
    title: 'Art-Design-Studio',
    text:'Aplicación web en React y TypeScript con arquitectura modular. Implementa hooks personalizados para gestionar eficientemente el estado, incluyendo acumulación y vaciado del carrito.',

    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Casa Cuadrau',
        img2: Work6_6,

      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'React, Typescript',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://art-design-studio.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/art-design-studio" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  }
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(229, 61%, 37%)',
    gif: Theme1Motion,
  },
  {
    id: 2,
    img: Theme2,
    color: 'hsl(45 99% 48%)',
    gif: Theme2Motion,
  },
  {
    id: 3,
    img: Theme3,
    color: 'hsl(154 65% 60%)',
    gif: Theme3Motion,
  },
  {
    id: 4,
    img: Theme4,
    color: 'hsl(320, 67%, 73%)',
    gif: Theme4Motion,
  },
  {
    id: 5,
    img: Theme5,
    color: 'hsl(17, 87%, 59%)',
    gif: Theme5Motion,
  },
  {
    id: 6,
    img: Theme6,
    color: 'hsl(251, 99%, 69%)',
    gif: Theme6Motion,
  },
  {
    id: 7,
    img: Theme7,
    color: 'hsl(351, 80%, 60%)',
    gif: Theme7Motion,
  },
  {
    id: 8,
    img: Theme8,
    color: 'hsl(252, 100%, 79%)',
    gif: Theme8Motion
  },
  {
    id: 9,
    img: Theme9,
    color: 'hsl(0, 0%, 100%)',
    gif: Theme9Motion,
  },
  {
    id: 10,
    img: Theme10,
    color: 'hsl(0, 0%, 40%)',
    gif: Theme10Motion,
  }
];

// export const themeMotion = [
//   {
//     id: 1,
//     img: Theme1Motion,
//   },
  
//   {
//     id: 2,
//     img: Theme2Motion,
//   },
//   {
//     id: 3,
//     img: Theme3Motion,
//   },
//   {
//     id: 4,
//     img: Theme4Motion,
//   },
//   {
//     id: 5,
//     img: Theme5Motion,
//   },
//   {
//     id: 6,
//     img: Theme6Motion,
//   },
//   {
//     id: 7,
//     img: Theme7Motion,
//   },
  
//   {
//     id: 8,
//     img: Theme8Motion,
//   },
//   {
//     id: 9,
//     img: Theme9Motion,
//   },
//   {
//     id: 10,
//     img: Theme10Motion,
//   }
// ]

