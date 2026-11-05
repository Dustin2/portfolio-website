import type { Content } from './types';

export const es: Content = {
  meta: {
    title: 'Dustin Gallardo — Desarrollador Full Stack',
    description: 'Dustin Gallardo, desarrollador full stack: desde los requerimientos del negocio y el diseño de la base de datos hasta las APIs, las apps web y móviles, y el despliegue.',
    ogAlt: 'Dustin Gallardo, Desarrollador Full Stack',
  },
  nav: { work: 'proyectos', expertise: 'especialidades', experience: 'trayectoria', about: 'sobre mí', contact: 'contacto', menu: 'menú', switchLang: 'Idioma' },
  hero: {
    kicker: '// desarrollador full stack · colima, méxico',
    title: 'Construyo sistemas completos, desde el primer requerimiento hasta producción.',
    pipelineLabel: 'Cómo trabajo',
    pipeline: ['requerimientos', 'modelo de datos', 'api', 'web + móvil', 'producción'],
    seeWork: 'Ver los proyectos',
  },
  stages: {
    requirements: 'requerimientos',
    dataModel: 'modelo de datos',
    api: 'api',
    web: 'web',
    mobile: 'móvil',
    production: 'producción',
    design: 'diseño',
    app: 'app',
    onDeviceAI: 'ia en el dispositivo',
    releases: 'releases',
    testsCI: 'pruebas + ci',
  },
  inProgress: 'en desarrollo',
  work: {
    kicker: '// proyectos — las etapas que cubrió cada uno',
    sourceCode: 'Código fuente →',
    projects: {
      proHielo: {
        kind: 'erp',
        summary: 'ERP para una empresa que fabrica y distribuye hielo: personas y empleados, producción, inventario de cámara fría, productos y precios, clientes y tiendas, rutas de reparto y ventas.',
        highlights: [
          'Reglas de negocio acordadas con el dueño y documentadas antes de construir cada módulo.',
          'API REST en Laravel con JWT y un esquema de PostgreSQL versionado; app web en React instalable como PWA.',
          'Pruebas con PHPUnit y Vitest, límites de intentos y cabeceras de seguridad; Docker Compose, HTTPS con Caddy y respaldos diarios fuera del servidor.',
        ],
        imageAlts: [],
      },
      jarvis: {
        kind: 'android',
        summary: 'Organizador local-first con un asistente por voz que corre Gemma en el teléfono con LiteRT-LM. Sin cuenta ni servidor: los datos nunca salen del dispositivo.',
        highlights: [
          'Tareas recurrentes, proyectos, listas de compras, finanzas, recordatorios y widget de pantalla de inicio.',
          'Compose → ViewModel → Repository → Room, con migraciones versionadas y respaldos diarios.',
          'La lógica de recurrencia y planeación tiene pruebas unitarias; la capa de datos, pruebas en el dispositivo.',
        ],
        imageAlts: [
          'Pantalla Mi día de Jarvis: progreso, siguiente paso y tareas de hoy',
          'Ask Jarvis respondiendo qué vence hoy con el modelo del teléfono',
          'Pantalla de dinero de Jarvis: balance del mes y gasto por categoría',
        ],
      },
      dockClock: {
        kind: 'android · código abierto',
        summary: 'Un teléfono cargando se convierte en un reloj de escritorio con tus notificaciones. La misma pantalla de Compose corre en una Activity y en un DreamService.',
        highlights: [
          'Las notificaciones se leen solo en el dispositivo; eliges qué apps aparecen y puedes ocultar su contenido.',
          'Modo nocturno y protección contra quemado OLED que mueve el contenido cada minuto.',
          'APIs de Android detrás de interfaces para pruebas en la JVM; CI con ktlint, detekt y pruebas.',
        ],
        imageAlts: ['DockClock: un reloj grande en horizontal con una notificación al lado'],
      },
    },
  },
  expertise: {
    kicker: '// especialidades',
    areas: {
      architecture: { title: 'Arquitectura', text: 'Módulos organizados por funcionalidad, con las reglas de negocio escritas antes del código.' },
      backend: { title: 'Backend', text: 'APIs REST en Laravel con JWT, respuestas estandarizadas y manejo centralizado de errores.' },
      frontend: { title: 'Frontend', text: 'React y Next.js en TypeScript con TanStack Query y Router.' },
      databases: { title: 'Bases de datos', text: 'Modelos normalizados en PostgreSQL y SQL Server, con cambios de esquema versionados.' },
      mobile: { title: 'Móvil', text: 'Android nativo con Kotlin y Compose; multiplataforma con React Native y Expo.' },
      devops: { title: 'DevOps', text: 'Docker Compose, GitHub Actions a QA y producción, HTTPS y respaldos diarios.' },
    },
  },
  career: {
    kicker: '// trayectoria',
    jobs: [
      {
        when: 'Dic 2024 – May 2026',
        role: 'Desarrollador Full Stack',
        where: 'Grupo Tecnológico Alfa PCS Max',
        bullets: [
          'Desarrollo y mantenimiento de aplicaciones full stack con Laravel, SQL Server, Next.js y TypeScript, desde los requerimientos hasta el mantenimiento.',
          'Liderazgo de proyectos: a cargo de la planeación, el seguimiento y la entrega, coordinando frontend, backend, base de datos y requerimientos.',
          'Diseño y normalización de bases de datos; análisis de problemas técnicos y de negocio e implementación de soluciones.',
          'Automatización de despliegues a QA y producción con GitHub Actions.',
        ],
      },
      {
        when: 'Dic 2022 – Dic 2024',
        role: 'Desarrollador Mobile',
        where: 'Freelance',
        bullets: ['Apps con React Native y Expo para necesidades de clientes, incluyendo inventarios y control de información.'],
      },
      {
        when: 'Jun 2022 – Dic 2022',
        role: 'Analista de Datos / Desarrollador',
        where: 'ForeverH3',
        bullets: ['Herramientas internas de inventario; análisis de ventas y reportes para identificar los mejores productos y apoyar decisiones comerciales.'],
      },
      {
        when: 'Ene 2020 – Ene 2021',
        role: 'Desarrollador Web',
        where: 'Unidad Estatal de Protección Civil, Colima',
        bullets: ['Aplicación interna de inventarios con React; apoyo en sistemas internos, bases de datos y servidores.'],
      },
      {
        when: 'Jun 2017 – Jun 2018',
        role: 'Desarrollador Web (prácticas profesionales)',
        where: 'DIF Estatal Colima',
        bullets: ['Páginas y herramientas web con HTML, CSS, JavaScript y PHP.'],
      },
    ],
    education: [
      { title: 'Ingeniería en Sistemas Computacionales', detail: 'Instituto Tecnológico de Colima · 2018 – 2021 (hasta 6.º semestre)' },
      { title: 'Técnico Programador', detail: 'CBTIS 19 · 2015 – 2018' },
    ],
  },
  about: {
    kicker: '// sobre mí',
    paragraphs: [
      'Desarrollador full stack con experiencia en todo el ciclo: requerimientos, modelado de datos, APIs, aplicaciones web y móviles, y despliegue. He liderado proyectos coordinando frontend, backend y base de datos, y me enfoco en entender el problema del negocio antes de escribir código.',
    ],
  },
  contact: { kicker: '// contacto', title: 'Construyamos algo.', hint: 'Haz clic para copiar', sendEmail: 'Enviar correo →', copied: '¡Correo copiado!' },
  footer: 'Diseñado y desarrollado por Dustin Gallardo · 2026',
};
