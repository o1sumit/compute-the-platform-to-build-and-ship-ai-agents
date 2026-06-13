export const FREE_CHAT_LIMIT = 5;

export const siteMeta = {
  title: "Peplocked — AI Peptide Protocols for Men's Performance",
  description:
    "Personalized peptide protocols, dose calculators, and bloodwork analysis. Built for men 30-50 who train hard and want research-grade specificity.",
  keywords: [
    "peptides",
    "peptide research",
    "BPC-157",
    "TB-500",
    "GLP-1",
    "peptide stacks",
    "peptide calculator",
    "peptide protocols",
    "biohacking",
    "longevity",
  ],
  ogImage: "https://peplocked.com/og-mark-512.png",
  url: "https://peplocked.com",
};

export const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "AI Peptide Research Platform",
  headlineLine1: "Research-grade protocols,",
  headlineLine2Prefix: "built to",
  rotatingWords: ["research", "stack", "recover", "optimize"],
  stats: [
    { value: "40+", label: "compounds in library" },
    { value: "3 min", label: "to a research summary" },
    { value: "24/7", label: "AI research chat" },
  ],
};

export const chatSection = {
  title: "How can I help you research?",
  subtitle:
    "Ask anything — peptides, nootropics, dosing, stacking, recovery, longevity.",
  disclaimer: "Educational research only. Not medical advice.",
  inputPlaceholder: "Ask anything…",
  signInLabel: "Sign in",
  limitBanner:
    "Sign up for unlimited research chat — free tier includes 10 messages per day.",
  emptyState: "Try a sample question below or ask your own.",
};

export const chatPrompts = [
  "Best peptides for fat loss with muscle retention?",
  "BPC-157 vs TB-500 for tendon recovery",
  "Can I stack CJC-1295 with Ipamorelin?",
  "How do I optimize testosterone before TRT?",
];

export const chatMockResponses: Record<string, string> = {
  "Best peptides for fat loss with muscle retention?":
    "For fat loss with muscle retention, research often focuses on GLP-1 agonists (e.g. retatrutide, tirzepatide) paired with GH secretagogues and adequate protein intake. BPC-157 may support GI tolerance during aggressive cuts. This is educational research only — consult a licensed clinician before any protocol.",
  "BPC-157 vs TB-500 for tendon recovery":
    "BPC-157 is commonly studied for localized tendon/ligament repair via subcutaneous injection near the injury site. TB-500 (thymosin beta-4) is often discussed for systemic healing and mobility. Many protocols combine both at conservative doses. Not medical advice — verify with your physician.",
  "Can I stack CJC-1295 with Ipamorelin?":
    "CJC-1295 and ipamorelin are frequently stacked as a GH secretagogue combo — typically evening dosing, 5 on / 2 off. Start low, monitor IGF-1 and sleep quality, and avoid stacking with other GH agents without bloodwork. Educational only.",
  "How do I optimize testosterone before TRT?":
    "Pre-TRT optimization often includes sleep, resistance training, body composition, and evaluating HPTA support compounds (kisspeptin, enclomiphene, hCG) under medical supervision. Full labs (total/free T, SHBG, estradiol, LH/FSH) should guide any approach. Not medical advice.",
};

export const genericChatReply =
  "I can help with peptide research, dosing logic, stacking considerations, and protocol structure. Share your goal and any relevant labs for a more tailored research summary. Educational only — not medical advice.";

export const features = [
  {
    number: "01",
    title: "AI Research",
    description: "Fast, cited answers for compounds, dosing, stacking.",
    stats: { value: "24/7", label: "research chat" },
  },
  {
    number: "02",
    title: "Compound Library",
    description: "Profiles with mechanism, half-life, storage, studies.",
    stats: { value: "40+", label: "compounds" },
  },
  {
    number: "03",
    title: "Dose Calculator",
    description: "Calculate dilution and target dosing precisely.",
    stats: { value: "Exact", label: "reconstitution math" },
  },
  {
    number: "04",
    title: "Vision Tools",
    description: "AI analysis on bloodwork, COAs, protocols.",
    stats: { value: "4", label: "premium tools" },
  },
];

