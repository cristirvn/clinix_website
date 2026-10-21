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
    titleHtml: "You've tried everything. <em>Nobody measured.</em>",
    lede: "Sleep, stress, focus and mood all show up on a map of your brain activity. In 30 minutes, you see what it looks like.",
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
    pull: "Different situations. The same question: what is actually going on with me?",
  },
  why: {
    tried: "Herbal teas. Supplements. Holidays. Exercise. Apps. Maybe medication too. Some worked for a while. Others not at all.",
    assumption: "All of it started from a guess. Nobody looked first at how your brain is actually working.",
    cost: "Meanwhile you're living on half your energy. Work, family, your patience with the people close to you. They all pay a little, and you can't say exactly since when.",
    analogy: "You get your heart checked. You have your blood tests every year. Your brain, never. Yet it decides how you sleep, how you react and how clearly you think.",
  },
  mapSentence: "You see which areas are too active, which are too slow, and how that links to what you feel every day. In your case, not in general.",
  qualify: {
    fits: [
      "You feel something isn't right — sleep, stress, focus or mood — and you don't know exactly what",
      "Your tests come back fine, but you don't feel fine",
      "You want to understand what's going on before you try anything else",
    ],
    extraExclusion:
      "You have symptoms that came on suddenly, or thoughts of harming yourself — see a doctor first or call 112 (999 in the UK)",
  },
  faq: [
    {
      q: "I don't have one specific problem. Is it worth coming?",
      a: "Yes. Many people come precisely because they can't say exactly what's wrong. The map shows how your brain is working right now: what's fine and what isn't. You start from data, not a hunch.",
    },
    {
      q: "Is it the same as an MRI?",
      a: "No. An MRI shows how the brain is built. BrainMap shows how it works: its activity, second by second. It doesn't look for lesions and it isn't a diagnosis. It shows the patterns behind what you feel.",
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
