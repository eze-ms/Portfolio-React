import { FaRegUser,FaLinkedin, FaCode, FaGithub, FaBootstrap, FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaReact, FaPhp, FaHtml5, FaCss3Alt, FaSass, FaJs, FaDatabase, FaVuejs, FaJira } from 'react-icons/fa';
import { FiLink, FiFileText } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { SiTailwindcss, SiMysql, SiJquery, SiNextdotjs, SiTypescript, SiMui, SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiAdobexd, SiFigma, SiWordpress } from 'react-icons/si';
import { LuKeySquare } from "react-icons/lu";


import Work1 from './assets/cover_bmw_c.webp';
import Work1_1 from './assets/cover_bmw_c_2.webp';
import Work2 from './assets/task_app.webp';
import Work2_2 from './assets/task_app.webp';
import Work3 from './assets/vertigo_cover_4.webp';
import Work3_3 from './assets/vertigo_2.webp';
import Work5 from './assets/cover-pos.webp';
import Work5_5 from './assets/pos.webp'
import Work6 from './assets/cover-design-studio.webp';
import Work6_6 from './assets/studio.webp';
import Work7 from './assets/patients-cover.webp';
import Work7_7 from './assets/patients-cover.webp';
import Work10 from './assets/tracker-count.webp';
import Work10_10 from './assets/tracker-interface.webp';
import Work11 from './assets/cover-meal.webp';
import Work11_11 from './assets/meal.webp';
import Work12 from './assets/bienes-raices.webp';
import Work12_12 from './assets/propiedades.webp';
import Work13 from './assets/movie-api.webp';
import Work13_13 from './assets/modal-moviedb.webp';
import Work14 from './assets/codecaeer1.webp';
import Work14_14 from './assets/codecaeer2.webp';
import Work15 from './assets/muffin-cover.webp';
import Work15_15 from './assets/muffin.webp';



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
  }, 
  
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
      id: '8',
      title: 'NextJs',
      icon: <SiNextdotjs className='nav__icon' />,
  },
  {
      id: '4',
      title: 'Vue.js',
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
      id: '12',
      title: 'Tailwind',
      icon: <SiTailwindcss className='nav__icon' />,
  },
  {
      id: '9',
      title: 'MySQL',
      icon: <SiMysql className='nav__icon' />,
  },
  {
      id: '13',
      title: 'Database',
      icon: <FaDatabase className='nav__icon' />,
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
  }
];

export const otherPersonalSkills = [
    {
        id: '1',
        title: 'GitHub',
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
        school: "CESF, Centre d'estudis Sant Francesc",
        description: "• Técnico Superior en Sistemas de Telecomunicaciones e Informáticos."
    },

    {
        id: 5,
        school: "BAU, Centro Universitario de Artes y Diseño",
        description: "• Diplomatura en Diseño Gráfico."
    },
];

