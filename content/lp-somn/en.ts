import type { LpSomnContent } from "./types";

/** English (British) version of the sleep campaign LP. Option `value`s stay identical to Romanian (GHL mapping). */
export const lpSomnEn: LpSomnContent = {
  meta: {
    title: "Can't Sleep? Find the Cause.",
    description:
      "In 20 minutes BrainMap shows you the real cause behind your insomnia — and the plan to sleep properly again.",
  },
  ctaLabel: "Apply for BrainMap →",
  hero: {
    titleStart: "You sleep eight hours and wake up ",
    titleEm: "as if you hadn't slept at all",
    sub: "Your poor sleep shows up on a map of your brain's activity. In one hour you find out exactly where it starts.",
    videoTitle: "VSL · Emmanuel CliniX",
    videoNote:
      "9 minutes. See why nothing you've tried has stuck — and what we measure before we say anything.",
    btnSub: "You fill in a short form. We call you.",
    facts: [
      "30-minute scan",
      "No radiation, no needles",
      "Interpretation at the same visit",
      "No GP referral needed",
    ],
  },
  problem: {
    eyebrow: "Where you are now",
    title: "Do you recognise any of these?",
    cards: [
      { tag: "At night", text: "You lie in bed staring at the ceiling. For hours. Your body is exhausted, but your mind won't stop." },
      { tag: "At 3 a.m.", text: "You fall asleep quickly. Then at three in the morning you're wide awake. Whatever you do, sleep won't come back." },
      { tag: "In the morning", text: "You sleep eight hours and wake up with no energy at all. As if you'd been dragging yourself through the night." },
    ],
    pull: "Three different situations. The same question for everyone: why me?",
  },
  why: {
    eyebrow: "Why nothing has stuck",
    title: "You've tried. And you're still here.",
    first:
      "Herbal teas. Melatonin. The phone out of the bedroom. Breathing apps. A fixed bedtime. Maybe it worked for a week. Maybe not at all.",
    p1: "They were all guesses. General fixes for a problem that isn't general.",
    highlight: "Nobody has shown you, concretely, what is going on.",
    p2: "You get your heart checked. You have blood tests every year. Your brain — never. Yet it decides whether you sleep or not.",
    p3: "It's hard to fix something you've never seen.",
  },
  mechanism: {
    eyebrow: "How it works",
    title: "We don't start from the symptom. We start from a measurement.",
    steps: [
      {
        label: "30 min",
        title: "The scan",
        text: "We fit a cap with sensors. You sit in a chair, fully clothed, with your eyes closed and then open. The sensors read the electrical activity your brain produces anyway, every second. Like a microphone listening to your brain talk.",
      },
      {
        label: "On screen",
        title: "The map of your brain's activity",
        text: "You see which areas are overactive, which are too slow, and exactly where deep sleep is being interrupted. In your case, not in general.",
      },
      {
        label: "Same day",
        title: "Interpretation, on the spot",
        text: "We explain the map in plain words, at the same visit. You leave knowing where you stand and what comes next.",
      },
    ],
    note: "Nothing goes into your body. You're not given anything. No radiation, no needles, no pain. You get up from the chair and carry on with your day exactly as planned.",
  },
  expect: {
    eyebrow: "The process",
    title: "What to expect from us",
    steps: [
      { num: "01", title: "You fill in the form", text: "One minute. Tell us what your nights are like." },
      { num: "02", title: "We call you", text: "We talk about your situation and book your appointment over the phone." },
      { num: "03", title: "You come in for the assessment", text: "One hour at the clinic: scan, interpretation, psychological consultation." },
      { num: "04", title: "You leave with your map", text: "Plus a PDF with your interpretation and recommendations." },
    ],
  },
  benefits: {
    eyebrow: "The result",
    title: "The benefits you'll notice",
    items: [
      "You fall asleep more easily",
      "You wake up less often at night",
      "Steady energy all day",
      "A clear mind, no fog",
      "A more stable mood",
      "Control, not luck",
    ],
  },
  includes: {
    eyebrow: "What the visit includes",
    title: "One hour in total. That's it.",
    items: [
      { bold: "The BrainMap scan.", text: "You sit in a chair for 30 minutes, fully clothed." },
      { bold: "Interpretation of the map, on the spot.", text: "In words you understand, not medical jargon." },
      { bold: "Psychological consultation, at the same visit.", text: "No second appointment." },
      {
        bold: "A PDF by email or WhatsApp.",
        text: "The full interpretation and personalised recommendations you can apply at home, on your own, at no extra cost.",
      },
    ],
    priceLabel: "Everything above, in a single visit",
    price: "1,200 RON",
    note: "The map and the PDF are yours to keep, whatever you decide to do next.",
  },
  results: {
    eyebrow: "Proof",
    title: "The results other people have had",
    videos: [
      { video: "lpSomnTestimonialMihai", name: "Mihai T.", role: "From 4 to 7 hours' sleep" },
      { video: "lpSomnTestimonialSimona", name: "Simona V.", role: "Cause found in 20 min" },
      { video: "lpSomnTestimonialCristian", name: "Cristian B.", role: "Off sleeping pills now" },
    ],
    reviews: [
      {
        quote: "I thought I was doomed to sleepless nights. Now I've slept my first full night in two years.",
        initials: "AM",
        name: "Andreea M.",
        role: "34, Cluj-Napoca",
      },
      {
        quote: "BrainMap explained WHY I wasn't sleeping, not just what to do. A plan for me, not a generic one.",
        initials: "RP",
        name: "Radu P.",
        role: "41, Bucharest",
      },
      {
        quote: "My morning energy has completely changed. My colleagues were the first to tell me I looked different.",
        initials: "ID",
        name: "Ioana D.",
        role: "29, Timișoara",
      },
    ],
    starsLabel: "5 out of 5 stars",
  },
  qualify: {
    eyebrow: "To be honest with you",
    title: "Who BrainMap is for — and who it is NOT for",
    forTitle: "It's for you if",
    forItems: [
      "You can't fall asleep at night, even though you're exhausted",
      "You wake up in the night and can't get back to sleep",
      "You sleep enough but wake up with no energy",
      "You've already tried several things and none of them stuck",
      "You want to see data about you, not general advice",
    ],
    notTitle: "Don't apply if",
    notItems: [
      "You're just looking for a quick prescription",
      "You want a guarantee that everything is solved after one visit",
      "You can't come to a one-hour assessment at our clinic in Bucharest",
      "The cost of the assessment is a problem right now",
    ],
  },
  promise: {
    eyebrow: "Before you apply",
    title: "What we promise — and what we don't",
    rows: [
      {
        bold: "We don't promise that everything is solved after one visit.",
        text: "We promise you'll leave knowing clearly what the problem is and what comes next.",
      },
      {
        bold: "If we see we can't help you, we'll tell you on the phone.",
        text: "Before you pay anything and before you come to the clinic. We don't book people in just for the sake of it.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "FAQ",
    items: [
      { q: "I haven't been diagnosed with insomnia. Is this for me?", a: "Yes. Most applicants haven't been. That's why we do the assessment.", open: true },
      { q: "Will you give me sleeping pills?", a: "No. We find the cause. We don't prescribe pills." },
      { q: "How long does it take in total?", a: "One hour. 30 minutes for the scan, the rest for interpreting the map and the psychological consultation." },
      {
        q: "Does it hurt? Is it dangerous?",
        a: "No. The sensors only read the activity your brain produces anyway. Nothing is administered, nothing goes into your body, there is no radiation and no recovery time.",
      },
      { q: "How long before I see results?", a: "Usually 1–2 weeks." },
      {
        q: "How much does it cost?",
        a: "The assessment costs 1,200 RON and includes the scan, on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you start a programme with us, the full amount is deducted.",
      },
      { q: "Do I need a GP referral?", a: "No." },
      {
        q: "I already take sleep medication. Should I stop it first?",
        a: "Don't stop anything on your own. Discuss it with the doctor who prescribed it. Tell us on the phone what you take, so we can account for it in the interpretation.",
      },
      {
        q: "What do I take home?",
        a: "The map of your brain's activity and a PDF with the full interpretation and personalised recommendations. They're yours to keep.",
      },
      {
        q: "What happens after the scan?",
        a: "We discuss what the map shows and what your options are. You decide. You're under no obligation.",
      },
      {
        q: "How long is the wait for an appointment?",
        a: "It depends on available slots. We'll call you as soon as possible and find a time that suits you together.",
      },
      {
        q: "What happens to my data?",
        a: "It stays confidential. It's used only for your assessment and isn't passed on.",
      },
      { q: "What if I apply and I'm not a fit?", a: "We'll tell you straight. You pay nothing." },
    ],
  },
  apply: {
    title: "Tell us what your nights are like",
    sub: "One minute. A real person from our team replies within 24 hours.",
    note: "Your details are confidential.",
    form: {
      name: { label: "Full name", placeholder: "What should we call you?" },
      age: { label: "Age", placeholder: "e.g. 47" },
      phone: { label: "Phone", placeholder: "So we can book you in" },
      email: { label: "Email", placeholder: "We'll send our written reply here" },
      situatie: {
        label: "What's your situation?",
        placeholder: "Choose the closest option",
        options: [
          { value: "nu-adorm", label: "I can't fall asleep at night" },
          { value: "trezire-noapte", label: "I wake up in the night and can't get back to sleep" },
          { value: "energie-scazuta", label: "I sleep enough but wake up with no energy" },
          { value: "mai-multe", label: "More than one of these" },
        ],
      },
      durata: {
        label: "How long have you been sleeping badly?",
        placeholder: "Choose the closest option",
        options: [
          { value: "cateva-saptamani", label: "For a few weeks" },
          { value: "3-12-luni", label: "For 3 to 12 months" },
          { value: "1-3-ani", label: "For 1 to 3 years" },
          { value: "peste-3-ani", label: "For more than 3 years" },
        ],
      },
      incercat: {
        label: "What have you tried so far?",
        optional: "(optional)",
        placeholder: "Sleeping pills, supplements, doctors, therapy... keep it short. It helps us know where to start.",
      },
      priceNote:
        "The assessment costs 1,200 RON and includes the scan, on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you start a programme with us, the full amount is deducted.",
      priceConfirm: "I have read and agree to this price.",
      consent: "I agree to be contacted about my application.",
      privacyLink: "Privacy policy",
      submit: "Send my application →",
      sending: "Sending…",
      microcopy:
        "A real person from our team replies, not a robot. If we see we're not the right answer for you, we'll tell you straight.",
      errors: {
        name: "Tell us your name, so we know what to call you.",
        ageMissing: "Please tell us your age too. It matters for how we read the assessment.",
        ageInvalid: "Please write your age in numbers.",
        phone: "We need a valid number, otherwise we can't book you in.",
        email: "Please check the address — something seems to be missing.",
        emailImplausible: "Please enter a real email address (not a test one).",
        situatie: "Choose the option that fits best.",
        durata: "Choose how long it has been going on, so we know where to start.",
        pretOk: "You need to confirm you agree with the price before you can send the form.",
        consent: "Without this tick we're not allowed to reply to you.",
        form: "Something went wrong while sending. Please try once more, and if it still doesn't work, email us at contact@emmanuelclinix.ro.",
      },
    },
  },
  legal:
    "BrainMap is an initial assessment tool and does not constitute a medical diagnosis. Results may vary. For severe symptoms, we recommend seeing a medical specialist.",
  thanks: {
    meta: { title: "We've received your application" },
    title: "Got it. Thank you for writing to us.",
    p1: "A member of our team reads your application personally and replies within 24 hours at most. Until then, there's nothing you need to do.",
    p2: "If what you've told us suggests we're not the right answer, we'll tell you that too, straight, and point you in the right direction.",
    contactLead: "If you'd like to ask us anything in the meantime:",
    or: "or",
  },
};
