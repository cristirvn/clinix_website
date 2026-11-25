import type { TherapistsLocale } from "./types";

// PROVISIONAL copy (placeholder) — mirrors `ro.ts`. Final texts, VSLs and
// testimonials come from the clinic.
export const THERAPISTS_EN: TherapistsLocale = {
  ui: {
    serviceName: "Psychotherapy",
    cta: "Book a session with {name}",
    heroMicro: "We call you and agree the day and time together.",
    videoTitle: "See how {name} works",
    testimonials: {
      title: "What patients say",
      lede: "People who have worked with {name}, in their own words.",
      play: "Play testimonial",
      placeholder: "Testimonial coming soon",
    },
    qualify: {
      title: "Is it right for you?",
      fitsTitle: "It is for you if",
      notTitle: "You need something else first if",
    },
    faqTitle: "Frequently asked questions",
    form: {
      title: "Book a session with {name}",
      lede: "Leave us your details. We call you within one working day and arrange the first session together.",
      submit: "I’d like an appointment",
      successTitle: "Thank you. We’ll call you soon.",
      successBody: "We’ll call you within one working day to arrange the first session. If you’d like to talk sooner, call us on",
      callNote: "You pay nothing now.",
    },
    sticky: { sub: "Psychotherapist · we call you", cta: "Book a session" },
    pageNav: { title: "On this page", video: "Video", about: "About", testimonials: "Testimonials", faq: "Questions", book: "Book" },
    legal:
      "The information on this page is for general information only and does not replace a medical consultation. If you are having thoughts of harming yourself, call 112 now.",
    carousel: {
      title: "Choose your psychotherapist",
      lead: "See who each one is and how they work, then book your appointment directly.",
      more: "Read more about {name}",
      prev: "Back",
      next: "Next",
    },
  },
  items: {
    "patricia-cihodaru": {
      slug: "patricia-cihodaru",
      name: "Patricia Cihodaru",
      firstName: "Patricia",
      role: "Psychologist and psychotherapist",
      photo: "/photos/echipa/patricia-cihodaru.webp",
      video: "therapistPatriciaVsl",
      seo: {
        title: "Patricia Cihodaru, psychotherapist in Bucharest",
        description:
          "Psychotherapy with Patricia Cihodaru at Emmanuel CliniX in Bucharest. Over 20 years’ experience with adults, children and teenagers. Book a session.",
      },
      card: {
        short: "Has practised psychotherapy for over 20 years. Works with adults, teenagers and children.",
        focus: ["Experiential psychotherapy", "CBT", "Transpersonal psychotherapy"],
      },
      hero: {
        lede: "Over 20 years of psychotherapy. A safe, caring space where you only say what you want to say, at your own pace.",
        facts: ["Over 20 years’ experience", "Adults, children and teenagers", "Sessions of around 50 minutes", "Everything stays confidential"],
      },
      about: {
        title: "Who Patricia is",
        paragraphs: [
          "Patricia Cihodaru is a psychologist and psychotherapist with over 20 years of psychotherapy. She works with adults, children and teenagers, in a safe and caring setting.",
          "She brings together experiential, cognitive-behavioural and transpersonal methods, and chooses with you what suits you, rather than one recipe for everyone.",
          "At Emmanuel CliniX, sessions can also start from your BrainMap data: if you have had the map, Patricia takes it into account.",
        ],
      },
      helps: {
        title: "What she can help with",
        items: [
          { title: "Anxiety and stress", text: "When the worries won’t stop and your body is always on alert." },
          { title: "Emotions that are hard to manage", text: "When you react more strongly than you would like and don’t know why." },
          { title: "Children and teenagers", text: "When a child is going through a hard time and needs a space of their own." },
          { title: "Times of change", text: "Loss, separation, big decisions: when you need to put things in order." },
        ],
      },
      approach: {
        title: "How Patricia works",
        steps: [
          { title: "The first meeting", text: "You tell her what brings you. Together you agree what you want to change." },
          { title: "The sessions", text: "Usually once a week, at the clinic. You talk as much, and in whatever way, you like." },
          { title: "Between sessions", text: "Sometimes you get small exercises, to put into practice what you discussed." },
          { title: "Taking stock", text: "From time to time you look together at what has changed and what comes next." },
        ],
      },
      qualify: {
        fits: [
          "You feel you can no longer carry what weighs on you alone",
          "You want to understand where your reactions come from",
          "You are looking for an experienced psychotherapist who really listens",
        ],
        notFit: ["You are having thoughts of harming yourself: call 112 now", "You need treatment with medication: we will refer you to our psychiatrist"],
      },
      faq: [
        { q: "Do I need a diagnosis to come?", a: "No." },
        { q: "Does she work with children?", a: "Yes. Patricia works with adults, children and teenagers." },
        { q: "How much does a session cost?", a: "We tell you the price on the phone, before the first session. No hidden costs." },
        { q: "What happens to what I say?", a: "It stays confidential. It is not passed on." },
      ],
    },
    "aniela-sircu": {
      slug: "aniela-sircu",
      name: "Aniela Sîrcu",
      firstName: "Aniela",
      role: "Psychologist and psychotherapist",
      photo: "/photos/echipa/aniela-sircu.webp",
      video: "therapistAnielaVsl",
      seo: {
        title: "Aniela Sîrcu, psychotherapist in Bucharest",
        description:
          "Psychotherapy with Aniela Sîrcu at Emmanuel CliniX in Bucharest: cognitive-behavioural, couple and family therapy. 20 years’ experience. Book a session.",
      },
      card: {
        short: "Has worked with teenagers, adults and couples for 20 years.",
        focus: ["CBT", "Couples and families", "Sexology"],
      },
      hero: {
        lede: "20 years’ experience with teenagers, adults and couples. She works practically, on what you want to change.",
        facts: ["20 years’ experience", "Teenagers, adults and couples", "Sessions of around 50 minutes", "Everything stays confidential"],
      },
      about: {
        title: "Who Aniela is",
        paragraphs: [
          "Aniela Sîrcu is a psychologist trained in cognitive-behavioural psychotherapy, couple and family psychotherapy, and sexology.",
          "She has 20 years’ experience with teenagers, adults and couples. She works practically: together you understand what is happening and practise, step by step, other ways of responding.",
          "At Emmanuel CliniX, sessions can also start from your BrainMap data: if you have had the map, Aniela takes it into account.",
        ],
      },
      helps: {
        title: "What she can help with",
        items: [
          { title: "Anxiety and racing thoughts", text: "When your mind runs on and you can’t switch it off." },
          { title: "Your relationship", text: "When the same arguments keep coming back, or you no longer know how to talk to each other." },
          { title: "Family", text: "When tension at home affects everyone." },
          { title: "Intimacy", text: "When difficulties come up that are hard to talk about with anyone else." },
        ],
      },
      approach: {
        title: "How Aniela works",
        steps: [
          { title: "The first meeting", text: "You tell her what brings you. Together you agree what you want to change." },
          { title: "The sessions", text: "On your own or as a couple, usually once a week, at the clinic." },
          { title: "Between sessions", text: "You get short exercises, to put into practice what you worked on." },
          { title: "Taking stock", text: "From time to time you look together at what has changed and what comes next." },
        ],
      },
      qualify: {
        fits: [
          "You want to work practically, with clear steps",
          "You are going through a hard time as a couple or as a family",
          "You want to talk openly about things that are hard to say elsewhere",
        ],
        notFit: ["You are having thoughts of harming yourself: call 112 now", "You need treatment with medication: we will refer you to our psychiatrist"],
      },
      faq: [
        { q: "Do I need a diagnosis to come?", a: "No." },
        { q: "Can we come as a couple?", a: "Yes. Aniela also works with couples and families." },
        { q: "How much does a session cost?", a: "We tell you the price on the phone, before the first session. No hidden costs." },
        { q: "What happens to what I say?", a: "It stays confidential. It is not passed on." },
      ],
    },
  },
};
