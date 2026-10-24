// All site copy lives here. Source: Toluwanimi Akinyemi CV & Capstone Portfolios.
// Updated with verified certifications, academic PGD research, and 789+ nodes telemetry.

export const profile = {
  name: "Toluwanimi Taiwo Akinyemi",
  preferredName: "Toluwanimi Akinyemi",
  role: "Operations, Cloud, Data & AI Systems Specialist",
  location: "Available for Remote & Hybrid Worldwide",
  phone: "+234 813 589 8224",
  phoneHref: "tel:+2348135898224",
  email: "seun.akin43@gmail.com",
  linkedinLabel: "Toluwanimi Akinyemi",
  linkedinUrl: "https://www.linkedin.com/in/akinyemi-toluwanimi/",
  githubUrl: "https://github.com/seunakin",
  intro:
    "I am Toluwanimi Akinyemi. An Operations, Cloud, and Data Engineer with 6 years of combined professional experience across telecommunications infrastructure surveillance, enterprise business intelligence, Microsoft Azure zero-trust security, and autonomous AI automation. From monitoring 789+ live cellular nodes at 99.8% SLA to modeling 100,000+ data records in Power BI, authoring Tableau dashboards, and building production AI workflows, I engineer resilient systems that turn operational complexity into deterministic performance.",
  liveApp: {
    name: "ExpenseIQ",
    url: "https://expense-ai-pro-14.lovable.app/login",
    tagline: "AI-powered enterprise expense management system",
    credentials: {
      username: "manager@test.com",
      password: "test@1234",
      role: "Finance Director / Approver Sandbox"
    }
  },
  proof: [
    "Diploma in AI Automation · Utiva (2026)",
    "Diploma in Cloud Computing · SDC Canada (#2325689)",
    "99.8% SLA across 789+ nodes",
    "n8n · Make · Supabase · Azure",
  ],
};

export const summary = [
  "Operations, Cloud, and Data Engineer with 6 years of combined professional experience across mission-critical telecommunications infrastructure, enterprise business intelligence, Microsoft Azure zero-trust security, and autonomous AI automation.",
  "At Pan African Towers (Nov 2022 – Present), I monitor 789+ network nodes in real time across Nigeria on OWS and Galooli RMS dashboards, sustaining 99.8% nationwide SLA compliance and cutting MTTR by 30% through Root Cause Analysis (RCA) templates.",
  "I govern enterprise data in Power BI, Tableau, and SQL—modeling 100,000+ civic records at Kimpact Development Initiative, analyzing 150,000+ electric vehicle registrations in Tableau, and structuring third normal form (3NF) relational databases.",
  "Holding an ACTD-accredited Diploma in AI Automation and an SDC Canada-endorsed Diploma in Cloud Computing (#2325689), I engineer production workflows in n8n, Make, and frontier LLMs (OpenAI, Claude, Gemini, OpenRouter), and deploy zero-public-IP perimeter topologies on Microsoft Azure.",
];

export const stats = [
  { id: "nodes", value: 789, suffix: "+", label: "Network nodes monitored in real time across Nigeria" },
  { id: "sla", value: 99.8, suffix: "%", decimals: 1, label: "SLA compliance sustained nationwide" },
  { id: "mttr", value: 30, suffix: "%", prefix: "−", label: "Mean time to repair, via RCA templates" },
  { id: "efficiency", value: 40, suffix: "%", prefix: "+", label: "Operational efficiency from fault-handling workflows" },
  { id: "throughput", value: 25, suffix: "%", prefix: "+", label: "Network throughput, with engineering teams" },
  { id: "voters", value: 100000, suffix: "+", label: "Voter records modeled in Power BI & SQL" },
];

