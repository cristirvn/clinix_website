import type { ServicesLocale } from "./types";

/**
 * Service pages — English. Mirrors `ro.ts` (same slugs, same hrefs).
 * BrainMap wording reused from the approved English copy.
 */
// PROVISIONAL copy — client to confirm (taVNS, tPBM, CES, Psychotherapy: session length,
// who it helps, contraindications, psychotherapy pricing).
export const SERVICES_EN: ServicesLocale = {
  ui: {
    conditionLink: "Read more",
    breadcrumb: "Services",
    testimonials: { eyebrow: "Testimonials", title: "What patients say", play: "Play testimonial" },
  },
  index: {
    seo: {
      title: "Services and equipment",
      description:
        "BrainMap (qEEG), neurofeedback, taVNS, tPBM, CES, psychotherapy, psychiatry and EmSella at Emmanuel CliniX in Bucharest. What each one is, how a session goes and who it helps.",
    },
    hero: {
      eyebrow: "Services",
      title: "Our services.",
      lead: "One principle throughout: we measure before we recommend.",
    },
    more: "What it includes",
    cardLink: "Find out more →",
    cta: {
      title: "The first step is to see the map of your brain",
      text: "The scan, the interpretation and the psychological consultation, all in a single visit of about an hour.",
      primary: { label: "Book a BrainMap →", href: "/brainmap" },
      secondary: { label: "Or take a free test", href: "/chestionare" },
    },
  },
  items: {
    brainmap: {
      slug: "brainmap",
      schemaType: "DiagnosticProcedure",
      seo: {
        title: "BrainMap (qEEG) — a map of your brain activity",
        description:
          "BrainMap is a map of your brain's electrical activity (qEEG). 30 minutes, fully clothed, no radiation and no needles. Interpreted in the same visit, in Bucharest.",
      },
      card: {
        name: "BrainMap · qEEG",
        short: "A map of your brain’s activity. 30 minutes, no radiation, no needles.",
      },
      hero: {
        eyebrow: "BrainMap · qEEG",
        title: "A map of your brain’s activity",
        lead: "See what is really happening in your brain. Then you decide what to do next.",
        videoTitle: "How BrainMap works",
      },
      video: "serviceBrainmap",
      what: {
        eyebrow: "What it is",
        title: "What happens in those 30 minutes",
        paragraphs: [
          "We put a cap with sensors on your head. You sit in a chair, first with your eyes closed, then with them open. The sensors only listen to what the brain is doing, much as a microphone would.",
          "The map shows the areas that work too hard and the ones that work too slowly. The whole plan starts from here.",
        ],
      },
      session: {
        eyebrow: "How the visit goes",
        title: "It all takes about an hour",
        steps: [
          { title: "The BrainMap scan", text: "About 30 minutes. You stay fully clothed." },
          { title: "Interpretation of the map, on the spot", text: "We explain the map in plain words, with no medical jargon." },
          { title: "Psychological consultation, in the same visit", text: "You don’t have to come back for it." },
          {
            title: "PDF by email or WhatsApp",
            text: "You get the interpretation and recommendations you can put into practice at home.",
          },
        ],
        facts: ["A 30-minute scan", "No radiation, no needles", "Interpreted in the same visit", "No referral needed"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "When a BrainMap is worth doing",
        conditions: ["anxietate", "panica", "somn", "burnout", "focus", "dispozitie", "migrene", "stres", "adictii"],
        note: "BrainMap is an initial assessment. It is not a substitute for a medical diagnosis.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "There is no radiation, no needles and it doesn’t hurt.",
          "Nothing enters your body and you are given no medication.",
          "The sensors only read the brain’s activity. They send no signal into it.",
          "You get up from the chair and carry on with your day exactly as planned.",
        ],
        notTitle: "What to tell us beforehand",
        notFor: ["Tell us what medication you take, so we can take it into account when we read the map."],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Do I need a referral from my GP?", a: "No. You can book directly." },
          {
            q: "I already take medication. Should I stop it first?",
            a: "Don't stop anything on your own. Talk first to the doctor who prescribed it. Let us know on the phone what you take, so we can take it into account when we read the map.",
          },
          {
            q: "What happens after the scan?",
            a: "We look at the map together and tell you what your options are. You decide whether to go further, with no obligation.",
          },
          {
            q: "How much does it cost?",
            a: "1,200 RON. It includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you go further with us, we deduct the full amount from the programme.",
          },
          {
            q: "What happens to my data?",
            a: "It stays confidential. We use it only for your assessment and don’t share it with anyone.",
          },
        ],
      },
      cta: {
        title: "The first step is to see the map of your brain",
        text: "The scan, the interpretation and the psychological consultation, all in a single visit of about an hour.",
        primary: { label: "Book a BrainMap →", href: "/brainmap" },
        secondary: { label: "Or take a free test", href: "/chestionare" },
      },
    },

    tavns: {
      slug: "tavns",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "taVNS — vagus nerve stimulation through the ear",
        description:
          "taVNS is gentle stimulation of the vagus nerve through a small electrode on the ear. Non-invasive, no needles, no medication. How a session goes and who it may help.",
      },
      card: {
        name: "taVNS",
        short: "Gentle stimulation of the vagus nerve, through a small clip on the ear.",
      },
      hero: {
        eyebrow: "taVNS · vagus nerve stimulation via the ear",
        title: "A gentle signal for the vagus nerve",
        lead: "A small clip on the ear that can help the body come out of alert mode and calm down.",
        videoTitle: "What a taVNS session looks like",
      },
      video: "serviceTavns",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "A branch of the vagus nerve runs just under the skin of the ear. That is where we place a small electrode, clipped on, which sends very weak pulses. It doesn’t prick and nothing enters your body.",
          "The vagus nerve is the one that helps the body calm down. We use taVNS as support, within a plan based on your assessment, and tell you from the start what you can expect from it.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax, and the device does the work",
        steps: [
          {
            title: "We talk first",
            text: "You tell us what medication you take and about any health problems. Together we check whether taVNS suits you.",
          },
          {
            title: "The ear clip",
            text: "You sit in an armchair, fully clothed. We clip the electrode to your ear and set the intensity together, until it feels comfortable.",
          },
          {
            title: "The session",
            text: "You feel a light tingling, or even nothing at all. You can close your eyes or listen to music.",
          },
          {
            title: "Afterwards",
            text: "You go straight back to what you were doing. We note how you felt, so we can follow your progress.",
          },
        ],
        facts: ["About 20–30 minutes", "You stay fully clothed", "No needles, no medication", "No need for a break afterwards"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it can help",
        conditions: ["anxietate", "panica", "stres", "somn", "burnout", "migrene"],
        note: "After the assessment we’ll tell you honestly whether taVNS suits you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "It is non-invasive. Nothing enters your body.",
          "The pulses are very weak and we set them together with you.",
          "Side effects are rare and pass quickly. You may get mild skin irritation, some dizziness or a headache.",
          "You can stop the session at any time.",
        ],
        notTitle: "We don’t offer taVNS if",
        notFor: [
          "You have a pacemaker or another electronic implant",
          "You are pregnant",
          "You have epilepsy or have had seizures, without your doctor’s approval",
          "You have cuts or irritation on the ear",
        ],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Does it hurt?", a: "No. Most people feel only a light tingling. If you find it unpleasant, we turn the intensity down." },
          {
            q: "How many sessions will I need?",
            a: "It varies from person to person. After the assessment we tell you which plan suits you and how we track your progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don't stop any medication on your own. Talk to the doctor who prescribed it.",
          },
          {
            q: "Do I need a BrainMap first?",
            a: "We recommend it, so we start from what your map shows.",
          },
        ],
      },
      cta: {
        title: "Want to know if taVNS is right for you?",
        text: "Leave your number and we’ll call you. We’ll tell you honestly whether we can help.",
        primary: { label: "Request a call back →", href: "/contact" },
        secondary: { label: "Or take a free test", href: "/chestionare" },
      },
    },

    tpbm: {
      slug: "tpbm",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "tPBM — transcranial photobiomodulation",
        description:
          "tPBM uses near-infrared light applied to the head. Non-invasive, no ionising radiation, no needles. How a session goes and who it may help.",
      },
      card: {
        name: "tPBM",
        short: "Near-infrared light applied to the head. No ionising radiation.",
      },
      hero: {
        eyebrow: "tPBM · transcranial photobiomodulation",
        title: "Infrared light for the brain",
        lead: "You wear a headset that gives off infrared light. It doesn’t hurt, there are no needles and it uses no radiation of the kind used in X-rays.",
        videoTitle: "What a tPBM session looks like",
      },
      video: "serviceTpbm",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "Infrared light passes through the skin and bone to the surface of the brain. Studies so far show it may support the way cells produce their energy.",
          "It is a method that is still being studied, so we only recommend it when your assessment shows it could help you.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax, and the light does the work",
        steps: [
          {
            title: "We talk first",
            text: "You tell us what medication you take. Some make the skin more sensitive to light, and we need to know beforehand.",
          },
          {
            title: "The headset",
            text: "You sit in an armchair, fully clothed, and we put the headset on your head.",
          },
          {
            title: "The session",
            text: "You may feel a slight warmth, or nothing at all. It is quiet and it doesn’t hurt.",
          },
          {
            title: "Afterwards",
            text: "You go straight back to what you were doing. Together we follow what changes from one session to the next.",
          },
        ],
        facts: ["About 20 minutes", "You stay fully clothed", "Just light, no ionising radiation", "No need for a break afterwards"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it can help",
        conditions: ["focus", "dispozitie", "burnout"],
        note: "After the assessment we’ll tell you honestly whether tPBM suits you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "It is non-invasive. The light passes through the skin and nothing enters your body.",
          "It uses no ionising radiation, like the kind used in X-rays or CT scans.",
          "You may feel a slight warmth, which passes straight away.",
          "You don’t look directly into the light. The headset sits on your head, above your eyes.",
        ],
        notTitle: "We don’t offer tPBM if",
        notFor: [
          "You take medication that makes you sensitive to light",
          "You are pregnant",
          "You have active cancer, without your doctor’s approval",
          "You have an active skin condition on the head",
        ],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Will I feel anything?", a: "Most people feel only a slight warmth, or even nothing at all." },
          {
            q: "Is the light bad for my eyes?",
            a: "You don't look directly into the light, and the headset sits on your head, above your eyes. We show you exactly how to sit.",
          },
          {
            q: "How many sessions will I need?",
            a: "It varies from person to person. After the assessment we tell you which plan suits you and how we track your progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don't stop any medication on your own. Talk to the doctor who prescribed it.",
          },
        ],
      },
      cta: {
        title: "Want to know if tPBM is right for you?",
        text: "Leave your number and we’ll call you. We’ll tell you honestly whether we can help.",
        primary: { label: "Request a call back →", href: "/contact" },
        secondary: { label: "Or take the focus test", href: "/chestionare/focus" },
      },
    },

    ces: {
      slug: "ces",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "CES — cranial electrotherapy stimulation",
        description:
          "CES (cranial electrotherapy stimulation) uses a very weak current through small clips on the ears. Non-invasive, no needles, no medication. How a session goes and who it may help.",
      },
      card: {
        name: "CES",
        short: "A very weak current, through clips on the ears, that helps the brain settle.",
      },
      hero: {
        eyebrow: "CES · cranial electrotherapy stimulation",
        title: "Very fine pulses, for more calm",
        lead: "Two small clips on your earlobes. You relax, and the device does the rest.",
        videoTitle: "What a CES session looks like",
      },
      video: "serviceCes",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "The device sends very weak electrical pulses, measured in microamps, through two clips on your earlobes. The method has been used for decades as support for anxiety, sleep and stress.",
          "It works alongside what your doctor has recommended, without replacing anything. We only use it if your assessment shows it suits you.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax, and the device does the work",
        steps: [
          {
            title: "We talk first",
            text: "You tell us what medication you take and about any health problems. Together we check whether CES suits you.",
          },
          {
            title: "The clips",
            text: "You sit in an armchair, fully clothed. We clip one to each earlobe.",
          },
          {
            title: "The session",
            text: "Most people feel nothing or just a light tingling. Some relax so much they get sleepy.",
          },
          {
            title: "Afterwards",
            text: "You go straight back to what you were doing. If you feel sleepy, wait a few more minutes before you get behind the wheel.",
          },
        ],
        facts: ["About 20–40 minutes", "You stay fully clothed", "No needles, no medication", "Intensity set together with you"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it can help",
        conditions: ["anxietate", "somn", "stres"],
        note: "After the assessment we’ll tell you honestly whether CES suits you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "It is non-invasive. Nothing enters your body.",
          "The pulses are very weak, measured in microamps.",
          "Side effects are rare and pass quickly. You may get mild dizziness, a headache or skin irritation at the ear.",
          "You can stop the session at any time.",
        ],
        notTitle: "We don’t offer CES if",
        notFor: [
          "You have a pacemaker or another electronic implant",
          "You are pregnant",
          "You have epilepsy or have had seizures, without your doctor’s approval",
        ],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Does it hurt?", a: "No. Most people feel nothing or just a light tingling." },
          {
            q: "Can I drive afterwards?",
            a: "Yes. If you feel sleepy, wait a few more minutes at the clinic before you leave.",
          },
          {
            q: "How many sessions will I need?",
            a: "It varies from person to person. After the assessment we tell you which plan suits you and how we track your progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don't stop any medication on your own. Talk to the doctor who prescribed it.",
          },
        ],
      },
      cta: {
        title: "Want to know if CES is right for you?",
        text: "Leave your number and we’ll call you. We’ll tell you honestly whether we can help.",
        primary: { label: "Request a call back →", href: "/contact" },
        secondary: { label: "Or take the anxiety test", href: "/chestionare/anxietate" },
      },
    },

    psihoterapie: {
      slug: "psihoterapie",
      schemaType: "PsychologicalTreatment",
      seo: {
        title: "Psychotherapy in Bucharest",
        description:
          "Psychotherapy at Emmanuel CliniX in Bucharest: regular sessions with a psychotherapist, confidential, at your own pace. You can also start from your BrainMap data.",
      },
      card: {
        name: "Psychotherapy",
        short: "Regular sessions with a psychotherapist at the clinic. Confidential, at your own pace.",
      },
      hero: {
        eyebrow: "Psychotherapy",
        title: "A place where you can talk in peace",
        lead: "You see a psychotherapist regularly, at your own pace. Everything you say stays between the two of you.",
        videoTitle: "How psychotherapy works at Emmanuel CliniX",
      },
      video: "servicePsihoterapie",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "You talk about what weighs on you. Together you try to understand where it comes from and practise other ways of responding.",
          "If you have had a BrainMap, the psychotherapist also takes into account what your map shows.",
        ],
      },
      session: {
        eyebrow: "How it goes",
        title: "Step by step, at your own pace",
        steps: [
          { title: "The first meeting", text: "You tell us what brought you to us and together we agree what you would like to change." },
          { title: "The sessions", text: "Usually once a week, at the clinic. You talk as much as you like, in whatever way you like." },
          { title: "Between sessions", text: "Sometimes you get small exercises, to put into practice what you discussed." },
          { title: "Taking stock", text: "From time to time you look together at what has changed and what comes next." },
        ],
        facts: ["Sessions of about 50 minutes", "Everything stays confidential", "No referral needed", "You set the pace"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it can help",
        conditions: ["anxietate", "panica", "dispozitie", "stres", "burnout", "adictii"],
        note: "When medication is needed, psychotherapy works alongside medical care, without replacing it.",
      },
      safety: {
        eyebrow: "Good to know",
        title: "Is it for me?",
        points: [
          "Everything stays between you and your psychotherapist.",
          "Nobody judges you. You only say what you want to say.",
          "You can ask at any time how we work and why.",
          "You can change the pace or stop at any time.",
        ],
        notTitle: "When you need something else first",
        notFor: [
          "If you are having thoughts of harming yourself, call 112 now",
          "If you need medication, we will refer you to a psychiatrist",
        ],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Do I need a diagnosis to come?", a: "No. You can come simply because you feel something isn’t going the way you’d like." },
          {
            q: "How long does psychotherapy last?",
            a: "It depends on what you want to change. Some come for a few months, others for longer. We talk openly about this from the start.",
          },
          {
            q: "How much does a session cost?",
            a: "We tell you the price on the phone, before the first session, and no other costs appear along the way.",
          },
          { q: "What happens to what I say?", a: "It stays confidential and doesn’t reach anyone else." },
        ],
      },
      cta: {
        title: "Shall we talk?",
        text: "Leave your number and we’ll call you. We’ll listen and find the first step together.",
        primary: { label: "Request a call back →", href: "/contact" },
        secondary: { label: "Or take a free test", href: "/chestionare" },
      },
    },

    // PROVISIONAL copy (placeholder) — the clinic sends the final text and the video.
    psihiatrie: {
      slug: "psihiatrie",
      schemaType: "MedicalTherapy",
      seo: {
        title: "Psychiatry in Bucharest",
        description:
          "Psychiatric consultation at Emmanuel CliniX in Bucharest: assessment, diagnosis and a treatment plan with a consultant psychiatrist. You can also start from your BrainMap data.",
      },
      card: {
        name: "Psychiatry",
        short: "A consultation with a psychiatrist: assessment, diagnosis and a treatment plan.",
      },
      hero: {
        eyebrow: "Psychiatry",
        title: "A doctor who hears you out",
        lead: "A consultation with a consultant psychiatrist who takes the time to understand what is happening to you and tells you clearly what your options are.",
        videoTitle: "How a psychiatric consultation works at Emmanuel CliniX",
      },
      video: "servicePsihiatrie",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "The doctor asks what you feel, for how long, and how much it gets in the way of your daily life. Then they explain what it means and what you can do.",
          "If medication is needed, they recommend it and follow you over time. If you have had a BrainMap, the doctor also takes the map into account, and the consultation can be combined with psychotherapy.",
        ],
      },
      session: {
        eyebrow: "How it goes",
        title: "Step by step, explained clearly",
        steps: [
          { title: "The consultation", text: "You tell us what brought you to us. The doctor asks what they need to know and hears you out." },
          { title: "The assessment", text: "You get a conclusion explained in plain words, with no medical jargon." },
          { title: "The plan", text: "You go through the options and decide together what comes next." },
          { title: "Follow-ups", text: "You come back for follow-ups, to see what has changed and adjust the plan." },
        ],
        facts: [
          "A consultation with a consultant psychiatrist",
          "Everything stays confidential",
          "No referral needed",
          "Can be combined with psychotherapy",
        ],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it can help",
        conditions: ["anxietate", "panica", "dispozitie", "somn", "focus", "adictii"],
        note: "In an emergency, call 112. A psychiatric consultation is no substitute for emergency services.",
      },
      safety: {
        eyebrow: "Good to know",
        title: "Is it for me?",
        points: [
          "Everything stays between you and the doctor.",
          "Nobody judges you. You only say what you want to say.",
          "You don’t take any medication without understanding why.",
          "You can ask at any time what a diagnosis or a recommendation means.",
        ],
        notTitle: "When you need something else first",
        notFor: ["If you are having thoughts of harming yourself, call 112 now", "If you are in an acute crisis, go to the nearest emergency department"],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Do I need a referral to come?", a: "No. You can book directly." },
          {
            q: "Will I automatically be given medication?",
            a: "No. The doctor only recommends medication if it is needed, and only after explaining why.",
          },
          {
            q: "How much does a consultation cost?",
            a: "We tell you the price on the phone, before the consultation, and no other costs appear along the way.",
          },
          { q: "What happens to what I say?", a: "It stays confidential and doesn’t reach anyone else." },
        ],
      },
      cta: {
        title: "Would you like a psychiatric consultation?",
        text: "Leave your number and we’ll call you, so we can book an appointment together.",
        primary: { label: "Request a call back →", href: "/contact" },
        secondary: { label: "Or take a free test", href: "/chestionare" },
      },
    },

    neurofeedback: {
      slug: "neurofeedback",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "Neurofeedback — the brain learns to regulate itself",
        description:
          "Neurofeedback at Emmanuel CliniX in Bucharest. A protocol built on your BrainMap. Painless 30–45 minute sessions, no medication.",
      },
      card: {
        name: "Neurofeedback",
        short: "Session by session, the brain learns a steadier rhythm.",
      },
      hero: {
        eyebrow: "Neurofeedback",
        title: "The brain learns to regulate itself",
        lead: "Non-invasive training for the brain, starting from your map.",
        videoTitle: "How neurofeedback works",
      },
      video: "serviceNeurofeedback",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "We start from your map, so we know exactly where we are starting from. Then, session by session, the brain gets feedback and learns to regulate itself.",
          "The aim is for the brain, over time, to find a steadier rhythm on its own.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax, and your brain does the work",
        steps: [
          {
            title: "BrainMap first",
            text: "The map shows which areas work too hard and which work too slowly. Your plan starts from it.",
          },
          {
            title: "Sensors on your head",
            text: "You sit in the chair, fully clothed. The sensors only read the brain’s activity and send no signal into it.",
          },
          {
            title: "The session",
            text: "You sit back in the chair. You feel nothing during the session.",
          },
          {
            title: "We measure again",
            text: "We redo the map along the way, so you can see what has changed from one stage to the next.",
          },
        ],
        facts: [
          "Sessions of 30–45 minutes",
          "It doesn’t hurt, no medication",
          "A plan that starts from your map",
          "Straight back to work",
        ],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it can help",
        conditions: ["anxietate", "panica", "somn", "focus", "stres", "burnout", "dispozitie"],
        note: "After your BrainMap we tell you honestly whether neurofeedback suits you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "It is non-invasive. Nothing enters your body.",
          "The sensors only read the brain’s activity. They send no signal into it.",
          "You are given no medication and it doesn’t hurt.",
          "After each session you can go straight back to work.",
        ],
        notTitle: "Tell us beforehand",
        notFor: ["Tell us what medication you take and about any health problems you have."],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Does it hurt?", a: "No. You sit back in the chair and feel nothing for the whole session." },
          {
            q: "Do I need a BrainMap first?",
            a: "Yes. The map shows us where you are starting from and helps us follow how you progress.",
          },
          {
            q: "How many sessions will I need?",
            a: "It varies from person to person. After your BrainMap we tell you which plan suits you and how we track your progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don’t stop any medication on your own. Talk to the doctor who prescribed it.",
          },
          { q: "Do I need a referral from my GP?", a: "No. You can book directly." },
        ],
      },
      cta: {
        title: "The first step is to see the map of your brain",
        text: "The scan, the interpretation and the psychological consultation, all in a single visit of about an hour.",
        primary: { label: "Book a BrainMap →", href: "/brainmap" },
        secondary: { label: "Or take a free test", href: "/chestionare" },
      },
    },

    emsella: {
      slug: "emsella",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "EmSella — pelvic floor strengthening, in a chair",
        description:
          "EmSella strengthens the pelvic floor in 28 minutes in a chair, fully clothed — no needles, no recovery time. For leaks when you cough or lift, sudden urgency and waking at night. In Bucharest.",
      },
      card: {
        name: "EmSella",
        short: "Strengthens the pelvic floor. 28 minutes in a chair, fully clothed.",
      },
      hero: {
        eyebrow: "EmSella · pelvic floor",
        title: "You sit on the chair, and the chair does the training",
        lead: "Leaking urine often comes from a weakened muscle: the pelvic floor. And a muscle can be trained. You sit in the chair for 28 minutes, fully clothed.",
        videoTitle: "How the EmSella chair works",
      },
      video: "serviceEmsella",
      what: {
        eyebrow: "What it is",
        title: "Most of the time, a muscle is to blame",
        paragraphs: [
          "EmSella strengthens the pelvic floor muscles. An electromagnetic field contracts them strongly, including the deep fibres you can’t work on your own.",
          "It’s for people who leak urine when they exert themselves, suddenly need the toilet or wake up in the night because of it. It suits women and men alike.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "How a session goes",
        steps: [
          {
            title: "You sit on the chair",
            text: "You stay fully clothed. You don’t undress, nobody touches you and nothing enters your body.",
          },
          {
            title: "The chair works the muscle",
            text: "The chair creates an electromagnetic field that reaches straight to the pelvic floor and makes the muscles contract strongly.",
          },
          {
            title: "You feel whether the muscle responds",
            text: "You feel the contractions from the very first session, right there in the chair.",
          },
          {
            title: "You carry on with your day",
            text: "You don’t need a break. You can drive, go to work and get on with your day.",
          },
        ],
        facts: [
          "A session lasts 28 minutes",
          "You don’t undress, nobody touches you",
          "No needles, no anaesthetic, no radiation",
          "No need for a break afterwards",
        ],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "It’s for you if",
        lead: "You leak urine when you sneeze, cough, laugh or lift something heavy. The urge comes suddenly and you barely make it to the loo. You wake two or three times a night to go to the toilet.",
        conditions: ["planseu-pelvin"],
        note: "Before booking, we check over the phone whether you have any contraindications.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "It doesn’t hurt. You feel the contractions strongly, but they don’t hurt.",
          "We set the intensity for each person individually.",
          "No needles, no anaesthetic, no radiation.",
          "No need for a break afterwards.",
        ],
        notTitle: "You cannot have EmSella if",
        notFor: ["You are pregnant", "You have a pacemaker", "You have metal implants in the pelvic area", "You have a copper coil (IUD)"],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "How long does a session last?", a: "28 minutes, with no extra preparation time before or after." },
          {
            q: "How much does it cost?",
            a: "250 RON for one session. The 5-session package costs 1,150 RON, and the 10-session one 2,000 RON. You don’t have to buy a package straight away.",
          },
          { q: "Do I have to undress?", a: "No. You sit on the chair fully clothed and no one touches you." },
          {
            q: "How many sessions will I need?",
            a: "We recommend at least 10. It is training for a muscle, and a muscle gets stronger over time.",
          },
          { q: "Is it for men too?", a: "Yes. The pelvic floor weakens in men too, especially after prostate surgery." },
          { q: "Do I need a referral from my GP?", a: "No. You can book directly." },
        ],
      },
      cta: {
        title: "The first step is a short form, the rest you feel in the chair",
        text: "You fill in the form and we call you.",
        primary: { label: "Book an EmSella session →", href: "/lp/emsella" },
        secondary: { label: "Or call us", href: "/contact" },
      },
    },
  },
};