export const portfolio = [
  {
    id: '1',
    category: 'Javascript',
    img: Work3,
    title: 'Vertigo: Tienda Online en JavaScript',
    text:'Los productos se obtienen de archivos JSON y se pueden filtrar según marca y color, ofreciendo una experiencia de compra personalizada y eficiente.',
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
          <a href="https://vertigo-demo.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
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
    id: '2',
    category: 'PHP',
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
    id: '3',
    category: 'Vue',
    img: Work5,
    title: 'Gestión de Ventas',
    text: 'Aplicación para la gestión de ventas en puntos de venta (POS), que permite a los usuarios realizar un seguimiento de productos vendidos, gestionar cupones, y realizar análisis de ventas.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Gestor de ventas',
        img2: Work5_5,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'Vue.js + TailwindCSS',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://eze-ms-pos-vue-js.vercel.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/eze-ms-POS-Vue.js" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '4',
    category: 'React',
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
    id: '5',
    category: 'React',
    img: Work6,
    title: 'Gestión de Carrito con React y TypeScript',
    text: 'Aplicación web utilizando una arquitectura modular. Implementé useReducer para centralizar la gestión del estado, simplificando el código y mejorando su mantenimiento. La aplicación permite a los usuarios gestionar el estado del carrito de compras de manera eficiente, incluyendo la adición y eliminación de artículos.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Art Design Studio',
        img2: Work6_6,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'React, TypeScript',
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
  },
  {
    id: '6',
    category: 'React',
    img: Work7,
    title: 'Gestión de pacientes con React y Zustand',
    text: 'Aplicación para consultorías médicas, desarrollada con React y Zustand para una gestión eficiente del estado. Permite añadir, editar y eliminar pacientes, manteniendo un registro detallado. El uso de Zustand optimiza el rendimiento y mejora la experiencia del usuario.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Patient Management',
        img2: Work7_7,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'React + Zustand',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://patients-management-zustand.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Patient-Management-React-Zustand" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '9',
    category: 'Vue',
    img: Work10,
    title: 'Gestión de Gastos con Vue.js',
    text: 'Aplicación que permite establecer un presupuesto inicial y gestionar sus gastos, actualizando dinámicamente el porcentaje de presupuesto restant. Visualización de datos financieros y los muestra a través de una gráfica en tiempo real. Proporciona funcionalidades para agregar, editar, eliminar y filtrar gastos por categorías.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Expense Tracker',
        img2: Work10_10,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'Vue.js',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://expense-financial-tracker.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Tracker-control-Vue" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '10',
    category: 'Javascript',
    img: Work12,
    title: 'Gestión de propiedades con Node.Js',
    text: 'Proyecto desarrollado con Node.js, Express y MongoDB. Permite agregar, editar y eliminar propiedades, gestionando usuarios y autenticación con JWT. Incluye una API REST, middleware personalizado y un sistema de plantillas.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Gestión de Propiedades',
        img2: Work12_12,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'Javascript + Node.js + Express + MongoDB',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://bienes-racies-nodejs-0793b5a2e407.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/BienesRaices-Node-Js" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '11',
    category: 'Vue',
    img: Work11,
    title: 'Gestor de Comidas',
    text: 'Aplicación que permite agregar, editar y eliminar comidas, gestionando datos a través de una API externa. Incluye gestión de estado con Pinia y navegación fluida con Vue Router. Diseño responsivo y optimizado.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Api gestor de comidas',
        img2: Work11_11,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'Vue.js + Pinia',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://meals-pinia-api-vue-router.vercel.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Meals-Pinia-API-Vue-Router" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '13',
    category: 'React',
    img: Work13,
    title: 'Gestor de películas con React, API y Tailwind CSS',
    text: 'Aplicación que consume una API para obtener datos, valida con Zod y utiliza middleware para gestionar las solicitudes. Implementa una arquitectura de componentes funcionales, hooks personalizados para la gestión del estado y enrutamiento dinámico, optimizando eficiencia y modularidad',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Gestor de películas',
        img2: Work13_13,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'React + API + Tailwind',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://66a8e64b10de99181b664ec4--movie-db-api-react.netlify.app/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Movie-DB-API-React" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '14',
    category: 'Javascript',
    img: Work14,
    title: 'Plataforma de empleo hecha con Node.js y MongoDB',
    text: 'CodeCareer es una plataforma que conecta profesionales con oportunidades laborales, utilizando Node.js para gestionar APIs RESTful y MongoDB como base de datos. La aplicación implementa una arquitectura modular con validación y autenticación, optimizando la interacción con la base de datos y asegurando un rendimiento eficiente y escalable.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Plataforma de empleo ',
        img2: Work14_14,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'Javascript + NodeJs + MogoDB',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://codecareer-node-mongodb-acb26f138e28.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/CodeCareer-NodeJs" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
    ],
  },
  {
    id: '15',
    category: 'Vue',
    img: Work15,
    title: 'Plataforma coworking con Vue.js y Firebase',
    text: 'Esta plataforma utiliza Vue.js y Vuetify para la interfaz de usuario y Firebase como backend para la autenticación, almacenamiento y base de datos en tiempo real. La aplicación es altamente interactiva y escalable, ofreciendo una experiencia fluida tanto para los administradores como para los usuarios finales.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto',
        isLink: false,
        desc: 'Gestión de coworking ',
        img2: Work15_15,
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje',
        isLink: false,
        desc: 'Vue.js + Firebase ',
      },
      {
        icon: <BiLinkExternal />,
        title: 'Ver',
        isLink: true,
        desc: (
          <a href="https://muffin-app-vue-firebase.vercel.app//" target="_blank" rel="noopener noreferrer" className="item__details">
            <FiLink />
          </a>
        ),
      },
      {
        icon: <FaGithub />,
        title: 'GitHub',
        isLink: true,
        desc: (
          <a href="https://github.com/eze-ms/Muffin-app-Vue-Firebase" target="_blank" rel="noopener noreferrer" className="item__details">
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

