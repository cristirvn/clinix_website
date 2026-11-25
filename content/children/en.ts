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
    title: "First understand what’s going on, then decide",
    lead: "We measure how your child’s brain works and explain everything in plain words, so you no longer have to guess.",
    primary: { label: "Let’s talk →", href: "/contact" },
  },
  signs: {
    eyebrow: "What parents notice",
    title: "Does any of this sound familiar?",
    items: [
      { title: "Attention", text: "Gets up from homework after five minutes, forgets what you told them and loses their things." },
      { title: "Sleep", text: "Struggles to fall asleep, wakes in the night or is tired in the morning." },
      { title: "Emotions", text: "Worries a lot, has angry outbursts or withdraws. Reacts more strongly than the situation calls for." },
      { title: "Learning", text: "Studies hard, but the results don’t come. Reads, but doesn’t retain it." },
      { title: "Screens", text: "Can’t put the phone or the games down any more." },
    ],
  },
  check: {
    eyebrow: "What we check",
    title: "A map of the brain, with no needles",
    paragraphs: [
      "Your child wears a cap with sensors, which only read the brain’s activity. They sit in a chair, first with their eyes closed, then with them open.",
      "On the map we see which areas work too hard and which work too slowly.",
    ],
    points: [
      "There is no radiation, no needles and it doesn’t hurt.",
      "We take a break whenever your child needs one.",
      "You stay in the room the whole time.",
    ],
    video: "childrenIntro",
    videoTitle: "What a BrainMap looks like for children",
  },
  parents: {
    eyebrow: "How we work with parents",
    title: "You are with your child at every step",
    steps: [
      { title: "You call us", text: "You tell us what you have noticed and together we decide whether an assessment is worthwhile." },
      { title: "You come in together", text: "You stay next to your child for the whole scan." },
      { title: "We explain the map", text: "In plain words for you and, as far as possible, in words your child understands." },
      { title: "You decide", text: "You get the interpretation and recommendations in a PDF. What you do next is up to you." },
    ],
  },
  safety: {
    eyebrow: "Safety",
    title: "Good to know",
    points: [
      "BrainMap is an initial assessment. It is not a substitute for a medical diagnosis.",
      "We work alongside your paediatrician or a child psychiatrist, without taking their place. If we see something that is for them, we tell you.",
      "We only recommend what makes sense for your child. If we can’t help, we tell you from the first phone call.",
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    items: [
      { q: "From what age can it be done?", a: "It depends on the child, so we talk about it on the phone." },
      {
        q: "How do we prepare?",
        a: "It’s best if they come rested and have eaten, with clean, dry hair and no gel or hairspray. We’ll tell you the rest on the phone.",
      },
      {
        q: "My child takes medication. Should we stop it first?",
        a: "Don’t stop anything on your own. Talk first to the doctor who prescribed it. Let us know on the phone what they take, so we can take it into account when we read the map.",
      },
    ],
  },
  cta: {
    title: "Would you like to talk about your child?",
    text: "Leave your number and we’ll call you. We’ll tell you honestly whether we can help.",
    primary: { label: "Request a call back →", href: "/contact" },
    secondary: { label: "Read more about BrainMap", href: "/servicii/brainmap" },
  },
};
