import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a flair for creating dynamic and user-centered web applications. Currently a B.Tech student in Computer Science, I have built a strong foundation in front-end technologies like React and Tailwind CSS and back-end frameworks like Node.js and MongoDB. Through hands-on experience with MERN stack projects, I am focused on delivering innovative, scalable solutions that provide meaningful user experiences. My mission is to leverage my technical skills and creativity to design applications that solve real-world problems and inspire positive change.`;

export const ABOUT_TEXT = `I am a dedicated full-stack developer with a passion for crafting interactive and efficient web applications. My journey in development began with curiosity and has evolved into a journey where I continuously push myself to learn and innovate. From building mental health support tools to real-time chat applications, I thrive in environments that encourage creativity and problem-solving. With strong experience in the MERN stack, Tailwind CSS, and more, I’m committed to delivering solutions that prioritize user experience and security.`;

export const EXPERIENCES = [
  {
    year: "December, 2023 - Present",
    role: "MERN Stack Intern",
    company: "Mathionix Technologies Pvt. Ltd.",
    description: `Working as part of the development team to design and implement web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborating with senior developers to build scalable and efficient backend services and interactive front-end interfaces.`,
    technologies: ["Javascript","React.js","Node.js","mongoDB"], 
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML","CSS","Vue.js","mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python","Svelte","Three.js","Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby","Rails","PHP","Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "An e-commerce application featuring dynamic product listings, cart management, and a clean, responsive user interface. Designed with a focus on smooth navigation and a user-friendly experience. Built with modern tech to simulate a real-world online shopping experience",
    technologies: ["HTML","CSS","React","Node.js","MongoDB"],
    liveDemo: "https://ecommerce-react-anujtiwari.vercel.app/",
    github: "https://github.com/anujtiwari04/ecommerce-react"
  },
  {
    title: "Mental Health Support SaaS web App",
    image: project2,
    description:
      "MindMosaic is an AI-powered mental wellness platform offering emotional assessments, a 24/7 empathetic chatbot, and an anonymous support community. It’s designed to help users reflect, connect, and heal—privately and confidently.",
    technologies: ["HTML","CSS","React","Node.js","MongoDB", "Google gemini API"],
    liveDemo: "https://yourmindmosaic.vercel.app",
    github: "https://github.com/anujtiwari04/mind__mosaic"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A sleek and responsive personal portfolio to showcase projects, highlight development skills, and enable easy contact. Enhanced with animations and clean UI using Tailwind CSS and Framer Motion.",
    technologies: ["HTML","Tailwind-CSS","React", "Framer-motion"],
    liveDemo: "https://anuj-tiwari-portfolio.vercel.app/",
    github: "https://github.com/anujtiwari04/react-portfolio"
  },
  {
    title: "AI Chatbot",
    image: project4,
    description:
      "A real-time interactive chatbot powered by Google’s Gemini API. Designed to deliver smart, context-aware responses across various use cases—ideal for conversational interfaces, support tools, and AI-driven user engagement.",
   technologies: ["HTML","Tailwind-CSS","React","Google gemini API"],
    liveDemo: "https://sahayakai-anuj.vercel.app/",
    github: "https://github.com/anujtiwari04/SahayakAI"
  },
];

export const CONTACT = {
  email: "anujtiwari31135@gmail.com",
  linkdin: "Linkdin",
  twitter: "Twitter"
};
