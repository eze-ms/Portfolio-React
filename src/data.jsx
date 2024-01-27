import { FaCode, FaGithub, FaBootstrap, FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaReact, FaPhp, FaHtml5, FaCss3Alt, FaSass, FaJs, FaDatabase, FaVuejs, FaJira } from 'react-icons/fa';
import { FiFileText } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { SiMysql, SiJquery, SiNextdotjs, SiTypescript, SiMui, SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiAdobexd, SiFigma, SiWordpress } from 'react-icons/si';

import Work1 from './assets/bmw_cover.webp';
import Work2 from './assets/task_app.webp';
import Work3 from './assets/vertigo_cover.webp';
import Work4 from './assets/casa_cuadrau.webp';


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
        name: "Educación y certificaciones",
        path: "/about/formation"
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
        description: "- Postgrado en Desarrollo Front-end"
    },
    {
      id: 2,
      school: "IT Academy",
      description: [
        { title: "- Bases de datos MySQL" },
        { title: "- SEO" },
        { title: "- Scrum" },
        { title: "- Metodologías Agile" }
      ]
    },

    {
        id: 3,
        school: "BAU, Centro Universitario de Artes y Diseño",
        description: "- Diplomatura en Diseño Gráfico"
    },
    
    {
        id: 4,
        school: "CESF, Centre d'Estudis Sant Francesc",
        description: "- Técnico Superior en Sistemas de Telecomunicaciones e Informáticos"
    }
   

];

export const portfolio = [
  {
    id: '1',
    img: 'Work1',
    title: 'BMW Motorrad',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        desc: 'BMW Motorrad',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        desc: 'PHP, JavaScript, Base de Datos',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        desc: 'www.xxxxx.com',
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        desc: 'www.github.com/tuusuario/turepositorio',
      },
    ]
  },
  {
    id: '2',
    img: 'Work2',
    title: 'Task App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        desc: 'Task App',
      },
      {
        icon: <FaReact />,
        title: 'Lenguaje',
        desc: 'React, JavaScript',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        desc: 'www.tuprojectoreact.com',
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        desc: 'www.github.com/tuusuario/proyecto-react',
      },
    ]
  },
  {
    id: '3',
    img: 'Work3',
    title: 'Vertigo',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        desc: 'Vertigo',
      },
      {
        icon: <FaJs />,
        title: 'Lenguaje',
        desc: 'JavaScript',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        desc: 'www.tuprojectojs.com',
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        desc: 'www.github.com/tuusuario/proyecto-javascript',
      },
    ]
  },
  {
    id: '4',
    img: 'Work4',
    title: 'Casa Cuadrau',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        desc: 'Casa Cuadrau',
      },
      {
        icon: <FaHtml5 />,
        title: 'Lenguaje',
        desc: 'HTML5, CSS3',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        desc: 'www.tuprojectohtmlcss.com',
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        desc: 'www.github.com/tuusuario/proyecto-html-css',
      },
    ]
  },
];