export const experience = [
  {
    role: "Network Operations Centre Operator",
    org: "Pan African Towers Ltd",
    place: "Nigeria",
    period: "Nov 2022 – Present",
    current: true,
    bullets: [
      "Monitor 789+ network nodes in real time on OWS and RMS dashboards, sustaining 99.8% SLA compliance through predictive failure analysis.",
      "Cut troubleshooting time and mean time to repair (MTTR) by 30% across all regions by designing standardized RCA templates.",
      "Improved operational efficiency by 40% and reduced network downtime by optimizing fault-handling workflows.",
      "Partnered with engineering teams on infrastructure upgrades that increased network throughput by 25%.",
    ],
  },
  {
    role: "Data Analyst / IT Support Officer (Volunteer)",
    org: "Kimpact Development Initiative",
    place: "Osogbo",
    period: "Sep 2020 – Oct 2022",
    bullets: [
      "Built Power BI dashboards tracking 100,000+ voter records for electoral analytics and civic oversight reports.",
      "Improved data accuracy by 18% through data cleaning, pattern identification, validation and data governance protocols.",
      "Reduced server downtime by 35% through proactive operating system updates and automation.",
      "Gave technical support to 50+ staff members, improving day-to-day operational efficiency.",
    ],
  },
  {
    role: "Logistics / Operations Officer",
    org: "IFEX Express Limited",
    place: "Osogbo",
    period: "Aug 2020 – Jun 2022",
    bullets: [
      "Improved delivery turnaround by 25% by optimizing fleet scheduling and multi-point route planning.",
      "Reduced transportation and fuel operational costs by coordinating logistics and vendor activities.",
      "Analyzed operational performance data to identify cost savings and process improvements.",
      "Maintained accurate logistics documentation and operational records supporting compliance and accountability.",
    ],
  },
  {
    role: "Financial Risk Analyst (Graduate Intern)",
    org: "Leadway Assurance Limited",
    place: "Lagos",
    period: "Apr 2018 – Sep 2018",
    bullets: [
      "Analyzed 100+ monthly financial reports, reducing client portfolio exposure risks by 25%.",
      "Developed a customer transaction database that improved bookkeeping efficiency by 30%.",
      "Prepared analytical summaries and audit reports for senior management.",
    ],
  },
];

