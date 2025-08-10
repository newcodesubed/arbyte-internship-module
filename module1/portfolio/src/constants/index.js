import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software Engineering Intern",
    company: "Arbyte Solutions",
    description: `Developed and maintained full-stack web applications using JavaScript, React.js, and Next.js for the frontend, and Node.js with Express for the backend. Designed and implemented RESTful APIs, integrated MongoDB and PostgreSQL databases, and contributed to all stages of the product lifecycle from concept and design to deployment and testing. Collaborated with stakeholders to gather requirements and ensure timely delivery of features.`,
technologies: ["JavaScript", "React.js", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"]

  },
  /**
   * 
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
  */
];

export const PROJECTS = [
  {
    title: "The Wild Oasis",
    image: project1,
    description: `Built a hotel management dashboard using React and styled-components with Supabase for backend data storage and authentication. Developed reusable UI components, integrated database tables with RLS, and connected the backend to the frontend. Utilized React Query with custom hooks for efficient data fetching and mutations, and implemented form validation and error handling for smooth CRUD operations.`,
technologies: ["React", "styled-components", "Supabase", "React Query"]

  },
  {
    title: "Travel Tracker App",
    image: project2,
    description: `Developed a travel tracking web app with Express.js and PostgreSQL, enabling users to log and view visited countries with personalized profiles and color themes. Implemented dynamic data rendering with EJS templates, secure form handling, and parameterized SQL queries to prevent injection.`,
technologies: ["Express.js", "PostgreSQL", "EJS"]
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Money Minder",
    image: project4,
description: `Built a daily expense tracking app using HTML, CSS, and JavaScript for the frontend with a Django backend, enabling users to manage and monitor their spending habits.`,
technologies: ["HTML", "CSS", "JavaScript", "Django"]








  },
];

export const CONTACT = {
  address: "Kathmandu,Nepal",
  phoneNo: "+977 9864398706 ",
  email: "subedshahxi@gmial.com",
};
