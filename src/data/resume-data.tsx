import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  DisneyLogo,
  EvercastLogo,
  DevBoxLogo,
  JarockiMeLogo,
  EscapadeLogo,
  Minimal,
  bbLogo,
  TodoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ben Forsyth",
  initials: "BF",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney,+Australia",
  about:
    "Designer/Developer focused on building products with extra attention to detail",
  summary:
    "Developer / Designer with 6+ years of experience building beautiful and performant applications, working remotely with companies all around the world. Currently, I work mostly using TypeScript, React, Node.js, and Python.",
  avatarUrl: "https://avatars.githubusercontent.com/u/69238891?v=4",
  personalWebsiteUrl: "https://bforsyth.dev",
  contact: {
    email: "bb@bforsyth.dev",
    tel: "(+61)421 622 071",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bbforsyth",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bbforsyth/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/bbforsyth",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Technology, Sydney",
      degree: "Bachelor's of Science in Computer Science",
      start: "2016",
      end: "2022",
    },
    {
      school: "University of Technology, Sydney",
      degree: "Bachelor's of Marketing in Business",
      start: "2016",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Freelance",
      link: "https://bforsyth.dev",
      badges: ["Freelance"],
      title: "Developer & Designer",
      logo: ParabolLogo,
      start: "2017",
      end: " - ",
      description:
        "• Services including but not limited to: shopify and e-commerce sites, web and graphic design, search engine optimization, web consulting, social media management, automating business solutions, and implementing artifical intelligence into business scenarios.",
    },
    {
      company: "Moana++",
      link: "https://disney.pm",
      badges: ["Remote","Web Design","Social Media Marketing"],
      title: "Developer → Systems Administrator",
      logo: DisneyLogo,
      start: "2021",
      end: " - ",
      description:
        "Designed and administrated website and community spaces. (Next.js, Code Documentation, Discord, Forums) Automated gameplay data analysis using Python scripts.",
    },
    {
      company: "Escapade Media, Fox Studios",
      link: "https://www.escapademedia.com.au/",
      badges: ["Web Design","Web App Development"],
      title: "Contract Web Developer → Lead Web Design",
      logo: EscapadeLogo,
      start: "2018",
      end: "2020",
      description:
        "Built and maintained https://www.escapademedia.com.au/. Designed and developed a web application for internal use. (React, Node.js, GraphQL, Relay, WebRTC)",
    },
    {
      company: "CMM Quay Legal Group",
      link: "https://www.cmmquaylegal.com.au/",
      badges: ["Web Design"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2016",
      end: "2017",
      description: "Web Development contract for: https://www.cmmquaylegal.com.au/",
    },
  ],
  skills: [
    "Social Media Marketing",
    "Search Engine Optimization",
    "Team Management",
    "Graphic Design and Editing",
    "Content Creation",
    "Content Copywriting",
    "Artificial Intelligence/Machine Learning/Diffusers",
    "Operating Systems",
    "System Administration",
    "Community Management/Engagement",
    "App/Web Development",
    "Web Design",
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "React",
    "Vite",
    "Redux",
    "Bootstrap",
    "iOS/Android",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "bbFocus",
      techStack: [
        "Side Project",
        "React",
        "Redux",
        "Electron",
      ],
      description: "MacOS menu bar app that helps you focus on a single task. By splitting it into smaller todos and keeping all related information about it in one place. The app is designed to get out of your way. Everything can be done via a shortcut. It is built with Electron and uses React and Redux.",
      logo: TodoLogo,
      link: {
        label: "todo",
        href: "https://bforysth.dev/todo/",
      },
    },
    {
      title: "bbTools",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Web Application hosting a collection of tools for developers. It is built with Next.js and TypeScript. The app is also available as a browser extension.",
      logo: DevBoxLogo,
      link: {
        label: "bforsyth.dev/devbox",
        href: "https://bforsyth.dev/devbox/",
      },
    },
    {
      title: "bforysth.dev",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and portfolio. Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss, MDX and more.",
      logo: JarockiMeLogo,
      link: {
        label: "bforsyth.dev",
        href: "https://bforsyth.dev/",
      },
    },
    {
      title: "bbControls",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist control centre redesign for macOS, including tools for managing windows, clipboard, and more. Built with Next.js and Puppeteer.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "bbBot",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Automates the AI-generation of instagram influencers, and their content. Uses a reverse-engineered version of Instagrams's API to interact with users and generate real followers.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    // {
    //   title: "Placeholder",
    //   techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Placeholder",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    {
      title: "b-b.blue",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Austrlalian Based Software Company",
      logo: bbLogo,
      link: {
        label: "b-b.blue",
        href: "https://b-b.blue/",
      },
    },
  ],
} as const;
