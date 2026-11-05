import type { ImageMetadata } from 'astro';
import type { ExpertiseId, Lang, ProjectId } from './i18n/types';
import dockClock from './assets/dockclock.png';
import jarvisAsk from './assets/jarvis-ask.webp';
import jarvisMoney from './assets/jarvis-money.webp';
import jarvisToday from './assets/jarvis-today.webp';

/** Data that is the same in every language. Text the visitor reads lives in src/i18n. */
export const email = 'dustin2.dev@gmail.com';
export const githubUrl = 'https://github.com/Dustin2';

export const expertiseTags: Record<ExpertiseId, string[]> = {
  frontend: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'TanStack Router', 'Ant Design'],
  backend: ['Laravel', 'PHP', 'PostgreSQL', 'SQL Server', 'Docker', 'GitHub Actions'],
  mobile: ['React Native', 'Expo', 'Kotlin', 'Jetpack Compose', 'Room'],
};

/** A tag is usually a product name; the few that are words get a translation. */
type Tag = string | Record<Lang, string>;
export const tagLabel = (tag: Tag, lang: Lang) => (typeof tag === 'string' ? tag : tag[lang]);

export interface Project {
  id: ProjectId;
  name: string;
  tags: Tag[];
  repo?: string;
  /** 'phones' shows portrait screenshots in a swipeable row; 'wide' shows one landscape image. */
  images?: { layout: 'phones' | 'wide'; srcs: ImageMetadata[] };
}

export const projects: Project[] = [
  {
    id: 'proHielo',
    name: 'Pro-Hielo ERP',
    tags: ['React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker', 'JWT', 'TanStack', 'Tailwind', 'Expo'],
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3 Expressive', 'Room', 'WorkManager', { en: 'On-device AI', es: 'IA en el dispositivo' }, 'LiteRT-LM'],
    repo: 'https://github.com/Dustin2/jarvis',
    images: { layout: 'phones', srcs: [jarvisToday, jarvisAsk, jarvisMoney] },
  },
  {
    id: 'dockClock',
    name: 'DockClock',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Hilt', 'DataStore', 'Navigation 3', 'DreamService', 'GitHub Actions'],
    repo: 'https://github.com/Dustin2/dock-clock',
    images: { layout: 'wide', srcs: [dockClock] },
  },
];

export const stack = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'TanStack', 'Ant Design',
  'PHP', 'Laravel', 'REST APIs', 'JWT', 'PostgreSQL', 'SQL Server',
  'React Native', 'Expo', 'Kotlin', 'Jetpack Compose',
  'Git', 'GitHub Actions', 'Docker', 'pnpm',
];
