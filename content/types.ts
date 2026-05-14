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
  | "twoColumn";

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
  | TwoColumnBlock;

export interface Slide {
  id: string;
  title: string;
  eyebrow?: string;
  /** Optional kicker for visually distinct slide types. */
  kind?: "opener" | "section" | "closer";
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
