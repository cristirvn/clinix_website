/**
 * Do migraines take whole days from every month? See what your brain shows.
 *
 * English translation of content/lps/ro/migrene.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const MIGRENE_LP: BrainmapLp = {
  "slug": "migrene",
  "route": "migrene",
  "concern": "migrene",
  "seo": {
    "title": "Do migraines take whole days from every month? See what your brain shows. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "Migraines take <em>whole days from every month</em>",
    "lede": "Your brain activity between attacks shows up on a map. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "Before",
        "text": "You know it's coming hours ahead. The light gets too bright, words get tangled, and there is nothing you can do to stop it."
      },
      {
        "tag": "During an attack",
        "text": "Dark room, phone on silent, the day cancelled. Sometimes the next day too."
      },
      {
        "tag": "After",
        "text": "You're left drained. You run at half speed and wait for the next one, not knowing when it will come."
      }
    ],
    "pull": "Three different moments. The same question: why so often, and why me?"
  },
  "why": {
    "tried": "Triptans. Magnesium. A trigger diary. You cut out coffee, cheese, red wine, screens in the evening. Maybe it worked for a month. Maybe not at all.",
    "assumption": "All of it tried to stop the attack once it had started, or to guess what sets it off. None of it looked at what your brain does on the days in between.",
    "cost": "Meanwhile you build your life around them. You put off appointments, turn down outings, always keep a pack of pills in your bag. Not because you want to, but because you don't know when the next one is coming.",
    "analogy": "You get your heart checked. You have your blood tests every year. Your brain, never. Yet the attack starts there."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and what your brain activity looks like between attacks. In your case, not in general.",
  "qualify": {
    "fits": [
      "You have more than four migraine days in a month",
      "You've organised your schedule around the attacks",
      "Medication helps during an attack, but the frequency doesn't drop"
    ],
    "extraExclusion": "You have headaches that came on suddenly, are recent, or come with other neurological symptoms. See a doctor first"
  },
  "faq": [
    {
      "q": "I've already seen a neurologist. How is this different?",
      "a": "It doesn't replace a neurological consultation and doesn't give a diagnosis. The neurologist deals with the attack and the treatment. We measure what your brain activity looks like on the days between attacks, information a standard consultation doesn't produce. The two complement each other."
    },
    {
      "q": "Can I come if I'm having an attack right now?",
      "a": "No. We schedule the scan on a day without an attack, otherwise the measurement says nothing about how you function the rest of the month. You tell us on the phone what your cycle usually looks like and we find a suitable slot."
    }
  ],
  "form": {
    "title": "See what your brain does between attacks, not just during them",
    "situatieLabel": "What do your migraines look like?",
    "situatieOptions": [
      "Fewer than 4 days a month",
      "Between 4 and 10 days a month",
      "More than 10 days a month"
    ],
    "durataLabel": "How long have you been dealing with them?",
    "incercatPlaceholder": "Medication, investigations, trigger diary… write briefly. It helps us know where to start."
  },
  "legal": "Migraine needs a specialist neurological assessment. BrainMap is an initial assessment tool, is not a medical diagnosis and does not replace a neurological consultation. Results may vary."
};
