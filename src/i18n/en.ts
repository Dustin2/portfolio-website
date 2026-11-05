import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Dustin Gallardo — Full Stack Developer',
    description: 'Dustin Gallardo, full stack developer: from business requirements and database design to APIs, web and mobile apps, and deployment.',
    ogAlt: 'Dustin Gallardo, Full Stack Developer',
  },
  nav: { work: 'work', expertise: 'expertise', experience: 'experience', about: 'about', contact: 'contact', menu: 'menu', switchLang: 'Language' },
  hero: {
    kicker: '// full stack developer · colima, méxico',
    title: 'I build complete systems, from the first requirement to production.',
    pipelineLabel: 'How I work',
    pipeline: ['requirements', 'data model', 'api', 'web + mobile', 'production'],
    seeWork: 'See the work',
  },
  stages: {
    requirements: 'requirements',
    dataModel: 'data model',
    api: 'api',
    web: 'web',
    mobile: 'mobile',
    production: 'production',
    design: 'design',
    app: 'app',
    onDeviceAI: 'on-device ai',
    releases: 'releases',
    testsCI: 'tests + ci',
  },
  inProgress: 'in progress',
  work: {
    kicker: '// selected work — the stages each project covered',
    sourceCode: 'Source code →',
    projects: {
      proHielo: {
        kind: 'erp',
        summary: 'ERP for an ice manufacturing and distribution company: people and employees, production, cold-room inventory, products and prices, customers and stores, delivery routes and sales.',
        highlights: [
          'Business rules agreed with the owner and documented before building each module.',
          'Laravel REST API with JWT and a versioned PostgreSQL schema; React web app installable as a PWA.',
          'PHPUnit and Vitest tests, rate limits and security headers; Docker Compose, HTTPS with Caddy and daily off-site backups.',
        ],
        imageAlts: [],
      },
      jarvis: {
        kind: 'android',
        summary: 'Local-first organizer with a voice assistant that runs Gemma on the phone through LiteRT-LM. No account, no server: the data never leaves the device.',
        highlights: [
          'Tasks with recurrence, projects, shopping lists, finances, reminders and a home-screen widget.',
          'Compose → ViewModel → Repository → Room, with versioned migrations and daily backups.',
          'Recurrence and planning logic covered by unit tests; the data layer by device tests.',
        ],
        imageAlts: [
          "Jarvis My day screen: progress, next step and today's tasks",
          'Ask Jarvis answering what is due today with the on-device model',
          'Jarvis Money screen: monthly balance and spending by category',
        ],
      },
      dockClock: {
        kind: 'android · open source',
        summary: 'A charging phone becomes a desk clock with your notifications. The same Compose screen runs in an Activity and in a DreamService.',
        highlights: [
          'Notifications are read on the device only; you choose which apps appear and can hide their content.',
          'Night mode and OLED burn-in protection that shifts the content every minute.',
          'Android APIs behind interfaces for JVM unit tests; CI with ktlint, detekt and tests.',
        ],
        imageAlts: ['DockClock: a large clock in landscape with a notification next to it'],
      },
    },
  },
  expertise: {
    kicker: '// expertise',
    areas: {
      architecture: { title: 'Architecture', text: 'Modules organized by feature, with the business rules written down before the code.' },
      backend: { title: 'Backend', text: 'REST APIs in Laravel with JWT, standardized responses and centralized error handling.' },
      frontend: { title: 'Frontend', text: 'React and Next.js in TypeScript with TanStack Query and Router.' },
      databases: { title: 'Databases', text: 'Normalized models in PostgreSQL and SQL Server, with versioned schema changes.' },
      mobile: { title: 'Mobile', text: 'Native Android with Kotlin and Compose; cross-platform with React Native and Expo.' },
      devops: { title: 'DevOps', text: 'Docker Compose, GitHub Actions to QA and production, HTTPS and daily backups.' },
    },
  },
  career: {
    kicker: '// experience',
    jobs: [
      {
        when: 'Dec 2024 – May 2026',
        role: 'Full Stack Developer',
        where: 'Grupo Tecnológico Alfa PCS Max',
        bullets: [
          'Built and maintained full stack apps with Laravel, SQL Server, Next.js and TypeScript, from requirements to maintenance.',
          'Led projects: in charge of planning, tracking and delivery, coordinating frontend, backend, database and requirements.',
          'Designed and normalized databases; analyzed technical and business problems and implemented the solutions.',
          'Automated QA and production deployments with GitHub Actions.',
        ],
      },
      {
        when: 'Dec 2022 – Dec 2024',
        role: 'Mobile Developer',
        where: 'Freelance',
        bullets: ['React Native and Expo apps for client needs, including inventory and information control features.'],
      },
      {
        when: 'Jun 2022 – Dec 2022',
        role: 'Data Analyst / Developer',
        where: 'ForeverH3',
        bullets: ['Internal inventory tools; sales analysis and reports to find top products and support business decisions.'],
      },
      {
        when: 'Jan 2020 – Jan 2021',
        role: 'Web Developer',
        where: 'State Civil Protection Unit, Colima',
        bullets: ['Internal inventory app with React; support on internal systems, databases and servers.'],
      },
      {
        when: 'Jun 2017 – Jun 2018',
        role: 'Web Developer Intern',
        where: 'DIF Estatal Colima',
        bullets: ['Web pages and tools with HTML, CSS, JavaScript and PHP.'],
      },
    ],
    education: [
      { title: 'Computer Systems Engineering', detail: 'Instituto Tecnológico de Colima · 2018 – 2021 (6 semesters)' },
      { title: 'Programming Technician', detail: 'CBTIS 19 · 2015 – 2018' },
    ],
  },
  about: {
    kicker: '// about',
    paragraphs: [
      "I'm a full stack developer focused on designing and building software solutions end to end. I get involved from requirements analysis and architecture design through development, implementation and deployment.",
      "I like to understand how a problem works before writing code. I've taken part in planning and leading projects, working with databases, APIs, and web and mobile apps.",
      'I enjoy taking on technical challenges, learning new technologies and turning ideas into working products. I especially value clear code, well-grounded decisions, and solutions that make sense both technically and functionally.',
    ],
    learningLabel: 'Currently learning:',
    learning: 'on-device AI for Android · Kotlin & Jetpack Compose · Linux',
  },
  contact: { kicker: '// contact', title: "Let's build something.", hint: 'Click to copy', sendEmail: 'Send email →', copied: 'Email copied!' },
  footer: 'Designed & built by Dustin Gallardo · 2026',
};
