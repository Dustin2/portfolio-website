import type { ImageMetadata } from 'astro';
import type { ExpertiseId, ProjectId, StageId } from './i18n/types';
import dockClock from './assets/dockclock.png';
import jarvisAsk from './assets/jarvis-ask.webp';
import jarvisMoney from './assets/jarvis-money.webp';
import jarvisToday from './assets/jarvis-today.webp';

/** Data that is the same in every language. Text the visitor reads lives in src/i18n. */
export const email = 'dustin2.dev@gmail.com';
export const githubUrl = 'https://github.com/Dustin2';

export const expertiseOrder: ExpertiseId[] = ['architecture', 'backend', 'frontend', 'databases', 'mobile', 'devops'];

export interface Project {
  id: ProjectId;
  name: string;
  /** Stages this project covered; `inProgress` ones are drawn dashed. Only list what the repository shows. */
  stages: { id: StageId; inProgress?: boolean }[];
  stack: string[];
  repo?: string;
  /** 'phones' shows portrait screenshots in a row; 'wide' shows one landscape image. */
  images?: { layout: 'phones' | 'wide'; srcs: ImageMetadata[] };
}

export const projects: Project[] = [
  {
    id: 'proHielo',
    name: 'Pro-Hielo',
    stages: [{ id: 'requirements' }, { id: 'dataModel' }, { id: 'api' }, { id: 'web' }, { id: 'mobile', inProgress: true }, { id: 'production' }],
    stack: ['laravel', 'react', 'typescript', 'postgresql', 'docker'],
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    stages: [{ id: 'design' }, { id: 'dataModel' }, { id: 'app' }, { id: 'onDeviceAI' }, { id: 'releases' }],
    stack: ['kotlin', 'compose', 'room', 'workmanager', 'litert-lm'],
    repo: 'https://github.com/Dustin2/jarvis',
    images: { layout: 'phones', srcs: [jarvisToday, jarvisAsk, jarvisMoney] },
  },
  {
    id: 'dockClock',
    name: 'DockClock',
    stages: [{ id: 'design' }, { id: 'app' }, { id: 'testsCI' }],
    stack: ['kotlin', 'compose', 'hilt', 'datastore', 'github actions'],
    repo: 'https://github.com/Dustin2/dock-clock',
    images: { layout: 'wide', srcs: [dockClock] },
  },
];
