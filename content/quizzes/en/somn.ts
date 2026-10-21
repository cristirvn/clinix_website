/**
 * Sleep quality — 10 scored questions + the urgency question.
 *
 * English translation of content/quizzes/ro/somn.ts. Keep structure, slugs, scores and weights in sync with the Romanian file.
 */
import type { ScoredQuiz } from "@/content/quizzes/types";

export const SOMN: ScoredQuiz = {
  "slug": "somn",
  "route": "somn",
  "seo": {
    "title": "Sleep quality — self-assessment test",
    "description": "A self-assessment test for your sleep quality: 11 questions, a score from 1 to 10, and the risks your answers point to."
  },
  "hero": {
    "eyebrow": "Self-assessment test · 11 questions",
    "title": "Sleep quality",
    "subtitle": "How well does your sleep really restore you?",
    "lead": "Answer the 11 questions below honestly, thinking about the last month. At the end you get a score from 1 to 10 and the specific risks your answers point to.",
    "startButton": "Start the test →"
  },
  "scoreLabel": "Your score",
  "questions": [
    {
      "text": "How long does it usually take you to fall asleep at night?",
      "options": [
        {
          "label": "Under 15 minutes",
          "score": 10
        },
        {
          "label": "15–30 minutes",
          "score": 7
        },
        {
          "label": "30–60 minutes",
          "score": 4
        },
        {
          "label": "Over an hour, nearly every night",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 72,
      "risk": {
        "title": "Falling asleep that becomes a daily struggle",
        "text": "When falling asleep regularly takes over an hour, the brain starts to link the bed with being awake and making an effort. That link sets in within a few weeks and keeps insomnia going even after the original cause has gone."
      }
    },
    {
      "text": "How often do you wake up during the night?",
      "options": [
        {
          "label": "Rarely or never",
          "score": 10
        },
        {
          "label": "Once, and I fall back asleep quickly",
          "score": 7
        },
        {
          "label": "2–3 times a night",
          "score": 4
        },
        {
          "label": "Several times — my night is broken up",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 75,
      "risk": {
        "title": "Broken sleep with no deep stages",
        "text": "Repeated waking interrupts the deep stages, when the brain does its metabolic clean-up and consolidates memory. You can spend eight hours in bed and get no real benefit."
      }
    },
    {
      "text": "Do you wake up in the morning earlier than you would like, and find you cannot get back to sleep?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely",
          "score": 7
        },
        {
          "label": "Often",
          "score": 4
        },
        {
          "label": "Almost every morning",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 68,
      "risk": {
        "title": "Early-morning waking",
        "text": "Regularly waking one or two hours early with no way back to sleep is one of the signs most often linked to a disrupted body clock and to mood disorders. It rarely sorts itself out."
      }
    },
    {
      "text": "How rested do you feel when you wake up?",
      "options": [
        {
          "label": "Fully rested",
          "score": 10
        },
        {
          "label": "Fairly rested",
          "score": 7
        },
        {
          "label": "A little rested — I start slowly",
          "score": 4
        },
        {
          "label": "Not at all — I wake up more tired than when I went to bed",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 70,
      "risk": {
        "title": "Sleep that no longer restores",
        "text": "When the hours you sleep do not leave you rested, the problem is not how long you sleep but the quality of your sleep architecture. This is the stage where people start to make up for it with caffeine, which damages the next night's sleep."
      }
    },
    {
      "text": "On average, how many hours do you sleep a night?",
      "options": [
        {
          "label": "7–8 hours",
          "score": 10
        },
        {
          "label": "6–7 hours",
          "score": 7
        },
        {
          "label": "5–6 hours",
          "score": 4
        },
        {
          "label": "Under 5 hours",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 85,
      "risk": {
        "title": "A sleep deficit that builds up",
        "text": "Consistently under six hours, the deficit is not reset at the weekend. It adds up. The documented effects include weaker immunity, higher blood pressure and a measurable decline in working memory."
      }
    },
    {
      "text": "How often do you use your phone, laptop or TV in bed before you fall asleep?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely",
          "score": 7
        },
        {
          "label": "Often",
          "score": 4
        },
        {
          "label": "Every evening, until I fall asleep",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 45,
      "risk": {
        "title": "The signal to fall asleep, blocked chemically",
        "text": "Screen light in the evening delays the release of melatonin by one or two hours, and what you watch keeps the brain active just when it should be slowing down. The effect builds up and gradually pushes your bedtime later and later."
      }
    },
    {
      "text": "How regular is your sleep schedule (bedtime and wake-up time)?",
      "options": [
        {
          "label": "Very regular, including at weekends",
          "score": 10
        },
        {
          "label": "Fairly regular, with small variations",
          "score": 7
        },
        {
          "label": "Variable — 2–3 hours' difference from one day to the next",
          "score": 4
        },
        {
          "label": "Chaotic — there is no pattern at all",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 58,
      "risk": {
        "title": "A disrupted body clock",
        "text": "Your body clock is set by consistency, not by the number of hours. Big variations have an effect like jet lag, but every week, without going anywhere."
      }
    },
    {
      "text": "How often do you have coffee, energy drinks or alcohol after 4 pm?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely",
          "score": 7
        },
        {
          "label": "Often",
          "score": 4
        },
        {
          "label": "Almost daily",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 52,
      "risk": {
        "title": "Sleep sabotaged by evening drinks",
        "text": "Caffeine has a half-life of around six hours, so a coffee at 4 pm is still active at midnight. Alcohol helps you fall asleep, but it suppresses the deep stages and causes waking in the second half of the night."
      }
    },
    {
      "text": "How often do you lie in bed with an active mind, thinking about what you have to do or what is weighing on you?",
      "options": [
        {
          "label": "Rarely or never",
          "score": 10
        },
        {
          "label": "Occasionally",
          "score": 7
        },
        {
          "label": "Often — most evenings",
          "score": 4
        },
        {
          "label": "Every evening — it never stops",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 78,
      "risk": {
        "title": "A bed linked with being awake",
        "text": "Time spent awake in bed teaches the brain that the bed is a place for thinking, not for sleeping. This is the main way occasional insomnia turns into chronic insomnia."
      }
    },
    {
      "text": "How often does lack of sleep affect your mood, concentration or relationships?",
      "options": [
        {
          "label": "Not at all",
          "score": 10
        },
        {
          "label": "Rarely",
          "score": 7
        },
        {
          "label": "Often",
          "score": 4
        },
        {
          "label": "Daily — it shows in everything I do",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 88,
      "risk": {
        "title": "Effects that reach beyond the bedroom",
        "text": "Chronic lack of sleep weakens emotional control and decision-making more than most people realise. The cost shows up in your relationships and at work, and the cause is rarely correctly identified."
      }
    }
  ],
  "urgency": {
    "text": "How soon do you want to sort this out?",
    "options": [
      {
        "label": "Right now, urgently",
        "urgency": "hot"
      },
      {
        "label": "In the next few months",
        "urgency": "warm"
      },
      {
        "label": "I'm just gathering information for now",
        "urgency": "nurture"
      }
    ]
  },
  "combos": [
    {
      "q": [
        4,
        9
      ],
      "max": 4,
      "weight": 100,
      "risk": {
        "title": "A chronic deficit with effects you can already see",
        "text": "You consistently sleep too little, and the effects already show in your mood and concentration. From here, a few good nights will not make up for it. The accumulated deficit needs a structured correction."
      }
    },
    {
      "q": [
        0,
        8
      ],
      "max": 4,
      "weight": 96,
      "risk": {
        "title": "Insomnia that now runs on its own",
        "text": "Difficulty falling asleep, together with an active mind in bed, is exactly the mechanism by which insomnia becomes chronic. The brain has already learned the link, and it carries on regardless of what first started it."
      }
    },
    {
      "q": [
        1,
        3
      ],
      "max": 4,
      "weight": 90,
      "risk": {
        "title": "Sleep that is there, but does not restore",
        "text": "Repeated waking and not feeling rested point to damaged sleep architecture, not a problem of length. It is the deep stages that are missing, and extra hours do not make them up."
      }
    },
    {
      "q": [
        5,
        7
      ],
      "max": 4,
      "weight": 74,
      "risk": {
        "title": "Sleep sabotaged before bed",
        "text": "Evening screens and afternoon stimulants work through the same mechanisms: they delay falling asleep and make sleep shallower. They are also the two factors that are quickest to correct."
      }
    },
    {
      "q": [
        2,
        6
      ],
      "max": 4,
      "weight": 70,
      "risk": {
        "title": "A body clock out of sync",
        "text": "Early waking, together with an irregular schedule, points to a body clock that no longer has stable reference points. Without resynchronising, the pattern deepens month by month."
      }
    }
  ],
  "lead": {
    "title": "Almost done!",
    "text": "Fill in your details below to see your final score and risk analysis.",
    "submit": "See my results →"
  },
  "result": {
    "risksHeading": "Which risks your answers point to",
    "risksSub": "The trajectories most often documented for similar answers, if nothing is done.",
    "closing": "<strong>Worth remembering:</strong> none of these is an inevitable path. Sleep is one of the functions that can be measured most precisely, and once we can see exactly where it breaks down, it can be corrected.",
    "goodHeading": "Analysis of your answers",
    "goodText": "Your answers do not point to any significant risks right now. You fall asleep easily, sleep through and wake up rested. These are the three things everything else rests on.",
    "bands": {
      "good": {
        "label": "Healthy sleep",
        "interp": "{name}, your answers show sleep that does its job: it restores you and supports your day."
      },
      "mid": {
        "label": "Deteriorating sleep — a pattern is forming",
        "interp": "{name}, your answers show sleep that has started to break down and to build its own ways of keeping itself going."
      },
      "low": {
        "label": "Severely affected sleep — worth an assessment",
        "interp": "{name}, your answers show an established sleep problem, with effects you can already see during the day."
      }
    }
  },
  "cta": {
    "lp": "/lp/somn",
    "eyebrow": "Next step",
    "hot": {
      "title": "You said you want to sort this out now",
      "text": "The first step is a 15-minute conversation. We tell you what can be measured in your case and exactly where your sleep breaks down.",
      "button": "I want to sort this out"
    },
    "warm": {
      "title": "What is the next step?",
      "text": "At Emmanuel Clinix we objectively measure what happens in your brain during sleep, and show you what can be corrected. The first step is a conversation, not an appointment.",
      "button": "I want to see what can be done"
    },
    "nurture": {
      "title": "When you want to understand more",
      "text": "We explain how sleep quality is objectively measured and what an assessment shows. No appointment, no obligation.",
      "button": "Find out more"
    }
  },
  "note": "This is an online self-assessment tool for information only. It is not a medical test and does not give a diagnosis.",
  "legal": "This questionnaire is an online self-assessment tool, provided for information and education only. It is not a medical test, it is not a diagnosis, and it does not replace a consultation with a doctor or psychologist. The score and risks shown are a guide only. They are generated automatically from the answers you gave and can vary with many individual factors. The risks described are general tendencies found in the specialist literature, not predictions about your situation. For any health concern, please speak to a specialist. Emmanuel Clinix does not guarantee any specific results from completing this test."
};
