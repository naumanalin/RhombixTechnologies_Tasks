import {
  mobile, backend, creator, web, 
  meta, shopify, starbucks, tesla,
  html, css, javascript, reactjs, redux, tailwind, nodejs, mongodb, git, figma, threejs,
  dashboard, crudOperations, bookify, wptheme, shoppingCart,   } from "../assets";

export const navLinks = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "work",
    name: "Work",
  },
  {
    id:"projects",
    name:'Projects'
  },
  {
    id: "contact",
    name: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Next.js Developer",
    icon: mobile,
  },
  {
    title: "Backend API Developer",
    icon: backend,
  },
  {
    title: "Wordpress Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Year 2024 - Present",
    points: [
      "Created APIs using Express.js and Mongoose.",
      "Assisted in designing folder structures for routes, controllers, middleware, and modules under supervision.",
      "Gained hands-on experience by working on two projects that integrated Express APIs with React applications.",
      "Focused on modular and scalable API design.",
    ],
  },
  {
    title: "React.js Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Year 2024 - Present",
    points: [
      "Developed and maintained web applications using React.js and Redux Toolkit.",
      "Handled API integration for dynamic data-driven applications.",
      "Built user interfaces with Tailwind CSS and animations using Framer Motion.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "WordPress Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "Developed and customized WordPress themes, including child themes.",
      "Created custom post types and fields for specific project requirements.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "PHP Core Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Year 2023 - Present",
    points: [
      "Developed web applications using core PHP with MySQL databases.",
      "Completed a Learning Management System as a final-year project independently.",
      "Gained experience in debugging and maintaining PHP applications.",
      "Learned the importance of PHP in powering over 70% of web servers globally.",
    ],
  },
];


const projects = [
  // admin dashboar
  {name: "Admin Dashboard",
    id: 0,
    description:
      "A React dashboard that represents API data in different types of beautiful, understandable charts like pie chart, line chart, and bar chart. The data updates dynamically if the database updates in real time.",
    tags: [
      {
        name: "react",
        color: "text-blue-500", // Tailwind blue
      },
      {
        name: "scss",
        color: "text-green-500", // Tailwind green
      },
      {
        name: "Rechart",
        color: "text-pink-500", // Tailwind pink
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/",
    livePreview: "https://reactdashboard-five.vercel.app"
  },
  // shopping cart
  {name: "Shopping Cart",
    id: 1,
    description:
      "Users can add products to the cart without refreshing or reloading the page, improving the user experience. Users can also filter products by category.",
    tags: [
      {
        name: "react",
        color: "text-blue-500", // Tailwind blue
      },
      {
        name: "FakeAPI",
        color: "text-green-500", // Tailwind green
      },
      {
        name: "CSS",
        color: "text-pink-500", // Tailwind pink
      },
    ],
    image: shoppingCart,
    source_code_link: "https://github.com/",
    livePreview: "https://redux-shopping-cart-ebon.vercel.app"
  },
  // CRUD Operations
  {name: "CRUD Operations",
    id: 2,
    description:
      "You can add, remove, modify, search by name, and filter by gender in real time without refreshing the page.",
    tags: [
      {
        name: "react",
        color: "text-blue-500", // Tailwind blue
      },
      {
        name: "Mock API",
        color: "text-green-500", // Tailwind green
      },
      {
        name: "CSS",
        color: "text-pink-500", // Tailwind pink
      },
    ],
    image: crudOperations,
    source_code_link: "https://github.com/",
    livePreview: "https://redux-api-handling.vercel.app"
  },
  // Bookify
  {name: "Bookify",
    id: 3,
    description:
      "Features include light & dark mode and responsiveness. This is a simple one-page project, not very complex but functional.",
    tags: [
      {
        name: "tailwindCss",
        color: "text-blue-500", // Tailwind blue
      },
    ],
    image: bookify,
    source_code_link: "https://github.com/",
    livePreview: "https://mern-bookify.vercel.app/"
  },
  // wordpress theme
  {name: "WordPress Theme",
    id: 4,
    description:
      "This WordPress theme has multiple options like logo customization, multilevel menu support, theme options page (similar to premium themes), a slider, and a sidebar.",
    tags: [
      {
        name: "WordPress",
        color: "text-blue-500", // Tailwind blue
      },
      {
        name: "jQuery",
        color: "text-green-500"
      }
    ],
    image: wptheme,
    source_code_link: "https://github.com/",
    livePreview: ""
  },
];


export { services, technologies, experiences, projects };
