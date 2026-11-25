/** /brainmap — English translation of content/lps/ro/general.ts. */
import type { BrainmapLp } from "@/content/lps/types";

export const GENERAL_LP: BrainmapLp = {
  slug: "general",
  route: "brainmap",
  concern: "brainmap-general",
  seo: {
    title: "BrainMap: see what is really happening in your brain — Emmanuel CliniX",
  },
  hero: {
    titleHtml: "You've tried everything, but <em>nobody has measured your brain</em>",
    lede: "Your sleep, stress, focus and mood are all linked to the way your brain works. In 30 minutes you see what its map looks like.",
  },
  identificare: {
    cards: [
      {
        tag: "At night",
        text: "You struggle to fall asleep, or wake at 3 and can't drop off again. You're tired before the day has started.",
      },
      {
        tag: "At work",
        text: "You read the same paragraph three times. What used to take you an hour now takes a whole day.",
      },
      {
        tag: "At home",
        text: "You snap over nothing, then feel sorry. Or you don't feel much at all. And you don't know why.",
      },
    ],
    pull: "Different situations, but the same question: what is actually going on with me?",
  },
  why: {
    tried: "Herbal teas, supplements, holidays, exercise, apps, maybe even pills. Some worked for a while, others not at all.",
    assumption: "All of it started from a guess. Nobody looked first at how your brain is actually working.",
    cost: "Meanwhile you're living on half your energy. It shows at work, at home, in the patience you have with the people close to you. And you no longer know how long it's been like this.",
    analogy: "You get your heart checked and have your blood tests every year. Nobody has ever checked your brain, even though how you sleep, how you react and how clearly you think all depend on it.",
  },
  mapSentence: "You see which areas work too hard, which work too slowly, and how that links to what you feel day to day. We're talking about your brain, not about cases in general.",
  qualify: {
    fits: [
      "You feel something isn't right, with sleep, stress, focus or mood, and you don't know exactly what",
      "Your tests come back fine, but you don't feel fine",
      "You want to understand what's going on before you try anything else",
    ],
    extraExclusion:
      "You have symptoms that came on suddenly, or thoughts of harming yourself. In that case, see a doctor first or call 112 (999 in the UK).",
  },
  faq: [
    {
      q: "I don't have one specific problem. Is it worth coming?",
      a: "Yes. Many people come precisely because they can't say exactly what's wrong. The map shows how your brain is working right now, what's fine and what isn't, so you start from data.",
    },
    {
      q: "Is it the same as an MRI?",
      a: "No. An MRI shows how the brain is built, while BrainMap shows how it works, second by second. It doesn't look for lesions and doesn't make a diagnosis. It shows you the patterns behind what you feel.",
    },
  ],
  form: {
    title: "See what is happening in your brain, instead of guessing",
    situatieLabel: "What bothers you most?",
    situatieOptions: ["Sleep", "Stress or anxiety", "Focus or mood"],
    durataLabel: "How long has it been like this?",
    incercatPlaceholder: "Supplements, holidays, exercise, therapy, medication… write briefly. It helps us know where to start.",
  },
  legal:
    "BrainMap is an initial assessment tool and is not a medical diagnosis. Results may vary. For severe symptoms, we recommend consulting a specialist doctor.",
};
