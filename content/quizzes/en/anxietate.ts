/**
 * Anxiety level — 10 scored questions + the urgency question.
 *
 * English translation of content/quizzes/ro/anxietate.ts. Keep structure, slugs, scores and weights in sync with the Romanian file.
 */
import type { ScoredQuiz } from "@/content/quizzes/types";

export const ANXIETATE: ScoredQuiz = {
  "slug": "anxietate",
  "route": "anxietate",
  "seo": {
    "title": "Anxiety level — self-assessment test",
    "description": "A self-assessment test for your anxiety level: 11 questions, a score from 1 to 10, and the risks your answers point to."
  },
  "hero": {
    "eyebrow": "Self-assessment test · 11 questions",
    "title": "Anxiety level",
    "subtitle": "How much does anxiety keep you on high alert?",
    "lead": "Answer the 11 questions below honestly, thinking about the last two weeks. At the end you get a score from 1 to 10 and the specific risks your answers point to.",
    "startButton": "Start the test →"
  },
  "scoreLabel": "Your score",
  "questions": [
    {
      "text": "How often have you felt nervous, anxious or on edge in the last two weeks?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "A few days",
          "score": 7
        },
        {
          "label": "More than half the days",
          "score": 4
        },
        {
          "label": "Nearly every day",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 70,
      "risk": {
        "title": "Anxiety that has become constant",
        "text": "More than half the days means the feeling is no longer a reaction to something specific. It has become the permanent background. From this point the brain lowers its alarm threshold and reacts to smaller and smaller things."
      }
    },
    {
      "text": "How often are you unable to stop or control your worries?",
      "options": [
        {
          "label": "Never — I can put them aside",
          "score": 10
        },
        {
          "label": "Rarely — I can stop them with effort",
          "score": 7
        },
        {
          "label": "Often — they snowball on their own",
          "score": 4
        },
        {
          "label": "Almost always — my mind never switches off",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 78,
      "risk": {
        "title": "Worry that feeds itself",
        "text": "Every negative scenario you imagine triggers the same physical reaction as a real danger. It tells the brain it was right to sound the alarm. Without help, the loop tightens and gets harder to break on your own."
      }
    },
    {
      "text": "How hard is it to relax and come out of a state of alertness?",
      "options": [
        {
          "label": "Not hard at all — I relax easily",
          "score": 10
        },
        {
          "label": "Sometimes I need more time",
          "score": 7
        },
        {
          "label": "Hard — I rarely feel truly relaxed",
          "score": 4
        },
        {
          "label": "Very hard — I can't remember when I last felt relaxed",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 72,
      "risk": {
        "title": "Arousal level that stays high",
        "text": "When the system no longer comes down from alert, muscles, breathing and pulse stay above baseline all the time. Over time this shows up as unexplained tiredness and aches with no identifiable cause."
      }
    },
    {
      "text": "Do you have physical symptoms of anxiety (palpitations, sweating, trembling, shortness of breath, a lump in your throat)?",
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
          "label": "Weekly",
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
      "weight": 82,
      "risk": {
        "title": "Physical symptoms that become a trigger themselves",
        "text": "Once they appear, the physical sensations can frighten you more than the original situation, and set off a new wave of anxiety. This is how panic attacks take hold: not because of your life, but because of fear of your own body."
      }
    },
    {
      "text": "How often do you avoid situations, places or people because of anxiety?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely, only in exceptional situations",
          "score": 7
        },
        {
          "label": "Often — I turn things down or put them off because of it",
          "score": 4
        },
        {
          "label": "Constantly — my life has clearly become smaller",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 88,
      "risk": {
        "title": "A life that gradually shrinks",
        "text": "Every time you avoid something you get instant relief, and the brain learns that the place really was dangerous. The list grows month by month, and the area where you feel safe shrinks without you noticing."
      }
    },
    {
      "text": "How often do you feel so restless that it is hard to sit still?",
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
      "weight": 55,
      "risk": {
        "title": "Constant physical restlessness",
        "text": "Your body spends energy on a release that never comes. The result is deep tiredness that the amount of work you actually did does not explain."
      }
    },
    {
      "text": "How do you sleep when you are anxious?",
      "options": [
        {
          "label": "Normally — anxiety does not affect my sleep",
          "score": 10
        },
        {
          "label": "I fall asleep a little more slowly",
          "score": 7
        },
        {
          "label": "Badly — I fall asleep late or wake up with racing thoughts",
          "score": 4
        },
        {
          "label": "Very badly — some nights my mind never switches off",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 80,
      "risk": {
        "title": "Sleep worn down by anxiety",
        "text": "Too little sleep lowers the brain's ability to regulate fear the next day, so anxiety rises. The circle closes by itself and, after a few months, runs independently of the original cause."
      }
    },
    {
      "text": "How often do you get angry or irritable more easily than usual?",
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
          "label": "Often — people around me have noticed",
          "score": 4
        },
        {
          "label": "Almost daily — I react out of proportion",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 50,
      "risk": {
        "title": "Irritability that affects relationships",
        "text": "A system that is already on alert has no reserve left for small frustrations. People close to you may read your reactions as rejection, and the support you need wears thin just when it matters most."
      }
    },
    {
      "text": "How often does anxiety affect your work, studies or relationships?",
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
          "label": "Often — I miss opportunities or put off decisions",
          "score": 4
        },
        {
          "label": "Constantly — it has clearly changed the course of things",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 85,
      "risk": {
        "title": "Costs that build up outside you",
        "text": "Untreated anxiety does not stay an inner problem. It leads to postponed decisions, missed opportunities and strained relationships. These losses add up quietly, and recovering them takes far longer than treating the cause."
      }
    },
    {
      "text": "How often do you feel that something bad is about to happen, for no clear reason?",
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
          "label": "Almost all the time",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 68,
      "risk": {
        "title": "An alarm with nothing to alarm about",
        "text": "A sense of imminent danger with no identifiable cause points to an alarm system that goes off on its own. If untreated, it spreads: more and more neutral situations start to trigger the same reaction."
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
        3,
        4
      ],
      "max": 4,
      "weight": 100,
      "risk": {
        "title": "A typical path towards panic attacks",
        "text": "Frequent physical symptoms combined with avoiding situations are the two steps that most often come before established panic. Each avoidance makes the next exposure harder, and the circle tightens month by month."
      }
    },
    {
      "q": [
        1,
        6
      ],
      "max": 4,
      "weight": 96,
      "risk": {
        "title": "Worry that eats into your sleep",
        "text": "A mind that will not stop and poor sleep feed each other. A bad night lowers the brain's ability to regulate fear the next day. After a few months, the pattern keeps itself going."
      }
    },
    {
      "q": [
        8,
        4
      ],
      "max": 4,
      "weight": 90,
      "risk": {
        "title": "A life that is visibly shrinking",
        "text": "Avoidance has already started to cost you in real terms, at work and in your relationships. This is the stage where anxiety is no longer an inner discomfort but a force that changes the direction of things."
      }
    },
    {
      "q": [
        0,
        2
      ],
      "max": 4,
      "weight": 84,
      "risk": {
        "title": "Alertness that has become the background",
        "text": "Anxiety on most days, with no way back to relaxation, means a system that never comes down. Your body runs above its baseline for months, with real physical costs."
      }
    },
    {
      "q": [
        7,
        9
      ],
      "max": 4,
      "weight": 76,
      "risk": {
        "title": "An alarm system that goes off by itself",
        "text": "A sense of danger with no reason, together with irritability, points to a lowered alarm threshold. More and more neutral situations come to be read as a threat."
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
    "closing": "<strong>Worth remembering:</strong> none of these is an inevitable path. Anxiety generally responds well to specialist support, and even better when it is addressed before avoidance spreads.",
    "goodHeading": "Analysis of your answers",
    "goodText": "Your answers do not point to any significant risks right now. You can relax, you are not avoiding situations and your sleep is holding up. These are the first three things to give way when anxiety starts to settle in.",
    "bands": {
      "good": {
        "label": "Low anxiety level",
        "interp": "{name}, your answers show an ordinary level of anxiety, with no effect on your day-to-day life."
      },
      "mid": {
        "label": "Moderate level — a pattern is forming",
        "interp": "{name}, your answers show anxiety that has started to build its own ways of keeping itself going."
      },
      "low": {
        "label": "High level — worth an assessment",
        "interp": "{name}, your answers show anxiety that is already affecting several areas of your life at the same time."
      }
    }
  },
  "cta": {
    "lp": "/lp/anxietate",
    "eyebrow": "Next step",
    "hot": {
      "title": "You said you want to sort this out now",
      "text": "The first step is a 15-minute conversation. We tell you what can be measured in your case and what options there are.",
      "button": "I want to sort this out"
    },
    "warm": {
      "title": "What is the next step?",
      "text": "At Emmanuel Clinix we objectively measure how activated your nervous system is, and show you what can be corrected. The first step is a conversation, not an appointment.",
      "button": "I want to see what can be done"
    },
    "nurture": {
      "title": "When you want to understand more",
      "text": "We explain how anxiety is objectively measured and what the results of an assessment show. No appointment, no obligation.",
      "button": "Find out more"
    }
  },
  "note": "This is an online self-assessment tool for information only. It is not a medical test and does not give a diagnosis.",
  "legal": "This questionnaire is an online self-assessment tool, provided for information and education only. It is not a medical test, it is not a diagnosis, and it does not replace a consultation with a doctor or psychologist. The score and risks shown are a guide only. They are generated automatically from the answers you gave and can vary with many individual factors. The risks described are general tendencies found in the specialist literature, not predictions about your situation. For any health concern, please speak to a specialist. Emmanuel Clinix does not guarantee any specific results from completing this test."
};