export const skills = [
  {
    id: "ai",
    label: "AI & Automation",
    items: ["n8n", "Make.com", "Zapier", "Claude CLI", "OpenAI API", "Claude API", "OpenRouter", "Gemini API", "AI Prompting", "Workflow Automation"],
  },
  {
    id: "systems",
    label: "Cloud & Security Infrastructure",
    items: ["Microsoft Azure", "Azure Bastion", "DDoS Network Protection", "Microsoft Entra ID (PIM)", "Azure RBAC", "NSG Firewall Rules", "VNet Peering", "Linux (Ubuntu)", "Windows Server", "AWS", "Google Cloud"],
  },
  {
    id: "network",
    label: "Network Operations",
    items: ["Fault Management", "Root Cause Analysis (RCA)", "Power Uptime Optimization", "SLA Compliance", "Real-Time Monitoring (789+ Nodes)", "OWS Monitoring", "Galooli RMS", "AIO Systems"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    items: ["Power BI", "Excel (Pivot Tables, DAX)", "SQL", "Tableau", "Data Governance", "Audit Reporting", "Predictive Forecasting"],
  },
  {
    id: "db",
    label: "Databases & Storage",
    items: ["PostgreSQL", "Supabase", "Azure Storage", "Airtable", "MySQL", "SQLite"],
  },
  {
    id: "monitoring",
    label: "Systems & Collaboration",
    items: ["Microsoft 365", "PowerShell", "Active Directory", "Git", "GitHub", "Jira & Confluence", "Microsoft Teams", "Slack"],
  },
];

export interface AcademicResearch {
  title: string;
  forum: string;
  date: string;
  theme: string;
  presentationCertId: string;
  presentationCertImg: string;
  participationCertId: string;
  participationCertImg: string;
  signatories: string;
}

export const education = [
  { 
    degree: "Postgraduate Diploma in Financial Mathematics (PGD)", 
    school: "Osun State University", 
    place: "Osogbo, Nigeria",
    highlight: "Advanced quantitative methods, stochastic calculus, financial statistics, and finite-difference computational modeling.",
    research: {
      title: "Numerical Solution of European Options Using Finite Difference Methods",
      forum: "31st Annual Colloquium & Congress (Virtual) · The Nigerian Association of Mathematical Physics (NAMP) in conjunction with Osun State University",
      date: "November 3–4, 2021",
      theme: "Emerging Impact of Mathematical Physics in Combating COVID-19 Pandemic",
      presentationCertId: "UNIOSUNNAMP2021M0024_24",
      presentationCertImg: "/academic/UNIOSUNNAMP2021M0024_24.jpg",
      participationCertId: "UNIOSUNNAMP2021M0024",
      participationCertImg: "/academic/UNIOSUNNAMP2021M0024.jpg",
      signatories: "Prof. Amos O. Popoola (LOC Chairman) & Prof. Garba Babaji (President, NAMP)",
    }
  },
  { 
    degree: "Bachelor of Science in Mathematics", 
    school: "Federal University of Agriculture, Abeokuta (FUNAAB)", 
    place: "Abeokuta, Nigeria",
    highlight: "Pure & applied mathematics, numerical analysis, computational algorithms, and linear algebra."
  },
];

export const certifications = [
  {
    title: "Diploma in AI Automation",
    issuer: "Utiva (ACTD-accredited)",
    year: "October 2026",
    detail: "ACTD Credential ID: 34RVXFBKSU73N",
    featured: true,
  },
  { 
    title: "Diploma in Cloud Computing (540 Hours)", 
    issuer: "Skill Development Council Canada & PluralCode Ltd", 
    year: "July 2025",
    detail: "Certificate Number: 2325689 · LPC: 1045 · Assessed by George Mathew (Toronto, Ontario)",
    pdfUrl: "/certificates/2325689_TOLUWANIMI_TAIWO_AKINYEMI.pdf",
    featured: true,
  },
  { 
    title: "Cloud Architecture Capstone Presentation", 
    issuer: "PluralCode Academy (AWS Cloud Computing)", 
    year: "August 2024",
    detail: "Static Website Hosting with AWS (S3, CloudFront CDN, Route 53 DNS, ACM SSL/TLS) — GreenField Agency Architecture",
    pdfUrl: "/presentations/Cloud_Computing_Capstone_Presentation.pdf",
    featured: true,
  },
  { 
    title: "IELTS English Language Proficiency Test Report", 
    issuer: "British Council / IDP", 
    year: "2024",
    detail: "C2 Native Fluency Level",
    pdfUrl: "/certificates/Toluwanimi_Akinyemi_IELTS_result.pdf"
  },
  { 
    title: "Virtual Assistant Professional Training", 
    issuer: "ALX (African Leadership Group)", 
    year: "2022",
    pdfUrl: "/certificates/Toluwanimi_Akinyemi_ALX%20cert.pdf"
  },
  { 
    title: "Advanced Customer Service Professional Training", 
    issuer: "Uconnect", 
    year: "2023",
    pdfUrl: "/certificates/TOluwanimi_Akinyemi_advance%20Customer%20service%20prog.pdf"
  },
  {
    title: "Data Analysis & Excel Pivot Tables",
    issuer: "Udemy",
    year: "2025",
    pdfUrl: "/certificates/Toluwanimi_Akinyemi_Udemy%20Certificate.pdf"
  },
  { 
    title: "IT Help Desk Professional", 
    issuer: "Udemy", 
    year: "2025",
    pdfUrl: "/certificates/Udemy%20IT%20help%20desk.pdf"
  },
  { 
    title: "Excel Essentials for Real World", 
    issuer: "Udemy", 
    year: "2025",
    pdfUrl: "/certificates/udemy%20excel%20essentials%20for%20real%20world.pdf"
  },
  { 
    title: "AI for Business Professionals", 
    issuer: "Udemy", 
    year: "2025",
    pdfUrl: "/certificates/UC-ai%20for%20business.pdf"
  },
];

export const volunteer = [
  {
    role: "Independent Election Observer",
    detail: "Osun Gubernatorial Election",
    org: "Kimpact Development Initiative",
    year: "2022",
  },
  {
    role: "Assistant Presiding Officer",
    detail: "National Presidential & Parliamentary Election",
    org: "Independent National Electoral Commission",
    year: "2019",
  },
];

export const languages = [{ name: "English", level: "Proficient (C2 Native Fluency)" }];
