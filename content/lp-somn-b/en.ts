import type { LpSomnBContent, Review, VideoTestimonial } from "./types";

const VIDEOS: VideoTestimonial[] = [
  { name: "Mihaela R.", role: "From 3 to 6 hours of sleep" },
  { name: "Bogdan S.", role: "Off sleeping pills for 2 months" },
  { name: "Corina L.", role: "Cause found at the first assessment" },
];

const REVIEWS_PAGE: Review[] = [
  { initials: "AM", name: "Andreea M.", city: "Cluj-Napoca", quote: "My first full night's sleep in 2 years. I can't believe it." },
  { initials: "RP", name: "Radu P.", city: "Bucharest", quote: "They explained WHY I wasn't sleeping, not just what to take. That changed everything." },
  { initials: "ID", name: "Ioana D.", city: "Timișoara", quote: "My morning energy is back. My family noticed first." },
  { initials: "GV", name: "Gheorghe V.", city: "Brașov", quote: "At 63 I thought it was too late. I was happily wrong." },
];

const REVIEWS_APPLICATION: Review[] = [
  { initials: "AM", name: "Andreea M.", city: "Cluj-Napoca", quote: "My first full night in 2 years. I cried with joy." },
  { initials: "RP", name: "Radu P.", city: "Bucharest", quote: "They told me WHY I wasn't sleeping. Nobody had told me that in 5 years." },
  { initials: "GV", name: "Gheorghe V.", city: "Brașov", quote: "At 63 I thought it was too late. It wasn't." },
  { initials: "ID", name: "Ioana D.", city: "Timișoara", quote: "My morning energy is completely back." },
  { initials: "CB", name: "Cristian B.", city: "Iași", quote: "I don't take sleeping pills any more. I sleep naturally now." },
  { initials: "MT", name: "Maria T.", city: "Constanța", quote: "The fog in my head has gone. I can think clearly again." },
  { initials: "EN", name: "Elena N.", city: "Sibiu", quote: "My husband says I seem like a different person. Calmer, more rested." },
  { initials: "DP", name: "Dan P.", city: "Oradea", quote: "A plan made for me, not advice from the internet." },
];

