export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

export type ProjectId = 'proHielo' | 'jarvis' | 'dockClock';
export type ExpertiseId = 'architecture' | 'backend' | 'frontend' | 'databases' | 'mobile' | 'devops';
/** A stage of building software; each project lists the ones it covered. */
export type StageId = 'requirements' | 'dataModel' | 'api' | 'web' | 'mobile' | 'production' | 'design' | 'app' | 'onDeviceAI' | 'releases' | 'testsCI';

/** Every string a visitor reads. Both languages implement it, so a missing translation fails the type check. */
export interface Content {
  meta: { title: string; description: string; ogAlt: string };
  nav: { work: string; expertise: string; experience: string; about: string; contact: string; menu: string; switchLang: string };
  hero: { kicker: string; title: string; pipelineLabel: string; pipeline: string[]; seeWork: string };
  stages: Record<StageId, string>;
  inProgress: string;
  work: {
    kicker: string;
    sourceCode: string;
    projects: Record<ProjectId, { kind: string; summary: string; highlights: string[]; imageAlts: string[] }>;
  };
  expertise: { kicker: string; areas: Record<ExpertiseId, { title: string; text: string }> };
  career: {
    kicker: string;
    jobs: { when: string; role: string; where: string; bullets: string[] }[];
    education: { title: string; detail: string }[];
  };
  about: { kicker: string; paragraphs: string[]; learningLabel: string; learning: string };
  contact: { kicker: string; title: string; hint: string; sendEmail: string; copied: string };
  footer: string;
}
