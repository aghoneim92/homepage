export type PageId = 'home' | 'resume' | 'gallery';

export const contact = {
  name: 'Ahmed Ghoneim',
  email: 'ahmedghoneim92@gmail.com',
  phone: { display: '+20 122 628 2852', href: 'tel:+201226282852' },
  linkedin: 'https://linkedin.com/in/ahmed-ghoneim-48a9ba2a',
  github: 'https://github.com/aghoneim92',
  location: 'Alexandria, Egypt',
  resumePdf: '/assets/ahmed-ghoneim-cv.pdf',
} as const;

export const nav: { id: PageId; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'resume', label: 'Resume', href: '/resume' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
];

export const skills = [
  'React',
  'TypeScript',
  'CSS',
  'Node.js',
  'Go',
  'Python',
  'Ruby',
  'Kotlin',
  'Postgres',
  'AWS',
  'End-to-end testing',
];

export const languages = [
  'Javascript',
  'Typescript',
  'Go',
  'Python',
  'Ruby',
  'Kotlin',
];

export const technologies = [
  'Postgres',
  'AWS',
  'Git',
  'React',
  'Node.js',
  'Flask',
  'FastAPI',
  'Spring Boot',
];

export interface SideProject {
  name: string;
  repo: string;
  /** Live build, only when it is still online. */
  demo?: string;
  /** Call to action for the demo link. Defaults to "Play it". */
  demoLabel?: string;
  description: string;
  /** Credit for the people this was built with, when it was not a solo project. */
  collaborators?: { name: string; url?: string }[];
  stack: string[];
  screenshot: {
    /** Still image, cropped to 16:10. Doubles as the poster when `video` is set. */
    src: string;
    /** Short looping clip that plays in place of the still when motion is allowed. */
    video?: string;
    width: number;
    height: number;
    alt: string;
  };
}

// Descriptions, stacks and screenshots come from each repo's README, topics and
// language stats on GitHub (checked 2026-09-11). The homepage entry is this
// repo, so it needs no demo link.
export const sideProjects: SideProject[] = [
  {
    name: 'homepage',
    repo: 'https://github.com/aghoneim92/homepage',
    description:
      'This site: a static portfolio built with Astro and React, typed end to end, and deployed to Cloudflare Workers from GitHub Actions.',
    stack: ['Astro', 'React', 'TypeScript', 'Cloudflare Workers'],
    screenshot: {
      src: '/assets/projects/homepage.webp',
      width: 1200,
      height: 750,
      alt: 'The homepage hero: the name Ahmed Ghoneim beside a portrait on a deep plum background',
    },
  },
  {
    name: 'rubiks',
    repo: 'https://github.com/aghoneim92/rubiks',
    demo: 'https://rubiks.ahmedghoneim.online',
    description:
      "An interactive Rubik's Cube rendered with OpenGL and hand-written GLSL shaders. Written in C++ and built with CMake on macOS, Linux and Windows, and ported to the browser with WebAssembly and WebGL through Emscripten.",
    stack: ['C++', 'OpenGL', 'GLSL', 'CMake', 'WebAssembly', 'Emscripten'],
    screenshot: {
      src: '/assets/projects/rubiks.webp',
      video: '/assets/projects/rubiks.mp4',
      width: 800,
      height: 500,
      alt: "The OpenGL Rubik's Cube turning a face",
    },
  },
  {
    name: 'ShootEmUp',
    repo: 'https://github.com/mazenmelouk/ShootEmUp',
    demo: 'https://mazenmelouk.github.io/ShootEmUp/',
    description:
      'A 2D arcade shooter that runs in the browser, built in JavaScript on the Pixi.js renderer.',
    collaborators: [
      { name: 'Mazen Melouk', url: 'https://github.com/mazenmelouk' },
    ],
    stack: ['JavaScript', 'Pixi.js', 'HTML5'],
    screenshot: {
      src: '/assets/projects/shootemup.webp',
      width: 960,
      height: 501,
      alt: 'ShootEmUp gameplay: a pixel-art ship facing an enemy over a purple starfield',
    },
  },
  {
    name: 'ratlab',
    repo: 'https://github.com/aghoneim92/ratlab',
    demo: 'https://ratlab.ahmedghoneim.online',
    demoLabel: 'Try it',
    description:
      'An open-source matrix calculator with MATLAB-style syntax: ranges, element-wise operations, transposes. The engine is Rust compiled to WebAssembly, with a React and TypeScript front end.',
    stack: ['Rust', 'WebAssembly', 'React', 'TypeScript'],
    screenshot: {
      src: '/assets/projects/ratlab.webp',
      width: 434,
      height: 271,
      alt: 'The Ratlab console evaluating x = 1:4 and printing the matrix',
    },
  },
];

