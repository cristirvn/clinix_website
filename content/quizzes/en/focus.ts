/**
 * English translation of content/quizzes/ro/focus.ts — same structure, scores and triggers.
 */
import type { ScoredQuiz } from "@/content/quizzes/types";

export const FOCUS: ScoredQuiz = {
  "slug": "focus",
  "route": "focus",
  "seo": {
    "title": "Focus and productivity — self-assessment test",
    "description": "A self-assessment test for focus and productivity: 11 questions, a score from 1 to 10 and the risks your answers may point to."
  },
  "hero": {
    "eyebrow": "Self-assessment test · 11 questions",
    "title": "Focus and productivity",
    "subtitle": "How much of your real capacity are you actually using?",
    "lead": "Answer the 11 questions below honestly, thinking about your last few months at work. At the end you get a score from 1 to 10 and the specific risks your answers may point to.",
    "startButton": "Start the test →"
  },
  "scoreLabel": "Your score",
  "questions": [
    {
      "text": "How long can you work with focus, without interruption, on one important task?",
      "options": [
        {
          "label": "Over 60 minutes, without effort",
          "score": 10
        },
        {
          "label": "30–60 minutes",
          "score": 7
        },
        {
          "label": "10–30 minutes — then my mind wanders",
          "score": 4
        },
        {
          "label": "Under 10 minutes — I keep jumping from one thing to another",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 75,
      "risk": {
        "title": "Declining ability to concentrate",
        "text": "Deep work needs about 20 minutes just to get going. Below that, you never reach it. The more the pattern repeats, the more the brain loses its training in holding attention."
      }
    },
    {
      "text": "How often do you put off important tasks, even though you know exactly what needs doing?",
      "options": [
        {
          "label": "Never — I go straight to what matters",
          "score": 10
        },
        {
          "label": "Rarely, only with very unpleasant tasks",
          "score": 7
        },
        {
          "label": "Often — I start the day with small jobs and put off the hard ones",
          "score": 4
        },
        {
          "label": "Almost always — important things get pushed back for weeks",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 80,
      "risk": {
        "title": "Putting things off has a real cost",
        "text": "Putting things off is not a problem of discipline but of emotional regulation. The brain avoids discomfort, not the work itself. Each delay increases anxiety about the task, which makes the next attempt even harder."
      }
    },
    {
      "text": "How often do you check your phone during working hours?",
      "options": [
        {
          "label": "Rarely — only on breaks, on purpose",
          "score": 10
        },
        {
          "label": "Once an hour, briefly",
          "score": 7
        },
        {
          "label": "Every 10–20 minutes",
          "score": 4
        },
        {
          "label": "Constantly — my hand reaches for it by itself, dozens of times a day",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 65,
      "risk": {
        "title": "Permanently fragmented attention",
        "text": "After each interruption, getting fully back to the task takes over 20 minutes on average. With dozens of checks a day, there is no stretch left in which the brain works at full capacity."
      }
    },
    {
      "text": "How is your mental energy through the working day?",
      "options": [
        {
          "label": "Steady — I work well from morning to evening",
          "score": 10
        },
        {
          "label": "Good in the morning, then it drops in the afternoon",
          "score": 7
        },
        {
          "label": "Unsteady — I get 2–3 good hours, then drag myself through the rest of the day",
          "score": 4
        },
        {
          "label": "Low all the time — I work in a fog for most of the day",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 70,
      "risk": {
        "title": "Productive windows getting shorter",
        "text": "When only a few hours a day are usable, the rest goes on filler activities that look like work. The gap between hours spent and results achieved grows month by month."
      }
    },
    {
      "text": "How many of the tasks you start do you actually finish?",
      "options": [
        {
          "label": "Almost all — I finish what I start",
          "score": 10
        },
        {
          "label": "Most of them, with small delays",
          "score": 7
        },
        {
          "label": "About half — I have a lot of abandoned projects",
          "score": 4
        },
        {
          "label": "Few — I start with enthusiasm and give up along the way",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 72,
      "risk": {
        "title": "Unfinished projects piling up",
        "text": "Everything you start and abandon stays active in your working memory and uses up resources in the background. The cost is not just the lost project, but also your confidence that next time you will see something through."
      }
    },
    {
      "text": "At the start of the day, how clear are you about the 1–3 most important things to do?",
      "options": [
        {
          "label": "Very clear — I know them in advance and start with them",
          "score": 10
        },
        {
          "label": "Fairly clear, but I decide as I go",
          "score": 7
        },
        {
          "label": "Vague — I react to whatever comes up (emails, messages, urgent matters)",
          "score": 4
        },
        {
          "label": "Not at all — the days run me, not the other way round",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 68,
      "risk": {
        "title": "Days driven from outside",
        "text": "Without priorities set in advance, the day fills up with other people's urgent matters, which are always available. The result is feeling busy all the time, with no progress on what really matters."
      }
    },
    {
      "text": "How often do you work on several things at once (multiple tabs, email open, conversations in parallel)?",
      "options": [
        {
          "label": "Rarely — I work one task at a time",
          "score": 10
        },
        {
          "label": "Sometimes, when it's busy",
          "score": 7
        },
        {
          "label": "Often — I always have ten tabs and three conversations going",
          "score": 4
        },
        {
          "label": "All the time — I can't remember when I last worked on just one thing",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 60,
      "risk": {
        "title": "Constant switching costs more than it seems",
        "text": "The brain does not work in parallel. It switches, and each switch leaves some attention stuck on the previous task. The effect is a whole day spent at a fraction of your capacity."
      }
    },
    {
      "text": "How do you feel at the end of an ordinary working day, in terms of what you have achieved?",
      "options": [
        {
          "label": "Satisfied — I did what I set out to do",
          "score": 10
        },
        {
          "label": "OK — I could have done more, but it's reasonable",
          "score": 7
        },
        {
          "label": "Frustrated — I was busy all day but produced nothing important",
          "score": 4
        },
        {
          "label": "Guilty and demoralised — the days pass and the results don't come",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 78,
      "risk": {
        "title": "Effort cut off from results",
        "text": "When effort no longer turns into results, motivation drops, and lower motivation produces even weaker days. This is the loop that leads capable people to believe they are not."
      }
    },
    {
      "text": "How much do your sleep, diet or lack of movement affect your ability to work?",
      "options": [
        {
          "label": "Not at all — my lifestyle supports my performance",
          "score": 10
        },
        {
          "label": "A little — I slip up, but I catch up",
          "score": 7
        },
        {
          "label": "Noticeably — I know I live in a way that undermines my work",
          "score": 4
        },
        {
          "label": "A lot — I sleep badly, eat erratically, get no exercise, and it shows in everything",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 74,
      "risk": {
        "title": "Physical foundation worn away",
        "text": "Sleep, blood sugar and movement are the infrastructure that attention runs on, and no productivity method makes up for their absence. Without them, trying to organise yourself better gives smaller and smaller returns."
      }
    },
    {
      "text": "How big is the gap between what you know you could produce and what you actually produce?",
      "options": [
        {
          "label": "Small — I work close to my potential",
          "score": 10
        },
        {
          "label": "Moderate — I have some in reserve, but I'm making progress",
          "score": 7
        },
        {
          "label": "Large — I use perhaps half of my capacity",
          "score": 4
        },
        {
          "label": "Huge — I feel I'm wasting my potential, and it wears me down",
          "score": 1
        }
      ],
      "triggers": [
        4,
        1
      ],
      "weight": 85,
      "risk": {
        "title": "A gap that starts to cost you emotionally",
        "text": "The distance between what you can do and what you do does not stay a matter of efficiency. Over time it becomes a constant source of frustration and self-criticism. This is when a productivity problem starts to become a problem of mood."
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
        1,
        7
      ],
      "max": 4,
      "weight": 100,
      "risk": {
        "title": "A loop between putting things off and feeling demoralised",
        "text": "You put off what matters, and at the end of the day you feel you have produced nothing. Each day like this makes the next one harder, and the pattern deepens on its own, however many methods you try."
      }
    },
    {
      "q": [
        0,
        2
      ],
      "max": 4,
      "weight": 96,
      "risk": {
        "title": "Attention fragmented below the useful threshold",
        "text": "You don't reach deep work, and you interrupt yourself every few minutes. With under 20 uninterrupted minutes, the brain never gets into the state where it really produces."
      }
    },
    {
      "q": [
        8,
        3
      ],
      "max": 4,
      "weight": 90,
      "risk": {
        "title": "A physical foundation that no longer supports attention",
        "text": "Unsteady mental energy, alongside a lifestyle that undermines it, is not fixed by getting organised. It is the only combination on this list where the problem is not about method but about biology."
      }
    },
    {
      "q": [
        9,
        4
      ],
      "max": 4,
      "weight": 86,
      "risk": {
        "title": "Unused potential, with an emotional cost",
        "text": "Abandoned projects and the gap you feel between what you can do and what you do feed each other. Over time, the problem moves out of productivity and into self-confidence."
      }
    },
    {
      "q": [
        5,
        6
      ],
      "max": 4,
      "weight": 78,
      "risk": {
        "title": "A day driven entirely from outside",
        "text": "With no clear priorities and ten things open at once, the day fills up with other people's urgent matters. The result is being constantly busy with no progress, which is hard to see from the inside."
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
    "closing": "<strong>Worth remembering:</strong> none of these is a path you must follow. The ability to concentrate is not a character trait. It can be measured objectively, and once you can see where it breaks down, it can be trained.",
    "goodHeading": "Analysis of your answers",
    "goodText": "Your answers do not point to significant risks right now. You sustain your concentration, you finish what you start and results follow your effort. These are the first three things to be lost.",
    "bands": {
      "good": {
        "label": "Solid focus",
        "interp": "{name}, your answers suggest an ability to concentrate that supports your work."
      },
      "mid": {
        "label": "Fragmented focus — visible losses",
        "interp": "{name}, your answers show fragmented attention, with a growing gap between effort and results."
      },
      "low": {
        "label": "Ability to concentrate severely affected",
        "interp": "{name}, your answers suggest attention difficulties that are already affecting several areas at once."
      }
    }
  },
  "cta": {
    "lp": "/lp/focus",
    "eyebrow": "Next step",
    "hot": {
      "title": "You said you want to sort this out now",
      "text": "The first step is a 15-minute conversation, where we tell you what can be measured in your case and what can realistically be trained.",
      "button": "I want to deal with this"
    },
    "warm": {
      "title": "What is the next step?",
      "text": "At Emmanuel Clinix we objectively measure attention patterns in brain activity and show you what can be trained. The first step is a conversation, not an appointment.",
      "button": "I'd like to see what can be done"
    },
    "nurture": {
      "title": "When you're ready to understand more",
      "text": "We explain how attention is measured objectively and what the results of an assessment show. No appointment, no obligation.",
      "button": "Find out more"
    }
  },
  "note": "This is an online self-assessment tool, for information only. It is not a medical test and it does not give a diagnosis.",
  "legal": "This questionnaire is an online self-assessment tool, for information and education only. It is not a medical test, it is not a diagnosis, and it does not replace a consultation with a doctor or psychologist. The score and risks shown are indicative only. They are generated automatically from the answers you gave and can vary with many individual factors. The risks described are general tendencies found in the specialist literature, not predictions about your situation. For any health concern, please speak to a qualified professional. Emmanuel Clinix does not guarantee any specific results from completing this test."
};
