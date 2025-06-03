import dotRevamp from "@/public/image/dot-revamp.png";
import dripImg from "@/public/image/drip.png";
import trusImg from "@/public/image/trus.png";
import ticketImg from "@/public/image/web-ticket.png";
import foodImg from "@/public/image/web-food.png";
import torcheImg from "@/public/image/torche-calculator.png";
import carImg from "@/public/image/car-showcase.png";
import kanbanImg from "@/public/image/kanban-react.png";
import hrcImg from "@/public/image/lp-hrc.png";
import eventImg from "@/public/image/lp-event.png";
import listKelas from "@/public/image/list-kelas.png";
import listContributor from "@/public/image/list-contributor.png";
import forum from "@/public/image/forum.png";
import loker from "@/public/image/loker.png";
import mindID from "@/public/image/mindid.jpeg";
import miniSoccer from "@/public/image/mini-soccer.png";
import monitoring from "@/public/image/monitoring.png";
import eduworkV2 from "@/public/image/eduwork-v2.png";

export const skillsData = [
  {
    id: 14,
    title: "Golang",
    image: "/image/go.png",
  },
  {
    id: 1,
    title: "React",
    image: "/image/reactjs.png",
  },
  {
    id: 2,
    title: "Next",
    image: "/image/next.svg",
  },
  {
    id: 3,
    title: "Node js",
    image: "/image/nodejs.png",
  },
  {
    id: 15,
    title: "PostgreSQL",
    image: "/image/postgre.png",
  },
  {
    id: 16,
    title: "Google Cloud",
    image: "/image/gcp.png",
  },
  {
    id: 17,
    title: "Docker",
    image: "/image/docker.png",
  },
  {
    id: 18,
    title: "Redis",
    image: "/image/redis.png",
  },
  {
    id: 4,
    title: "Mongo DB",
    image: "/image/mongodb.png",
  },
  {
    id: 5,
    title: "MySQL",
    image: "/image/mysql.png",
  },
  {
    id: 6,
    title: "Bootstrap",
    image: "/image/bootstrap.svg",
  },
  {
    id: 7,
    title: "Tailwind",
    image: "/image/tailwind.svg",
  },
  {
    id: 8,
    title: "HTML",
    image: "/image/html.png",
  },
  {
    id: 9,
    title: "CSS",
    image: "/image/css.png",
  },
  {
    id: 10,
    title: "Github",
    image: "/image/github.svg",
  },
  {
    id: 11,
    title: "Postman",
    image: "/image/postman.svg",
  },
  {
    id: 12,
    title: "Python",
    image: "/image/python.png",
  },
  {
    id: 13,
    title: "Tensorflow",
    image: "/image/tensorflow.svg",
  },
];

export const featuredProjects = [
  {
    id: 14,
    title: "DOT Revamp",
    image: dotRevamp,
    tech: ["Next Js", "Tailwind", "Strapi"],
    link: "https://www.dot.co.id/",
    description: `The **Dot Revamp** project is a modern web redesign initiative built 
      using **Next.js** and **Tailwind CSS**, with a strong focus on delivering a visually engaging user experience 
      through smooth and dynamic animations. Despite the rich visual effects, the project prioritizes **performance 
      optimization**, achieving a **Lighthouse performance score of 90+** across pages. SEO best practices are also 
      carefully implemented, ensuring the website is not only fast but also highly discoverable by search engines. The result is a responsive, 
      aesthetically pleasing, and **SEO-friendly** website that balances interactivity with technical excellence.`,
    slug: "dot-revamp",
  },
  {
    id: 15,
    title: "MIND ID Portal Recruitment",
    image: mindID,
    tech: ["React", "NestJS", "NextJS", "AntDesign", "Tailwind"],
    link: "https://coruscating-beignet-7b8c51.netlify.app",
    description: `The **Mind ID Portal Recruitment** project is a recruitment 
    platform developed for **MIND ID**, a state-owned holding company in Indonesia. 
    This project consists of two main web applications: a **backoffice portal** for internal HR operations 
    and a **public-facing site** for applicants. The backoffice is built using **NestJS** integrated 
    with **Inertia.js and React**, implementing the **atomic design pattern** and utilizing **Ant Design** 
    as the component library to ensure consistency and scalability across the UI. 
    Meanwhile, the applicant-facing website is developed using **Next.js** and **Tailwind CSS**, 
    focusing on a clean user experience and responsive design. Together, these platforms streamline the 
    hiring process while ensuring a robust and modern tech foundation.`,
    slug: "mind-id-portal",
  },
  {
    id: 17,
    title: "Mini Soccer Microservices",
    image: miniSoccer,
    tech: ["Golang", "NextJS", "GCP", "PostgeSQL", "Docker"],
    link: "https://github.com/FaisalABR/order-service",
    description: `
    The **Mini Soccer** project is a microservices-based backend system built with **Golang** using the 
    *Gin** framework and **Clean Architecture** for maintainability. It integrates **Midtrans** for payments, 
    **Kafka** for inter-service communication, and is deployed on **Google Cloud Platform** using **Cloud SQL** and 
    **Cloud Storage**. All services are containerized with **Docker** and deployed via **CI/CD pipelines using Jenkins**. 
    **Redis** is added for caching to improve performance, and **unit tests with mocking** ensure reliability. **Postman** is used for API testing, making the system robust, scalable, and production-ready.
    `,
    slug: "mini-soccer-microservices",
  },
  {
    id: 16,
    title: "DOT Project Monitoring",
    image: monitoring,
    tech: ["React", "NextJS", "AntDesign", "PostgreSQL"],
    description: `
    The **DOT Project Monitoring** is an internal web application developed to track ongoing projects 
    handled by **DOT** and manage the talents assigned to each project. Built with the same tech stack and 
    architectural approach as the backoffice of the Mind ID Portal Recruitment, it uses **NestJS** integrated 
    with **Inertia.js and React**, implements **atomic component design**, and 
    adopts **Ant Design** for consistent UI. The system enables efficient monitoring of project progress,
     team allocation, and performance insights, supporting better decision-making and resource management within 
     the organization.`,
    link: "https://project-monitoring-dev.dot.co.id/auth/login",
    slug: "dot-project-monitoring",
  },
  {
    id: 15,
    title: "Eduwork V2",
    image: eduworkV2,
    tech: ["Laravel", "Tailwind", "Alpine.Js"],
    link: "https://eduwork.id/",
    description: `**Eduwork** is a learning platform focused on developing career-oriented 
    hard skills such as **web development**, **data science**, and more. The platform is built 
    using **Laravel Blade** as its templating engine and styled with **Tailwind CSS**, ensuring a 
    clean and responsive user interface. Eduwork provides structured learning paths and practical 
    resources to help learners gain industry-relevant skills and prepare for real-world job opportunities.`,
    slug: "eduwork-v2",
  },
  {
    id: 16,
    title: "Trus",
    image: trusImg,
    tech: ["React", "Tailwind"],
    description: `
    The **Trus** landing page is a promotional website built using **React** and **Tailwind CSS**, 
    designed to introduce and showcase **Trus** — a company that provides an **online stock trading 
    platform** with a **White Label program** tailored for Indonesian brokerage firms. The website 
    emphasizes clarity and responsiveness, delivering key information about Trus’s offerings while 
    maintaining a modern and professional look to attract potential partners and clients in the financial industry.`,
    link: "https://sparkling-tarsier-f07d58.netlify.app",
    slug: "trus",
  },
];

