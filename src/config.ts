import triggerPickerImg from "./images/TriggerPicker.jpg";
import triggerPickerShot from "./images/projects/triggerpicker.jpg";
import taleWeaverShot from "./images/projects/taleweaver.jpg";
import pokeStrategyShot from "./images/projects/pokestrategy.jpg";
import headunitShot from "./images/projects/headunit.jpg";
import shecklesShot from "./images/projects/sheckles.jpg";
import holleyCanShot from "./images/projects/holleycan.jpg";
export type ProjectStatus = "live" | "wip" | "demo";

/** Screenshot presentation — vary by natural crop / UI shape */
export type ImageSize = "banner" | "wide" | "standard" | "tall" | "compact";

export type Project = {
  id: string;
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  status: ProjectStatus;
  image?: string;
  imageSize?: ImageSize;
  /** Flip image to the left on desktop */
  imageFlip?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export const config = {
  name: "Mark Mathews",
  location: "Mesa, Arizona",
  availability: "Integration Engineer",
  tagline:
    "Implementing and supporting enterprise API integrations for SaaS platforms.",
  bio: "Integration Engineer with 3 years of experience implementing and supporting enterprise API integrations for SaaS event platforms. Implemented approximately 10 new provider integrations, enhanced 15+ existing integrations, and supported 300+ customer integration deployments across 30+ event platforms. Experienced with REST and SOAP APIs, JavaScript/TypeScript, production support, data mapping, automated testing, and direct collaboration with clients and third-party API providers.",

  contact: {
    email: "marklmathews4@gmail.com",
    phone: "602-318-7659",
    github: "https://github.com/Mathews41",
    linkedin: "", // add when ready
    resumeUrl: "/resume.pdf",
  },

  skills: [
    "TypeScript",
    "JavaScript",
    "SQL",
    "Dart",
    "REST",
    "SOAP",
    "API Integration",
    "Data Mapping",
    "Data Transformation",
    "JSON",
    "Node.js",
    "React",
    "Flutter",
    "Jest",
    "MongoDB",
    "Firebase",
    "Git",
    "Linux",
    "API Testing",
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "42Chat",
      period: "Oct 2021 — Jun 2024",
      points: [
        "Managed implementation and production support for 300+ customer integration deployments, typically configuring and monitoring 3–5 integrations each week.",
        "Designed, implemented, tested, deployed, and monitored one-way REST and SOAP integrations that synchronized attendee, registration, speaker, session, and schedule data into 42Chat.",
        "Implemented approximately 10 new provider integrations and enhanced 15+ existing integrations to support evolving APIs, customer requirements, and additional event data.",
        "Built and maintained integrations for Cvent, Aventri, Swapcard, MapYourShow, CDSBridge, Informa, eShow, Experient, and TicketSauce.",
        "Researched third-party APIs, determined technical feasibility, estimated implementation effort, and collaborated directly with clients and providers to gather credentials and validate requirements.",
        "Validated integrations using internal scripts and Jest before deployment, then monitored production synchronization to verify registration counts and required event data.",
        "Supported live events ranging from 1,000 to 50,000+ participants, including Arizona State University graduation ceremonies and major enterprise conferences.",
        "Developed a compatibility solution following SOAP deprecation that enabled a major customer to continue integrating with minimal disruption.",
        "Investigated synchronization issues using MongoDB and Firebase, documented integrations, reviewed pull requests, and mentored a junior engineer.",
      ],
    },
    {
      title: "Founder / Software Developer",
      company: "TriggerPicker",
      period: "Oct 2024 — Present",
      points: [
        "Developing a Flutter/Firebase mobile application featuring recommendation logic, backend architecture, and cross-platform development.",
      ],
    },
  ],

  education: {
    school: "DevMountain",
    focus: "Web Development",
    period: "2019",
  },

  languages: [] as { name: string; level: string }[],

  /** Hero background (full-bleed) */
  heroImage: triggerPickerImg,

  projects: [
    {
      id: "triggerpicker",
      title: "TriggerPicker",
      summary:
        "Flutter/Firebase mobile application featuring recommendation logic, backend architecture, and cross-platform development.",
      role: "Founder / Software Developer",
      technologies: ["Flutter", "Dart", "Firebase"],
      status: "wip",
      image: triggerPickerShot,
      imageSize: "banner",
      liveUrl: "https://triggerpicker.com",
    },
    {
      id: "taleweaver",
      title: "TaleWeaver",
      summary:
        "Web app that generates stories around selected NFT assets using interactive prompts, vision labeling, and language models.",
      role: "Sole developer",
      technologies: ["Next.js", "TypeScript", "OpenAI", "OpenSea API", "ethers"],
      status: "live",
      image: taleWeaverShot,
      imageSize: "standard",
      imageFlip: true,
      liveUrl: "https://nft-story-weaver.vercel.app",
      githubUrl: "https://github.com/Mathews41/TaleWeaver",
    },
    {
      id: "pokestrategy",
      title: "Pokemon Strategy",
      summary:
        "Automated ecommerce system that scanned eBay for undervalued rare cards, executed purchases under treasury rules, and relisted inventory at a target resale multiple.",
      role: "Sole developer",
      technologies: ["React", "TypeScript", "Vite", "eBay APIs"],
      status: "wip",
      image: pokeStrategyShot,
      imageSize: "tall",
    },
    {
      id: "headunit",
      title: "Headunit",
      summary:
        "Vehicle head-unit interface with live audio controls, visualization, and OBD-oriented diagnostics foundations for reading real-time data and trouble codes.",
      role: "Sole developer",
      technologies: ["Python", "Flask", "Socket.IO", "D3.js"],
      status: "wip",
      image: headunitShot,
      imageSize: "wide",
    },
    {
      id: "sheckles",
      title: "Sheckles",
      summary:
        "Lightweight 3D pirate-ship multiplayer game with wind-affected movement, cannon combat, loot, and island respawn systems. Built without a heavy game engine.",
      role: "Sole developer",
      technologies: ["Three.js", "TypeScript", "Vite"],
      status: "wip",
      image: shecklesShot,
      imageSize: "compact",
      imageFlip: true,
    },
    {
      id: "holleycan",
      title: "holleyCAN",
      summary:
        "Live Holley ECU CAN decoder feeding a real-time gauge dashboard and cabin audio controls over Socket.IO.",
      role: "Sole developer",
      technologies: ["Python", "python-can", "FastAPI", "React", "Vite"],
      status: "wip",
      image: holleyCanShot,
      imageSize: "wide",
    },
  ] satisfies Project[],
};
