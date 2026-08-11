export const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    short:
      "We dive deep into your goals, users, and constraints before a single pixel is drawn.",
    detail:
      "We start by understanding your business, users, goals, constraints, and the problem that actually needs solving.",
    tags: ["Research", "Users", "Goals"],
  },

  {
    number: "02",
    title: "DEFINE",
    short:
      "Insights become a sharp, shared definition of the problem worth solving.",
    detail:
      "We turn everything we learn into a clear definition of the problem, requirements, priorities, and direction.",
    tags: ["Requirements", "Strategy", "Scope"],
  },

  {
    number: "03",
    title: "IDEATE",
    short:
      "We explore widely — concepts, architectures, and interactions — before committing.",
    detail:
      "We explore multiple directions and evaluate them against your goals, users, technical constraints, and business requirements.",
    tags: ["Workshops", "Concepts", "Architecture"],
  },

  {
    number: "04",
    title: "PROTOTYPE",
    short:
      "Ideas turn into tangible, testable artifacts within days, not months.",
    detail:
      "We turn the strongest ideas into tangible interfaces, workflows, and prototypes that can be experienced and tested early.",
    tags: ["UX", "Prototype", "Experience"],
  },

  {
    number: "05",
    title: "VALIDATE",
    short:
      "Real users and real data decide what survives and what gets reworked.",
    detail:
      "We test assumptions with real users and real feedback, refining the product before investing heavily in the final build.",
    tags: ["Testing", "Feedback", "Iteration"],
  },

  {
    number: "06",
    title: "BUILD & EVOLVE",
    short:
      "We turn the validated direction into a product built to grow.",
    detail:
      "We build, launch, monitor, and continuously evolve the product as your users and business change.",
    tags: ["Development", "Launch", "Growth"],
  },
];

export const timelinePoints = [
  { x: 100, y: 130 },
  { x: 72, y: 360 },
  { x: 128, y: 590 },
  { x: 72, y: 820 },
  { x: 128, y: 1050 },
  { x: 100, y: 1280 },
];

export const timelinePath = `
  M100 20
  C100 70 100 80 100 130
  C100 210 72 280 72 360
  C72 440 128 510 128 590
  C128 670 72 740 72 820
  C72 900 128 970 128 1050
  C128 1130 100 1200 100 1280
  C100 1330 100 1360 100 1410
`;