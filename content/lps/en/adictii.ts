/**
 * Said “this is the last time” and it wasn’t? See what your brain shows.
 *
 * English translation of content/lps/ro/adictii.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const ADICTII_LP: BrainmapLp = {
  "slug": "adictii",
  "route": "adictii",
  "concern": "adictii",
  "seo": {
    "title": "Said “this is the last time” and it wasn’t? See what your brain shows. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "You said “this is the last time” and <em>it wasn’t</em>",
    "lede": "What happens in your brain at the moment you can't stop shows up on a map. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "Evening",
        "text": "You pick up your phone for two minutes. You look up and two hours have gone."
      },
      {
        "tag": "When it's hard",
        "text": "Every bad day ends the same way. You knew from the morning how it would end."
      },
      {
        "tag": "The next day",
        "text": "You promise yourself again. And it lasts exactly until the first moment you're tired."
      }
    ],
    "pull": "Three different situations. The same question: why do I know what to do and still not do it?"
  },
  "why": {
    "tried": "Blocking apps. Limits. A month-long break. Bets with yourself. You deleted the app three times and reinstalled it four.",
    "assumption": "All of it assumed it was a matter of willpower. If willpower had been enough, it would have been sorted the first time.",
    "cost": "Meanwhile what you've lost adds up. Hours, money, evenings with people you care about. And the feeling, clearer all the time, that you're not the one deciding.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet that is where the decision you can't hold to gets made."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where the brake gives way, before you've had time to think. In your case, not in general.",
  "qualify": {
    "fits": [
      "You've tried to stop on your own several times and it hasn't lasted",
      "You carry on even though you can see clearly what it costs you",
      "You hold out a few days and then go straight back to where you started"
    ],
    "extraExclusion": "You are dependent on alcohol or substances with physical withdrawal symptoms. You need specialist medical care first"
  },
  "faq": [
    {
      "q": "Mine is about my phone and scrolling, nothing else. Does this still apply?",
      "a": "Yes. The mechanism in the brain is the same, whatever sits at the end of it: the same reward loop and the same place where the decision gets made. What differs is what it costs you. We don't sort people into categories on this page. We measure what your brain does."
    },
    {
      "q": "Does this stay between us?",
      "a": "Yes. Nothing leaves the clinic. The phone conversation, the map and the PDF are confidential and are not passed to anyone. You don't need a referral from anyone and it doesn't appear anywhere."
    }
  ],
  "form": {
    "title": "See what is happening in your brain, instead of promising yourself one more time",
    "situatieLabel": "What is it about?",
    "situatieOptions": [
      "Phone, scrolling or gaming",
      "Alcohol",
      "Something else I can't stop"
    ],
    "durataLabel": "How long has it been like this?",
    "incercatPlaceholder": "Breaks, apps, therapy, attempts to stop… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. Dependence on alcohol or substances needs specialist assessment and treatment; this assessment does not replace them. Results may vary."
};
