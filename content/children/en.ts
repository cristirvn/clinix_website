import type { ChildrenContent } from "./types";

// PROVISIONAL copy — client to confirm (minimum age, scan length for children, preparation, what is offered after the scan).
export const CHILDREN_EN: ChildrenContent = {
  seo: {
    title: "For children and teenagers",
    description:
      "Attention, sleep, anxiety, learning, too much screen time. How we see what is happening in your child's brain with BrainMap: non-invasive, no radiation, with you in the room.",
  },
  hero: {
    eyebrow: "For children and teenagers",
    title: "Understand what is happening, before you decide.",
    lead: "When your child can’t concentrate, sleeps badly or always seems tense, you don’t have to guess. We measure first. Then we explain it, in plain words.",
    primary: { label: "Let’s talk →", href: "/contact" },
  },
  signs: {
    eyebrow: "What parents notice",
    title: "Do you recognise any of these?",
    lead: "It doesn’t have to be all of them. Usually one thing keeps coming back and doesn’t go away.",
    items: [
      { title: "Attention", text: "Gets up from homework after five minutes, forgets what they were told, loses things." },
      { title: "Sleep", text: "Struggles to fall asleep, wakes in the night or is tired in the morning, even after enough hours." },
      { title: "Emotions", text: "Worry, outbursts of anger or withdrawal. Reactions bigger than the situation." },
      { title: "Learning", text: "Works hard, but the results don’t come. Reads, but doesn’t retain it." },
      { title: "Screens", text: "Can’t put the phone or the games down, and gets irritable without them." },
    ],
  },
  check: {
    eyebrow: "What we check",
    title: "A map of brain activity. No needles, no radiation.",
    paragraphs: [
      "We start with a BrainMap. Your child wears a cap with sensors that only read the brain’s electrical activity. They sit in a chair, fully clothed, with their eyes closed and then open.",
      "We compare the map with the normal values for their age. That shows us whether there are areas that are too active or too slow, linked to what you notice at home and at school.",
    ],
    points: [
      "No radiation, no needles, no pain.",
      "Nothing enters their body. Nothing is administered.",
      "We take breaks whenever needed.",
      "You stay in the room the whole time.",
    ],
    video: "childrenIntro",
    videoTitle: "What a BrainMap looks like for children",
  },
  parents: {
    eyebrow: "How we work with parents",
    title: "You are part of every step.",
    steps: [
      { title: "You call us", text: "You tell us what you notice at home and at school. Together we decide whether an assessment makes sense." },
      { title: "You come in together", text: "You stay next to your child for the whole scan." },
      { title: "We explain the map", text: "In plain words for you and, as far as possible, for your child too." },
      { title: "You decide", text: "You get the PDF with the interpretation and recommendations. You’re under no obligation." },
    ],
  },
  safety: {
    eyebrow: "Safety",
    title: "Good to know",
    points: [
      "BrainMap is an initial assessment tool and is not a medical diagnosis.",
      "We don’t replace your paediatrician or a child psychiatrist. If we see something that is for them, we tell you.",
      "We don’t recommend things for the sake of it. If we can’t help, we tell you on the phone.",
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    items: [
      { q: "From what age can it be done?", a: "We discuss the right age on the phone, depending on the child." },
      {
        q: "How do we prepare?",
        a: "Your child should be rested and have eaten. Clean, dry hair, with no gel or spray. We’ll tell you the rest on the phone.",
      },
      {
        q: "My child takes medication. Should we stop it first?",
        a: "Don’t stop anything on your own. Talk to the doctor who prescribed it. Tell us on the phone what they take, so we can account for it in the interpretation.",
      },
    ],
  },
  cta: {
    title: "Would you like to talk about your child?",
    text: "Leave us your number. We’ll call, listen, and tell you honestly whether we can help.",
    primary: { label: "Request a call back →", href: "/contact" },
    secondary: { label: "More about BrainMap", href: "/servicii/brainmap" },
  },
};
