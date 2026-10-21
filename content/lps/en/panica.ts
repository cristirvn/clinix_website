/**
 * Test results are fine and the attacks keep coming? See what your brain shows.
 *
 * English translation of content/lps/ro/panica.ts. Keep the structure in sync
 * with the Romanian source. The shared page structure is
 * `components/lp/LpBrainmapTemplate.tsx`.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const PANICA_LP: BrainmapLp = {
  "slug": "panica",
  "route": "panica",
  "concern": "atacuri-panica",
  "seo": {
    "title": "Test results are fine and the attacks keep coming? See what your brain shows. — Emmanuel CliniX"
  },
  "hero": {
    "titleHtml": "Your body goes into overdrive and <em>you can't stop it</em>",
    "lede": "What happens in your brain between episodes shows up on a map. In 30 minutes, you see what it looks like."
  },
  "identificare": {
    "cards": [
      {
        "tag": "During",
        "text": "Your heart pounds, you can't get enough air, your hands go numb. Ten minutes that feel like an hour."
      },
      {
        "tag": "After",
        "text": "The tests are fine. You were told your heart is OK. And you still don't understand what it was."
      },
      {
        "tag": "In between",
        "text": "It's no longer about the episode. It's the fear that another will come, somewhere you can't get out of."
      }
    ],
    "pull": "Three different moments. The same question: if everything is fine, what was that?"
  },
  "why": {
    "tried": "ECG. Blood tests. Holter monitor. Maybe a pack of pills for when you need it. Every time you were told there's nothing wrong. And it keeps happening.",
    "assumption": "All of it looked in the wrong place. Your heart has been checked. Nobody looked higher than that.",
    "cost": "Meanwhile your world gets smaller. You no longer drive on the motorway, you avoid the Tube, you check where the exit is in every room. Each place you avoid makes the next one harder.",
    "analogy": "You have already had your heart checked, more than once. Your brain, never. Yet the alarm starts there."
  },
  "mapSentence": "You see which areas are too active, which are too slow, and exactly where the alarm goes off too early. In your case, not in general.",
  "qualify": {
    "fits": [
      "You've had episodes where your body goes into overdrive for no clear reason",
      "Your tests and heart check-up came back fine",
      "You've started avoiding places for fear another will come"
    ],
    "extraExclusion": "Your first episode was recent and you haven't seen a doctor yet. Rule out heart causes first"
  },
  "faq": [
    {
      "q": "I've had all the tests and they're fine. So why am I here?",
      "a": "Exactly for that reason. Good results tell you what it isn't. They don't tell you what it is. A cardiologist checks the heart, and when the heart is fine the conversation stops there. We measure brain activity, which is where the reaction you feel in your body starts."
    },
    {
      "q": "Could I have an episode during the scan?",
      "a": "The scan is calm. You sit in a chair, with your eyes closed and then open, and someone is next to you the whole time. If you feel uncomfortable, it stops on the spot and starts again when you're ready. Tell us on the phone beforehand, so we know."
    }
  ],
  "form": {
    "title": "See where the alarm starts, instead of guessing",
    "situatieLabel": "What is your situation?",
    "situatieOptions": [
      "I have episodes and haven't seen a doctor yet",
      "I've had tests and they came back fine",
      "I avoid places for fear another will come"
    ],
    "durataLabel": "How long has it been happening?",
    "incercatPlaceholder": "Tests, consultations, medication, therapy… write briefly. It helps us know where to start."
  },
  "legal": "BrainMap is an initial assessment tool and is not a medical diagnosis. Heart symptoms must be assessed by a doctor first. Results may vary. For severe symptoms, we recommend consulting a specialist doctor."
};