export interface Job {
  company: string;
  title: string;
  /** Short range shown on the home page grid. */
  years: string;
  /** Full range shown on the resume. */
  dates: string;
  place: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    company: 'Procore',
    title: 'Senior Frontend Engineer',
    years: '2025 — now',
    dates: 'Nov 2025 — Present',
    place: 'Alexandria, Egypt — Remote',
    bullets: [
      'Developing a handful of frontend tools in the Procore app',
      'Developing end-to-end tests',
      'Mentoring juniors and mid-seniors',
    ],
  },
  {
    company: 'Rentinit',
    title: 'Senior Frontend Engineer',
    years: '2025',
    dates: 'Mar 2025 — Nov 2025',
    place: 'Alexandria, Egypt — Remote',
    bullets: [
      'Developed the Rentinit web app (fullstack) from scratch as part of a two-person team.',
      'Developed End-to-End tests that reduced production bugs by 90%.',
      'Established guidelines and best practices for the frontend project.',
    ],
  },
  {
    company: 'Ernest',
    title: 'Senior Fullstack Engineer',
    years: '2024 — 2025',
    dates: 'May 2024 — Feb 2025',
    place: 'Alexandria, Egypt — Remote',
    bullets: [
      'Mentored team members 1:1 and through code review in best practices for developing React components.',
      'Introduced compression and code-splitting to the frontend, cutting down the loading time of the app by 50%.',
      'Integrated our bidding system with HubSpot, saving bidding coordinators ~2h a day of work to synchronize bids.',
      'Developed a Kanban board from scratch for managing tasks in the Ernest app.',
      'Delivered full-stack features with Go on the backend and React and Typescript on the frontend.',
    ],
  },
  {
    company: 'Tempo',
    title: 'Senior Fullstack Engineer',
    years: '2022 — 2024',
    dates: 'July 2022 — April 2024',
    place: 'Alexandria, Egypt — Remote',
    bullets: [
      'Led the internal tooling team for the first year, delivering critical features to employees of the company.',
      'Handled on-call incidents with successful resolution. Reduced TTM (time to mitigate) from ~20 min to ~6 min.',
      'Worked on a real-time messaging service (cloud trainer) for workout guidance for users of Tempo.',
      'Worked on the backend with Python and the frontend with React, Typescript, and Electron.',
    ],
  },
  {
    company: 'Knowledge Officer',
    title: 'Senior Fullstack Engineer',
    years: '2020 — 2022',
    dates: 'May 2020 — June 2022',
    place: 'Alexandria, Egypt — Remote',
    bullets: [
      'Mentored our team through 1:1s, sessions, and code review on best practices with React and Ruby on Rails.',
      'Developed a round-robin booking mechanism for pairing mentors with students in the KO App.',
      'Rewrote the homepage of Knowledge Officer using next.js, increasing its Lighthouse score from 30 to 85.',
    ],
  },
  {
    company: 'Careem',
    title: 'Fullstack Software Engineer',
    years: '2019 — 2020',
    dates: 'Feb 2019 — May 2020',
    place: 'Cairo, Egypt',
    bullets: [
      'Created, along with my team, an internal portal for Careem Bus schedules and lines using React and Node.js.',
      'Mentored engineers in Typescript, React, and Node.js 1:1 and through code review.',
      'Fixed issues on the Careem Bus backend, reducing 500 server errors by 30%.',
    ],
  },
  {
    company: 'friday.de',
    title: 'Fullstack Software Engineer',
    years: '2017 — 2018',
    dates: 'Dec 2017 — Oct 2018',
    place: 'Berlin, Germany',
    bullets: [
      'Helped solve architectural issues (with React and Redux) in the web app in Typescript.',
      'Fixed bugs and delivered new features in the sales funnel and user portal.',
      'Created a new backend service with Spring Boot and Kotlin, scaffolding the project and using reflection to determine body parameter types.',
    ],
  },
  {
    company: 'Didaris',
    title: 'Fullstack Software Engineer',
    years: '2017',
    dates: 'Feb 2017 — Oct 2017',
    place: 'Berlin, Germany',
    bullets: [
      'Introduced git and composer to the PHP backend project.',
      'Introduced javascript to the frontend project, adding dynamic interaction for the user and reducing page reloads.',
    ],
  },
  {
    company: 'Eventum IT Solutions',
    title: 'Junior Software Engineer',
    years: '2014 — 2016',
    dates: 'Aug 2014 — Aug 2016',
    place: 'Alexandria, Egypt',
    bullets: [
      'Created a PDF generator on the backend using Spring Framework, Java, and Node.js, and websockets.',
      'Introduced React to the frontend, scaffolding an entire rewrite of the project.',
      'Taught the rest of the team how to work with React through sessions, 1:1s, and code reviews.',
    ],
  },
];

export const education = {
  degree: 'B.Sc. Computer Engineering',
  school: 'Alexandria University, Alexandria, Egypt',
  years: '2009 — 2014',
};
