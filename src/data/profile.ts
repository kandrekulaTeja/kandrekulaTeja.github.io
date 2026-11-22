// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Sai Teja Kandrekula",
  shortName: "Sai Teja",
  initials: "SK",
  title: ["Pharma Forecasting", "Commercial Analytics", "NIPER Mohali"],
  typingPrefix: "I'm all about that",
typingPrefix: "I turn data into",

typingWords: [
  "Forecasting",
  "Market Insights",
  "Business Decisions",
  "Revenue Projections",
  "Strategic Insights",
  "Predictive Models",
  "Scenario Analysis",
  "Monte Carlo Simulations"
],
  typingSuffix: "magic!",
  location: "Hyderabad, India",
  // Put a photo at public/photo.jpg and set this to "/photo.jpg"
  photo: "/photo.png.png" as string | null,
  // Put your CV at public/cv.pdf and set this to "/cv.pdf"
  cv: null as string | null,
  openToWork: false,
intro: [
  "Pharmaceutical forecasting professional with ~3.5 years of experience in commercial forecasting and analytics, currently working at EY on global RSV vaccine forecasting for Merck. I support Long-Range Operational Planning (LROP), forecast extensions, regional roll-ups, and Business Planning Cycle (BPC) alignment, translating market-level assumptions into global demand and revenue projections.",
  
  "My work involves evaluating epidemiological trends, eligible populations, vaccination coverage, market share, and pricing assumptions to develop and refine forecasting scenarios. I also work on Monte Carlo simulations, forecast consolidation, and process automation using Excel VBA, with a focus on improving analytical efficiency and delivering clear, actionable insights to support business planning and strategic decisions."
],
  links: {
    linkedin: "https://www.linkedin.com/in/sai-teja-kandrekula/",
    github: "https://github.com/kandrekulaTeja",
    email: null as string | null, // e.g. "you@example.com"
  },
};

export const about = {
  paragraphs: [
  "My journey began with a Bachelor’s in Pharmacy, followed by a master's in Pharmacology and Toxicology at NIPER Mohali, where I developed a strong foundation in experimental research and scientific analysis. Over time, I discovered my interest in pharmaceutical forecasting, where I could combine scientific understanding, data analytics, and business strategy.",
  "Currently at EY, I work on global pharmaceutical forecasting, translating market dynamics and assumptions into demand and revenue projections that support strategic and financial planning. I enjoy building and refining forecasting models, automating workflows using Excel VBA, performing scenario and sensitivity analyses, and turning complex data into meaningful insights for stakeholders."
]
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
  "Supported global RSV vaccine forecasting for Merck, contributing to Long-Range Operational Planning (LROP), forecast extensions, and Business Planning Cycle (BPC) submissions.",
  
  "Performed regional roll-ups, global forecast consolidation, and variance analysis across forecast cycles to identify key drivers of changes in doses and revenue.",
  
  "Developed Monte Carlo simulations across 12 tender markets using triangular distributions and 1,000+ iterations to quantify market share uncertainty and generate P10, P50, and P90 ranges for doses and revenue.",
  
  "Conducted scenario and sensitivity analyses to assess the impact of changes in market share, vaccination coverage, eligible populations, and other key assumptions on demand and revenue forecasts.",
  
  "Built waterfall charts and analytical visualizations to decompose forecast movements, explain key volume and revenue drivers, and communicate variances between planning cycles to stakeholders."
],
  },
  {
    role: "Analyst",
    org: "Chryselys",
    period: "Oct 2024 – April-2026",
  points: [
  "Supported patient-based and trend-based forecasting models across EMEA markets, with a focus on oncology and glaucoma portfolios, assessing patient populations, treatment dynamics, market potential, and brand performance.",
    
  "Performed scenario and sensitivity analyses, Monte Carlo simulations, and analog-based assessments to evaluate forecast assumptions, quantify uncertainty, and understand key business drivers.",
  
  "Contributed to the development and ongoing enhancement of a cloud-based forecasting platform, supporting model implementation, forecast workflows, and analytical capabilities.",
  
  "Developed Bass Diffusion adoption models using Excel VBA to project product uptake, visualize market penetration, and assess brand adoption trajectories."
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
  {
    value: "12",
    label: "Tender markets analysed using Monte Carlo simulations"
  },
  {
    value: "G7 + EMEA",
    label: "Global forecasting experience across oncology and vaccine markets"
  },
  {
    value: "AIR 60",
    label: "NIPER JEE | GPAT Qualified"
  },
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
