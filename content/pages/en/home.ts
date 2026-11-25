import type { HomeContent } from "@/content/pages/home";

export const HOME_EN: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Brain wellness and longevity, in Bucharest",
    description:
      "See how your brain works with BrainMap in 30 minutes, then train it with non-invasive methods, here in Bucharest.",
  },
  hero: {
    eyebrow: "Wellness for the brain",
    title: "Your brain, at its best",
    lead: "For people who want to sleep well and keep a sharp mind for years to come. First we see how your brain works now. Then we train it, step by step.",
    benefits: ["Non-invasive", "We measure before we recommend", "A plan made on your data"],
    cta: "Start with a BrainMap assessment",
    phoneLabel: "Call us",
    stats: [
      { value: "30 min", label: "is how long the BrainMap assessment takes" },
      { value: "4.9 /5", label: "our Google rating, from 100+ reviews" },
      { value: "100+", label: "new patients every month" },
    ],
  },
  services: {
    title: "Non-invasive methods, chosen for how your brain works",
    lead: "We use only the methods you need and combine them in the right order for you. Every session takes place here, at the clinic.",
    more: "Find out more",
    featuredBadge: "Brain training",
    toolsLine: "Want to do this regularly? NeuroFit brings the same devices together in a monthly membership.",
    toolsLink: "Discover NeuroFit",
    items: [
      { slug: "neurofeedback", image: "neurofeedback", eyebrow: "Your brain gets feedback on the spot and learns, session by session, to regulate itself.", title: "Neurofeedback" },
      { slug: "tavns", image: "tavns", eyebrow: "A small electrode clipped to the ear gently stimulates the vagus nerve.", title: "taVNS" },
      { slug: "tpbm", image: "tpbm", eyebrow: "Infrared light, through a light headset you wear for the length of the session.", title: "tPBM" },
      { slug: "ces", image: "portrait", eyebrow: "Two clips on your ears send pulses so fine you can barely feel them.", title: "CES" },
      { slug: "psihoterapie", image: "consultCouch", eyebrow: "Conversations with a psychotherapist, as part of your plan.", title: "Psychotherapy" },
    ],
  },
  start: {
    badge: "Start here",
    eyebrow: "First step · The BrainMap assessment",
    title: "It all starts with a map of your brain",
    steps: [
      { title: "The BrainMap assessment", text: "You sit comfortably in a chair with a light cap on your head, for about 30 minutes. It doesn't hurt, there are no needles and no radiation." },
      { title: "Explained in the same visit", text: "The specialist looks at the screen with you and explains, in plain words, what the map shows." },
      { title: "Your plan", text: "You go home with recommendations made for you. Whether and how you continue is up to you." },
    ],
    cta: "Book a BrainMap assessment",
    note: "If you go further with us, we deduct the full cost of BrainMap from the programme.",
  },
  quiz: {
    eyebrow: "Free test · 2–3\u00a0minutes",
    title: "Not sure where to *start?*",
    lead: "You answer a few simple questions. At the end you get a score from 1 to 10 and find out what it means for you.",
    step: "Question 1",
    next: "Next question",
    pickFirst: "Choose an answer to continue.",
  },
  // PROVISIONAL copy (client's draft) — the client is writing the final text.
  neurofit: {
    eyebrow: "NeuroFit by Emmanuel CliniX",
    title: "You train your body, *now your brain has a gym too*",
    text: "You come regularly, have non-invasive sessions on the clinic's devices and choose how you want to feel. Over time, looking after your brain becomes a habit, just like going to the gym.",
    experiences: ["Relax", "Focus", "Reset", "Longevity"],
    audienceTitle: "Who it's for",
    audience: ["Business owners", "Demanding jobs", "Athletes"],
    note: "A monthly membership, with no year-long contract. It also works well once you finish a programme at the clinic.",
    cta: "Discover NeuroFit",
  },
  complex: {
    eyebrow: "Complex situations",
    title: "Support for more complex situations, too",
    text: "We also work with children and adults with ADHD, autism, Parkinson's or other neurological conditions. The programme sits alongside medical care, and we run it together with the doctor who looks after you.",
    tags: ["ADHD", "Autism", "Parkinson's", "Other neurological conditions"],
    links: [
      { label: "For children", href: "/pentru-copii" },
      { label: "How we help", href: "/afectiuni-tratate" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What people who have walked through our door say",
    ratingLabel: "reviews on Google",
    videosTitle: "Stories from the clinic",
    prev: "Back",
    next: "Next",
    play: "Play the story",
    reviewSource: "Google review",
    all: "All testimonials",
  },
  final: {
    title: "No one has ever shown you, clearly, what's going on",
    cta: "Book a BrainMap assessment",
    note: "If you go further with us, we deduct the full cost of BrainMap from the programme.",
    reach: "Where to find us",
    address: "Address",
  },
  faq: {
    eyebrow: "Questions",
    title: "What you'll want to know first.",
    items: [
      {
        q: "What is BrainMap?",
        a: "A scan of your brain's electrical activity (qEEG). We fit a cap with sensors. You sit in a chair, fully clothed, with your eyes closed and then open. The sensors read the electrical activity your brain produces anyway, every second.",
      },
      {
        q: "Does it hurt? Is it risky?",
        a: "No. The sensors only read the activity your brain produces anyway. Nothing is administered, nothing enters your body, there is no radiation and no recovery time.",
      },
      {
        q: "How long does it take in total?",
        a: "One hour. 30 minutes for the scan, the rest for explaining the map and the psychological consultation.",
      },
      {
        q: "How much does it cost?",
        a: "The assessment costs 1,200 RON and includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you start a programme with us, the full amount is deducted.",
      },
      { q: "Do I need a referral from my GP?", a: "No." },
      {
        q: "I already take medication. Should I stop it first?",
        a: "Don't stop anything on your own. Talk to the doctor who prescribed it. Tell us on the phone what you take, so we can account for it in the interpretation.",
      },
      {
        q: "What happens after the scan?",
        a: "We talk through what the map shows and what your options are. You decide. You're under no obligation. The map and the PDF are yours to keep, whatever you choose to do next.",
      },
      {
        q: "What happens to my data?",
        a: "It stays confidential. It is used only for your assessment and is never passed on.",
      },
    ],
  },
};
