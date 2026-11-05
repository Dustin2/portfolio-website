export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

/** A heading split into plain text and the part shown in the accent color: ['About ', 'me']. */
export type Heading = readonly [plain: string, accent: string];

export type ProjectId = 'proHielo' | 'jarvis' | 'dockClock';
export type ExpertiseId = 'frontend' | 'backend' | 'mobile';

/** Every string a visitor reads. Both languages implement it, so a missing translation fails the type check. */
export interface Content {
  meta: { title: string; description: string; ogAlt: string };
  nav: { about: string; what: string; career: string; work: string; contact: string; menu: string; switchLang: string };
  hero: { hi: string; role: string; seeWork: string; contact: string; phrases: string[] };
  about: { title: Heading; paragraphs: string[]; learningLabel: string; learning: string };
  what: { title: Heading; areas: Record<ExpertiseId, { title: string; text: string }> };
  career: {
    title: Heading;
    jobs: { when: string; role: string; where: string; bullets: string[] }[];
    education: { title: string; detail: string }[];
  };
  work: {
    title: Heading;
    sourceCode: string;
    projects: Record<ProjectId, { kind: string; bullets: string[]; imageAlts: string[] }>;
  };
  stack: { title: Heading };
  contact: { title: Heading; hint: string; sendEmail: string; copied: string };
  footer: string;
}