export const problemComparison = {
  eyebrow: "The Problem",
  title: "Stop drowning in conflicting peptide advice.",
  subtitle:
    "Most guys waste weeks researching Reddit, ChatGPT, and supplement bro videos. Here's what changes with Peplocked.",
  without: {
    label: "Without Peplocked",
    sources: [
      {
        title: "reddit.com/r/Peptides",
        quote: "Has anyone tried 500mcg BPC 2x/day? Pinned a new thread…",
      },
      {
        title: "ChatGPT",
        quote: "As an AI, I can't provide medical advice…",
      },
      {
        title: "YouTube — Bro stack 2024",
        quote: "Take ALL the peptides bro, trust me…",
      },
      {
        title: "Discord — Peptide Lab",
        quote: "My buddy ran 10mg, no sides, send it.",
      },
    ],
    summary:
      "Hours of conflicting advice. No structure. No tracking. No idea what's actually working.",
  },
  with: {
    label: "With Peplocked",
    planTitle: "Your research plan",
    planSubtitle: "Recovery + Body Recomp · 8 weeks",
    items: [
      { name: "BPC-157", dose: "250mcg · 2x daily · SC near site" },
      { name: "CJC-1295 / Ipamorelin", dose: "100/200mcg · bedtime · 5 on / 2 off" },
      { name: "Retatrutide", dose: "2mg weekly · titrate up" },
    ],
    track: { label: "Track", value: "Weight · IGF-1 · hs-CRP" },
    retest: { label: "Retest", value: "Week 6 bloodwork" },
    summary:
      "One personalized research summary in 3 minutes. Tracked end-to-end. Adjusted with your bloodwork.",
  },
};

export const howItWorksSteps = [
  {
    number: "01",
    title: "Sign up",
    subtitle: "in seconds",
    description: "Email or Google. No quiz, no friction.",
  },
  {
    number: "02",
    title: "AI analyzes",
    subtitle: "your inputs",
    description:
      "Cross-referenced with verified peptide research and protocol literature.",
  },
  {
    number: "03",
    title: "Chat",
    subtitle: "with the AI",
    description:
      "Ask about peptides, dosing, stacks, recovery. Get research-grade answers instantly.",
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "your protocol",
    description:
      "Upload bloodwork, run COAs and protocol reviews, adjust based on real data.",
  },
];

export const personas = [
  {
    name: "Alex, 29",
    tags: ["Lifts 5x/week", "Cutting phase", "Muscle retention"],
    goal: "Fat loss + muscle retention",
    stack: "Retatrutide titration + BPC-157 (GI protection) + protein optimization",
  },
  {
    name: "Marcus, 38",
    tags: ["Trains 4x/week", "Entrepreneur", "High stress"],
    goal: "Cognitive performance + focus",
    stack: "Semax + Selank + NAD+ + sleep optimization",
  },
  {
    name: "David, 49",
    tags: ["Trains 3x/week", "Pre-TRT", "Recovery focus"],
    goal: "Recovery + longevity + delay TRT",
    stack: "CJC-1295/Ipamorelin + Tesamorelin + GHK-Cu recovery protocol",
  },
];

export const compoundCategories = [
  {
    title: "RECOVERY",
    subhead: "Healing, repair, regeneration",
    peptides: ["BPC-157", "TB-500", "GHK-Cu", "KPV", "Thymosin Alpha-1"],
  },
  {
    title: "BODY COMPOSITION",
    subhead: "Fat loss, muscle retention, GH optimization",
    peptides: ["Retatrutide", "Tirzepatide", "Semaglutide", "CJC-1295", "Ipamorelin", "Tesamorelin"],
  },
  {
    title: "COGNITIVE",
    subhead: "Focus, memory, neuroprotection",
    peptides: ["Semax", "Selank", "Dihexa", "Cerebrolysin"],
  },
  {
    title: "LONGEVITY",
    subhead: "Cellular health, aging, senescence",
    peptides: ["Epitalon", "GHK-Cu", "NAD+", "Foxo4-DRI", "Humanin"],
    wide: true,
  },
  {
    title: "PRE-TRT & HORMONAL",
    subhead: "Testosterone optimization, HPTA support",
    peptides: ["Kisspeptin-10", "Enclomiphene", "hCG", "Clomid", "Gonadorelin"],
    wide: true,
  },
];

export const myths = [
  {
    myth: "More peptides equal better results.",
    reality:
      "Stacking adds side effects faster than benefits. Tight protocols outperform shotgun stacks. We design around minimum effective compounds, not maximum.",
  },
  {
    myth: "BPC-157 works the same orally and injected.",
    reality:
      "Bioavailability differs significantly. Oral works for gut issues. Subcutaneous injection is needed for systemic recovery and localized tendon repair.",
  },
  {
    myth: "GLP-1s alone preserve muscle on a cut.",
    reality:
      "GLP-1s accelerate muscle loss without proper protein intake, resistance training, and timed GH support. Body composition outcomes depend on the full stack.",
  },
];

