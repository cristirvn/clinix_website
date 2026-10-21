/**
 * English translation of content/quizzes/ro/burnout.ts — same structure, scores and triggers.
 */
import type { ScoredQuiz } from "@/content/quizzes/types";

export const BURNOUT: ScoredQuiz = {
  "slug": "burnout",
  "route": "burnout",
  "seo": {
    "title": "Professional burnout — self-assessment test",
    "description": "A self-assessment test for professional burnout: 12 questions, a score from 1 to 10 and the risks your answers may point to."
  },
  "hero": {
    "eyebrow": "Self-assessment test · 12 questions",
    "title": "Professional burnout",
    "subtitle": "How close are you to your limit?",
    "lead": "Answer the 12 questions below honestly, thinking about the last few months. At the end you get a score from 1 to 10 and the specific risks your answers may point to.",
    "startButton": "Start the test →"
  },
  "scoreLabel": "Your score",
  "questions": [
    {
      "text": "How often do you feel emotionally drained at the end of a working day?",
      "options": [
        {
          "label": "Never — tired, but I still have something left",
          "score": 10
        },
        {
          "label": "Rarely, only in busy periods",
          "score": 7
        },
        {
          "label": "Often — most days I'm completely emptied",
          "score": 4
        },
        {
          "label": "Almost always — I'm wrung out from the morning",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 78,
      "risk": {
        "title": "Exhaustion that no longer recovers overnight",
        "text": "When feeling drained becomes daily, the deficit carries over from one day to the next instead of resetting. It is the first of the three classic signs of professional burnout, and usually the one people ignore most."
      }
    },
    {
      "text": "Do you wake up already tired, feeling you can't face another day?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely (a few times a month)",
          "score": 7
        },
        {
          "label": "A few times a week",
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
      "weight": 82,
      "risk": {
        "title": "The day starts at a deficit",
        "text": "Tiredness before you have even started shows that overnight recovery is no longer working. From here, any ordinary working day becomes more effort than you can give."
      }
    },
    {
      "text": "How often do you catch yourself feeling cynical, detached or indifferent about your work?",
      "options": [
        {
          "label": "Never — I care as much as I used to",
          "score": 10
        },
        {
          "label": "Rarely, on very hard days",
          "score": 7
        },
        {
          "label": "Often — I feel I'm running on autopilot",
          "score": 4
        },
        {
          "label": "Almost always — I no longer care, and that worries me",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 88,
      "risk": {
        "title": "Detachment as a way of protecting yourself",
        "text": "Cynicism is not a change in character. It is how the mind cuts its emotional spending when it has no reserves left. If left alone, it spreads beyond work and affects personal relationships."
      }
    },
    {
      "text": "How often do you feel that, although you work hard, you are no longer achieving anything important?",
      "options": [
        {
          "label": "Never — I can clearly see the results of my work",
          "score": 10
        },
        {
          "label": "Rarely",
          "score": 7
        },
        {
          "label": "Often — I work hard, but I'm marking time",
          "score": 4
        },
        {
          "label": "Almost always — I feel ineffective however much effort I put in",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 80,
      "risk": {
        "title": "Losing the sense of being effective",
        "text": "The third classic sign of burnout: the effort stays high, but the sense of achievement disappears. The usual reaction is to work even harder, which speeds up the very process that caused the problem."
      }
    },
    {
      "text": "How often do you lose patience over small things, at work or at home?",
      "options": [
        {
          "label": "Never — my patience is as it always was",
          "score": 10
        },
        {
          "label": "Rarely",
          "score": 7
        },
        {
          "label": "Often — the people close to me have started to notice",
          "score": 4
        },
        {
          "label": "Almost daily — I blow up over nothing and then regret it",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 62,
      "risk": {
        "title": "The cost reaches home",
        "text": "Burnout does not stay at the office. It uses up the self-control you have for the whole day. Personal relationships become the first casualty, and usually the last to be noticed."
      }
    },
    {
      "text": "How hard is it to concentrate and finish tasks, compared with a year ago?",
      "options": [
        {
          "label": "Just as easy as before",
          "score": 10
        },
        {
          "label": "A little harder, on tiring days",
          "score": 7
        },
        {
          "label": "Clearly harder — what took an hour now takes half a day",
          "score": 4
        },
        {
          "label": "Much harder — I read the same paragraph five times",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 75,
      "risk": {
        "title": "Measurable decline in thinking",
        "text": "Prolonged burnout affects working memory and processing speed, and the effects show up in objective tests. Most people put it down to age or disorganisation, not the real cause."
      }
    },
    {
      "text": "Do you have recurring physical symptoms with no clear medical cause (headaches, tight shoulders, digestive problems, frequent colds)?",
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
          "label": "Almost daily — my body is constantly protesting",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 70,
      "risk": {
        "title": "Your body has started to send signals",
        "text": "Physical symptoms usually appear after months of overload and mean the immune and digestive systems are now involved. If ignored, the next stage is often not a slow worsening but a sudden stop."
      }
    },
    {
      "text": "How often do you work or check work messages in the evening, at weekends or on holiday?",
      "options": [
        {
          "label": "Never — when I close the laptop, I'm done",
          "score": 10
        },
        {
          "label": "Rarely, only in exceptional situations",
          "score": 7
        },
        {
          "label": "Often — I check email in the evenings and at weekends",
          "score": 4
        },
        {
          "label": "All the time — there is no “outside working hours”",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 66,
      "risk": {
        "title": "Boundaries gone completely",
        "text": "Without a clear line between work and the rest of life, the brain never gets the signal that it can stop. What looks like being available turns, over time, into having no window to recover."
      }
    },
    {
      "text": "How much does a weekend or a day off help you recover?",
      "options": [
        {
          "label": "Fully — I start Monday with full batteries",
          "score": 10
        },
        {
          "label": "Quite a lot — I mostly recover",
          "score": 7
        },
        {
          "label": "A little — on Monday morning I'm almost as tired",
          "score": 4
        },
        {
          "label": "Not at all — I don't feel restored even after a holiday",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 92,
      "risk": {
        "title": "Lost ability to recover",
        "text": "When rest no longer restores you, the problem is no longer the amount of work but the recovery mechanism itself. This is the point where holidays, changing jobs or cutting your hours no longer fix anything."
      }
    },
    {
      "text": "How often do you still enjoy activities outside work (hobbies, family, friends)?",
      "options": [
        {
          "label": "Often — life outside work recharges me",
          "score": 10
        },
        {
          "label": "Fairly often, but less than before",
          "score": 7
        },
        {
          "label": "Rarely — I have no energy left for anything after work",
          "score": 4
        },
        {
          "label": "Almost never — work has swallowed everything, the rest is just getting by",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 85,
      "risk": {
        "title": "Life reduced to work and recovery",
        "text": "As activities outside work disappear, so do the things that could make up for what work uses up. Recovery gets slower, and work becomes the only measure of your personal worth."
      }
    },
    {
      "text": "How often do you seriously think about quitting your job or business, not as a plan but just to get away?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely, on very bad days",
          "score": 7
        },
        {
          "label": "Often — the daydream of escape comes up weekly",
          "score": 4
        },
        {
          "label": "Daily — the only thing keeping me there is fear or duty",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 90,
      "risk": {
        "title": "Decisions made to escape, not to gain",
        "text": "The daydream of escape is a sign of burnout, not a career plan. Decisions made from this state (sudden resignations, break-ups, giving things up) are the ones most often regretted, because the problem moves with the person."
      }
    }
  ],
  "urgency": {
    "text": "How soon would you like to sort this out?",
    "options": [
      {
        "label": "Right now, it's urgent",
        "urgency": "hot"
      },
      {
        "label": "In the coming months",
        "urgency": "warm"
      },
      {
        "label": "I'm just finding out more for now",
        "urgency": "nurture"
      }
    ]
  },
  "combos": [
    {
      "q": [
        8,
        1
      ],
      "max": 4,
      "weight": 100,
      "risk": {
        "title": "The recovery mechanism is no longer working",
        "text": "You wake up already tired, and days off no longer change anything. This is the point where a holiday, shorter hours or a new job no longer solve the problem. The recovery mechanism itself is affected."
      }
    },
    {
      "q": [
        2,
        10
      ],
      "max": 4,
      "weight": 98,
      "risk": {
        "title": "Advanced burnout, with a search for the exit",
        "text": "Detachment from work, together with a daily wish to get away, is the classic picture of the advanced stage. Decisions made from this state are most often regretted, because the problem does not stay behind."
      }
    },
    {
      "q": [
        0,
        3
      ],
      "max": 4,
      "weight": 92,
      "risk": {
        "title": "A lot of effort, and it feels like nothing to show",
        "text": "Daily exhaustion and the feeling of being ineffective feed each other. The usual reaction, working harder, speeds up the very process that caused this."
      }
    },
    {
      "q": [
        6,
        9
      ],
      "max": 4,
      "weight": 86,
      "risk": {
        "title": "Your body is signalling, and your life has narrowed",
        "text": "Physical symptoms have appeared, and activities outside work have gone. Without ways to recover, the body's signals tend to turn into a sudden stop rather than a slow worsening."
      }
    },
    {
      "q": [
        5,
        7
      ],
      "max": 4,
      "weight": 78,
      "risk": {
        "title": "Declining thinking, with no boundaries",
        "text": "Your concentration has dropped noticeably compared with a year ago, and work never stops. The brain gets no window to consolidate, and the decline continues for as long as the boundaries are missing."
      }
    }
  ],
  "lead": {
    "title": "Almost there!",
    "text": "Fill in your details below to see your final score and risk analysis.",
    "submit": "See my results →"
  },
  "result": {
    "risksHeading": "What your answers may point to",
    "risksSub": "The paths most often documented for similar answers when nothing is done about them.",
    "closing": "<strong>Worth remembering:</strong> none of these is a path you must follow. Professional burnout causes changes that can be measured objectively, and when you can see exactly what has changed, it can also be corrected.",
    "goodHeading": "Analysis of your answers",
    "goodText": "Your answers do not point to significant risks right now. You recover on your days off, you care about what you do and you have a life outside work. These are the first three things to give way.",
    "bands": {
      "good": {
        "label": "No signs of burnout",
        "interp": "{name}, your answers suggest a relationship with work in which what you spend and what you recover are still in balance."
      },
      "mid": {
        "label": "Burnout building up",
        "interp": "{name}, your answers show a build-up that has already gone beyond your normal ability to recover."
      },
      "low": {
        "label": "Advanced burnout — worth an assessment",
        "interp": "{name}, your answers suggest burnout is well established and already affecting several areas at once."
      }
    }
  },
  "cta": {
    "lp": "/lp/burnout",
    "eyebrow": "Next step",
    "hot": {
      "title": "You said you want to sort this out now",
      "text": "The first step is a 15-minute conversation, where we tell you what can be measured in your case and what can realistically be corrected.",
      "button": "I want to deal with this"
    },
    "warm": {
      "title": "What is the next step?",
      "text": "At Emmanuel Clinix we objectively measure the changes caused by prolonged burnout and show you what can be corrected. The first step is a conversation, not an appointment.",
      "button": "I'd like to see what can be done"
    },
    "nurture": {
      "title": "When you're ready to understand more",
      "text": "We explain how burnout is measured objectively and what the results of an assessment show. No appointment, no obligation.",
      "button": "Find out more"
    }
  },
  "note": "This is an online self-assessment tool, for information only. It is not a medical test and it does not give a diagnosis.",
  "legal": "This questionnaire is an online self-assessment tool, for information and education only. It is not a medical test, it is not a diagnosis, and it does not replace a consultation with a doctor or psychologist. The score and risks shown are indicative only. They are generated automatically from the answers you gave and can vary with many individual factors. The risks described are general tendencies found in the specialist literature, not predictions about your situation. For any health concern, please speak to a qualified professional. Emmanuel Clinix does not guarantee any specific results from completing this test."
};
