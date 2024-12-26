import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
  
   
    threejs,
   

  } from "../assets";
  import postlt from "../assets/postlt.png";
  import Fittrack from "../assets/Fittrack.png";
  import ShowTimeNow from "../assets/ShowTimeNow.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  // 
  const experiences = [
  
    {
      title: "Full Stack Developer",
      company_name: "BlogApp (Postlt)",
      date: "June 2024 -  July 2024",
      points: [
        "Led the development of a comprehensive blog application with JWT authentication and Google OAuth.",
        "Implemented features including user profile management, CRUD operations, pagination, and search functionality.",
        "Developed an admin panel for managing categories, posts, and users.",
        "Utilized frontend technologies: React, Redux, Axios, React Query, and TipTap.",
        "Utilized backend technologies: Express, MongoDB, Mongoose, with additional libraries for enhanced functionality.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "FitTrack",
      date: " Aug 2024 - Sep 2024",
      points: [
        "Led the development of a fitness application enabling users to search for exercises by body part with a user-friendly search bar.",
        "Provided access to exercise descriptions, YouTube videos, and similar exercises.",
        "Implemented horizontal scrolling for body parts and paginated exercise lists.",
        "Built with React, React Router, Material-UI, and integrated with RapidAPI’s ExerciseDB.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "ShowTimeNow",
      date: "Sep 2024 - Oct 2024",
      points: [
        "Built a movie booking application featuring seat selection, scheduling, and booking capabilities.",
        "Integrated JWT authentication and created an admin panel for content management.",
        "Utilized Next.js, Tailwind CSS, React Toastify, and React Icons for an interactive UI.",
        "Backend powered by Express.js, MongoDB, Cloudinary, Multer, and Sharp for media handling.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Ayodhyaam",
      date: "Nov 2024 - Present",
      points: [
        "Developed the Ayodhyaam website using Next.js (TypeScript), Redux, and Strapi, featuring SEO optimization, server-side rendering (SSR), dynamic pages, audio playback, and user authentication.",
        "Deployed on Firebase Hosting for scalability and high performance.",
      ],
    },
  
  ];
  
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "BlogApp - Postlt",
      description:
        "A full-featured MERN stack blog application with JWT authentication and Google OAuth. It includes user profile management, CRUD operations, search, pagination, and an admin panel for managing categories, posts, and usersThe app is responsive, leveraging Tailwind CSS for seamless usability across devices.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: postlt,
      source_code_link: "https://github.com/PrakharMishra639/BlogApp_postlt_frontend",
    },
    {
      name: "ShowTimeNow - Movie Booking App",
      description:
        " Built a movie booking application featuring seat selection, scheduling, and booking capabilities. Integrated JWTauthentication and created an admin panel for content management with an interactive UI.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js,MongoDB, cloudinary",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ShowTimeNow,
      source_code_link: "https://github.com/PrakharMishra639/ShowTimeNow",
    },
    {
      name: "FitTrack - React Fitness App ",
      description:
        "A comprehensive Fitness application that quickly find exercises by body part with easy to follow instructions and animations. It also allows users to track their workouts and progress over time, helping them stay motivated and achieve their fitness goals.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React-Router",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: Fittrack,
      source_code_link: "https://prakhar1337.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences,  projects };