export const lpSomnBEn: LpSomnBContent = {
  meta: {
    page: {
      title: "Emmanuel CliniX — Restful sleep, without pills | A real case study",
      description:
        "See how a 49-year-old woman who hadn't slept well for 6 years now wakes up rested — no pills, no surgery, no radiation. Apply for BrainMap.",
    },
    application: {
      title: "Apply for BrainMap — Emmanuel CliniX",
      description: "Fill in your application for the BrainMap assessment. We only work with people who are a good fit and committed.",
    },
    thankYou: {
      title: "We've received your application — Emmanuel CliniX",
      description: "Congratulations! We've received your BrainMap application. Here's what happens next.",
    },
  },
  progress: {
    stepOf: "Step {n} of 3",
    labels: ["Case study", "Application", "Confirmation"],
    aria: "Progress",
  },
  legal:
    "BrainMap is an initial assessment tool and is not a medical diagnosis. Results may vary from person to person. For severe symptoms, we recommend seeing a medical specialist.",
  cta: {
    apply: "Apply for BrainMap",
    applyArrow: "Apply for BrainMap →",
  },

  page: {
    hero: {
      eyebrow: "A real case study · Insomnia",
      titleBefore: "Sleep deeply again and wake up ",
      titleEm: "full of energy",
      titleAfter: "",
      subLine: "No pills. No surgery. No radiation.",
      subStrong: "See how a 49-year-old woman did it",
      subRest: " after 6 years without a good night's sleep.",
      videoTag: "Case study · Emmanuel CliniX",
      videoLen: "Her story · 7 min",
      videoNote: "7 minutes. See where she started, what she went through and what her life looks like now.",
      ctaSub: "Limited places every month · Applying is free",
      stats: [
        { num: "6 years", label: "of insomnia, resolved" },
        { num: "2 weeks", label: "to the first good nights" },
        { num: "No", label: "sleeping pills" },
      ],
    },
    whatWeDo: {
      kicker: "This is what we do",
      title: "We don't give you another pill. We find the real cause.",
      text: "Insomnia doesn't come \"out of nowhere\". Most of the time, the cause lies in the way your brain works at night. BrainMap shows us exactly where the imbalance is — and only then do we make a plan just for you.",
      benefits: [
        "Fall asleep more easily at night",
        "Wake up less often during the night",
        "Mornings with energy, not fog",
        "A clear mind all day",
        "A calmer mood",
        "Control over your sleep, not luck",
      ],
    },
    story: {
      kicker: "Her story, in short",
      title: "She tried everything for 6 years. Nothing lasted.",
      lead: "At 49, after an infection that left its mark, she could no longer sleep. Sleepless nights, a foggy mind, constant exhaustion.",
      text: "She went from one specialist to the next. She tried diets. She tried meditation, drips, appointment after appointment. Each one told her something different. None of them told her why. She had come to accept that \"this is how it will stay\".",
      beforeTag: "Before",
      before: [
        "Whole nights without sleep",
        "Brain fog, no concentration",
        "Exhausted from the first hour of the day",
        "On edge over every little thing",
        "Couldn't work the way she used to",
      ],
      afterTag: "After 2 weeks",
      after: [
        "Sleeps and wakes up rested",
        "The brain fog has gone",
        "Energy and enthusiasm again",
        "Calm and emotionally steady",
        "Has started new projects. She's writing a book.",
      ],
      closing: "For the first time in 6 years, she feels like herself.",
    },
    brainmap: {
      kicker: "What BrainMap is",
      title: "A clear map of your brain. In 20 minutes.",
      text: "No pain. No needles. No radiation. Just a reading of your brain's activity, so we can see why you're not sleeping — and what can be done.",
      steps: [
        { title: "You apply", text: "Tell us briefly about your sleep. It takes 3 minutes." },
        { title: "BrainMap assessment", text: "We read your brain's activity. 20 minutes, at the clinic." },
        { title: "One-to-one discussion", text: "We show you what we found, in plain words." },
        { title: "Personal plan", text: "Clear steps, made for your case. Nothing generic." },
      ],
      ctaSub: "Applying takes 3 minutes and commits you to nothing.",
    },
    proof: {
      kicker: "She's not the only one",
      title: "What people who've been through it say",
      videos: VIDEOS,
      reviews: REVIEWS_PAGE,
    },
    notFor: {
      kicker: "To be honest with you",
      title: "Who BrainMap is NOT for",
      items: [
        "Don't apply if you're only after a prescription for sleeping pills — we don't prescribe treatment without an assessment.",
        "Don't apply if you can't come in for a 20-minute assessment at our clinic in Bucharest.",
        "Don't apply if you're not willing to follow a plan for at least 4–6 weeks — real change takes time.",
        "Don't apply if you only want an opinion and don't plan to act on it.",
        "Don't apply if the cost of the assessment is a problem right now — better to wait for the right moment.",
      ],
    },
    faq: {
      kicker: "Frequently asked questions",
      title: "You may be wondering this too",
      items: [
        {
          q: "I don't have an insomnia diagnosis. Is this for me?",
          a: "Yes. Most people who apply don't have one. That's exactly why we do the assessment — to find the cause.",
        },
        { q: "Will you give me sleeping pills?", a: "Our aim is not to keep you on pills. We find the cause and work on it." },
        {
          q: "I'm older. Is there any point?",
          a: "Yes. Age is no barrier. We work with people of all ages and the results come just the same.",
        },
        { q: "Is it painful or dangerous?", a: "No. The BrainMap assessment is painless, with no needles and no radiation." },
        {
          q: "How long before I see a change?",
          a: "For many people, the first changes appear within 1–2 weeks. Every case is different, and we'll tell you honestly what to expect.",
        },
      ],
      ctaSub: "Limited places every month.",
    },
  },

  application: {
    intro: {
      kicker: "The last step before your assessment",
      title: "Apply for BrainMap",
      text: "Watch the short video below to see what working with us looks like. Then fill in the application — it takes about 3 minutes.",
      videoTag: "How we work together",
      videoLen: "4 min",
    },
    proof: {
      kicker: "Why it's worth finishing your application",
      title: "People like you. Real results.",
      videos: VIDEOS,
      reviews: REVIEWS_APPLICATION,
    },
    formBox: {
      title: "Your application",
      sub: "Answer honestly. It helps us see whether we can truly help you.",
    },
  },

  form: {
    groups: [
      "1 · Your contact details",
      "2 · Your sleep situation",
      "3 · What this problem has cost you so far",
      "4 · What success looks like for you",
      "5 · Why you're the right person",
    ],
    name: { label: "Full name", placeholder: "e.g. Mary Smith" },
    phone: { label: "Phone number", placeholder: "07xxx xxxxxx" },
    email: { label: "Email address", placeholder: "name@example.com" },
    age: { label: "Age", placeholder: "e.g. 58" },
    choose: "Choose...",
    duration: {
      label: "How long have you had problems with your sleep?",
      options: ["Under 3 months", "3 – 12 months", "1 – 3 years", "3 – 6 years", "Over 6 years"],
    },
    tried: {
      label: "What have you already tried to solve the problem?",
      hint: "Pills, herbal teas, specialists, diets, apps… write down everything that comes to mind.",
      placeholder: "e.g. over-the-counter sleeping pills, two appointments, meditation apps...",
    },
    spentTotal: {
      label: "How much have you spent in total so far trying to solve the problem?",
      options: ["Under 500 RON", "500 – 2,000 RON", "2,000 – 5,000 RON", "5,000 – 10,000 RON", "Over 10,000 RON"],
    },
    spentMonthly: {
      label: "How much do you currently spend each month on this problem?",
      hint: "Pills, treatments, appointments, etc.",
      options: [
        "Almost nothing",
        "Under 200 RON / month",
        "200 – 500 RON / month",
        "500 – 1,000 RON / month",
        "Over 1,000 RON / month",
      ],
    },
    invest: {
      label:
        "If we found the real cause and gave you a plan that works, how much would you be willing to invest to solve the problem for good?",
      options: [
        "I'd rather discuss it on the phone",
        "Up to 3,000 RON",
        "3,000 – 6,000 RON",
        "6,000 – 10,000 RON",
        "Whatever it takes to solve it",
      ],
    },
    success: {
      label: "What result would this service need to give you for you to call it a success?",
      hint: "Be as specific as you can. e.g. \"to sleep 7 hours without waking up\".",
      placeholder: "Write here...",
    },
    nineMonths: {
      label:
        "If we were having this conversation 9 months from now and you looked back — what would need to have happened in that time for you to be happy with your progress?",
      placeholder: "Write here...",
    },
    fitCallout:
      "We only want to work with people who are a 100% good fit and fully committed. That's who we get the best results with — and that's why we choose them carefully.",
    fit: { label: "Why do you think you're a good fit for this service?", placeholder: "Write here..." },
    decision: {
      label: "How determined are you to solve this problem now?",
      hint: "Choose the option that fits you best.",
      options: [
        { value: "acum", label: "I want to solve the problem now, as soon as possible" },
        { value: "viitor", label: "I want to solve the problem at some point, in the near future" },
        { value: "informare", label: "I'm just looking for information, I don't want to solve it now" },
      ],
    },
    errors: {
      name: "Please write your name.",
      phone: "That phone number looks incorrect or incomplete.",
      email: "That email address doesn't look valid.",
      consent: "Please tick the consent box so you can send the form.",
      server: "Something went wrong. Please try again.",
      network: "There was a connection problem. Please try again.",
    },
    submit: "Send my application →",
    sending: "Sending…",
    note: "Your details are confidential and never shared with anyone. We'll reply within 24 hours at most.",
  },

  thankYou: {
    hero: {
      eyebrow: "Application received",
      title: "Congratulations! We've received your application.",
      subLine: "You've taken the first real step towards restful nights.",
      subStrong: "Here's exactly what happens next",
      subRest: " — and what you can do now to get on the shortlist.",
    },
    letter: {
      kicker: "A word from us",
      title: "Why we read every application personally",
      paragraphs: [
        "Hello, and thank you from the bottom of our hearts for having the courage to apply.",
        "We know how it is. You've heard promises before. You've tried things that didn't last. Perhaps part of you is wondering whether it's worth hoping one more time. We understand — and that's why we never see anyone as \"just another case\".",
        "The result you saw in the case study is real. But just as important is who walks this road with you. We want to be sure we can truly help you before we promise you anything. That's why we read every application carefully, ourselves, not with a robot.",
        "If we're a good fit for each other, we'll give you the very best we have. And below, we'll tell you exactly what happens next and what you can do right now.",
      ],
      signName: "The Emmanuel CliniX team",
      signTag: "Longevity · Wellness · Neuro",
    },
    next: {
      kicker: "What happens next",
      title: "The next steps, one by one",
      steps: [
        {
          title: "We review your application (within 24 hours)",
          text: "A specialist on our team reads what you've written and checks whether the BrainMap assessment is right for your situation.",
        },
        {
          title: "We talk on the phone",
          text: "We call you to get to know you, answer your questions and agree together when you'll come in for the assessment. No pressure, no obligation.",
        },
        {
          title: "You have your BrainMap assessment (20 minutes)",
          text: "At the clinic. Painless, no needles, no radiation. At the end you know the real cause and receive a plan made for you.",
        },
      ],
    },
    homework: {
      kicker: "Your homework before we talk",
      title: "Two small but important things",
      text: "People who do this before the call get to results much faster.",
      write: {
        title: "Write down how good sleep would change your life",
        text: "What would you do with the energy you'd gain? With a clear mind? Write it down — it will matter in our conversation.",
      },
      rewatch: {
        title: "Watch the case study again",
        text: "Take another look at the story on the first page. Note down what feels most similar to your own situation.",
      },
      rewatchLink: "→ See more similar case studies",
    },
    call: {
      eyebrow: "Want to move faster?",
      title: "Call us yourself and get on the shortlist",
      text: "Assessment places are limited every month. Whoever calls first is seen first. If you don't call, that's fine — we'll call you within 24 hours.",
      button: "Call now →",
      hours: "Opening hours: Monday–Friday, 09:00–18:00 (Romanian time)",
    },
    trust: ["Application reviewed by a specialist", "No obligation", "Your details kept confidential"],
  },
};
