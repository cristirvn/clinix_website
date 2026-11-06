import type { ServicesLocale } from "./types";

/**
 * Service pages — English. Mirrors `ro.ts` (same slugs, same hrefs).
 * BrainMap wording reused from the approved English copy.
 */
// PROVISIONAL copy — client to confirm (taVNS, tPBM, CES, Psychotherapy: session length,
// who it helps, contraindications, psychotherapy pricing).
export const SERVICES_EN: ServicesLocale = {
  ui: {
    conditionLink: "See the condition →",
    breadcrumb: "Services",
  },
  index: {
    seo: {
      title: "Services and equipment",
      description:
        "BrainMap (qEEG), taVNS, tPBM, CES and psychotherapy at Emmanuel CliniX in Bucharest. What each one is, how a session goes and who it helps.",
    },
    hero: {
      eyebrow: "Services",
      title: "Our services.",
      lead: "One principle throughout: we measure before we recommend.",
    },
    more: "What it includes",
    cardLink: "Find out more →",
    elsewhere: {
      text: "Neurofeedback and EmSella are explained, with video, on the How it works page.",
      link: { label: "How it works →", href: "/cum-functioneaza" },
    },
    cta: {
      title: "First step: see the map of your brain.",
      text: "Scan, interpretation and psychological consultation. One hour, in Bucharest.",
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
        lead: "See what is really happening in your brain — then decide.",
        videoTitle: "How BrainMap works",
      },
      video: "serviceBrainmap",
      what: {
        eyebrow: "What it is",
        title: "First we measure. Then we recommend.",
        paragraphs: [
          "We fit a cap with sensors. You sit in a chair with your eyes closed, then open. The sensors only listen to your brain’s activity, like a microphone.",
          "On the map we see areas that are too active and areas that are too slow, and compare them with the normal values for your age.",
        ],
      },
      session: {
        eyebrow: "How the visit goes",
        title: "One hour in total. That’s it.",
        steps: [
          { title: "The BrainMap scan", text: "30 minutes, fully clothed." },
          { title: "Interpretation of the map, on the spot", text: "In words you understand, not medical jargon." },
          { title: "Psychological consultation, in the same visit", text: "No second appointment." },
          {
            title: "PDF by email or WhatsApp",
            text: "The full interpretation and recommendations you can apply at home.",
          },
        ],
        facts: ["A 30-minute scan", "No radiation, no needles", "Interpreted in the same visit", "No GP referral needed"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it helps",
        lead: "Sleep, stress, focus and mood all show up on a map of your brain activity.",
        conditions: ["anxietate", "panica", "somn", "burnout", "focus", "dispozitie", "migrene", "stres", "adictii"],
        note: "BrainMap is an initial assessment tool and is not a medical diagnosis.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "No radiation, no needles, no pain.",
          "Nothing enters your body. Nothing is administered.",
          "The sensors only read brain activity; they send nothing into it.",
          "You get up from the chair and carry on with your day exactly as planned.",
        ],
        notTitle: "What to tell us beforehand",
        notFor: ["Which medication you take, so we can account for it in the interpretation."],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Do I need a referral from my GP?", a: "No." },
          {
            q: "I already take medication. Should I stop it first?",
            a: "Don't stop anything on your own. Talk to the doctor who prescribed it. Tell us on the phone what you take, so we can account for it in the interpretation.",
          },
          {
            q: "What happens after the scan?",
            a: "We go through what the map shows and what your options are from there. You decide. You're under no obligation.",
          },
          {
            q: "How much does it cost?",
            a: "A BrainMap costs 1,200 RON and includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations.",
          },
          {
            q: "What happens to my data?",
            a: "It stays confidential. It is used only for your assessment and is not passed on.",
          },
        ],
      },
      cta: {
        title: "First step: see the map of your brain.",
        text: "Scan, interpretation and psychological consultation. One hour, in Bucharest.",
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
        title: "A gentle signal to the vagus nerve.",
        lead: "It helps the body switch from ‘alert’ to ‘rest’. Through a small clip on the ear.",
        videoTitle: "What a taVNS session looks like",
      },
      video: "serviceTavns",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "A branch of the vagus nerve runs just under the skin of the ear. That is where we place a small electrode, like a clip, which sends very weak pulses. Nothing pricks, nothing enters your body.",
          "The vagus nerve helps the body calm down. It is not a miracle treatment and we don’t promise a cure: we use it as support, within a plan based on your assessment.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax. The device does the work.",
        steps: [
          {
            title: "We talk first",
            text: "You tell us what medication you take and about any health problems. Together we check whether taVNS is right for you.",
          },
          {
            title: "The ear clip",
            text: "You sit in an armchair, fully clothed. We place the electrode on your ear and set the intensity together with you.",
          },
          {
            title: "The session",
            text: "You feel a light tingling, or nothing at all. You can close your eyes or listen to music.",
          },
          {
            title: "Afterwards",
            text: "You carry on with your day straight away. We note how you felt, so we can follow your progress.",
          },
        ],
        facts: ["Around 20–30 minutes", "Fully clothed", "No needles, no medication", "No recovery time"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it may help",
        lead: "As part of a plan, when the body seems stuck on ‘alert’.",
        conditions: ["anxietate", "panica", "stres", "somn", "burnout", "migrene"],
        note: "After the assessment, we’ll tell you honestly whether taVNS makes sense for you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "Non-invasive: nothing enters your body.",
          "A very weak current, set together with you.",
          "Side effects are rare and pass quickly: mild skin irritation, dizziness or a headache.",
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
          { q: "Does it hurt?", a: "No. Most people feel a light tingling. If it feels unpleasant, we turn the intensity down." },
          {
            q: "How many sessions will I need?",
            a: "It depends on your situation. After the assessment we tell you which plan makes sense and how we measure progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don't stop anything on your own. Talk to the doctor who prescribed it.",
          },
          {
            q: "Do I need a BrainMap first?",
            a: "We recommend it. That way we start from a measurement, not from guesswork.",
          },
        ],
      },
      cta: {
        title: "Want to know if taVNS is right for you?",
        text: "Leave your number. We’ll call and tell you honestly whether we can help.",
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
        title: "Near-infrared light, for the brain.",
        lead: "A headset with near-infrared light. No needles, no pain, no ionising radiation.",
        videoTitle: "What a tPBM session looks like",
      },
      video: "serviceTpbm",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "Near-infrared light passes through the skin and the skull, reaching the outer layers of the brain. Research suggests it may support the way cells produce their energy.",
          "It is still being researched. We don’t promise a cure. We only recommend it when your assessment shows it makes sense.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax. The light does the work.",
        steps: [
          {
            title: "We talk first",
            text: "You tell us what medication you take. Some make the skin more sensitive to light, and we need to know.",
          },
          {
            title: "The headset",
            text: "You sit back in an armchair, fully clothed. We place a headset with light sources on your head.",
          },
          {
            title: "The session",
            text: "You may feel a slight warmth, or nothing at all. No noise, no pain.",
          },
          {
            title: "Afterwards",
            text: "You carry on with your day straight away. Together we follow what changes from one session to the next.",
          },
        ],
        facts: ["Around 20 minutes", "Fully clothed", "Light, not ionising radiation", "No recovery time"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it may help",
        lead: "As support, when mental fatigue or brain fog come first.",
        conditions: ["focus", "dispozitie", "burnout"],
        note: "After the assessment, we’ll tell you honestly whether tPBM makes sense for you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "Non-invasive: the light passes through the skin, nothing enters your body.",
          "No ionising radiation — it is nothing like an X-ray or a CT scan.",
          "You may feel a slight warmth, which passes straight away.",
          "You don’t look into the light: the headset sits on your head, not over your eyes.",
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
          { q: "Will I feel anything?", a: "Most people feel only a slight warmth, or nothing at all." },
          {
            q: "Is the light bad for my eyes?",
            a: "You don't look into the light, and the headset sits on your head, not over your eyes. We show you exactly how to sit.",
          },
          {
            q: "How many sessions will I need?",
            a: "It depends on your situation. After the assessment we tell you which plan makes sense and how we measure progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don't stop anything on your own. Talk to the doctor who prescribed it.",
          },
        ],
      },
      cta: {
        title: "Want to know if tPBM is right for you?",
        text: "Leave your number. We’ll call and tell you honestly whether we can help.",
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
        title: "A very weak current, for calm.",
        lead: "Two small clips on your earlobes. You relax, and the device does the rest.",
        videoTitle: "What a CES session looks like",
      },
      video: "serviceCes",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "The device sends a very weak current, measured in microamps, through two clips on your earlobes. It has been used for decades as support for anxiety, sleep and stress.",
          "It is not a miracle treatment and it does not replace treatment prescribed by your doctor. We use it when it makes sense for you.",
        ],
      },
      session: {
        eyebrow: "How a session goes",
        title: "You relax. The device does the work.",
        steps: [
          {
            title: "We talk first",
            text: "You tell us what medication you take and about any health problems. Together we check whether CES is right for you.",
          },
          {
            title: "The clips",
            text: "You sit in an armchair, fully clothed. We place a clip on each earlobe.",
          },
          {
            title: "The session",
            text: "Most people feel nothing, or just a light tingling. Some feel relaxed, even drowsy.",
          },
          {
            title: "Afterwards",
            text: "You carry on with your day straight away. If you feel drowsy, wait a few minutes before driving.",
          },
        ],
        facts: ["Around 20–40 minutes", "Fully clothed", "No needles, no medication", "A very weak current, set together with you"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it may help",
        lead: "As part of a plan, when your mind won’t switch off and sleep suffers.",
        conditions: ["anxietate", "somn", "stres"],
        note: "After the assessment, we’ll tell you honestly whether CES makes sense for you.",
      },
      safety: {
        eyebrow: "Safety",
        title: "Is it safe?",
        points: [
          "Non-invasive: nothing enters your body.",
          "A very weak current, measured in microamps.",
          "Side effects are rare and pass quickly: mild dizziness, a headache or skin irritation at the ear.",
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
          { q: "Does it hurt?", a: "No. Most people feel nothing, or just a light tingling." },
          {
            q: "Can I drive afterwards?",
            a: "Yes. If you feel drowsy, wait a few minutes at the clinic before you leave.",
          },
          {
            q: "How many sessions will I need?",
            a: "It depends on your situation. After the assessment we tell you which plan makes sense and how we measure progress.",
          },
          {
            q: "Does it replace medication?",
            a: "No. Don't stop anything on your own. Talk to the doctor who prescribed it.",
          },
        ],
      },
      cta: {
        title: "Want to know if CES is right for you?",
        text: "Leave your number. We’ll call and tell you honestly whether we can help.",
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
        title: "A safe place to talk.",
        lead: "Regular sessions with a psychotherapist. Confidential, at your own pace.",
        videoTitle: "How psychotherapy works at Emmanuel CliniX",
      },
      video: "servicePsihoterapie",
      what: {
        eyebrow: "What it is",
        title: "In short",
        paragraphs: [
          "You talk about what weighs on you, work out together where it comes from, and practise other ways of responding.",
          "With us, the conversation can also start from data: if you have had a BrainMap, the psychotherapist takes the map into account.",
        ],
      },
      session: {
        eyebrow: "How it goes",
        title: "Step by step, at your own pace.",
        steps: [
          { title: "The first meeting", text: "You tell us what brings you to us. Together we agree what you want to change." },
          { title: "The sessions", text: "Usually once a week, at the clinic. You talk as much, and in whatever way, you like." },
          { title: "Between sessions", text: "Sometimes you get small exercises, to put into practice what you discussed." },
          { title: "Taking stock", text: "From time to time you look together at what has changed and what comes next." },
        ],
        facts: ["Sessions of around 50 minutes", "Everything stays confidential", "No GP referral needed", "You set the pace"],
      },
      helps: {
        eyebrow: "Who it is for",
        title: "Who it may help",
        lead: "When you can’t cope alone, or the same pattern keeps repeating.",
        conditions: ["anxietate", "panica", "dispozitie", "stres", "burnout", "adictii"],
        note: "Psychotherapy does not replace medical treatment when that is needed.",
      },
      safety: {
        eyebrow: "Good to know",
        title: "Is it for me?",
        points: [
          "Everything stays between you and your psychotherapist.",
          "You are not judged. You only say what you want to say.",
          "You can ask at any time how we work and why.",
          "You can change the pace or stop at any time.",
        ],
        notTitle: "When you need something else first",
        notFor: [
          "You are having thoughts of harming yourself: call 112 now",
          "You need treatment with medication: we will refer you to a psychiatrist",
        ],
      },
      faq: {
        eyebrow: "Questions",
        title: "Frequently asked questions",
        items: [
          { q: "Do I need a diagnosis to come?", a: "No." },
          {
            q: "How long does psychotherapy last?",
            a: "It depends on what you want to change. Some people come for a few months, others for longer. We talk openly about this from the start.",
          },
          {
            q: "How much does a session cost?",
            a: "We tell you the price on the phone, before the first session. No hidden costs.",
          },
          { q: "What happens to what I say?", a: "It stays confidential. It is not passed on." },
        ],
      },
      cta: {
        title: "Shall we talk?",
        text: "Leave us your number. We’ll call, listen, and find the first step together.",
        primary: { label: "Request a call back →", href: "/contact" },
        secondary: { label: "Or take a free test", href: "/chestionare" },
      },
    },
  },
};
