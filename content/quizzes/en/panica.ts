/**
 * Panic attacks — 12 scored questions + the urgency question.
 *
 * English translation of content/quizzes/ro/panica.ts. Keep structure, slugs, scores and weights in sync with the Romanian file.
 */
import type { ScoredQuiz } from "@/content/quizzes/types";

export const PANICA: ScoredQuiz = {
  "slug": "panica",
  "route": "panica",
  "seo": {
    "title": "Panic attacks — self-assessment test",
    "description": "A self-assessment test for panic attacks: 13 questions, a score from 1 to 10, and the risks your answers point to."
  },
  "hero": {
    "eyebrow": "Self-assessment test · 13 questions",
    "title": "Panic attacks",
    "subtitle": "How much are they really dictating your day?",
    "lead": "Answer the 13 questions below honestly, thinking about the last three months. At the end you get a score from 1 to 10 and the specific risks your answers point to.",
    "startButton": "Start the test →"
  },
  "scoreLabel": "Your score",
  "questions": [
    {
      "text": "In the last three months, how often have you had episodes of intense fear or discomfort that come on suddenly?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "One or two, in very stressful situations",
          "score": 7
        },
        {
          "label": "A few times a month",
          "score": 4
        },
        {
          "label": "Weekly or more often",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 88,
      "risk": {
        "title": "Episodes that have become a pattern",
        "text": "When episodes repeat every week, the brain stops treating them as accidents and starts treating them as a threat to expect. It begins to scan constantly for signs of the next one, which makes it more likely, not less."
      }
    },
    {
      "text": "How quickly does an episode reach its peak?",
      "options": [
        {
          "label": "Not applicable",
          "score": 10
        },
        {
          "label": "Gradually, over 20 minutes or more",
          "score": 7
        },
        {
          "label": "In about 10 minutes",
          "score": 4
        },
        {
          "label": "In a few minutes or less — it hits me out of the blue",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 66,
      "risk": {
        "title": "A sudden start you cannot see coming",
        "text": "When it builds in just a few minutes, it feels as if there is nothing you can do, and that feeds helplessness between episodes. It is the unpredictability, more than the discomfort itself, that narrows people's lives the most."
      }
    },
    {
      "text": "What physical symptoms do you get during an episode (palpitations, a feeling of suffocation, dizziness, sweating, tingling, trembling)?",
      "options": [
        {
          "label": "None",
          "score": 10
        },
        {
          "label": "One or two, mild",
          "score": 7
        },
        {
          "label": "Several, clearly felt",
          "score": 4
        },
        {
          "label": "Many and intense — I feel I am losing control of my body",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 74,
      "risk": {
        "title": "The body becomes the source of fear",
        "text": "Once the physical sensations have frightened you, the brain starts to monitor them and picks them up at lower and lower intensity. That is how an ordinary palpitation or a passing dizzy spell can set off a full episode."
      }
    },
    {
      "text": "During an episode, are you afraid that something serious is happening (a heart attack, fainting, losing your mind, dying)?",
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
          "label": "Almost every time",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 82,
      "risk": {
        "title": "Catastrophic thinking that has become automatic",
        "text": "Fear of the consequences amplifies the physical reaction, and the reaction confirms the fear. This turns a wave of anxiety into a full episode. It is the central mechanism of panic and, for that reason, the one you can work on."
      }
    },
    {
      "text": "Between episodes, how often do you think another one might come?",
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
          "label": "Often — it is on my mind a lot",
          "score": 4
        },
        {
          "label": "Almost all the time — the fear of the next episode never leaves me",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 92,
      "risk": {
        "title": "Fear of fear, present all the time",
        "text": "Constant dread of the next episode keeps the nervous system on alert and even lowers the threshold at which it sets one off. From here the problem is no longer the few minutes of panic, but the hours in between."
      }
    },
    {
      "text": "Do you avoid places or situations for fear of having an episode there (transport, shops, queues, crowded places, driving, being alone)?",
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
          "label": "Often — there are a few places I steer clear of",
          "score": 4
        },
        {
          "label": "Constantly — the list of places I avoid keeps growing and my life has clearly become smaller",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 95,
      "risk": {
        "title": "The area you feel safe in gradually shrinks",
        "text": "Every avoidance brings instant relief and confirms to the brain that the place really was dangerous. The list gets longer month by month, and without help this is the usual road to not leaving the house at all."
      }
    },
    {
      "text": "Do you have habits that make you feel safer (going out only with someone, sitting near an exit, always carrying water or a pill, checking where the nearest hospital is)?",
      "options": [
        {
          "label": "None",
          "score": 10
        },
        {
          "label": "One or two, nothing important",
          "score": 7
        },
        {
          "label": "Yes, several — I stick to them quite strictly",
          "score": 4
        },
        {
          "label": "Yes, many — I will not leave the house without them",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 78,
      "risk": {
        "title": "Safety borrowed from objects and rules",
        "text": "These habits ease anxiety in the moment, but they teach the brain that without them the situation really would be dangerous. In time the list becomes compulsory, and your freedom to move depends on keeping to it."
      }
    },
    {
      "text": "Have you had episodes that woke you from sleep?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Once",
          "score": 7
        },
        {
          "label": "A few times",
          "score": 4
        },
        {
          "label": "Often — I am afraid to fall asleep",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 84,
      "risk": {
        "title": "Night-time episodes that disturb sleep",
        "text": "Episodes that happen in your sleep take away the last place that felt safe, and often lead you to put off going to bed. The lack of sleep that follows lowers the trigger threshold even further and closes the circle."
      }
    },
    {
      "text": "Have you gone to A&E or had medical tests because of these symptoms?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Once — and the results were fine",
          "score": 7
        },
        {
          "label": "A few times",
          "score": 4
        },
        {
          "label": "Several times — even though the results are fine, I still don't feel reassured",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 70,
      "risk": {
        "title": "A cycle of checks that does not reassure",
        "text": "Good results calm you for a short while, then the doubt returns and asks for another confirmation. Each normal test makes the next episode just as convincing, because the real mechanism is left untouched."
      }
    },
    {
      "text": "Do you use alcohol, sedatives or other substances to prevent or stop episodes?",
      "options": [
        {
          "label": "Never",
          "score": 10
        },
        {
          "label": "Rarely, in exceptional situations",
          "score": 7
        },
        {
          "label": "Often — I rely on them when I know a hard situation is coming",
          "score": 4
        },
        {
          "label": "Almost daily — I can't cope without them",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 86,
      "risk": {
        "title": "Dependence building on top of panic",
        "text": "Substances ease an episode in the moment and raise background anxiety between episodes, which calls for larger and larger doses. Untreated panic is one of the most common routes into dependence on sedatives."
      }
    },
    {
      "text": "How much do these episodes affect your work, studies or relationships?",
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
          "label": "Moderately — I turn things down or put them off because of them",
          "score": 4
        },
        {
          "label": "Greatly — they have clearly changed the course of things",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 90,
      "risk": {
        "title": "Costs that spill out beyond the episodes",
        "text": "Untreated panic does not stay a problem of a few minutes. It leads to missed opportunities, avoided journeys and strained relationships. These losses are far harder to recover than the cause is to treat."
      }
    },
    {
      "text": "How have the episodes changed over the last few months?",
      "options": [
        {
          "label": "They have become less frequent or stopped",
          "score": 10
        },
        {
          "label": "About the same",
          "score": 7
        },
        {
          "label": "They have become more frequent or more intense",
          "score": 4
        },
        {
          "label": "They have clearly got worse — they are much more frequent than at the start",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 93,
      "risk": {
        "title": "A worsening trend is already in place",
        "text": "A rising frequency points to an active mechanism that keeps itself going, not a chance variation. Without an assessment, the usual direction is towards more frequent episodes and an ever longer list of avoided situations."
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
        5
      ],
      "max": 4,
      "weight": 100,
      "risk": {
        "title": "The classic road to a smaller life",
        "text": "Constant dread of the next episode, combined with avoiding places, is the combination that turns panic from a few minutes' problem into one that dictates your day. Each extra month adds situations to the list, and getting them back becomes slower."
      }
    },
    {
      "q": [
        11,
        0
      ],
      "max": 4,
      "weight": 97,
      "risk": {
        "title": "Frequent episodes, on the rise",
        "text": "They already happen often and have become more frequent since the start. This is the stage where the mechanism keeps itself going, and where help gives the best return for the effort."
      }
    },
    {
      "q": [
        3,
        8
      ],
      "max": 4,
      "weight": 92,
      "risk": {
        "title": "An endless circle of medical checks",
        "text": "Believing that something serious is happening, together with repeated tests that come back fine, points to a mechanism that tests cannot resolve. The reassurance lasts until the next episode, because the real source is untouched."
      }
    },
    {
      "q": [
        9,
        6
      ],
      "max": 4,
      "weight": 88,
      "risk": {
        "title": "Getting by on sedatives and rules",
        "text": "Substances and safety habits ease anxiety in the moment and raise it between episodes. This is the usual route by which untreated panic also turns into dependence."
      }
    },
    {
      "q": [
        7,
        2
      ],
      "max": 4,
      "weight": 84,
      "risk": {
        "title": "Even sleep is no longer a safe place",
        "text": "Night-time episodes with intense physical symptoms take away the last place that felt safe. Put-off sleep lowers the trigger threshold, and episodes become predictably more frequent."
      }
    },
    {
      "q": [
        10,
        1
      ],
      "max": 4,
      "weight": 80,
      "risk": {
        "title": "Unpredictable, with real-life effects",
        "text": "Episodes hit you without warning and have already started to change things at work or in your relationships. It is the unpredictability, more than the intensity itself, that leads to the most giving up."
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
    "closing": "<strong>Worth remembering:</strong> none of these is an inevitable path. Panic has a well-described, predictable mechanism, and that is also why it is one of the conditions where specialist support makes the clearest difference.",
    "goodHeading": "Analysis of your answers",
    "goodText": "Your answers do not point to any significant risks right now. You do not avoid situations, you are not preoccupied between episodes and you do not depend on safety habits. These are the first three things to change when panic starts to settle in.",
    "bands": {
      "good": {
        "label": "No panic pattern",
        "interp": "{name}, your answers do not show an established pattern of panic attacks."
      },
      "mid": {
        "label": "A pattern is forming — worth watching",
        "interp": "{name}, your answers show episodes that have started to build their own ways of keeping themselves going."
      },
      "low": {
        "label": "An established pattern — worth an assessment",
        "interp": "{name}, your answers show frequent episodes that are already affecting several areas of your life at the same time."
      }
    }
  },
  "cta": {
    "lp": "/lp/panica",
    "eyebrow": "Next step",
    "hot": {
      "title": "You said you want to sort this out now",
      "text": "The first step is a 15-minute conversation. We tell you what can be measured in your case and what can be corrected in practice.",
      "button": "I want to sort this out"
    },
    "warm": {
      "title": "What is the next step?",
      "text": "At Emmanuel Clinix we objectively measure how activated your nervous system is, and show you what can be corrected. The first step is a conversation, not an appointment.",
      "button": "I want to see what can be done"
    },
    "nurture": {
      "title": "When you want to understand more",
      "text": "We explain what can be objectively measured in the case of panic attacks and what the results of an assessment show. No appointment, no obligation.",
      "button": "Find out more"
    }
  },
  "note": "This is an online self-assessment tool for information only. It is not a medical test and does not give a diagnosis.",
  "legal": "This questionnaire is an online self-assessment tool, provided for information and education only. It is not a medical test, it is not a diagnosis, and it does not replace a consultation with a doctor or psychologist. The score and risks shown are a guide only. They are generated automatically from the answers you gave and can vary with many individual factors. The risks described are general tendencies found in the specialist literature, not predictions about your situation. For any health concern, please speak to a specialist. Emmanuel Clinix does not guarantee any specific results from completing this test. The symptoms of a panic attack can overlap with those of medical conditions. If you have chest pain for the first time, severe difficulty breathing, loss of consciousness or symptoms that are unusual for you, call 999: a panic attack can only be confirmed after a doctor has ruled out physical causes."
};
