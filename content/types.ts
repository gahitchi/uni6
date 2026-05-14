// Content schema for the presentation. All data is loaded from these typed files
// so that updating the source material is a single, localized edit.

export type BlockKind =
  | "paragraph"
  | "lead"
  | "callout"
  | "definition"
  | "list"
  | "ordered"
  | "formula"
  | "table"
  | "example"
  | "takeaway"
  | "diagram"
  | "quote"
  | "checklist"
  | "twoColumn"
  /* Visual-teaching primitives (added for the pedagogical upgrade) */
  | "journey"
  | "compare"
  | "keypoint"
  | "prompt"
  | "stat";

export interface ParagraphBlock {
  kind: "paragraph";
  text: string;
}

export interface LeadBlock {
  kind: "lead";
  text: string;
}

export interface CalloutBlock {
  kind: "callout";
  tone?: "info" | "warning" | "success" | "neutral";
  title?: string;
  text: string;
}

export interface DefinitionBlock {
  kind: "definition";
  term: string;
  text: string;
}

export interface ListBlock {
  kind: "list";
  items: string[];
  variant?: "bullet" | "check" | "arrow";
}

export interface OrderedBlock {
  kind: "ordered";
  items: string[];
}

export interface FormulaBlock {
  kind: "formula";
  expression: string;
  label?: string;
  where?: { symbol: string; meaning: string }[];
}

export interface TableBlock {
  kind: "table";
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
  highlightCols?: number[];
}

export interface ExampleBlock {
  kind: "example";
  title?: string;
  text: string;
  steps?: string[];
  result?: string;
}

export interface TakeawayBlock {
  kind: "takeaway";
  text: string;
}

export interface DiagramBlock {
  kind: "diagram";
  /** Name of the React component (in components/diagrams) to render */
  name: string;
  caption?: string;
}

export interface QuoteBlock {
  kind: "quote";
  text: string;
  attribution?: string;
}

export interface ChecklistBlock {
  kind: "checklist";
  items: string[];
}

export interface TwoColumnBlock {
  kind: "twoColumn";
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}

/**
 * Visual pipeline of numbered stages — turns linear ordered lists into a
 * "process" the audience can see. Use for: IFPUG 7 phases, ML pipeline,
 * backfiring flow, COCOMO levels.
 */
export interface JourneyBlock {
  kind: "journey";
  /** Optional intro line above the pipeline */
  intro?: string;
  steps: { label: string; description?: string }[];
}

/**
 * Side-by-side comparison. Teaches differences visually instead of in prose.
 * Use for: LOC vs FP, COCOMO vs SLIM, product vs process metrics, ecc.
 */
export interface CompareBlock {
  kind: "compare";
  a: { label: string; sub?: string; points: string[] };
  b: { label: string; sub?: string; points: string[] };
  /** Optional verdict line shown below both columns */
  verdict?: string;
}

/**
 * Full-bleed "moment" block — one short, emphasized statement, large type.
 * Use sparingly: 1 per slide max. For high-impact takeaway or section pivots.
 */
export interface KeypointBlock {
  kind: "keypoint";
  text: string;
  /** Optional small caption shown above the keypoint */
  eyebrow?: string;
}

/**
 * Audience interaction prompt — a question for the lecturer to ask aloud.
 * Visually distinct so the speaker remembers to pause.
 */
export interface PromptBlock {
  kind: "prompt";
  question: string;
  /** Optional micro-hints visible to the speaker only via notes */
  hint?: string;
}

/**
 * Big-number stat — anchor a quantitative claim visually.
 * Use for: "85% delle org IT italiane è al livello 1 CMM" type insights.
 */
export interface StatBlock {
  kind: "stat";
  value: string;
  unit?: string;
  label: string;
  /** Optional source/context, displayed small */
  context?: string;
}

export type Block =
  | ParagraphBlock
  | LeadBlock
  | CalloutBlock
  | DefinitionBlock
  | ListBlock
  | OrderedBlock
  | FormulaBlock
  | TableBlock
  | ExampleBlock
  | TakeawayBlock
  | DiagramBlock
  | QuoteBlock
  | ChecklistBlock
  | TwoColumnBlock
  | JourneyBlock
  | CompareBlock
  | KeypointBlock
  | PromptBlock
  | StatBlock;

export interface Slide {
  id: string;
  title: string;
  eyebrow?: string;
  /**
   * Visual treatment hint:
   * - `opener`     — lesson opening, big title, top accent border
   * - `closer`     — lesson/deck close, centered, bottom accent border
   * - `transition` — section break between major topics, minimalist anchor
   * - `anchor`     — visual-first slide, large diagram or stat as focal point
   * - `keypoint`   — single-statement moment slide, minimal text
   */
  kind?: "opener" | "section" | "closer" | "transition" | "anchor" | "keypoint";
  /** Optional speaker talking points (shown in notes panel, hidden on slide). */
  notes?: string[];
  blocks: Block[];
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  icon: string;
  slides: Slide[];
}

export interface Unit {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  objectives: {
    knowledge: string[];
    competencies: string[];
    skills: string[];
  };
  lessons: Lesson[];
}
