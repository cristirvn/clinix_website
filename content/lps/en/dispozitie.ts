/**
 * Not sad, just can't feel anything anymore? See what your brain shows.
 *
 * English translation of content/lps/ro/dispozitie.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const DISPOZITIE_LP: BrainmapLp = {
  "slug": "dispozitie",
  "route": "dispozitie",
  "concern": "depresie",
  "seo": {
    "title": "Not sad, just can't feel anything anymore? See what your brain shows. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "You're not sad. <em>You feel nothing</em>",
    "lede": "What is happening in your brain shows up on a map. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "Morning",
        "text": "You wake up and your first thought is how long until evening. Nothing bad has happened. You just have no reason to get up."
      },
      {
        "tag": "During the day",
        "text": "Work, kids, messages. From the outside you seem to be coping. Inside there is nothing."
      },
      {
        "tag": "The things you used to enjoy",
        "text": "They're still there. You just feel nothing when you do them."
      }
    ],
    "pull": "Three different situations. The same question: how long has it been like this, and why won't it pass?"
  },
  "why": {
    "tried": "Holidays. Exercise. Vitamin D. Advice from people who love you. “Get out more.” Maybe it lasted a week. Maybe not at all.",
    "assumption": "All of it assumed it was a matter of willpower. If it were, it would have been sorted long ago.",
    "cost": "Meanwhile the things you put off pile up. Unread messages, declined invitations, mornings you stayed in bed. Each day the same makes the next one harder.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet it decides how you feel."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where the balance between the active and the slow areas is lost. In your case, not in general.",
  "qualify": {
    "fits": [
      "You've felt the same for a long time, whatever is going on around you",
      "The things you used to enjoy no longer mean anything to you",
      "From the outside you seem to cope, and inside you don't recognise anything"
    ],
    "extraExclusion": "You have thoughts of harming yourself. Don't fill in the form: call 112 (999 in the UK) or go to your nearest emergency department"
  },
  "faq": [
    {
      "q": "I'm already on prescribed medication. Is it still worth it?",
      "a": "Yes, and don't stop anything on your own. You tell us on the phone what you take, so we can factor it into the interpretation. The map doesn't replace treatment and doesn't contradict it. It shows how your brain works right now, and that is useful information for the doctor who follows your care too."
    },
    {
      "q": "Is it depression, or just a rough patch?",
      "a": "A diagnosis is made by a doctor, not by a web page or a machine alone. BrainMap shows what your brain is doing at the time of the measurement. If we see something that calls for a specialist consultation, we tell you directly and point you onwards."
    }
  ],
  "form": {
    "title": "See what is happening in your brain, instead of waiting for it to pass",
    "situatieLabel": "What is your situation?",
    "situatieOptions": [
      "I've felt the same for a long time, whatever happens",
      "I feel nothing about the things I used to enjoy",
      "I function on the outside and that's all"
    ],
    "durataLabel": "How long has it been like this?",
    "incercatPlaceholder": "Therapy, medication, previous consultations… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. It does not replace a psychiatric or psychological consultation and does not substitute for prescribed treatment. Results may vary. If you have thoughts of harming yourself, call 112 (999 in the UK)."
};
