// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Sai Teja Kandrekula",
  shortName: "Sai Teja",
  initials: "SK",
  title: ["Pharma Forecasting", "Commercial Analytics", "NIPER Mohali"],
  typingPrefix: "I'm all about that",
  typingWords: ["Forecasting", "Monte Carlo", "Epidemiology", "Market Insights"],
  typingSuffix: "magic!",
  location: "Pune, India",
  // Put a photo at public/photo.jpg and set this to "/photo.jpg"
  photo: "/photo.png" as string | null,
  // Put your CV at public/cv.pdf and set this to "/cv.pdf"
  cv: null as string | null,
  openToWork: false,
  intro: [
    "Pharmaceutical forecasting professional with ~4 years of experience across oncology and vaccines, covering G7 markets (US, EU5, Japan) and EMEA. I build patient-based and trend-based models, run scenario and Monte Carlo analyses, and support long-range planning cycles.",
    "Trained in Pharmacology & Toxicology at NIPER Mohali, I bring the science of how drugs work together with the commercial side of how they reach patients, and turn both into clear, client-ready insights.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/sai-teja-kandrekula/",
    github: "https://github.com/kandrekulaTeja",
    email: null as string | null, // e.g. "you@example.com"
  },
};

export const about = {
  paragraphs: [
    "I started in pharmacy, moved into experimental pharmacology for my master's at NIPER Mohali, and found my place where science meets business: pharmaceutical forecasting.",
    "Today I help translate market assumptions (epidemiology, eligible populations, vaccination coverage, market share and pricing) into demand and revenue forecasts that feed business planning. I enjoy making models cleaner, automating the repetitive parts with VBA, and explaining what the numbers mean to stakeholders.",
  ],
  facts: [
    { label: "Based in", value: "Pune, India" },
    { label: "From", value: "Bhimavaram, Andhra Pradesh" },
    { label: "Focus", value: "Oncology & vaccine forecasting" },
    { label: "Languages", value: "English, Telugu" },
  ],
};

export const experience = [
  {
    role: "Pharmaceutical Forecasting",
    org: "EY (Ernst & Young)",
    period: "Present",
    points: [
      "Global vaccine forecasting for a leading pharma client: long-range operational planning (LROP) and business planning cycles (BPC).",
      "Regional roll-ups and global consolidation, forecast extensions, and variance analysis between forecast cycles.",
      "Built Monte Carlo simulations across 12 tender markets (triangular distributions, 1,000+ iterations) to give P10 / P50 / P90 ranges for doses and revenue.",
      "Modelled tender and access-driven markets: birth cohorts, eligible populations, coverage-rate analogues and overlap logic to avoid double counting.",
    ],
  },
  {
    role: "Analyst",
    org: "Chryselys",
    period: "Oct 2024 – 2026",
    points: [
      "Epidemiology- and trend-based forecasts to estimate market potential, patient flow and brand performance.",
      "Pipeline assessments: clinical trials, competitor launch timelines and probability of success.",
      "Sensitivity analysis, Monte Carlo simulation and analog analysis to test forecast assumptions.",
      "Bass Diffusion uptake models in VBA to visualise brand adoption.",
    ],
  },
  {
    role: "Analyst",
    org: "IQVIA",
    period: "Jan 2024 – Oct 2024",
    points: [
      "Managed vaccine brand dashboards covering ATU insights, financial performance and executive summaries.",
      "Analog analysis to benchmark product performance and uptake.",
      "Volume-trend analysis before and after companion-diagnostic approval across the US and EU5.",
    ],
  },
  {
    role: "Placement Coordinator",
    org: "NIPER Mohali",
    period: "2021 – 2023",
    points: [
      "Link between recruiters and students; managed student profiles and ran placement drives end to end.",
    ],
  },
];

export const highlights = [
  { value: "$10B+", label: "Oncology pipeline portfolio supported in global forecasting" },
  { value: "12", label: "Tender markets modelled with Monte Carlo simulation" },
  { value: "G7 + EMEA", label: "Markets covered: US, EU5, Japan and beyond" },
  { value: "AIR 60", label: "NIPER JEE, plus GPAT qualified" },
];

export const skills = [
  {
    group: "Forecasting",
    items: [
      "Patient-based models",
      "Trend-based models",
      "Epidemiology",
      "Demand & revenue forecasting",
      "Scenario analysis",
      "Monte Carlo simulation",
      "Tender forecasting",
      "Analog analysis",
      "Bass Diffusion",
      "LROP / BPC cycles",
    ],
  },
  {
    group: "Analytics & Code",
    items: ["Excel", "VBA", "SQL", "Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
  },
  {
    group: "BI & Visualisation",
    items: ["Power BI", "Tableau", "Dashboards", "Executive summaries"],
  },
  {
    group: "Pharma Data",
    items: [
      "IQVIA MIDAS",
      "Evaluate Pharma",
      "TrialTrove",
      "BioMedTracker",
      "AlphaSense",
      "Symphony Health",
      "Komodo Health",
    ],
  },
];

export const projects = [
  {
    name: "Pharma CI Semantic Search",
    description:
      "A competitive-intelligence search tool: ask questions in plain English and get matching pharma insights, filterable by indication, phase, sentiment and insight type (efficacy, safety, pricing, regulatory).",
    tags: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers"],
    repo: "https://github.com/kandrekulaTeja/pharma-ci-app",
    live: null as string | null,
  },
];

export const education = [
  {
    degree: "M.S. (Pharm), Pharmacology & Toxicology",
    school: "NIPER SAS Nagar, Mohali",
    period: "2021 – 2023",
    note: "Thesis: TRPC5 modulators in an STZ-induced diabetic neuropathic pain model (Von Frey, Hargreaves, MDA and GSH assays).",
  },
  {
    degree: "B.Pharmacy",
    school: "Acharya Nagarjuna University",
    period: "2017 – 2021",
    note: "Qualified GPAT and NIPER JEE (All India Rank 60).",
  },
];

export const achievements = [
  "Winner, Simplicity Shift Hackathon",
  "All India Rank 60, NIPER JEE",
  "GPAT qualified",
  "Delivered a full LROP forecast cycle (2026)",
  "Led forecasts for multiple LDRC studies",
];

export const interests = [
  { title: "Himalayan treks", text: "Planning winter treks, with Kuari Pass next on the list." },
  { title: "Markets & investing", text: "Learning to read financials and value businesses." },
  { title: "Tech & AI", text: "Following AI and semiconductors, and building small data tools." },
  { title: "Writing", text: "Wrote Curious Pharma, a blog explaining pharmacology simply." },
];
