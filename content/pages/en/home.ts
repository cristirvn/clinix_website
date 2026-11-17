import type { HomeContent } from "@/content/pages/home";

export const HOME_EN: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Applied neuroscience clinic in Bucharest",
    description:
      "See what is really happening in your brain with BrainMap: a 30-minute scan, no radiation, no needles, explained in the same visit. Then you decide.",
  },
  hero: {
    eyebrow: "Wellness for the brain",
    title: "Your brain, at its best",
    lead: "We measure how your brain works, then train it to work better: calmer, clearer, with more energy, today and in the years ahead.",
    benefits: ["Non-invasive", "Measured from the first step", "A plan built on your data"],
    cta: "Start with a BrainMap assessment",
    phoneLabel: "Call us",
    stats: [
      { value: "30 min", label: "for the BrainMap assessment" },
      { value: "1 plan", label: "built on your brain map" },
      { value: "Monthly", label: "training routine with NeuroFit" },
    ],
  },
  services: {
    title: "The methods that help your brain work better",
    lead: "Every plan starts from your data and uses only the methods you need.",
    more: "Find out more",
    featuredBadge: "Brain training",
    toolsLine: "These are the tools. NeuroFit is the programme that uses them in a steady routine.",
    toolsLink: "Discover NeuroFit",
    items: [
      { slug: "neurofeedback", image: "neurofeedback", eyebrow: "The brain learns to regulate itself.", title: "Neurofeedback" },
      { slug: "tavns", image: "tavns", eyebrow: "Gentle stimulation of the vagus nerve, via the ear.", title: "taVNS" },
      { slug: "tpbm", image: "tpbm", eyebrow: "Near-infrared light therapy.", title: "tPBM" },
      { slug: "ces", image: "portrait", eyebrow: "Very gentle stimulation, via ear clips.", title: "CES" },
      { slug: "psihoterapie", image: "consultCouch", eyebrow: "Sessions with a psychotherapist, built into your plan.", title: "Psychotherapy" },
    ],
  },
  start: {
    badge: "Start here",
    eyebrow: "How to start · qEEG assessment",
    title: "It all starts with a map of your brain",
    steps: [
      { title: "The BrainMap assessment", text: "You wear a light cap with sensors for about 30 minutes. No needles, no radiation." },
      { title: "Explained in the same visit", text: "The specialist shows you on screen what the map says about your brain." },
      { title: "Your plan", text: "You get recommendations built on your data. You decide whether, and how, to continue." },
    ],
    cta: "Book a BrainMap assessment",
    note: "If you choose to continue with us, the full BrainMap cost is deducted from the programme.",
  },
  quiz: {
    eyebrow: "Free test · 2–3\u00a0minutes",
    title: "Not sure where to *start?*",
    lead: "A short, free test. You get a score from 1 to 10 and your specific risks.",
    step: "Question 1",
    next: "Next question",
    pickFirst: "Choose an answer to continue.",
  },
  // PROVISIONAL copy (client's draft) — the client is writing the final text.
  neurofit: {
    eyebrow: "NeuroFit by Emmanuel CliniX",
    title: "You train your body. *Now your brain has a gym too.*",
    text: "Regular, non-invasive sessions on the clinic's equipment. You choose how you want to feel, and looking after your brain becomes a routine, as natural as a workout.",
    experiences: ["Relax", "Focus", "Reset", "Longevity"],
    audienceTitle: "Who it's for",
    audience: ["Business owners", "Demanding jobs", "Athletes"],
    note: "A monthly membership. You can carry on with NeuroFit after a treatment programme, too.",
    cta: "Discover NeuroFit",
  },
  complex: {
    eyebrow: "Complex situations",
    title: "Support for more complex situations, too",
    text: "We also work with children and adults living with ADHD, autism, Parkinson's or other neurological conditions. The programme is complementary and is built alongside the doctor who looks after you.",
    tags: ["ADHD", "Autism", "Parkinson's", "Other neurological conditions"],
    links: [
      { label: "For children", href: "/pentru-copii" },
      { label: "How we help", href: "/afectiuni-tratate" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What people who have been to us say",
    ratingLabel: "reviews on Google",
    videosTitle: "Stories from the clinic",
    prev: "Back",
    next: "Next",
    play: "Play the story",
    reviewSource: "Google review",
    all: "All testimonials",
  },
  final: {
    title: "No one has ever shown you what's going on.",
    cta: "I want my brain map",
    note: "If you start treatment with us, the full amount is deducted.",
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
        a: "The assessment costs 1,200 RON and includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you start treatment with us, the full amount is deducted.",
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