export const allProjects = [
  {
    id: 27,
    title: "Loker - Eduwork",
    image: loker,
    tech: ["React", "Redux", "Tailwind"],
    link: "https://sosmed.edudev.xyz/app/loker",
  },
  {
    id: 26,
    title: "List Kelas - Eduwork",
    image: listKelas,
    tech: ["HTML", "Javascript", "Tailwind"],
    link: "https://sosmed.edudev.xyz/list-kelas",
  },
  {
    id: 25,
    title: "List Contributor - Eduwork",
    image: listContributor,
    tech: ["HTML", "Javascript", "Tailwind"],
    link: "https://sosmed.edudev.xyz/list-contributor-V2",
  },
  {
    id: 24,
    title: "Forum - Eduwork",
    image: forum,
    tech: ["HTML", "Javascript", "Tailwind"],
    link: "https://sosmed.edudev.xyz/forum",
  },
  {
    id: 23,
    title: "Event - Eduwork",
    image: eventImg,
    tech: ["HTML", "Javascript", "Tailwind"],
    link: "https://sosmed.edudev.xyz/lp-event",
  },
  {
    id: 22,
    title: "HRC - Eduwork",
    image: hrcImg,
    tech: ["HTML", "Javascript", "Tailwind"],
    link: "https://sosmed.edudev.xyz/lp-hrc",
  },
  {
    id: 21,
    title: "Kanban React",
    image: kanbanImg,
    tech: ["React", "Context API", "Tailwind"],
    link: "https://kanban-react123.netlify.app/projects/project-1",
  },
  {
    id: 20,
    title: "Car Showcase",
    image: carImg,
    tech: ["Next", "Tailwind", "Headless UI"],
    link: "https://car-showcase-ten-kappa.vercel.app/",
  },
  {
    id: 15,
    title: "Drip Shop",
    image: dripImg,
    tech: ["React", "Tailwind", "Redux"],
    link: "https://coruscating-beignet-7b8c51.netlify.app",
  },
  {
    id: 16,
    title: "Trus",
    image: trusImg,
    tech: ["React", "Tailwind"],
    link: "https://sparkling-tarsier-f07d58.netlify.app",
  },
  {
    id: 16,
    title: "Web Ticket",
    image: ticketImg,
    tech: ["Next Js", "Tailwind", "Express", "Mongo DB"],
    link: "https://graceful-chaja-afb183.netlify.app/",
  },
  {
    id: 17,
    title: "Web Food",
    image: foodImg,
    tech: ["React", "Bootstrap", "Redux", "Axios"],
    link: "https://relaxed-cassata-668e5d.netlify.app/",
  },
  {
    id: 18,
    title: "Ticket API",
    image: ticketImg,
    tech: ["Express", "MongoDB"],
    link: "https://github.com/FaisalABR/Cinema-API",
  },
  {
    id: 19,
    title: "Torche Calculator",
    image: torcheImg,
    tech: ["React", "Tailwind"],
    link: "https://replit.com/@riftxd/New-Design-Calculator",
  },
];
