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
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  openai,
  blog,
  notebook,
  news,
  sorting,
  ios,
} from "../assets";

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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "NEXT Developer",
    icon: backend,
  },
  {
    title: "AWS Cloud Practitioner",
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

const experiences = [
  {
    title: "Tailwind CSS",
    company_name: "Web Design Clones",
    icon: tailwind,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Build the clones for popular websites and made some unique designs while learning Tailwind CSS",
      "Facebook UI Clone, Microsoft UI Clone",
      "IOS Lock Screen Page Web Design",
    ],
  },
  {
    title: "JavaScript",
    company_name: "Functioning Projects",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing basic projects to understand the working and uses of JS",
      "Did projects like: Netflix Clone, 2D Fighter game, Web music player, etc.",
      "Did a detailed project - Sorting Visalizer",
    ],
  },
  {
    title: "React JS",
    company_name: "Shopify",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Did complex projects like Notebook App, News App, ETC.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "NEXT JS",
    company_name: "Meta",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using next js and other related technologies.",
      "Build My Personal Blog",
      "Open AI Chat Application",
      "Web Based Weather Dashboard Application (Ongoing)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aayush proved me wrong.",
    name: "Amit Yadav",
    designation: "Team Member",
    company: "Project Exhibition I",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about user experience' like he does.",
    name: "Mitesh Sharma",
    designation: "Team Member",
    company: "Project Exhibition II",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aayush optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dakshal Dalsania",
    designation: "Dev",
    company: "Jalso 2.0",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Open AI Chat ",
    description:
    "A chatbot inspired by Chat – GPT, used to receive the AI based answers and suggestion to the question asked by users. Build using the Open AI API, with Next JS as production framework and Firebase as the backend.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "orange-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/AayushDev-02/OpenAI-messenger",
  },
  {
    name: "Personal Blog",
    description:
    "A social blog web app made for students to share resources and ideas in their fields - Technology: Build is based on NEXT JS (v13) as frontend framework, managed by TypeScript. Sanity v3 as Interactive backend and Tailwind CSS as styling CSS framework.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/AayushDev-02/NextJS-Blog",
  },
  {
    name: "Notebook App",
    description:
    " It is web application designed to provide users with a platform to create, manage and organize their notes. The application is built using the MERN stack. It notes and user passwords are securely stored using mongo dB and encryption keys.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: notebook,
    source_code_link: "https://github.com/AayushDev-02/Notebook-App-React",
  },
  {
    name: "News App",
    description:
      "A frontend web project which allows uses to access NEWS from different categories at a instant. Powered using NEWS API and React Production Framework. Individual Project",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "news api",
        color: "green-text-gradient",
      },
      {
        name: "ui/ux",
        color: "pink-text-gradient",
      },

    ],
    image: news,
    source_code_link: "https://github.com/AayushDev-02/News-App---React",
  },
  {
    name: "Sorting Visualizer",
    description:
      "Helps visualizing how different sorting algorithms work!.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "algo",
        color: "green-text-gradient",
      },


    ],
    image: sorting,
    source_code_link: "https://github.com/AayushDev-02/Sorting-Visualizer-React",
  },
  {
    name: "IOS Lock Screen",
    description:
      "A web design of ios 13 lock screen made using tailwind css.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },


    ],
    image: ios,
    source_code_link: "https://github.com/AayushDev-02/iOS-16-Lock-Screen-UI-Tailwind-CSS-",
  },
];

export { services, technologies, experiences, testimonials, projects };