export const premiumTools = [
  {
    title: "Lab Marker Reference",
    description:
      "Look up optimal ranges, not just \"normal\" ranges, for the markers serious lifters track.",
  },
  {
    title: "Bloodwork Analysis",
    description:
      "Upload your lab panel. Get a research-grade read against your protocol with flagged markers.",
  },
  {
    title: "COA Verification",
    description:
      "Drop a vendor COA. Get a structured analysis of purity, identity, and red flags.",
  },
  {
    title: "Protocol Review",
    description:
      "Submit your written protocol. Get a critique on dose, sequencing, and risk.",
  },
];

export type ComparisonCell =
  | { kind: "yes" }
  | { kind: "no" }
  | { kind: "partial" }
  | { kind: "text"; text: string };

export const comparisonTable = {
  columns: ["Peplocked", "Generic AI", "TRT Clinic", "Reddit & Forums"],
  rows: [
    {
      label: "Personalized to your bloodwork",
      cells: [
        { kind: "yes" as const },
        { kind: "no" as const },
        { kind: "yes" as const },
        { kind: "no" as const },
      ],
    },
    {
      label: "Tracks your research plan over time",
      cells: [
        { kind: "yes" as const },
        { kind: "no" as const },
        { kind: "partial" as const },
        { kind: "no" as const },
      ],
    },
    {
      label: "Current peptide research",
      cells: [
        { kind: "yes" as const },
        { kind: "text" as const, text: "Outdated" },
        { kind: "text" as const, text: "Limited" },
        { kind: "text" as const, text: "Mixed" },
      ],
    },
    {
      label: "Safety guardrails on dosing",
      cells: [
        { kind: "yes" as const },
        { kind: "no" as const },
        { kind: "yes" as const },
        { kind: "no" as const },
      ],
    },
    {
      label: "Cost",
      cells: [
        { kind: "text" as const, text: "Free" },
        { kind: "text" as const, text: "Free" },
        { kind: "text" as const, text: "$200-500/visit" },
        { kind: "text" as const, text: "Free" },
      ],
    },
    {
      label: "Time to a personalized research summary",
      cells: [
        { kind: "text" as const, text: "3 minutes" },
        { kind: "text" as const, text: "Never" },
        { kind: "text" as const, text: "2-6 weeks" },
        { kind: "text" as const, text: "Hours of research" },
      ],
    },
  ],
};

export const pricingPlans = [
  {
    name: "Free",
    description: "No card required",
    price: { monthly: 0, annual: 0 },
    annualNote: null,
    features: [
      "10 AI chat messages / day",
      "Reconstitution Calculator",
      "Compound Library preview (5 compounds)",
      "Cancel anytime",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Explorer",
    description: "Most popular",
    price: { monthly: 19, annual: 16 },
    annualNote: "or $190/yr — 2 months free",
    features: [
      "Unlimited AI Research Chat",
      "30 tool credits / month (Blood Work, COA, Protocol Review)",
      "Full Compound Library (40+ compounds)",
      "Reconstitution Calculator",
      "Custom hormone protocol field",
    ],
    cta: "Start Explorer",
    highlight: true,
  },
  {
    name: "Locked In",
    description: "Full command center",
    price: { monthly: 39, annual: 29 },
    annualNote: "or $349/yr — save $119",
    features: [
      "Everything in Explorer",
      "120 tool credits / month",
      "Lab Marker Reference Tool",
      "Priority AI Chat Queue",
      "Early access to new tools",
    ],
    cta: "Get Locked In",
    highlight: false,
  },
];

export const faqItems = [
  {
    question: "Is this medical advice?",
    answer:
      "No. Peplocked is educational only. For medical decisions consult your physician.",
  },
  {
    question: "Do you ship compounds?",
    answer:
      "No. We help you understand and optimize protocols. Sourcing is on you.",
  },
  {
    question: "Is the assessment really free?",
    answer:
      "Yes. You get a starter protocol on the spot. Subscribe to unlock dose math, ongoing AI chat, tracking, and PDF export.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Anytime, from settings. Your data stays exportable for 30 days after cancellation.",
  },
];

export const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
  Support: [{ name: "Contact", href: "mailto:support@peplocked.com" }],
};

export function getChatResponse(message: string): string {
  const normalized = message.trim();
  if (chatMockResponses[normalized]) {
    return chatMockResponses[normalized];
  }
  for (const [prompt, response] of Object.entries(chatMockResponses)) {
    if (
      normalized.toLowerCase().includes(prompt.slice(0, 20).toLowerCase()) ||
      prompt.toLowerCase().includes(normalized.slice(0, 20).toLowerCase())
    ) {
      return response;
    }
  }
  return genericChatReply;
}
