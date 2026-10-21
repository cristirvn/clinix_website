/**
 * English translation of content/quizzes/ro/dispozitie.ts — same structure, scores and triggers.
 */
import type { ScoredQuiz } from "@/content/quizzes/types";

export const DISPOZITIE: ScoredQuiz = {
  "slug": "dispozitie",
  "route": "dispozitie",
  "seo": {
    "title": "Mood and energy — self-assessment test",
    "description": "A self-assessment test for mood and energy: 11 questions, a score from 1 to 10 and the risks your answers may point to."
  },
  "hero": {
    "eyebrow": "Self-assessment test · 11 questions",
    "title": "Mood and energy",
    "subtitle": "How much have the last few weeks changed you?",
    "lead": "Answer the 11 questions below honestly, thinking about the last two weeks. At the end you get a score from 1 to 10 and an analysis of what your answers may point to.",
    "startButton": "Start the test →"
  },
  "scoreLabel": "Your score",
  "questions": [
    {
      "text": "How often have you lost interest or pleasure in things that normally do you good?",
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
          "label": "Almost every day",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 88,
      "risk": {
        "title": "Losing the ability to feel pleasure",
        "text": "When pleasure goes, so does the reason to do the things that would help. Activity drops, and mood sinks further. This is the best-documented way a hard spell turns into a long one."
      }
    },
    {
      "text": "How often have you felt sad, empty or hopeless?",
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
          "label": "Almost every day",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 90,
      "risk": {
        "title": "A mood that has moved from a reaction to a constant backdrop",
        "text": "More than half the days means your mood no longer depends on what is going on around you. From here it is rarely corrected by a change of scene (a holiday, a new job, a move), because the surroundings are no longer what keeps it going."
      }
    },
    {
      "text": "How often have you felt tired or without energy, even after resting?",
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
      "weight": 70,
      "risk": {
        "title": "Tiredness that rest does not fix",
        "text": "Tiredness that lasts after sleep is not a problem of rest but of regulation. Most people read it as laziness or lack of willpower, and add guilt on top of a state with physical causes."
      }
    },
    {
      "text": "How has your appetite been over the last two weeks?",
      "options": [
        {
          "label": "Normal",
          "score": 10
        },
        {
          "label": "Slightly changed",
          "score": 7
        },
        {
          "label": "Clearly changed — I eat much less or much more",
          "score": 4
        },
        {
          "label": "Completely upset, with an effect on my weight",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 55,
      "risk": {
        "title": "Basic body mechanisms thrown off",
        "text": "Appetite is regulated by the same circuits that regulate mood and sleep. When it changes noticeably, it shows the disruption has gone beyond emotions and reached the body's basic functions."
      }
    },
    {
      "text": "How often have you felt that you have failed, or let down the people around you?",
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
      "weight": 85,
      "risk": {
        "title": "Self-criticism that has become automatic",
        "text": "Thoughts like these do not describe reality. They reflect the state they are produced in, yet they feel like objective truths. The more they repeat, the harder they are to question without outside help."
      }
    },
    {
      "text": "How hard is it to concentrate (at work, when reading, in a conversation)?",
      "options": [
        {
          "label": "Not hard at all",
          "score": 10
        },
        {
          "label": "A little harder than usual",
          "score": 7
        },
        {
          "label": "Clearly harder",
          "score": 4
        },
        {
          "label": "Very hard — I reread the same thing several times",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 60,
      "risk": {
        "title": "Visible costs at work",
        "text": "Difficulty concentrating produces weaker results, and weak results confirm the feeling of failure. This is the loop in which an inner state starts to create real evidence in its own favour."
      }
    },
    {
      "text": "How often have you felt isolated or alone, even when surrounded by people?",
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
          "label": "Almost always",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 80,
      "risk": {
        "title": "Withdrawal that is speeding up",
        "text": "Low mood reduces the wish to be with people, and being without people lowers mood further. This is the circle that closes fastest and is hardest to break from the inside."
      }
    },
    {
      "text": "How hard is it to get out of bed in the morning because you lack motivation?",
      "options": [
        {
          "label": "Not hard at all",
          "score": 10
        },
        {
          "label": "Sometimes hard",
          "score": 7
        },
        {
          "label": "Often very hard",
          "score": 4
        },
        {
          "label": "Almost impossible — I put it off as long as I can",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 75,
      "risk": {
        "title": "The day already starts at a deficit",
        "text": "When the morning becomes an obstacle, the rest of the day starts from behind. The effort spent on basic things is no longer available for anything else."
      }
    },
    {
      "text": "How much do you still enjoy the things you used to like?",
      "options": [
        {
          "label": "As much as before",
          "score": 10
        },
        {
          "label": "A little less",
          "score": 7
        },
        {
          "label": "Much less",
          "score": 4
        },
        {
          "label": "Not at all — I do them mechanically or I've given them up",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 82,
      "risk": {
        "title": "Life narrowed to the bare minimum",
        "text": "As enjoyable activities disappear, so do the natural ways the brain regulates mood. Recovery gets slower with each month the list stays empty."
      }
    },
    {
      "text": "How much do these feelings affect your day-to-day life (relationships, work, ordinary chores)?",
      "options": [
        {
          "label": "Not at all",
          "score": 10
        },
        {
          "label": "A little",
          "score": 7
        },
        {
          "label": "Moderately — it shows in several areas",
          "score": 4
        },
        {
          "label": "A great deal — I can barely cope",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 92,
      "risk": {
        "title": "Effects that go beyond emotions",
        "text": "When your mood is already affecting daily functioning, it is no longer a hard spell but a problem that keeps itself going. Statistically, the longer it takes to get assessed, the longer recovery takes."
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
        0,
        8
      ],
      "max": 4,
      "weight": 100,
      "risk": {
        "title": "The natural sources of balance have closed off",
        "text": "Pleasure has gone, and the activities that produced it have been given up. Without them, the brain loses its own ways of bouncing back, and the mood keeps itself going whatever the circumstances."
      }
    },
    {
      "q": [
        1,
        9
      ],
      "max": 4,
      "weight": 98,
      "risk": {
        "title": "An established low mood, affecting how you function",
        "text": "The low mood lasts most days and is already affecting daily life. This is the point at which hard spells, in most cases, turn into something that no longer passes by itself."
      }
    },
    {
      "q": [
        4,
        6
      ],
      "max": 4,
      "weight": 92,
      "risk": {
        "title": "Self-criticism on top of isolation",
        "text": "The feeling of failure, combined with withdrawing from others, removes the very thing that could challenge those thoughts. Without an outside view, they settle in as truths."
      }
    },
    {
      "q": [
        2,
        7
      ],
      "max": 4,
      "weight": 84,
      "risk": {
        "title": "Not enough energy for the basics",
        "text": "Tiredness that does not go away and mornings as an obstacle show a deficit that rest does not cover. This is when most people add guilt on top of a physical problem."
      }
    },
    {
      "q": [
        3,
        5
      ],
      "max": 4,
      "weight": 72,
      "risk": {
        "title": "Disruption that has reached basic functions",
        "text": "Changed appetite and poor concentration show the disruption is no longer only emotional. These are objective, measurable signs, and that is exactly why they can be addressed."
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
    "closing": "<strong>Worth remembering:</strong> none of these is a path you must follow, and nothing you have read above says anything about you as a person. States like this respond well to help, and the earlier it starts, the sooner you feel better.",
    "goodHeading": "Analysis of your answers",
    "goodText": "Your answers do not point to significant risks right now. Your enjoyment, your energy and your connection with the people around you are all working. These are the first three things to give way in a hard spell.",
    "bands": {
      "good": {
        "label": "Mood and energy in balance",
        "interp": "{name}, your answers suggest a steady mood, with resources to draw on."
      },
      "mid": {
        "label": "Signs of a dip — worth paying attention to",
        "interp": "{name}, your answers show a drop in mood and energy that has started to keep itself going."
      },
      "low": {
        "label": "Worth talking to a specialist",
        "interp": "{name}, your answers suggest a state that is already affecting several areas of your life. This is not a diagnosis. It means it is worth having it looked at by someone qualified."
      }
    }
  },
  "cta": {
    "lp": "/lp/dispozitie",
    "eyebrow": "Next step",
    "hot": {
      "title": "You said you want to sort this out now",
      "text": "The first step is a 15-minute conversation, where we tell you what can be measured in your case and what practical options there are.",
      "button": "I want to deal with this"
    },
    "warm": {
      "title": "What is the next step?",
      "text": "At Emmanuel Clinix we objectively measure what is happening in brain activity and show you what can be corrected. The first step is a conversation, not an appointment.",
      "button": "I'd like to see what can be done"
    },
    "nurture": {
      "title": "When you're ready to understand more",
      "text": "We explain how mood and energy are assessed objectively and what the results show. No appointment, no obligation.",
      "button": "Find out more"
    }
  },
  "note": "This is an online self-assessment tool, for information only. It is not a medical test and it does not give a diagnosis.",
  "legal": "This questionnaire is an online self-assessment tool, for information and education only. It is not a medical test, it is not a diagnosis, and it does not replace a consultation with a doctor or psychologist. The score and risks shown are indicative only. They are generated automatically from the answers you gave and can vary with many individual factors. The risks described are general tendencies found in the specialist literature, not predictions about your situation. For any health concern, please speak to a qualified professional. Emmanuel Clinix does not guarantee any specific results from completing this test. If you are going through a very hard time and have thoughts of harming yourself, please get help straight away. In the UK, call 999 or Samaritans on 116 123 (free, 24 hours). In Romania, call 112 or the TelVerde Antisuicid line on 0800 801 200."
};
