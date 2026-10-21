/**
 * Switched on from morning till night? Find out why.
 *
 * English translation of content/lps/ro/stres.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const STRES_LP: BrainmapLp = {
  "slug": "stres",
  "route": "stres",
  "concern": "stres",
  "seo": {
    "title": "Switched on from morning till night? Find out why. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "Your body has been switched on <em>for months</em>",
    "lede": "The state you live in shows up on a map of your brain activity. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "Morning",
        "text": "You wake up with a clenched jaw and raised shoulders. Nothing has happened yet."
      },
      {
        "tag": "During the day",
        "text": "You start ten things and finish none. By evening you can't say what filled the day."
      },
      {
        "tag": "Sunday",
        "text": "You have two days off and still can't switch off. Your body sits still. Your head keeps working."
      }
    ],
    "pull": "Three different situations. The same question from everyone: why can't I stop?"
  },
  "why": {
    "tried": "Holidays. Exercise. Magnesium. Breathing apps. You cut out the afternoon coffee. Maybe it worked for a week. Maybe not at all.",
    "assumption": "All of it was guesswork. General fixes for a problem that isn't general.",
    "cost": "Meanwhile you pay elsewhere. Your sleep, your patience with your family, your attention for the things that mattered. They go one by one, and you can't say exactly when.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet it decides when you come off alert and when you don't."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where your brain stays stuck on alert. In your case, not in general.",
  "qualify": {
    "fits": [
      "You're on alert from morning till night, with no break",
      "You hold your shoulders, jaw or stomach tense without meaning to",
      "You rest for two days and still can't switch off"
    ],
    "extraExclusion": null
  },
  "faq": [
    {
      "q": "Everyone is stressed. Is mine really different?",
      "a": "That is exactly what we measure. Normal stress comes, does its job and passes. When it stops passing, it shows in brain activity. The map shows whether your system stays switched on or not, and it doesn't depend on how bad it feels to you."
    },
    {
      "q": "What if it turns out I'm fine?",
      "a": "Then you leave knowing that, in black and white, and you look elsewhere. That is a result, not a wasted visit. We tell you exactly what we see, without adding anything to make it look like more."
    }
  ],
  "form": {
    "title": "See what is happening in your brain, instead of guessing",
    "situatieLabel": "What is your situation?",
    "situatieOptions": [
      "I'm on constant alert",
      "I can't stop doing things",
      "I rest and don't feel rested"
    ],
    "durataLabel": "How long has it been like this?",
    "incercatPlaceholder": "Holidays, supplements, exercise, therapy… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. Results may vary. For severe symptoms, we recommend consulting a specialist doctor."
};
