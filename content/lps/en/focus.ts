/**
 * Eight hours at your desk and one hour of work done? See what your brain shows.
 *
 * English translation of content/lps/ro/focus.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const FOCUS_LP: BrainmapLp = {
  "slug": "focus",
  "route": "focus",
  "concern": "performanta-cognitiva",
  "seo": {
    "title": "Eight hours at your desk and one hour of work done? See what your brain shows. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "Eight hours at your desk, <em>one hour of work done</em>",
    "lede": "How your brain holds its attention shows up on a map. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "When you start",
        "text": "You open the document, and a tab too. By the third one you've forgotten what you began with."
      },
      {
        "tag": "In meetings",
        "text": "You hear everything and retain nothing. You reread your notes and they look written by someone else."
      },
      {
        "tag": "Evening",
        "text": "You were busy all day. And you can't name one thing you finished."
      }
    ],
    "pull": "Three different situations. The same question: where do my hours go?"
  },
  "why": {
    "tried": "Pomodoro. Notion. Phone in another drawer. Lists rewritten every Sunday. A productivity course. Maybe it lasted a week.",
    "assumption": "All of it assumed you were badly organised. You can't organise an attention that won't stay put.",
    "cost": "Meanwhile you make up for it with hours. You work evenings, you work weekends, to get what someone else gets done by lunchtime. And you still fall behind.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet it decides how long you can hold your attention on one thing."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where your attention is lost, a few minutes after you start. In your case, not in general.",
  "qualify": {
    "fits": [
      "What you used to do in two hours now takes all day",
      "You read the same paragraph several times and nothing sticks",
      "You start many things and finish few"
    ],
    "extraExclusion": null
  },
  "faq": [
    {
      "q": "Am I just badly organised?",
      "a": "Maybe you are, too. The difference shows in the test: if organisation methods were the problem, at least one of them would have lasted more than a month. The map shows whether your brain manages to sustain attention, or loses it at the same point every time."
    },
    {
      "q": "Is it ADHD?",
      "a": "A diagnosis is made by a doctor, after a full assessment. Not by a machine and not by a web page. BrainMap shows what your brain activity looks like right now. If we see something that calls for a specialist consultation, we tell you directly and point you onwards."
    }
  ],
  "form": {
    "title": "See where your attention is lost, instead of trying one more method",
    "situatieLabel": "What is your situation?",
    "situatieOptions": [
      "I can't get started on work",
      "I start, then lose the thread within minutes",
      "I end the day having finished nothing"
    ],
    "durataLabel": "How long has it been like this?",
    "incercatPlaceholder": "Organisation methods, apps, courses, consultations… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. Results may vary. For severe symptoms, we recommend consulting a specialist doctor."
};
