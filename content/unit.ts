import type { Unit } from "./types";
import { lesson1 } from "./lesson1";
import { lesson2 } from "./lesson2";
import { lesson3 } from "./lesson3";

export const unit: Unit = {
  number: 6,
  title: "Metriche per la stima dei costi nei progetti informatici",
  subtitle: "Misurare, stimare, certificare la qualità del software",
  description:
    "Unità 6 — Le metriche del software, la valutazione dei costi di un progetto informatico, la valutazione della qualità del software. Dal LOC ai Function Points IFPUG, dal modello COCOMO al modello McCall-Boehm e alla norma ISO/IEC 9126.",
  objectives: {
    knowledge: [
      "Sapere gli aspetti su cui si focalizza la stima dei costi del software",
      "Conoscere le metriche per la stima delle quantità",
      "Individuare gli elementi che maggiormente influenzano i costi del software",
      "Apprendere il concetto di qualità del software",
      "Conoscere la norma ISO/IEC 9126",
    ],
    competencies: [
      "Saper effettuare la stima dei costi di un progetto informatico",
      "Utilizzare il modello LOC e FSA e la tecnica backfiring",
      "Utilizzare il modello COCOMO II e il modello COBRA",
      "Stimare la qualità secondo il modello di McCall-Boehm",
    ],
    skills: [
      "Effettuare il conteggio per LOC",
      "Individuare i punti FP — Function Points",
      "Individuare le differenze tra i metodi di stima",
      "Saper scegliere il metodo adeguato alla tipologia di progetto",
    ],
  },
  lessons: [lesson1, lesson2, lesson3],
};

export type { Unit, Lesson, Slide, Block } from "./types";
