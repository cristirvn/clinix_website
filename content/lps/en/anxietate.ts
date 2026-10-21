/**
 * Living with tension that won't stop? Find out where it starts.
 *
 * English translation of content/lps/ro/anxietate.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const ANXIETATE_LP: BrainmapLp = {
  "slug": "anxietate",
  "route": "anxietate",
  "concern": "anxietate",
  "seo": {
    "title": "Living with tension that won't stop? Find out where it starts. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "You live with a tension that <em>never switches off</em>",
    "lede": "The state you live in shows up on a map of your brain activity. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "Morning",
        "text": "You wake up with a knot in your stomach before anything has happened. The day hasn't even started."
      },
      {
        "tag": "At work",
        "text": "An email, a phone call, a meeting. Your heart races and you have to leave the room."
      },
      {
        "tag": "Evening",
        "text": "Your body is tired, your head replays everything you said today. And everything that could come tomorrow."
      }
    ],
    "pull": "Three different situations. The same question from everyone: why me?"
  },
  "why": {
    "tried": "Breathing exercises. Magnesium. Exercise. Meditation apps. Maybe a pack of pills for when you need it. Maybe it worked for a month. Maybe not at all.",
    "assumption": "All of it was guesswork. General fixes for a problem that isn't general.",
    "cost": "Meanwhile you turn things down. You put off meetings, drive less, avoid crowded rooms. Not because you want to, but because you don't know when it will catch you again.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet everything starts there."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where the balance breaks. In your case, not in general.",
  "qualify": {
    "fits": [
      "You live in a state of alert that doesn't switch off",
      "You have episodes where your body gets ahead of you",
      "You avoid situations you used to handle without thinking"
    ],
    "extraExclusion": null
  },
  "faq": [
    {
      "q": "I've already seen a psychologist. How is this different?",
      "a": "It doesn't replace therapy. The difference is that it starts from a measurement, not from what you manage to put into words in a session. The map shows what is happening in your brain, and from there the conversation becomes concrete."
    },
    {
      "q": "What if nothing shows up on the map?",
      "a": "Something always shows up. Brain activity is never flat. Sometimes that is the result: you rule out one cause and know where to look next. We tell you exactly what we see, without adding anything to make it look like more."
    }
  ],
  "form": {
    "title": "See what is happening in your brain, instead of guessing",
    "situatieLabel": "What is your situation?",
    "situatieOptions": [
      "Constant state of alert",
      "Episodes where my body goes into overdrive",
      "I avoid situations I used to handle normally"
    ],
    "durataLabel": "How long have you been dealing with this?",
    "incercatPlaceholder": "Therapy, medication, supplements, exercise… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. Results may vary. For severe symptoms, we recommend consulting a specialist doctor."
};
