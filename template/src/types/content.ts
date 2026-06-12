export interface Citation {
  text: string;
  author: string;
  work: string;
  year: number;
}

export interface KeyFigure {
  id: string;
  name: string;
  nameZh: string;
  years: string;
  portrait: string;
  bio: string;
  contributions: string[];
  relatedChapters: string[];
}

export interface Experiment {
  id: string;
  title: string;
  researcher: string;
  year: number;
  question: string;
  method: string;
  findings: string;
  significance: string;
  ethicalNote?: string;
}

// ─── Rich Content Blocks ───────────────────────────────────────────

export interface StoryBlock {
  type: "story";
  title: string;
  narrative: string;
  takeaway: string;
  source?: string;
}

export interface GoldenQuoteBlock {
  type: "golden";
  quote: string;
  author: string;
  authorTitle?: string;
  commentary: string;
}

export interface WisdomBlock {
  type: "wisdom";
  text: string;
  source?: string;
}

export interface HumorBlock {
  type: "humor";
  text: string;
}

export interface PracticalBlock {
  type: "practical";
  title: string;
  text: string;
}

export interface InteractiveBlock {
  type: "interactive";
  prompt: string;
  hint?: string;
}

export interface DeepDiveBlock {
  type: "deepdive";
  title: string;
  text: string;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | StoryBlock
  | GoldenQuoteBlock
  | WisdomBlock
  | HumorBlock
  | PracticalBlock
  | InteractiveBlock
  | DeepDiveBlock;

export type CalloutType = "insight" | "question" | "connection" | "experiment" | "story" | "reflection" | "humor" | "wisdom";

export interface ChapterSection {
  id: string;
  title: string;
  content: ContentBlock[];
  citations?: Citation[];
  callout?: {
    type: CalloutType;
    text: string;
  };
}

export interface ChapterConnection {
  chapterSlug: string;
  chapterTitle: string;
  description: string;
}

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  epigraph?: Citation;
  overview: string;
  sections: ChapterSection[];
  keyFigures: string[];
  keyExperiments: string[];
  connections: ChapterConnection[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "philosophy" | "founding" | "theory" | "experiment" | "therapy" | "technology";
  chapterSlug?: string;
}

export interface TheoryNode {
  id: string;
  name: string;
  school: string;
  era: string;
  chapterSlug: string;
  connections: string[];
}

export interface GlossaryTerm {
  term: string;
  termZh: string;
  definition: string;
  relatedTerms: string[];
}
