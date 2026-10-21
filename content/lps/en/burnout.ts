/**
 * Resting and still not recharging? See what your brain shows.
 *
 * English translation of content/lps/ro/burnout.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const BURNOUT_LP: BrainmapLp = {
  "slug": "burnout",
  "route": "burnout",
  "concern": "burnout",
  "seo": {
    "title": "Resting and still not recharging? See what your brain shows. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "You're not lazy. <em>You've run out of reserves</em>",
    "lede": "The state you've reached shows up on a map of your brain activity. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "Monday morning",
        "text": "You had the whole weekend off and you wake up as drained as on Friday night."
      },
      {
        "tag": "At work",
        "text": "You read the same paragraph three times. What used to take two hours now takes all day."
      },
      {
        "tag": "With people",
        "text": "You've no patience left with anyone, at work or at home. And afterwards you feel bad about it."
      }
    ],
    "pull": "Three different situations. The same question: why don't I recharge, however much I rest?"
  },
  "why": {
    "tried": "Holiday. More sleep. Vitamins. You took a week off. You came back and within three days you were the same.",
    "assumption": "All of it assumed you just needed rest. If rest were the answer, it would have worked by now.",
    "cost": "Meanwhile things slip just when you need them most. Missed deadlines, put-off decisions, the feeling that anyone would do the job better than you.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet it decides whether you recharge or not."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where the switch from effort to recovery no longer happens. In your case, not in general.",
  "qualify": {
    "fits": [
      "You rest and don't feel rested",
      "Work you used to do easily now takes three times as long",
      "You've run out of patience with the people you care about"
    ],
    "extraExclusion": null
  },
  "faq": [
    {
      "q": "Burnout is a job problem. Why come to a clinic?",
      "a": "The cause may be the job. What has happened since is in your brain, and it stays there even after you change jobs. That is why people come back from holiday just as they left. We measure the part that a week off doesn't fix."
    },
    {
      "q": "Will my employer find out anything?",
      "a": "No. Nothing we discuss leaves the clinic. The map and the PDF are yours and are not passed to anyone, whoever pays for the assessment."
    }
  ],
  "form": {
    "title": "See what is happening in your brain, instead of pushing yourself harder",
    "situatieLabel": "What is your situation?",
    "situatieOptions": [
      "I rest and don't recharge",
      "The same tasks take me several times longer",
      "I've no patience left with anyone"
    ],
    "durataLabel": "How long has it been like this?",
    "incercatPlaceholder": "Holidays, breaks, therapy, job changes… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. Results may vary. For severe symptoms, we recommend consulting a specialist doctor."
};
