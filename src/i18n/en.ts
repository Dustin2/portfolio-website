import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Dustin Gallardo — Full Stack Developer',
    description: 'Dustin Gallardo, full stack developer: from business requirements and database design to APIs, web and mobile apps, and deployment.',
    ogAlt: 'Dustin Gallardo, Full Stack Developer',
  },
  nav: { about: 'About', what: 'What I do', career: 'Career', work: 'Work', contact: 'Contact', menu: 'Menu', switchLang: 'Language' },
  hero: {
    hi: "Hi, I'm",
    role: 'Building web apps with React, Next.js & Laravel, and mobile apps with React Native and Kotlin.',
    seeWork: 'See my work',
    contact: 'Contact me',
    phrases: ['Full Stack Developer', 'React & Next.js', 'APIs with Laravel', 'Android with Kotlin', 'On-device AI'],
  },
  about: {
    title: ['About ', 'me'],
    paragraphs: [
      "I'm a full stack developer focused on designing and building software solutions end to end. I get involved from requirements analysis and architecture design through development, implementation and deployment.",
      "I like to understand how a problem works before writing code. I've taken part in planning and leading projects, working with databases, APIs, and web and mobile apps.",
      'I enjoy taking on technical challenges, learning new technologies and turning ideas into working products. I especially value clear code, well-grounded decisions, and solutions that make sense both technically and functionally.',
    ],
    learningLabel: 'Currently learning:',
    learning: 'on-device AI for Android · Kotlin & Jetpack Compose · Linux',
  },
  what: {
    title: ['What I ', 'do'],
    areas: {
      frontend: { title: 'Frontend', text: 'Web interfaces with React and Next.js in TypeScript, with data fetching, routing and component libraries.' },
      backend: { title: 'Backend & data', text: 'REST APIs and business logic in Laravel, database modeling and normalization, containerized environments and CI/CD.' },
      mobile: { title: 'Mobile', text: 'Cross-platform apps with React Native and Expo, and native Android apps with Kotlin and Jetpack Compose.' },
    },
  },
  career: {
    title: ['My ', 'career'],
    jobs: [
      {
        when: 'Dec 2024 – May 2026',
        role: 'Full Stack Developer',
        where: 'Grupo Tecnológico Alfa PCS Max',
        bullets: [
          'Built and maintained full stack apps with Laravel, SQL Server, Next.js and TypeScript, across the whole cycle: requirements, planning, implementation and maintenance.',
          'Designed and normalized databases; built APIs in Laravel and web interfaces with Next.js, TanStack and Ant Design.',
          'Led projects: in charge of planning, tracking and delivery, coordinating frontend, backend, database and requirements.',
          'Analyzed technical and business problems, then found, proposed and implemented solutions.',
          'Automated QA and production deployments with GitHub Actions.',
          'Started on the mobile team with React Native and Expo.',
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
  work: {
    title: ['Selected ', 'work'],
    sourceCode: 'Source code →',
    projects: {
      proHielo: {
        kind: 'Business management system · web, mobile app in progress',
        bullets: [
          'Modular ERP for an ice manufacturing and distribution company: people and employees, production, cold-room inventory, products and prices, customers and stores, delivery routes and sales.',
          'Business rules agreed with the owner and documented before building each module; the data model separates person, employee and user.',
          'React and TypeScript web app, installable as a PWA, on a Laravel REST API with JWT, standardized responses and a versioned PostgreSQL schema.',
          'Quality and operations: PHPUnit and Vitest tests, static analysis, rate limits and security headers; Docker Compose, HTTPS with Caddy and daily off-site backups.',
          'Mobile app with Expo in progress: login, forced password change and a role-based menu on the same API.',
        ],
        imageAlts: [],
      },
      jarvis: {
        kind: 'Personal organization app · Android',
        bullets: [
          'Local-first organizer: today view, inbox, recurring tasks, projects, shopping lists, finances, search, reminders and a home-screen widget.',
          '"Ask Jarvis": a voice assistant powered by a language model running on the phone (Gemma via LiteRT-LM), no internet needed: it creates reminders, edits tasks, answers spending questions and reads a morning brief aloud.',
          'Compose → ViewModel (StateFlow) → Repository → Room, with the database as single source of truth.',
          'Versioned migrations, daily automatic backups, exact reminders; recurrence and planning logic covered by unit tests.',
        ],
        imageAlts: [
          "Jarvis My day screen: progress, next step and today's tasks",
          'Ask Jarvis answering what is due today with the on-device model',
          'Jarvis Money screen: monthly balance and spending by category',
        ],
      },
      dockClock: {
        kind: 'Desk clock · Android',
        bullets: [
          'Turns a charging phone into an always-on desk clock with your recent notifications, as a screen saver in portrait and landscape.',
          'Privacy first: notifications are read on the device only; you choose which apps appear and can hide their content.',
          'Night mode that dims the clock from 22:00 to 07:00, and OLED burn-in protection that shifts the content every minute.',
          'One clock screen, two hosts: the same Compose screen runs in an Activity and in a DreamService, which provides its own lifecycle and ViewModel store.',
          'Android APIs behind interfaces so the logic is unit tested on the JVM; CI on GitHub Actions with ktlint, detekt and tests.',
        ],
        imageAlts: ['DockClock: a large clock in landscape with a notification next to it'],
      },
    },
  },
  stack: { title: ['Tech ', 'stack'] },
  contact: { title: ["Let's ", 'talk'], hint: 'Click to copy', sendEmail: 'Send email →', copied: 'Email copied!' },
  footer: 'Designed & built by Dustin Gallardo · 2026',
};
