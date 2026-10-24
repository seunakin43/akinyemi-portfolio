export interface ProjectMedia {
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface DataAnalyticsProject {
  id: string;
  title: string;
  tool: 'Tableau' | 'Power BI' | 'Power BI & SQL' | 'SQL & Relational' | 'IoT Telemetry' | 'Financial & Risk';
  subtitle: string;
  description: string;
  image?: string;
  fileDownload?: {
    label: string;
    url: string;
  };
  metrics: string[];
  technologies: string[];
  highlights: string[];
  details: {
    problem: string;
    solution: string;
    implementation: string[];
    impact: string;
  };
}

export interface CapstoneProject {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  pdfFile: string;
  presentationFile?: string;
  liveDemoUrl?: string;
  demoCredentials?: {
    username: string;
    password: string;
    role: string;
  };
  image?: string;
  pbixFile?: string;
  pageCount: number;
  highlightMetric: string;
  technologies: string[];
  architecture: string[];
  screenshots?: ProjectMedia[];
  details: {
    problem: string;
    solution: string;
    implementation: string[];
    impact: string;
  };
}

export interface CloudProject {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  outcome: string;
  body: string;
  highlights: string[];
  technologies: string[];
  image: string;
  caption: string;
  badge?: string;
  details: {
    problem: string;
    solution: string;
    securityStandards: string[];
    impact: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  highlightMetric: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  accreditation?: string;
  category: string;
  certificatePdf?: string;
}

export const portfolioData = {
  personal: {
    name: "Toluwanimi Taiwo Akinyemi",
    preferredName: "Toluwanimi Akinyemi",
    title: "Network Operations, AI Automation & Data Engineer",
    tagline: "Bridging Telecom Reliability with Autonomous AI Agents & High-Throughput Data Systems",
    bio: "Network Operations and Data professional with 6 years of combined experience in telecommunications infrastructure, enterprise analytics, and process optimization. Monitors 789+ network nodes in real-time at Pan African Towers, sustaining 99.8% SLA compliance and reducing MTTR by 30% through Root Cause Analysis (RCA) frameworks. Holds an ACTD-accredited Diploma in AI Automation and a 540-hour Diploma in Cloud Computing endorsed by Skill Development Council Canada (Cert #2325689). Builds production workflows using n8n, Make.com, Supabase, and frontier LLM APIs.",
    location: "Available for Remote & Hybrid Worldwide",
    phone: "+234 813 589 8224",
    email: "seun.akin43@gmail.com",
    linkedin: "https://linkedin.com/in/toluwanimi-akinyemi",
    github: "https://github.com/seunakin",
    status: "Available for Network Operations, AI Automation & Data Roles",
    headshot: "/hh.jpg",
    languages: [
      { name: "English", level: "Proficient (C2 Native Fluency)" }
    ]
  },

  metrics: [
    { label: "Network Scope", value: "789+", detail: "Tower & cell nodes monitored live" },
    { label: "SLA Compliance", value: "99.8%", detail: "Sustained nationwide telecom uptime" },
    { label: "MTTR Reduction", value: "-30%", detail: "Faster resolution through RCA templates" },
    { label: "Operational Gain", value: "+40%", detail: "Efficiency gain across fault handling" },
    { label: "Records Governed", value: "100k+", detail: "Civic data modeled in Power BI & SQL" }
  ],

  hotkeys: [
    { key: "H", label: "Overview", action: "Navigate to Homepage", path: "/" },
    { key: "O", label: "Automation Hub", action: "Enterprise Automation Subweb (9 Systems)", path: "/automation" },
    { key: "L", label: "Cloud Systems", action: "Azure & Cloud Architecture Subweb", path: "/cloud" },
    { key: "S", label: "Skills", action: "Inspect Full Technical Stack", path: "/skills" },
    { key: "E", label: "Experience", action: "6-Year Career Trajectory", path: "/experience" },
    { key: "A", label: "About", action: "Engineering Philosophy & Background", path: "/about" },
    { key: "R", label: "Credentials", action: "Certifications & Degrees", path: "/credentials" },
    { key: "M", label: "Contact", action: "Send Direct Inquiry to Gmail", path: "/#contact" },
    { key: "T", label: "CLI Terminal", action: "Open Interactive Telemetry Shell", special: true },
    { key: "?", label: "Shortcuts", action: "Open Keyboard Shortcuts Modal", special: true }
  ],

  // Key Production Screenshots from capstone_media
  featuredEvidence: [
    {
      title: "Make.com Scenario 1 — Expense Intake & AI Audit",
      project: "ExpenseIQ System",
      category: "Make.com Workflows" as const,
      image: "/media/10.%20MAKE%20scenario%20full%20canvas.png",
      caption: "Full Make.com scenario orchestrating receipt parsing, OpenRouter AI categorization, duplicate risk detection, and manager notification."
    },
    {
      title: "Lovable Web Interface — Manager Review Portal",
      project: "ExpenseIQ System",
      category: "Frontend UI" as const,
      image: "/media/8.Lovable%20manager%20dashboard.png",
      caption: "Role-based approval portal allowing managers to review AI recommendations, inspect receipt attachments, and record decisions."
    },
    {
      title: "Supabase Central Ledger & Foreign Key Constraints",
      project: "ExpenseIQ System",
      category: "Database & Storage" as const,
      image: "/media/1.supabase_expense_table.png",
      caption: "Normalized PostgreSQL database with Row Level Security (RLS), tracking status, AI duplicate risk flags, and timestamps."
    },
    {
      title: "n8n Stateful AI Agent with Postgres Chat Memory",
      project: "n8n Autonomous Agent",
      category: "n8n Agent" as const,
      image: "/media/n8n%20chat%20workflow.png",
      caption: "Production n8n canvas connecting OpenRouter chat model, PostgreSQL persistent session memory, and 6 external RSS live feed tools."
    },
    {
      title: "Make.com Scenario 2 — Decision & Notification Loop",
      project: "ExpenseIQ System",
      category: "Make.com Workflows" as const,
      image: "/media/18.Make%20scenario2%20canvas.png",
      caption: "Automated decision dispatcher updating Supabase status, triggering transactional employee emails, and syncing to Airtable."
    },
    {
      title: "Automated Manager Approval Email Notification",
      project: "ExpenseIQ System",
      category: "Email & Alerts" as const,
      image: "/media/16.Manager%20approval%20email.png",
      caption: "Generated transactional email alert containing structured expense metadata, receipt preview, and 1-click approval links."
    },
    {
      title: "Airtable Real-Time Financial Mirror",
      project: "ExpenseIQ System",
      category: "Database & Storage" as const,
      image: "/media/23.Airtable%20expense%20mirror.png",
      caption: "Downstream reporting mirror automatically maintained by Make.com for finance and accounting reconciliation."
    },
    {
      title: "Make.com Scenario 3 — Weekly Executive Summary",
      project: "ExpenseIQ System",
      category: "Make.com Workflows" as const,
      image: "/media/24.Make%20scenario3%20canvas.png",
      caption: "Scheduled weekly cron scenario aggregating department spend, category distributions, and generating executive reports."
    }
  ],

  skillCategories: [
    {
      name: "Network Operations",
      icon: "Radio",
      skills: [
        { name: "Fault Management", level: 95 },
        { name: "Root Cause Analysis (RCA)", level: 95 },
        { name: "Galooli RMS & OWS Dashboards", level: 92 },
        { name: "Power Uptime & Fuel Telemetry", level: 90 },
        { name: "SLA Compliance & Escalation", level: 96 },
        { name: "AIO Systems", level: 88 }
      ]
    },
    {
      name: "AI & Automation",
      icon: "Cpu",
      skills: [
        { name: "n8n Workflow Engineering", level: 94 },
        { name: "Make.com (Integromat)", level: 96 },
        { name: "Claude CLI & Anthropic API", level: 90 },
        { name: "OpenRouter & OpenAI APIs", level: 92 },
        { name: "Gemini API Integration", level: 88 },
        { name: "AI Prompt Architecture", level: 95 },
        { name: "Autonomous Agents & Memory", level: 90 },
        { name: "Zapier Automation", level: 92 }
      ]
    },
    {
      name: "Data & Analytics",
      icon: "BarChart3",
      skills: [
        { name: "Power BI & DAX", level: 92 },
        { name: "SQL (Complex Joins & Aggregates)", level: 88 },
        { name: "Advanced Excel & ToolPak", level: 95 },
        { name: "Tableau & Looker Studio", level: 84 },
        { name: "Data Cleaning & Deduplication", level: 94 },
        { name: "Data Governance & Audit Reporting", level: 90 }
      ]
    },
    {
      name: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "PostgreSQL & pgvector", level: 88 },
        { name: "Supabase (Auth, RLS, Storage)", level: 90 },
        { name: "MySQL & SQLite", level: 86 },
        { name: "Airtable Relational Schemas", level: 95 }
      ]
    },
    {
      name: "Cloud & Systems",
      icon: "Cloud",
      skills: [
        { name: "Microsoft 365 Admin & Azure", level: 88 },
        { name: "Windows Server & Active Directory", level: 86 },
        { name: "Linux / Ubuntu Administration", level: 84 },
        { name: "PowerShell Scripting", level: 85 },
        { name: "Google Cloud Platform (GCP)", level: 82 },
        { name: "Amazon Web Services (AWS)", level: 80 }
      ]
    },
    {
      name: "DevOps & Collaboration",
      icon: "GitBranch",
      skills: [
        { name: "Git & GitHub Version Control", level: 88 },
        { name: "REST APIs & Webhooks", level: 94 },
        { name: "Jira & Confluence Management", level: 92 },
        { name: "Microsoft Teams & Slack", level: 95 }
      ]
    }
  ],

  get projects(): CapstoneProject[] {
    return this.capstoneProjects;
  },

  capstoneProjects: [
    {
      id: "expenseiq-capstone",
      title: "ExpenseIQ — AI-Powered Business Expense Management System",
      category: "Financial & Expense AI",
      subtitle: "Flagship 38-Page Diploma Capstone: Full-stack expense governance with OCR, Supabase RLS, and Make.com automation",
      description: "Comprehensive AI expense governance system engineered for Nigerian SMEs. Combines a modern web interface (Lovable), Supabase PostgreSQL as the primary source of truth, and three automated Make.com scenarios. Integrates OpenRouter NVIDIA Nemotron for automated receipt OCR, duplicate risk auditing, and strict human-in-the-loop managerial approval boundaries in NGN currency.",
      pdfFile: "/capstone/ExpenseIQ project.pdf",
      presentationFile: "/capstone/ExpenseIQ_Presentation.pptx",
      liveDemoUrl: "https://expense-ai-pro-14.lovable.app/login",
      demoCredentials: {
        username: "manager@test.com",
        password: "test@1234",
        role: "Finance Director / Approver Sandbox"
      },
      pageCount: 38,
      highlightMetric: "100% receipt capture compliance",
      technologies: ["Supabase", "PostgreSQL", "Make.com", "OpenRouter AI", "Lovable", "Airtable", "Google Drive", "Google Sheets", "Gmail"],
      architecture: [
        "Scenario 1: Webhook intake -> Supabase insert -> OpenRouter receipt OCR/categorization -> Manager notification",
        "Scenario 2: Manager approval trigger -> RLS status update -> Transactional employee email alert",
        "Scenario 3: Scheduled cron -> Weekly aggregated expense rollups -> Google Sheets executive mirror",
        "Air-gapped AI boundaries: AI strictly provides category & risk suggestions; zero automated payment execution"
      ],
      screenshots: [
        {
          title: "Make.com Full Canvas",
          category: "Make.com Workflows",
          image: "/media/10.%20MAKE%20scenario%20full%20canvas.png",
          caption: "Core automation pipeline orchestrating receipt parsing, AI category tagging, and email alerts."
        },
        {
          title: "Manager Approval Dashboard",
          category: "Frontend UI",
          image: "/media/8.Lovable%20manager%20dashboard.png",
          caption: "Manager interface displaying pending requests, AI duplicate risk evaluation, and audit actions."
        },
        {
          title: "Supabase Central Ledger",
          category: "Database & Storage",
          image: "/media/1.supabase_expense_table.png",
          caption: "PostgreSQL relational database schema storing expense rows with RLS security policies."
        }
      ],
      details: {
        problem: "Nigerian SMEs face high financial leakage, sluggish receipt reconciliations, and lack of audit trails when managing operational expenditures.",
        solution: "Engineered ExpenseIQ: a centralized cloud system ensuring all disbursements are documented, AI-categorized for accounting, and routed through formal manager authorizations.",
        implementation: [
          "Configured Supabase PostgreSQL relational schemas with foreign key constraints, RLS security policies, and audit timestamps.",
          "Created three modular Make.com scenarios handling intake, decision dispatching, and executive weekly summaries.",
          "Implemented strict AI safety rails: AI suggests categorization and flags duplicate invoices, while financial decisions require human sign-off."
        ],
        impact: "Eliminated manual paper expense processing, reduced invoice reimbursement cycle times from 5 days to under 4 hours, and provided 100% auditable accounting records."
      }
    },
    {
      id: "expenseiq-agent-week10",
      title: "ExpenseIQ Agent — Autonomous Approval & Reporting Agent",
      category: "Financial & Expense AI",
      subtitle: "Week 10 Capstone Report: Multi-agent autonomous workflow solving approval bottlenecks for low-risk micro-expenses",
      description: "Built an autonomous expense approval and proactive reporting agent. Addresses the operational bottleneck where human managers spend hours approving low-risk, trivial expenses (e.g. ₦12,000 for stationery). Uses n8n for core agent reasoning, Make.com for email reporting, Zapier for personal assistant alerts, OpenRouter Gemini 2.0 Flash for evaluation, and Supabase for state management.",
      pdfFile: "/capstone/Building_AI_Agent_ExpenseIQ_Week10.pdf",
      pageCount: 16,
      highlightMetric: "Sub-₦12,000 auto-approval threshold",
      technologies: ["n8n", "OpenRouter (Gemini 2.0 Flash)", "Make.com", "Zapier", "Supabase", "Airtable", "PostgreSQL"],
      architecture: [
        "n8n Agent Workflow: Evaluates incoming expense requests against historical policy limits",
        "Autonomous Approval Rules: Pre-approved threshold under ₦12,000 with clean receipt OCR and zero duplicate risk",
        "Make.com Email Digest: Dispatches daily consolidated summaries to finance leadership",
        "Zapier Assistant Webhooks: Pushes urgent escalation alerts to manager smartphones for high-value claims"
      ],
      details: {
        problem: "In high-velocity teams submitting 20–50 expense claims weekly, managers become severe bottlenecks by manually approving mundane, low-risk requests.",
        solution: "Architected an autonomous agent with strict threshold rules that safely clears validated low-value receipts while instantly routing edge cases to human managers.",
        implementation: [
          "Constructed n8n multi-agent nodes parsing Supabase transactions and validating receipt hashes.",
          "Configured OpenRouter Gemini 2.0 Flash model with strict temperature zero prompts for deterministic validation.",
          "Created automated email notification pipelines via Make and Zapier."
        ],
        impact: "Reduced manager approval queue burden by 65% while accelerating employee reimbursement times from 48 hours to near real-time."
      }
    },
    {
      id: "noc-ai-opportunities",
      title: "AI Automation Opportunities for Telecom NOC Engineers",
      category: "Telecom & NOC AI",
      subtitle: "Technical Architecture Report: Automated Site-Down notification, alarm correlation, and multi-tier regional escalation",
      description: "Comprehensive operational blueprint detailing how AI workflow automation eliminates the repetitive manual tasks of telecommunication NOC engineers. Focuses on automated site-down alarm processing: monitoring incoming alarm emails, extracting site ID and outage severity via AI, searching regional engineer registries, and auto-dispatching alerts via Teams, Outlook, SMS, and WhatsApp until acknowledged.",
      pdfFile: "/capstone/AI Automation Opportunities for a Telecommunication NOC Engineer - Toluwanimi Akinyemi.pdf",
      pageCount: 5,
      highlightMetric: "Zero-latency alarm triage",
      technologies: ["OWS Monitoring", "Galooli RMS", "LLM Incident Parser", "Microsoft Teams API", "WhatsApp Business API", "OM Database"],
      architecture: [
        "Dedicated Alarm Ingestion: Continuously monitors OWS alarm emails and webhook endpoints",
        "AI Incident Parser: Extracts Site ID, Site Name, Location, Alarm Type, and Severity in milliseconds",
        "OM Database Search: Queries regional engineering registry for active on-call personnel",
        "Multi-Channel Escalation: Dispatches automated incident notifications via Teams, Outlook, and WhatsApp with acknowledgement tracking"
      ],
      details: {
        problem: "During major severe weather or grid failures across hundreds of tower sites, manual alarm verification by NOC operators causes critical notification delays.",
        solution: "Designed an automated site-down notification and escalation engine that parses alarm feeds and alerts the correct field engineer within seconds.",
        implementation: [
          "Engineered email trigger workflows that extract structured incident JSON from unstructured telemetry alarms.",
          "Created regional lookup algorithms linking site GPS coordinates to local maintenance contractors.",
          "Set up automated acknowledgement loops that escalate to senior regional supervisors if tickets remain unacknowledged for >15 minutes."
        ],
        impact: "Cuts site-down notification lead time from 15–20 minutes to under 30 seconds, directly protecting customer SLA compliance."
      }
    },
    {
      id: "noc-workflow-system-design",
      title: "NOC Incident Escalation Automation & Workflow System Design",
      category: "Telecom & NOC AI",
      subtitle: "Workflow Design Specification: Critical ticket detection from OWS, regex extraction, OM database matching, and acknowledgement loops",
      description: "Rigorous step-by-step system design documenting the complete automation cycle for telecom network incident escalation. Details ticket ingestion from the OWS monitoring tool, data extraction protocols, critical alarm validation, OM database querying, dispatching through Email/WhatsApp, and continuous response monitoring.",
      pdfFile: "/capstone/TOLUWANIMI AKINYEMI - Workflow System Design & Automation.pdf",
      pageCount: 5,
      highlightMetric: "100% automated escalation loop",
      technologies: ["OWS Telemetry", "OM Database", "Regex Parsing", "Automated Webhooks", "WhatsApp API", "Email Automation"],
      architecture: [
        "Step 1: Receive incident ticket from OWS monitoring tool",
        "Step 2: Extract Ticket Information (Incident ID, Site ID, Alarm Type, Severity, Time)",
        "Step 3: Validate Critical Site Down status against false alarm filters",
        "Step 4: Query OM Database to retrieve on-call field engineer contact coordinates",
        "Step 5: Dispatch escalation alerts via Email and WhatsApp and monitor for acknowledgement"
      ],
      details: {
        problem: "Disorganized communication channels between 24/7 central NOC control rooms and distributed field engineers cause prolonged telecommunications downtime.",
        solution: "Created a deterministic workflow architecture that bridges telemetry monitoring tools with field communication channels.",
        implementation: [
          "Defined exact data payloads and validation regex schemas for OWS alarm streams.",
          "Integrated fail-safe fallback routes when primary engineer phone lines are unreachable.",
          "Engineered automated ticket status updates in central operations logs upon technician acknowledgement."
        ],
        impact: "Guarantees zero dropped incident tickets and provides complete visibility into field response timelines."
      }
    },
    {
      id: "noc-ai-assistant-assignment2",
      title: "Telecom NOC Incident Escalation AI Assistant System",
      category: "Telecom & NOC AI",
      subtitle: "25-Page Deep Technical Framework: Designing an AI assistant that mimics seasoned telecom NOC engineers",
      description: "Exhaustive 25-page capstone assignment exploring the design, prompt architecture, decision boundaries, and system integration of an AI assistant built to replicate the instincts and precision of a seasoned Telecommunications NOC Engineer. Covers criteria for engineer selection, communication protocols, ticket categorization, and SLA governance.",
      pdfFile: "/capstone/TOLUWANIMI AKINYEMI -  AI Automation Assignment 2.pdf",
      pageCount: 25,
      highlightMetric: "25-page complete operational spec",
      technologies: ["NOC Operations", "System Prompts", "Incident Triaging", "SLA Governance", "Galooli Telemetry", "OWS Framework"],
      architecture: [
        "Seasoned Engineer Persona Prompt: Encodes years of telecom triage heuristics into LLM system guidelines",
        "Critical Incident Identification Core: Distinguishes between transient line noise and catastrophic optical cuts",
        "Dynamic Dispatch Rules: Factors in engineer certifications (RF, Power, Rigging) and proximity",
        "SLA Violation Risk Estimator: Calculates countdown timers based on MTTR targets"
      ],
      details: {
        problem: "Junior NOC operators often lack the deep situational awareness needed to prioritize compound outages during grid failures.",
        solution: "Engineered an AI system framework that encodes seasoned operator experience into an autonomous decision-support assistant.",
        implementation: [
          "Documented complete prompt engineering schemas, edge-case recovery instructions, and incident decision trees.",
          "Mapped out integration points with Galooli RMS and OWS alarm dashboards.",
          "Established clear guidelines on when the AI should act autonomously versus when human intervention is required."
        ],
        impact: "Serves as an operational standard for modernizing telecommunication network operations centers with artificial intelligence."
      }
    },
    {
      id: "lead-generation-report",
      title: "AI Automation Lead Generation & Multi-Category Routing Engine",
      category: "Marketing Automation",
      subtitle: "Production Report: Google Forms -> Make.com -> 4 Airtable Category Tables -> Instant confirmation email pipeline",
      description: "Documents a live marketing-operations infrastructure built to capture, sort, and confirm leads for a tech academy offering four tracks: AI Automation, Cloud Computing, Cyber Security, and Web Development. Eliminates manual spreadsheet checking and guarantees zero-latency, personalized confirmation emails with course syllabi attached.",
      pdfFile: "/capstone/AI_Automation_Lead_Generation_Report.pdf",
      pageCount: 5,
      highlightMetric: "100% lead follow-up within 60s",
      technologies: ["Make.com", "Airtable", "Google Forms", "Gmail API", "Conditional Routers", "Data Deduplication"],
      architecture: [
        "Stage 1: Google Forms intake collecting applicant name, email, phone, and track selection",
        "Stage 2: Make.com automation engine with input validation and deduplication filters",
        "Stage 3: Airtable multi-table routing branching leads into 4 dedicated track databases",
        "Stage 4: Automated transactional email dispatching personalized next steps and course brochures"
      ],
      screenshots: [
        {
          title: "Google Form Intake Portal",
          category: "Frontend UI",
          image: "/media/lead%20generator%20forrm.png",
          caption: "Applicant intake capturing course vertical selection and contact details."
        },
        {
          title: "Make.com Routing Engine",
          category: "Make.com Workflows",
          image: "/media/Make%20scenarios.png",
          caption: "Conditional filters routing incoming leads into dedicated Airtable database tables."
        },
        {
          title: "Airtable Relational Lead Base",
          category: "Database & Storage",
          image: "/media/airtable.png",
          caption: "Segmented table records for AI Automation, Cloud Computing, Cyber Security, and Web Development."
        }
      ],
      details: {
        problem: "Manual lead sorting from shared spreadsheets resulted in delayed student onboarding and unacknowledged inquiries.",
        solution: "Built a self-sorting, zero-drop automation pipeline that immediately routes leads to appropriate databases and confirms enrollment.",
        implementation: [
          "Created Make.com scenarios with conditional logic routers mapping form fields to Airtable schemas.",
          "Configured instant email triggers delivering customized course curriculums.",
          "Implemented deduplication safeguards preventing duplicate applicant records."
        ],
        impact: "Cut lead response time from 24 hours to instant (under 60 seconds), improving course enrollment conversion by 18%."
      }
    },
    {
      id: "store-retrieve-rag-week7",
      title: "Store & Retrieve: n8n AI Agent with Postgres Memory & 6 RSS Tools",
      category: "n8n & RAG Agents",
      subtitle: "Week 7 Capstone Report: 'Tolu Agent' featuring persistent Postgres session memory and real-time live data retrieval",
      description: "Built a fully working conversational AI agent ('Tolu Agent') in n8n satisfying three critical architecture requirements in one unified system: stateful data storage, defined database schema, and live API retrieval. Utilizes Postgres Chat Memory (`n8n_chat_histories`) with a 5-turn context window, OpenRouter LLM reasoning, and six external RSS Read tool nodes.",
      pdfFile: "/capstone/Week7-Store-Retrieve_Report.pdf",
      pageCount: 6,
      highlightMetric: "Sub-second state retrieval from Postgres",
      technologies: ["n8n", "PostgreSQL", "OpenRouter API", "RSS Read Tools", "Session Memory", "JSON Schema Validation"],
      architecture: [
        "When Chat Message Received Trigger: Ingests user queries with session tracking",
        "OpenRouter Chat Model Reasoning Core: Evaluates whether memory lookup or external tools are needed",
        "Postgres Chat Memory (`n8n_chat_histories`): Stores conversation embeddings and previous turns",
        "6 RSS Tool Nodes: Live feeds fetching external cybersecurity, cloud, and AI engineering news"
      ],
      screenshots: [
        {
          title: "n8n Orchestration Workflow",
          category: "n8n Agent",
          image: "/media/n8n%20chat%20workflow.png",
          caption: "Full agent architecture linking chat triggers, OpenRouter model, Postgres memory, and RSS tool nodes."
        },
        {
          title: "PostgreSQL Memory Node Configuration",
          category: "Database & Storage",
          image: "/media/n8n%20postgre%20edit.png",
          caption: "Connection parameters and context window length for persistent conversational state."
        },
        {
          title: "Live RSS Intelligence Tool Nodes",
          category: "n8n Agent",
          image: "/media/n8n%20RSS%20feed.png",
          caption: "External data feeds queried dynamically by the model during multi-turn chats."
        }
      ],
      details: {
        problem: "Stateless AI chatbots lose context after each interaction and cannot access live, dynamic technical information.",
        solution: "Engineered an autonomous agent in n8n backed by PostgreSQL memory tables and live external tools.",
        implementation: [
          "Configured PostgreSQL database schemas with automated session ID clustering.",
          "Attached six external RSS tool nodes allowing the agent to query real-time tech feeds on demand.",
          "Validated JSON schema outputs for consistent formatting."
        ],
        impact: "Created a scalable blueprint for stateful enterprise conversational agents capable of real-time web verification."
      }
    },
    {
      id: "n8n-article-retrieval",
      title: "Automating Web Article Retrieval, AI Summarization & Archival",
      category: "n8n & RAG Agents",
      subtitle: "Internal Automation Project Plan: Linear n8n pattern (Fetch -> Process -> Store) saving team reading & research time",
      description: "Designed and implemented an internal automation pipeline that takes any reference URL, extracts clean web page content, generates an executive AI summary using frontier LLMs, and automatically archives formatted markdown files to a shared Google Drive knowledge base. Replaces tedious copy-pasting with a reusable linear pipeline.",
      pdfFile: "/capstone/n8n-Automation__Toluwanimi Akinyemi.pdf",
      pageCount: 3,
      highlightMetric: "Saves 15 mins per technical article",
      technologies: ["n8n", "HTTP Request Nodes", "OpenAI / Claude API", "Google Drive API", "Markdown Parser"],
      architecture: [
        "Trigger: Webhook receiving target URL",
        "Fetch: HTTP Request node extracting clean DOM text",
        "Process: LLM node generating structured executive summaries and key takeaways",
        "Store: Google Drive API archiving the summary with standardized naming conventions"
      ],
      details: {
        problem: "Engineers spend excessive time manually summarizing and organizing external vendor advisories and technical articles.",
        solution: "Created an automated n8n pipeline that retrieves, summarizes, and files technical documentation into shared drives.",
        implementation: [
          "Built text-stripping algorithms removing boilerplate headers and footers from scraped web content.",
          "Constructed LLM prompts highlighting technical action items and risk warnings.",
          "Automated Google Drive folder synchronization with team access controls."
        ],
        impact: "Saved engineering teams hours of manual reading while establishing a searchable, organized knowledge archive."
      }
    },
    {
      id: "ai-expense-make-airtable",
      title: "AI Business Expense & Financial Assistant (Make + Airtable)",
      category: "Financial & Expense AI",
      subtitle: "Student Project Guide & Architecture: 4-stage finance operations automation (Submit -> Categorise -> Approve -> Report)",
      description: "Comprehensive 10-page project guide detailing the implementation of an automated financial assistant. Walks through Google Drive receipt capture, AI category suggestions, rule-based approval routing, Airtable financial ledger management, and monthly executive digest generation.",
      pdfFile: "/capstone/04_AI_Business_Expense_Financial_Assistant_Make_Airtable.pdf",
      pageCount: 10,
      highlightMetric: "Standardized 4-stage finance pipeline",
      technologies: ["Make.com", "Airtable", "OpenRouter AI", "Google Drive", "Gmail API", "Google Sheets"],
      architecture: [
        "Stage 1: Submit Expense (Employee submits invoice and receipt links)",
        "Stage 2: Categorise (AI suggests tax and expense categories)",
        "Stage 3: Approve & Store (Manager reviews and records are stored)",
        "Stage 4: Report (Weekly or monthly financial summaries generated)"
      ],
      details: {
        problem: "Small businesses struggle with disorganized receipt submission and slow reimbursement cycles.",
        solution: "Established a 4-stage automated finance pipeline connecting web forms to relational Airtable ledgers.",
        implementation: [
          "Documented field mappings, webhook triggers, and conditional manager approval logic.",
          "Structured Airtable base relationships connecting employees, expenses, and audit logs.",
          "Engineered scheduled cron summaries for management review."
        ],
        impact: "Serves as the foundation for modern SME automated financial operations."
      }
    }
  ],

  dataAnalyticsProjects: [
    {
      id: "washington-ev-tableau",
      title: "Washington State Electric Vehicle (EV) Adoption & Population Analytics",
      tool: "Tableau" as const,
      subtitle: "Executive Tableau workbook modeling 150,000+ vehicle registrations across Washington counties with interactive CAFV and BEV/PHEV filters",
      description: "Comprehensive Tableau business intelligence dashboard authored for clean energy transportation analysis. Analyzes 150,000+ Department of Licensing (DOL) vehicle records across Washington State. Features interactive spatial mapping, Make & Model market share breakdowns (Tesla 48%, Nissan 16%, Chevrolet 12%), Clean Alternative Fuel Vehicle (CAFV) eligibility distributions, and 10-year adoption trendline projections.",
      image: "/analytics/washington_ev_tableau_dashboard.png",
      fileDownload: {
        label: "Download Tableau Workbook (.twb)",
        url: "/analytics/Washington_EV_Dashboard.twb"
      },
      metrics: ["150,420 EVs Analyzed", "78.4% BEV / 21.6% PHEV Ratio", "Top Density: King County (81.2k)", "54% Compound Growth"],
      technologies: ["Tableau Desktop (.twb)", "Calculated Fields", "Geographic Mapping", "CAFV Logic", "Donut Charts", "Data Cleansing"],
      highlights: [
        "Interactive parameter filters allowing county and manufacturer level deep-dives",
        "Clean Alternative Fuel Vehicle (CAFV) validation isolating 100% zero-emission fleets",
        "Spatial geographic mapping showing high-density clustering in King, Snohomish, and Pierce counties",
        "10-year longitudinal curve visualizing acceleration from 12k units (2016) to 150k+ units (2024)"
      ],
      details: {
        problem: "Energy policymakers and infrastructure planners need granular, multi-dimensional visibility into electric vehicle adoption rates, geographic grid load, and manufacturer market share.",
        solution: "Engineered an executive 5-view Tableau dashboard linking vehicle attributes (Make, Model, Electric Range, CAFV Status) to spatial location and temporal registration milestones.",
        implementation: [
          "Developed calculated fields for CAFV eligibility and BEV vs PHEV classification.",
          "Constructed high-density spatial map with dynamic radius encoding for King and surrounding counties.",
          "Authored multi-tier parameter controls enabling instant filtering by make and legislative district."
        ],
        impact: "Delivered actionable fleet intelligence enabling precise charging station infrastructure planning and clean energy subsidy verification."
      }
    },
    {
      id: "btc-usd-powerbi",
      title: "BTC-USD 5-Year Time-Series Visualization & Predictive Forecasting Dashboard",
      tool: "Power BI" as const,
      subtitle: "Power BI financial intelligence modeling 5 years of daily OHLC and $33.61B volume with predictive forecasting",
      description: "Engineered an interactive executive Power BI dashboard analyzing 5 years of Bitcoin market data. Structured custom DAX measures for daily moving averages, volatility bands, and volume-weighted price trends. Implemented an automated time-series forecasting model projecting expected price intervals, seasonal volume donut splits, and monthly open/close variance.",
      image: "/analytics/btc_usd_powerbi_forecast.png",
      metrics: ["$33.61B Volume Analyzed", "5-Year Daily OHLC", "Exponential Smoothing Bands", "Interactive Date Slicers"],
      technologies: ["Power BI", "DAX Measures", "Time-Series Modeling", "Financial Forecasting", "Power Query", "Excel"],
      highlights: [
        "Custom DAX measures for moving averages and seasonal volume distribution",
        "Predictive exponential smoothing model projecting confidence intervals",
        "Dual-axis visual comparing annual high watermarks with volume progression",
        "Volume seasonality breakdown: 2021 (36.2%), 2020 (25.4%), 2022 (23.1%)"
      ],
      details: {
        problem: "Financial analysts require intuitive visualization of multi-year price volatility, trading volume seasonality, and predictive range forecasts without manual calculation overhead.",
        solution: "Built a dark-themed Power BI executive dashboard with interactive date slicers, dynamic KPI cards (Av Open 25.31K, Av Close 25.31K, Volume $33.61B), and time-series predictive bands.",
        implementation: [
          "Calculated volume splits and moving averages across 5-year OHLC dataset in Power Query.",
          "Structured automated monthly aggregation lines identifying the $61K peak and subsequent consolidation.",
          "Configured dual-axis visual comparing annual high watermarks with trading volume progression."
        ],
        impact: "Delivered instantaneous macro market intelligence and trend detection for multi-asset portfolio decision makers."
      }
    },
    {
      id: "global-data-survey",
      title: "Global Data Professional Industry Survey & Compensation Analytics",
      tool: "Power BI" as const,
      subtitle: "Interactive Power BI analytics evaluating global compensation benchmarks, programming preferences, and career transitions",
      description: "Authored and analyzed a global dataset of data practitioners in Power BI. Modelled salary benchmarks across job titles (Data Scientist, Data Engineer, BI Analyst), quantified favorite programming languages (Python, SQL, R, JavaScript), and built sentiment gauges tracking work-life balance and salary satisfaction.",
      fileDownload: {
        label: "Download Power BI File (.pbix)",
        url: "/analytics/Global_Data_Professional_Survey.pbix"
      },
      metrics: ["Global Salary Benchmarks", "Python & SQL Dominance", "6 Roles Segmented", "Interactive Work-Life Gauges"],
      technologies: ["Power BI (.pbix)", "DAX", "Data Transformation", "Power Query", "Survey Analytics"],
      highlights: [
        "Data cleaning and normalization of global compensation bands in Power Query",
        "DAX measures calculating average compensation by role and satisfaction index",
        "Treemap visualizing respondent demographics across North America, Europe, and Asia",
        "Downloadable .pbix project file with interactive cross-filtering"
      ],
      details: {
        problem: "Aspiring and active data professionals lack transparent salary benchmarks and empirical insights into the relative difficulty of transitioning into data disciplines.",
        solution: "Synthesized thousands of global survey entries into an interactive Power BI dashboard featuring drill-down capabilities by country, language, and role.",
        implementation: [
          "Modeled compensation differentials between Data Scientists, Data Engineers, and BI Analysts.",
          "Visualized Python and SQL dominance as the primary programming languages of choice.",
          "Created radial gauge visuals measuring satisfaction with compensation and work-life balance."
        ],
        impact: "Empowered engineering leaders and professionals with data-backed benchmarks on compensation and tooling trends."
      }
    },
    {
      id: "kimpact-civic-analytics",
      title: "100,000+ Civic & Electoral Voter Records Analytics & Governance",
      tool: "Power BI & SQL" as const,
      subtitle: "Enterprise civic analytics deployed at Kimpact Development Initiative tracking 100,000+ voter records with +18% data accuracy",
      description: "Engineered enterprise Power BI dashboards and SQL validation pipelines tracking 100,000+ voter records for civic engagement and electoral integrity oversight. Developed rigorous data cleaning protocols that improved overall data accuracy by 18% and automated server maintenance schedules reducing downtime by 35%.",
      metrics: ["100,000+ Records Governed", "+18% Data Accuracy Gain", "-35% Server Downtime", "50+ Staff Supported"],
      technologies: ["Power BI", "SQL", "Data Governance", "Data Deduplication", "Excel ToolPak", "Windows Server"],
      highlights: [
        "ETL pipeline normalizing disparate field voter registration files into unified SQL tables",
        "Pattern identification protocols flagging invalid demographic entries and duplicate records",
        "Automated reporting dashboards tracking regional civic engagement distribution",
        "Proactive server patching and automation reducing infrastructure downtime by 35%"
      ],
      details: {
        problem: "Massive civic voter datasets collected across regional polling centers suffered from duplicate records, formatting inconsistencies, and high error rates.",
        solution: "Designed end-to-end data governance and Power BI reporting workflows that cleansed, verified, and visualized voter participation metrics.",
        implementation: [
          "Implemented automated deduplication scripts and integrity constraints in SQL.",
          "Created interactive demographic drill-down dashboards for field directors.",
          "Trained 50+ operational staff on data entry standards and validation checklists."
        ],
        impact: "Raised voter data accuracy by 18% and established a repeatable reporting framework for international election observation missions."
      }
    },
    {
      id: "pat-telemetry-colocation",
      title: "Pan African Towers Real-Time Telemetry & Colocation Operations Analytics",
      tool: "IoT Telemetry" as const,
      subtitle: "Real-time surveillance analytics across 789+ nodes: fuel autonomy, generator AMF25 hours, and tenant load balance",
      description: "Operational analytics dashboard deployed at Pan African Towers. Integrates live IoT sensor feeds from Galooli Remote Monitoring Systems (RMS) and Operations Work Station (OWS). Tracks fuel levels (1,999L reserve monitoring), generator engine run-hours, rectifier DC voltage stability at 53.5V, and multi-tenant power allocations for Airtel, MTN, and 9mobile.",
      image: "/analytics/pat_rms_telemetry_live.png",
      metrics: ["789+ Live Tower Nodes", "99.8% Sustained SLA", "-30% MTTR via RCA", "1,999L Reserve Tracking"],
      technologies: ["Galooli RMS", "OWS Monitoring", "IoT Telemetry", "Power Analytics", "Colocation Tracking", "Fault Diagnostics"],
      highlights: [
        "Sub-minute sensor ingestion capturing fuel levels, generator AMF25 hours, and DC voltages",
        "Multi-carrier power split analytics managing Airtel, MTN, and 9mobile colocation equipment",
        "Automated threshold triggers detecting phase imbalance and battery discharge anomalies",
        "Unified operational intelligence across 789+ critical telecommunications cell sites"
      ],
      details: {
        problem: "Unscheduled telecommunications tower power outages lead to massive cellular subscriber dropouts and heavy SLA penalty costs from mobile operators.",
        solution: "Established automated 24/7 telemetry monitoring correlating fuel levels, engine run-hours, and rectifier voltages across all tower hubs.",
        implementation: [
          "Monitored multi-tenant colocation load splits across national carriers.",
          "Tracked heavy fuel reserves up to 1,999L with automated theft detection.",
          "Enforced battery voltage guardrails at 53.5V, averting sudden cell-site blackouts."
        ],
        impact: "Sustained nationwide 99.8% SLA compliance and reduced mean time to repair (MTTR) by 30% through rapid root cause detection."
      }
    },
    {
      id: "ecommerce-relational-schema",
      title: "Enterprise E-Commerce Relational Database Architecture & 3NF Schema",
      tool: "SQL & Relational" as const,
      subtitle: "Third Normal Form (3NF) relational data model for high-throughput orders, inventory tracking, and payment processing",
      description: "Designed a clean, normalized relational database architecture for a multi-office commercial enterprise. Structured 8 core entities: productlines, products, employees, customers, offices, orders, orderdetails, and payments. Enforced referential integrity constraints, primary and foreign key indexes, and eliminated insertion/deletion anomalies.",
      image: "/analytics/enterprise_ecommerce_erd_schema.png",
      metrics: ["8 Normalized Entities", "3NF Strict Compliance", "100% Referential Integrity", "Zero Redundancy"],
      technologies: ["SQL", "Relational Database Design", "3NF Normalization", "ERD Modeling", "Data Integrity", "PostgreSQL"],
      highlights: [
        "Entity Relationship Modeling structuring 1-to-many and many-to-many relationships",
        "3NF normalization isolating customer credit limits from payment receipts",
        "Self-referencing recursive relationship modeling employee-to-manager reporting chains",
        "Strict foreign key cascade rules preventing orphan order details and inventory drift"
      ],
      details: {
        problem: "Denormalized and unstructured transaction tables cause severe data anomalies, billing discrepancies, and slow reporting queries as order volume scales.",
        solution: "Architected a fully normalized 3NF relational schema with strict foreign key constraints and dedicated join tables.",
        implementation: [
          "Connected customers to multiple payments and orders with strict credit limit validations.",
          "Separated product lines and product inventory counts from transactional order lines.",
          "Structured global office codes mapping territorial sales representatives to customer accounts."
        ],
        impact: "Guaranteed 100% referential integrity and delivered sub-millisecond query execution on high-volume reporting dashboards."
      }
    },
    {
      id: "leadway-financial-risk",
      title: "Financial Risk Portfolio Modeling & Customer Transaction Database",
      tool: "Financial & Risk" as const,
      subtitle: "Actuarial and financial analytics at Leadway Assurance Limited: 100+ monthly reports audited and 25% client risk reduction",
      description: "Conducted actuarial and portfolio risk assessments across retail and corporate insurance accounts at Leadway Assurance Limited. Audited 100+ monthly financial statements to quantify exposure variance, and architected a relational customer transaction database that improved bookkeeping efficiency by 30%.",
      metrics: ["100+ Financial Reports / Mo", "-25% Portfolio Risk", "+30% Bookkeeping Efficiency", "Audit-Ready Logs"],
      technologies: ["Financial Modeling", "Portfolio Risk Analysis", "Database Architecture", "Variance Analysis", "Excel ToolPak"],
      highlights: [
        "Quantitative variance modeling across monthly commercial insurance portfolios",
        "Relational database structuring for high-frequency client policy transactions",
        "Risk classification frameworks isolating high-liability policyholders",
        "Executive audit summaries delivered to senior investment and risk committees"
      ],
      details: {
        problem: "Manual spreadsheet reconciliation across thousands of corporate policyholders caused accounting delays and portfolio risk blindness.",
        solution: "Developed a structured customer transaction database paired with variance analysis templates.",
        implementation: [
          "Audited 100+ monthly statements tracking liability distributions.",
          "Automated ledger posting formulas reducing manual reconciliation errors.",
          "Generated executive risk reports supporting underwriting decisions."
        ],
        impact: "Reduced client portfolio exposure risks by 25% and accelerated monthly bookkeeping turnaround by 30%."
      }
    }
  ],

  experience: [
    {
      id: "pat",
      role: "Network Operations Centre (NOC) Operator",
      company: "Pan African Towers Ltd",
      location: "Nigeria (Remote & Regional Operations)",
      period: "Nov 2022 – Present",
      type: "Full-Time",
      description: "Lead real-time surveillance of mission-critical telecommunications infrastructure spanning 789+ active tower nodes across Nigeria.",
      achievements: [
        "Monitor 789+ network nodes in real time using OWS and RMS dashboards, sustaining 99.8% SLA compliance through predictive failure analysis.",
        "Cut troubleshooting time and Mean Time to Repair (MTTR) by 30% across all regions by designing and rolling out standardized RCA templates.",
        "Improved operational efficiency by 40% and reduced overall network downtime by optimizing fault-handling and escalation workflows.",
        "Partnered with cross-functional engineering teams on infrastructure upgrades that increased network throughput by 25%."
      ],
      skills: ["OWS Dashboards", "Galooli RMS", "AIO Systems", "Root Cause Analysis (RCA)", "Fault Management", "SLA Compliance"],
      highlightMetric: "99.8% SLA across 789+ nodes"
    },
    {
      id: "kimpact",
      role: "Data Analyst / IT Support Officer (Volunteer)",
      company: "Kimpact Development Initiative",
      location: "Osogbo, Nigeria",
      period: "Sep 2020 – Oct 2022",
      type: "Volunteer",
      description: "Spearheaded electoral analytics, data governance, and technology infrastructure for civic oversight initiatives.",
      achievements: [
        "Built Power BI dashboards tracking 100,000+ voter records to support electoral analytics and civic engagement reports.",
        "Improved data accuracy by 18% through data cleaning, pattern identification, validation, and data governance protocols.",
        "Reduced server downtime by 35% through proactive operating system updates, security patches, and automation.",
        "Provided technical support to 50+ staff members, improving day-to-day operational efficiency and digital readiness."
      ],
      skills: ["Power BI", "DAX", "SQL", "Data Governance", "Windows Server", "IT Support"],
      highlightMetric: "100k+ records / +18% accuracy"
    },
    {
      id: "ifex",
      role: "Logistics / Operations Officer",
      company: "IFEX Express Limited",
      location: "Osogbo, Nigeria",
      period: "Aug 2020 – Jun 2022",
      type: "Full-Time",
      description: "Supervised regional supply chain logistics, fleet coordination, and performance tracking.",
      achievements: [
        "Improved delivery turnaround by 25% by optimizing fleet scheduling and multi-point route planning.",
        "Reduced transportation and fuel operational expenditures through strategic logistics coordination and vendor negotiations.",
        "Analyzed operational performance and freight telemetry data to identify cost savings and process improvements.",
        "Maintained meticulous logistics documentation and operational logs supporting accountability and audit compliance."
      ],
      skills: ["Logistics Optimization", "Fleet Telemetry", "Route Scheduling", "Vendor Management", "Cost Reduction"],
      highlightMetric: "+25% turnaround efficiency"
    },
    {
      id: "leadway",
      role: "Financial Risk Analyst (Graduate Intern)",
      company: "Leadway Assurance Limited",
      location: "Lagos, Nigeria",
      period: "Apr 2018 – Sep 2018",
      type: "Internship",
      description: "Conducted actuarial and portfolio risk assessments across retail and corporate insurance accounts.",
      achievements: [
        "Analyzed 100+ monthly financial reports, reducing client portfolio exposure risks by 25%.",
        "Developed a customer transaction database, improving bookkeeping efficiency by 30%.",
        "Prepared analytical summaries, variance calculations, and audit reports for senior management."
      ],
      skills: ["Financial Modeling", "Portfolio Risk Analysis", "Database Design", "Audit Reporting", "Excel"],
      highlightMetric: "-25% portfolio risk exposure"
    }
  ],

  education: [
    {
      degree: "Postgraduate Diploma in Financial Mathematics (PGD)",
      institution: "Osun State University",
      location: "Osogbo, Nigeria",
      highlight: "Advanced quantitative methods, stochastic calculus, financial statistics, and finite-difference computational algorithms.",
      research: {
        title: "Numerical Solution of European Options Using Finite Difference Methods",
        forum: "31st Annual Colloquium & Congress (Virtual) · The Nigerian Association of Mathematical Physics (NAMP) in conjunction with Osun State University",
        date: "November 3–4, 2021",
        theme: "Emerging Impact of Mathematical Physics in Combating COVID-19 Pandemic",
        presentationCertId: "UNIOSUNNAMP2021M0024_24",
        presentationCertImg: "/academic/UNIOSUNNAMP2021M0024_24.jpg",
        participationCertId: "UNIOSUNNAMP2021M0024",
        participationCertImg: "/academic/UNIOSUNNAMP2021M0024.jpg",
        signatories: "Prof. Amos O. Popoola (LOC Chairman) & Prof. Garba Babaji (President, NAMP)"
      }
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Federal University of Agriculture, Abeokuta (FUNAAB)",
      location: "Abeokuta, Nigeria",
      highlight: "Pure & applied mathematics, numerical analysis, computational algorithms, and linear algebra."
    }
  ],

  certifications: [
    {
      title: "Diploma in AI Automation",
      issuer: "Utiva (ACTD-Accredited)",
      year: "2026",
      credentialId: "34RVXFBKSU73N",
      accreditation: "American Council of Training and Development",
      category: "AI & Automation"
    },
    {
      title: "Diploma in Cloud Computing (540 Hours)",
      issuer: "Skill Development Council Canada & PluralCode Ltd",
      year: "2025",
      credentialId: "2325689",
      detail: "Certificate Number: 2325689 · LPC: 1045 · Assessed by George Mathew (Toronto, Ontario)",
      certificatePdf: "/certificates/2325689_TOLUWANIMI_TAIWO_AKINYEMI.pdf",
      category: "Cloud & Systems"
    },
    {
      title: "Cloud Architecture Capstone Presentation",
      issuer: "PluralCode Academy (AWS Cloud Computing)",
      year: "2024",
      detail: "Static Website Hosting with AWS (S3, CloudFront CDN, Route 53 DNS, ACM SSL/TLS) — GreenField Agency Architecture",
      certificatePdf: "/presentations/Cloud_Computing_Capstone_Presentation.pdf",
      category: "Cloud & Systems"
    },
    {
      title: "IELTS English Language Proficiency Test Report",
      issuer: "British Council / IDP",
      year: "2024",
      certificatePdf: "/certificates/Toluwanimi_Akinyemi_IELTS_result.pdf",
      category: "Language & Global"
    },
    {
      title: "Virtual Assistant Professional Training",
      issuer: "ALX (African Leadership Group)",
      year: "2022",
      certificatePdf: "/certificates/Toluwanimi_Akinyemi_ALX%20cert.pdf",
      category: "Professional & Leadership"
    },
    {
      title: "Advanced Customer Service Professional Training",
      issuer: "Uconnect",
      year: "2023",
      certificatePdf: "/certificates/TOluwanimi_Akinyemi_advance%20Customer%20service%20prog.pdf",
      category: "Professional & Leadership"
    },
    {
      title: "Data Analysis & Excel Pivot Tables",
      issuer: "Udemy",
      year: "2025",
      certificatePdf: "/certificates/Toluwanimi_Akinyemi_Udemy%20Certificate.pdf",
      category: "Data Analytics"
    },
    {
      title: "IT Help Desk Professional",
      issuer: "Udemy",
      year: "2025",
      certificatePdf: "/certificates/Udemy%20IT%20help%20desk.pdf",
      category: "Cloud & Systems"
    },
    {
      title: "Excel Essentials for the Real World",
      issuer: "Udemy",
      year: "2025",
      certificatePdf: "/certificates/udemy%20excel%20essentials%20for%20real%20world.pdf",
      category: "Data Analytics"
    },
    {
      title: "AI for Business Professionals",
      issuer: "Udemy",
      year: "2025",
      certificatePdf: "/certificates/UC-ai%20for%20business.pdf",
      category: "AI & Automation"
    }
  ],

  volunteerLeadership: [
    {
      role: "Independent Election Observer",
      event: "Osun State Gubernatorial Election",
      organization: "Kimpact Development Initiative",
      year: "2022",
      description: "Monitored voting integrity, log sheet collation, and polling unit compliance across assigned council areas."
    },
    {
      role: "Assistant Presiding Officer (APO)",
      event: "National Presidential & Parliamentary Election",
      organization: "Independent National Electoral Commission (INEC)",
      year: "2019",
      description: "Supervised biometric accreditation, ballot administration, and official result tally verification."
    }
  ],

  cloudProjects: [
    {
      id: "azure-bastion",
      title: "Azure Bastion Host & Zero-Public-IP Architecture",
      tag: "Azure IaaS · Zero-Trust Perimeter · TLS 443",
      subtitle: "Secure enterprise VM management mitigating brute-force and port-scanning attack vectors",
      outcome: "Eliminated 100% of public IP exposure across production Linux and Windows Server virtual machines.",
      body: "Engineered Azure Bastion within an isolated AzureBastionSubnet (/26). Administrators connect directly through TLS encryption over port 443 inside the Azure Portal without requiring public IPs, jump boxes, or exposed RDP/SSH ports on the internet.",
      highlights: [
        "Zero Public IPs assigned to backend virtual machines",
        "TLS Port 443 encrypted terminal streaming",
        "Native portal integration preventing RDP/SSH port scans",
        "Full audit logging of administrative sessions in Azure Monitor"
      ],
      technologies: ["Microsoft Azure", "Azure Bastion", "AzureBastionSubnet", "Linux (Ubuntu)", "Windows Server", "NSGs", "TLS 443"],
      image: "/cloud-media/Implementing Bastion.png",
      caption: "Azure Bastion implementation canvas verifying secure private subnet deployment and zero-public-IP network topology.",
      badge: "Zero-Trust",
      details: {
        problem: "Exposing RDP (3389) or SSH (22) ports with public IPs invites automated credential stuffing, port probing, and zero-day perimeter attacks.",
        solution: "Provisioned Azure Bastion as a managed PaaS proxy sitting in a dedicated subnet, routing all management traffic through secure HTML5 browser streams over TLS.",
        securityStandards: [
          "No public IP addresses assigned to virtual machines",
          "Dedicated /26 subnet topology strictly reserved for Bastion",
          "Stateful Network Security Groups enforcing outbound-only management responses"
        ],
        impact: "Reduced external threat surface to zero for remote access, directly complying with enterprise cloud security frameworks."
      }
    },
    {
      id: "azure-ddos",
      title: "Enterprise DDoS Network Protection & Perimeter Hardening",
      tag: "Azure Security · Layer 3/4 Defense · DDoS Mitigation",
      subtitle: "Perimeter defense shielding multi-tier virtual networks from volumetric and protocol floods",
      outcome: "Secured enterprise cloud endpoints with 24/7 automated traffic scrubbing and zero application downtime.",
      body: "Configured Azure DDoS Protection Plan linked across production Virtual Networks. Provides adaptive real-time traffic profiling, metric telemetry alerts via Azure Monitor, and automatic packet scrubbing when volumetric threshold spikes occur.",
      highlights: [
        "Adaptive baseline profiling tuned to application traffic patterns",
        "Automated Layer 3 and Layer 4 attack mitigation",
        "Real-time diagnostic telemetry stream to Log Analytics",
        "DDoS Rapid Response (DRR) incident team readiness"
      ],
      technologies: ["Azure DDoS Protection", "Virtual Networks (VNets)", "Log Analytics", "Azure Monitor", "Metrics Alerts"],
      image: "/cloud-media/DDOS.png",
      caption: "Azure DDoS Protection Plan configuration dashboard verifying virtual network associations and mitigation telemetry.",
      badge: "Perimeter Defense",
      details: {
        problem: "Unprotected public cloud endpoints are vulnerable to large-scale distributed denial-of-service floods that deplete bandwidth and crash network gateways.",
        solution: "Activated Azure DDoS Protection Standard with adaptive machine-learning baselines and dedicated mitigation capacity.",
        securityStandards: [
          "Continuous multi-point traffic monitoring across all public IPs",
          "Automatic attack mitigation triggered in sub-second intervals",
          "Integration with Azure Application Gateway and WAF"
        ],
        impact: "Guaranteed uninterrupted uptime for mission-critical web services during volumetric traffic anomalies."
      }
    },
    {
      id: "entra-id-pim",
      title: "Microsoft Entra ID & Privileged Identity Management (PIM)",
      tag: "Cloud Governance · Entra ID · Zero Standing Privilege",
      subtitle: "Cloud directory lifecycle management and just-in-time administrative access control",
      outcome: "Replaced permanent administrator privileges with time-bound, just-in-time (JIT) role activations and MFA enforcement.",
      body: "Administered directory users, groups, and administrative units in Microsoft Entra ID. Structured directory roles (Global Administrator, Privileged Role Administrator, User Administrator) with mandatory approvals, ticket reason justifications, and automated expiration.",
      highlights: [
        "Zero Standing Privilege (ZSP) operational governance",
        "Time-bound role activations with mandatory justification tickets",
        "Multi-Factor Authentication (MFA) conditional access policies",
        "Comprehensive identity audit trails and sign-in risk logging"
      ],
      technologies: ["Microsoft Entra ID", "Azure AD PIM", "Conditional Access", "MFA", "Identity Governance", "Audit Logs"],
      image: "/cloud-media/privileged admin roles.png",
      caption: "Privileged Identity Management console displaying eligible role assignments, activation durations, and approval requirements.",
      badge: "Identity & PIM",
      details: {
        problem: "Standing administrative access creates permanent vulnerability windows if credentials are compromised.",
        solution: "Implemented Microsoft Entra ID Privileged Identity Management (PIM) with just-in-time elevation requiring MFA, approval sign-off, and maximum 4-hour activation windows.",
        securityStandards: [
          "No permanent active Global Administrators outside break-glass accounts",
          "Mandatory MFA challenge on every privileged activation",
          "Automated audit logging sent to security operations teams"
        ],
        impact: "Eliminated standing admin privilege risk across the tenant, fulfilling international compliance audits."
      }
    },
    {
      id: "azure-rbac-custom-roles",
      title: "Least-Privilege RBAC & Custom Role JSON Engineering",
      tag: "IAM · Least Privilege · Custom JSON Role Schemas",
      subtitle: "Granular permission authoring enforcing strict segregation of duties",
      outcome: "Authored precision custom roles allowing engineers to deploy and update web services without infrastructure deletion permissions.",
      body: "Engineered custom Role-Based Access Control (RBAC) role definitions using JSON action specifications. Assigned scoped roles at Subscription and Resource Group tiers, preventing accidental resource deletions while enabling rapid developer velocity.",
      highlights: [
        "Custom JSON permission schemas with granular Actions and NotActions",
        "Scoped assignments at Subscription, Resource Group, and Resource levels",
        "Separation of duties between Web Contributors and Network Operators",
        "Automated role assignment auditing via Azure Activity Log"
      ],
      technologies: ["Azure RBAC", "Custom Roles", "JSON Schemas", "Resource Groups", "IAM", "Activity Log"],
      image: "/cloud-media/rbac.png",
      caption: "Azure Role-Based Access Control hierarchy displaying role assignments, custom permission actions, and assignment scopes.",
      badge: "Access Control",
      details: {
        problem: "Built-in roles like Contributor or Owner grant overly broad access, risking accidental resource destruction or unauthorized network modifications.",
        solution: "Created specialized custom RBAC roles (e.g. Web Contributor) with explicit allowlists for compute and web actions while denying networking and IAM tampering.",
        securityStandards: [
          "Strict least-privilege principle applied across all service tiers",
          "Explicit NotActions blocking resource group deletion and IAM modifications",
          "Automated RBAC role reconciliation in CI/CD pipelines"
        ],
        impact: "Restricted developer permissions to operational boundaries, preventing unauthorized changes or deletions."
      }
    },
    {
      id: "azure-nsg-rules",
      title: "Network Security Group (NSG) Stateful Firewall Filtering",
      tag: "Network Security · NSG · Port Prioritization",
      subtitle: "Subnet-level stateful packet filtering and protocol prioritization",
      outcome: "Secured multi-subnet communication flows with explicit allow/deny priority matrices.",
      body: "Configured stateful Network Security Group (NSG) rules with prioritized rule numbers (100–4096), source/destination CIDR blocks, and protocol enforcement (TCP/UDP). Enforced default-deny policies blocking unauthorized internet traffic into internal database subnets.",
      highlights: [
        "Prioritized evaluation matrix (100–4096) for ingress and egress traffic",
        "Subnet-level isolation preventing lateral movement between tiers",
        "Explicit default-deny rules blocking unauthenticated external probing",
        "Diagnostic flow logs capturing accepted and dropped packets"
      ],
      technologies: ["Network Security Groups", "Virtual Networks", "CIDR Subnetting", "Stateful Filtering", "NSG Flow Logs"],
      image: "/cloud-media/RULES SETTINGS.png",
      caption: "Network Security Group rule configuration table showing priority levels, port ranges, CIDR destinations, and access actions.",
      badge: "Firewall Rules",
      details: {
        problem: "Flat internal network architectures allow compromised frontend nodes to move laterally into sensitive databases.",
        solution: "Segmented networks into isolated subnets with individual NSGs enforcing strict ingress/egress rules and port restrictions.",
        securityStandards: [
          "Database subnet accessible only from application tier on designated ports",
          "Explicit DenyAllInbound catch-all rule on external perimeters",
          "Flow logging enabled for security analysis and intrusion detection"
        ],
        impact: "Prevented unauthorized lateral traversal across network subnets, securing proprietary database ledgers."
      }
    },
    {
      id: "azure-vnet-compute",
      title: "Multi-Subnet Virtual Networks & Cloud VM Infrastructure",
      tag: "Azure Infrastructure · VNet Peering · Compute Hosting",
      subtitle: "Resilient virtual network topologies with redundant compute instances and storage persistence",
      outcome: "Architected high-availability cloud infrastructure running Ubuntu Linux servers and Azure Storage accounts.",
      body: "Designed multi-tier Virtual Network architectures with dedicated public, application, and database subnets. Configured VNet peering, private IP allocation, custom route tables, and automated VM provisioning.",
      highlights: [
        "Multi-tier subnet architecture with private IP address space planning (10.0.0.0/16)",
        "VNet peering connecting regional infrastructure with sub-millisecond latency",
        "Ubuntu Linux VM provisioning with managed OS disks and automated updates",
        "Storage Account integration with private endpoints and blob encryption"
      ],
      technologies: ["Azure Virtual Networks", "VNet Peering", "Linux (Ubuntu)", "Storage Accounts", "Blob Encryption", "Route Tables"],
      image: "/cloud-media/Screenshot 2025-07-22 074344.png",
      caption: "Azure Virtual Network deployment overview displaying connected subnets, peering connections, and active VM compute nodes.",
      badge: "Infrastructure",
      details: {
        problem: "Enterprise workloads demand isolated, highly available network architectures that scale without downtime.",
        solution: "Built a tiered virtual network with regional peering, private endpoints for Azure Storage, and redundant compute nodes.",
        securityStandards: [
          "Private endpoint routing keeping storage traffic off public internet",
          "Encrypted OS and data disks using Azure Key Vault customer-managed keys",
          "Continuous health monitoring with automated alert triggers"
        ],
        impact: "Delivered scalable cloud compute hosting with 99.95% infrastructure uptime and zero data leakage."
      }
    }
  ]
};
