import type { Content } from './types';

export const es: Content = {
  meta: {
    title: 'Dustin Gallardo — Desarrollador Full Stack',
    description: 'Dustin Gallardo, desarrollador full stack: desde los requerimientos del negocio y el diseño de la base de datos hasta las APIs, las apps web y móviles, y el despliegue.',
    ogAlt: 'Dustin Gallardo, Desarrollador Full Stack',
  },
  nav: { about: 'Sobre mí', what: 'Qué hago', career: 'Trayectoria', work: 'Proyectos', contact: 'Contacto', menu: 'Menú', switchLang: 'Idioma' },
  hero: {
    hi: 'Hola, soy',
    role: 'Construyo aplicaciones web con React, Next.js y Laravel, y apps móviles con React Native y Kotlin.',
    seeWork: 'Ver mis proyectos',
    contact: 'Contáctame',
    phrases: ['Desarrollador Full Stack', 'React y Next.js', 'APIs con Laravel', 'Android con Kotlin', 'IA en el dispositivo'],
  },
  about: {
    title: ['Sobre ', 'mí'],
    paragraphs: [
      'Soy desarrollador Full Stack, enfocado en diseñar y construir soluciones de software de principio a fin. Me involucro desde el análisis de requerimientos y el diseño de arquitectura hasta el desarrollo, la implementación y el despliegue.',
      'Me interesa entender cómo funcionan los problemas antes de escribir código. He participado en la planificación y liderazgo de proyectos, trabajando con bases de datos, APIs y aplicaciones web y móviles.',
      'Disfruto enfrentar desafíos técnicos, aprender nuevas tecnologías y convertir ideas en productos funcionales. Valoro especialmente el código claro, las decisiones bien fundamentadas y las soluciones que tienen sentido tanto técnica como funcionalmente.',
    ],
    learningLabel: 'Ahora estoy aprendiendo:',
    learning: 'IA en el dispositivo para Android · Kotlin y Jetpack Compose · Linux',
  },
  what: {
    title: ['Qué ', 'hago'],
    areas: {
      frontend: { title: 'Frontend', text: 'Interfaces web con React y Next.js en TypeScript, con manejo de datos, rutas y librerías de componentes.' },
      backend: { title: 'Backend y datos', text: 'APIs REST y lógica de negocio en Laravel, modelado y normalización de bases de datos, entornos en contenedores y CI/CD.' },
      mobile: { title: 'Mobile', text: 'Apps multiplataforma con React Native y Expo, y apps nativas de Android con Kotlin y Jetpack Compose.' },
    },
  },
  career: {
    title: ['Mi ', 'trayectoria'],
    jobs: [
      {
        when: 'Dic 2024 – May 2026',
        role: 'Desarrollador Full Stack',
        where: 'Grupo Tecnológico Alfa PCS Max',
        bullets: [
          'Desarrollo y mantenimiento de aplicaciones full stack con Laravel, SQL Server, Next.js y TypeScript en todo el ciclo: requerimientos, planeación, implementación y mantenimiento.',
          'Diseño y normalización de bases de datos; APIs en Laravel e interfaces web con Next.js, TanStack y Ant Design.',
          'Liderazgo de proyectos: a cargo de la planeación, el seguimiento y la entrega, coordinando frontend, backend, base de datos y requerimientos.',
          'Análisis de problemas técnicos y de negocio, y búsqueda, propuesta e implementación de soluciones.',
          'Automatización de despliegues a QA y producción con GitHub Actions.',
          'Inicié en el equipo móvil con React Native y Expo.',
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
  work: {
    title: ['Proyectos ', 'destacados'],
    sourceCode: 'Código fuente →',
    projects: {
      proHielo: {
        kind: 'Sistema de gestión empresarial · web, app móvil en desarrollo',
        bullets: [
          'ERP modular para una empresa que fabrica y distribuye hielo: personas y empleados, producción, inventario de cámara fría, productos y precios, clientes y tiendas, rutas de reparto y ventas.',
          'Reglas de negocio acordadas con el dueño y documentadas antes de construir cada módulo; el modelo de datos separa persona, empleado y usuario.',
          'App web en React y TypeScript, instalable como PWA, sobre una API REST en Laravel con JWT, respuestas estandarizadas y un esquema de PostgreSQL versionado.',
          'Calidad y operación: pruebas con PHPUnit y Vitest, análisis estático, límites de intentos y cabeceras de seguridad; Docker Compose, HTTPS con Caddy y respaldos diarios fuera del servidor.',
          'App móvil con Expo en desarrollo: inicio de sesión, cambio de contraseña obligatorio y menú por rol sobre la misma API.',
        ],
        imageAlts: [],
      },
      jarvis: {
        kind: 'App de organización personal · Android',
        bullets: [
          'Organizador local-first: vista de hoy, bandeja de entrada, tareas recurrentes, proyectos, listas de compras, finanzas, búsqueda, recordatorios y widget de pantalla de inicio.',
          '«Ask Jarvis»: asistente por voz con un modelo de lenguaje que corre en el teléfono (Gemma con LiteRT-LM), sin internet: crea recordatorios, edita tareas, responde sobre gastos y lee un resumen cada mañana.',
          'Compose → ViewModel (StateFlow) → Repository → Room, con la base de datos como única fuente de verdad.',
          'Migraciones versionadas, respaldos automáticos diarios y recordatorios exactos; la lógica de recurrencia y planeación tiene pruebas unitarias.',
        ],
        imageAlts: [
          'Pantalla Mi día de Jarvis: progreso, siguiente paso y tareas de hoy',
          'Ask Jarvis respondiendo qué vence hoy con el modelo del teléfono',
          'Pantalla de dinero de Jarvis: balance del mes y gasto por categoría',
        ],
      },
      dockClock: {
        kind: 'Reloj de escritorio · Android',
        bullets: [
          'Convierte un teléfono cargando en un reloj de escritorio siempre encendido con tus notificaciones recientes; funciona como protector de pantalla en vertical y horizontal.',
          'Privacidad: las notificaciones se leen solo en el dispositivo; eliges qué apps aparecen y puedes ocultar su contenido.',
          'Modo nocturno que atenúa el reloj de 22:00 a 07:00 y protección contra quemado de pantallas OLED que mueve el contenido cada minuto.',
          'Una sola pantalla de reloj en dos contenedores: la misma pantalla de Compose corre en una Activity y en un DreamService, que provee su propio ciclo de vida y ViewModel.',
          'APIs de Android detrás de interfaces para pruebas unitarias en la JVM; CI en GitHub Actions con ktlint, detekt y pruebas.',
        ],
        imageAlts: ['DockClock: un reloj grande en horizontal con una notificación al lado'],
      },
    },
  },
  stack: { title: ['Tecnologías', ''] },
  contact: { title: ['Hablemos', '.'], hint: 'Haz clic para copiar', sendEmail: 'Enviar correo →', copied: '¡Correo copiado!' },
  footer: 'Diseñado y desarrollado por Dustin Gallardo · 2026',
};
