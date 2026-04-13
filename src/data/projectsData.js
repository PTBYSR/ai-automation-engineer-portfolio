export const projectsData = [
  {
    id: 1,
    slug: "invoice-inbox-automation",
    title: "Invoice Inbox Automation for Novus Realty",
    category: "AI & Automation",
    tagline: "An intelligent, automated system designed to streamline the invoice collection and logging process using Vision AI.",
    description: "Replacing manual data entry by autonomously identifying, parsing, and logging invoices from vendor emails using advanced LLMs and Vision-AI.",
    image: "/projects/invoice-novus-automation.png",
    platforms: [
      { name: "Gmail", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" },
      { name: "Make", icon: "https://logo.clearbit.com/make.com" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png" },
      { name: "PDF.co", icon: "https://logo.clearbit.com/pdf.co" }
    ],
    details: {
      completionDate: "April 2026",
      overview: "Novus Realty, a growing real estate agency, receives dozens of invoices each week from vendors and contractors. Previously, an admin assistant manually reviewed each email and logged details into a Google Sheet—a slow process prone to risk and human error.",
      challenge: "Managing incoming billing communication was inefficient and difficult to scale. Manual entry of financial details like invoice numbers and varying amounts was time-consuming and increased the chance of accounting mistakes.",
      solution: "I built a robust automation that intelligently branches to extract data from both email bodies and PDF attachments. By converting PDFs to images and using Vision-capable AI models, the system 'sees' complex invoice layouts, ensuring high accuracy and standardized records.",
      features: [
        {
          title: "Vision AI Extraction",
          description: "Converts PDFs to images to accurately extract data from complex document layouts using advanced GPT-4o models."
        },
        {
          title: "Dual-Path Processing",
          description: "Intelligently routes and extracts data whether the invoice is written directly in the email body or attached as a file."
        },
        {
          title: "Self-Cleaning Logic",
          description: "Strict validation guardrails reject non-invoice emails (spam, quotes) by forcing 'N/A' outputs and filtering them before they reach the database."
        },
        {
          title: "Self-Healing Error Handling",
          description: "Includes automated retries for API timeouts and marks emails as 'read' to permanently prevent duplicate logging."
        }
      ],
      results: "Fully automated the invoice intake process, freeing the admin team for high-impact work. Achieved standardized financial data with zero missed invoices and perfectly clean accounting records.",
      videoUrls: [],
      liveUrl: "#",
      githubUrl: "https://github.com/PTBYSR/AI-Automation-Projects/tree/master/Invoice%20Inbox%20Automation"
    }
  },
  {
    id: 2,
    slug: "voice-based-customer-support-agent",
    title: "Voice-Based Customer Support Agent",
    category: "AI & Automation",
    tagline: "A voice-based AI agent that resolves routine queries using approved knowledge and escalates complex issues to human support.",
    description: "An intelligent voice agent built for RelayPay to handle high volumes of repetitive queries (onboarding, fees, compliance) while routing sensitive cases to human agents.",
    image: "/projects/voice-agent.png",
    platforms: [
      { name: "Supabase", icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4" },
      { name: "n8n", icon: "https://logo.clearbit.com/n8n.io" },
      { name: "Next.js", icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" },
      { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" }
    ],
    details: {
      completionDate: "April 2026",
      overview: "RelayPay is a B2B SaaS platform helping African startups manage cross-border payments. As it scaled, support became strained by repetitive queries. This solution introduces an AI-powered voice agent to reduce agent workload and improve resolution times.",
      challenge: "High volumes of queries regarding fees, payouts, and compliance were overwhelming human agents, forcing them to spend time on routine tasks instead of complex edge cases.",
      solution: "We built a RAG-powered voice system that uses a custom knowledge base to answer questions instantly. The system includes an admin dashboard for monitoring transcripts, testing the agent in a sandbox, and managing escalations with full audit logs.",
      features: [
        {
          title: "Dynamic RAG Knowledge Base",
          description: "Upload-driven system that allows the AI to stay updated with the latest company policies and documentation."
        },
        {
          title: "Advanced Admin Dashboard",
          description: "Real-time call monitoring, transcript review, and sandbox environment for safe testing of voice prompts."
        },
        {
          title: "Intelligent Escalation",
          description: "Automatically identifies sensitive issues and prompts users for scheduling a human support call."
        }
      ],
      results: "Significantly faster resolution times for common queries, reduced support load on human agents, and high accuracy in identifying cases that require human intervention.",
      videoUrl: "https://www.youtube.com/embed/exrWyMgcSpA",
      liveUrl: "https://ai-voice-agent-mocha-six.vercel.app",
      githubUrl: "https://github.com/PTBYSR/AI-Automation-Projects/tree/master/Voice-Based%20Customer%20Support%20Agent"
    }
  },
  {
    id: 3,
    slug: "lead-generation-outreach-automation",
    title: "Lead Generation and Outreach Automation",
    category: "Automation & Growth",
    tagline: "An automated outbound engine that scrapes leads, researches company backgrounds, and crafts personalized founder-to-founder messages.",
    description: "Built to eliminate manual prospecting, this system researchers lead context from LinkedIn and company sites to generate high-quality drafts, with human review as the final safety gate.",
    image: "/projects/lead-gen.png",
    platforms: [
      { name: "Airtable", icon: "https://avatars.githubusercontent.com/u/22677662?s=200&v=4" },
      { name: "LinkedIn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png" },
      { name: "n8n", icon: "https://logo.clearbit.com/n8n.io" }
    ],
    details: {
      completionDate: "April 2026",
      overview: "The growth team was handling the entire outbound process manually, which didn't scale. This system automates lead scraping, validation, and personalized message drafting, requiring only a final human approval before launch.",
      challenge: "Finding leads, researching company backgrounds, and writing cold emails from scratch took hours of high-effort work, limiting the frequency and quality of outreach.",
      solution: "We developed a multi-stage automation engine that research lead context from LinkedIn and company websites. It includes global duplicate detection, a 'Gibberish Auditor' to ensure message quality, and real-time error logging for full transparency.",
      features: [
        {
          title: "Hybrid Fallback System",
          description: "Uses personalized templates if the AI hits a snag, ensuring outreach momentum never stops."
        },
        {
          title: "AI Message Quality Control",
          description: "Includes a built-in 'Gibberish Auditor' to block broken or low-quality drafts from ever reaching a lead."
        },
        {
          title: "Human-in-the-Loop Approval",
          description: "A dedicated review page ensures every message is verified by a human expert before being sent."
        }
      ],
      results: "Drafts are ready in under 2 minutes. The system guarantees zero duplicate outreach and provides a robust audit trail for every action taken.",
      videoUrl: "https://www.youtube.com/embed/7JF4cWDWm1s",
      liveUrl: "https://airtable.com/appO1iAwuhRNNC3Ju/pagD0e3bZimgYyVTt",
      githubUrl: "https://github.com/PTBYSR/AI-Automation-Projects/tree/master/Lead%20Generation%20and%20Outreach%20Automation"
    }
  },
  {
    id: 4,
    slug: "content-pipeline-automation",
    title: "Content Pipeline Automation",
    category: "AI & Content Strategy",
    tagline: "An n8n-powered automation that converts raw ideas or URLs into SEO-optimized, multi-channel content through a custom web interface.",
    description: "Built for Fetemi Marketing Agency, this system abstracts technical complexity to allow content managers to generate, adapt, and publish branded content for LinkedIn, X, and newsletters in minutes.",
    image: "/projects/content-pipeline.png",
    platforms: [
      { name: "n8n", icon: "https://logo.clearbit.com/n8n.io" },
      { name: "LinkedIn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png" },
      { name: "X", icon: "https://logo.clearbit.com/x.com" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png" }
    ],
    details: {
      completionDate: "April 2026",
      overview: "Fetemi Marketing Agency struggled with a manual and unscalable content workflow. I resolved this by architecting a pipeline that converts raw ideas into high-quality, multi-channel content.",
      challenge: "Manual content creation was slow and inconsistent across platforms, consuming hours of the Content Manager's time every week.",
      solution: "The automation converts raw inputs into three SEO-optimized articles with distinct angles. These are then adapted into branded, platform-specific content for LinkedIn, X, and newsletters, and either published directly or queued for scheduling.",
      features: [
        {
          title: "Intelligent Platform Adaptation",
          description: "Automatically reformats selected drafts into branded, platform-specific content for LinkedIn, X, and Email."
        },
        {
          title: "Custom Web Interface",
          description: "A user-friendly frontend that allows content managers to review and finalize drafts without touching the backend code."
        },
        {
          title: "Workflow Continuity Hub",
          description: "Includes a history tab and UI-driven error handling for easy retries, ensuring no content idea is ever lost."
        }
      ],
      results: "Reclaims 4+ hours weekly by automating manual workflows. Guarantees consistent, high-quality content across all social channels.",
      videoUrl: "https://www.loom.com/embed/5ee374c8f8194812bca1de4e9fb39384",
      liveUrl: "https://fetemi-content-pipeline-automation.vercel.app/",
      githubUrl: "https://github.com/PTBYSR/AI-Automation-Projects/tree/master/Content%20Distribution%20Automation"
    }
  },
  {
    id: 5,
    slug: "proposal-generation-automation",
    title: "Proposal Generation & Delivery Automation",
    category: "AI & Automation",
    tagline: "Automating the sales proposal lifecycle from discovery to delivery with AI validation and background escalations.",
    description: "A robust end-to-end automation system for Sourcing Sprints that eliminates manual proposal drafting, ensures brand consistency, and provides full visibility into the approval pipeline.",
    image: "/projects/proposal-automation.png",
    platforms: [
      { name: "Airtable", icon: "https://avatars.githubusercontent.com/u/22677662?s=200&v=4" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png" },
      { name: "Google Docs", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/512px-Google_Docs_logo_%282014-2020%29.svg.png" },
      { name: "Gmail", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" },
      { name: "Make", icon: "https://logo.clearbit.com/make.com" }
    ],
    details: {
      completionDate: "April 2026",
      overview: "The sales team at Sourcing Sprints was manually drafting project proposals after discovery calls. This led to inconsistent formatting, the use of outdated templates, and a total lack of visibility for management into the approval pipeline.",
      challenge: "Manual proposal generation was slow and prone to errors. Reps were using varied templates, making brand consistency impossible to maintain. Furthermore, there was no way to track which proposals were pending, approved, or stuck in the pipeline.",
      solution: "I built a multi-stage automation that captures call notes via webhook, uses an 'AI Bouncer' for input validation, and leverages LLMs to transform raw notes into persuasive content. The system generates documents automatically from a master template, syncs with Airtable, and includes a watchdog timer for automatic status escalations.",
      features: [
        {
          title: "SLA Watchdog Timer",
          description: "Background process tracks 'Pending' status; automatically triggers escalation emails if approval takes longer than 24 hours."
        },
        {
          title: "AI Input Validation",
          description: "Uses LLMs as a 'Bouncer' to verify that discovery call notes are complete and logical before processing."
        },
        {
          title: "Relational CRM Architecture",
          description: "Built on Airtable with linked records between Sales Teams and Deals for seamless scaling and reporting."
        },
        {
          title: "Automated Feedback Loop",
          description: "Instantly notifies sales reps of rejections or data errors, ensuring immediate course correction and faster cycles."
        }
      ],
      results: "Automated 90% of manual drafting and follow-up. 100% brand consistency achieved via master templates. Management gained full visibility into the sales pipeline bottlenecks.",
      videoUrls: [
        "https://www.loom.com/embed/df55c744d85547c18a342193f3f9bc1f",
        "https://www.loom.com/embed/6b5355a7898f4517a483e7ecfa9afc28",
        "https://www.loom.com/embed/c500da183712433ba87824c1b68985de"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/PTBYSR/AI-Automation-Projects/tree/master/Proposal%20Generation%20%26%20Delivery%20Automation"
    }
  },
  {
    id: 6,
    slug: "reporting-dashboard-automation",
    title: "Reporting & Dashboard Automation",
    category: "AI & Data Automation",
    tagline: "A single-button solution that aggregates data from Google Sheets and Airtable to generate cross-departmental performance metrics via Python.",
    description: "Replacing a slow, manual year-end reporting process with a one-click automated workflow that calculates accurate metrics for Sales, Delivery, and People Ops.",
    image: "/projects/reporting-automation.png",
    platforms: [
      { name: "Airtable", icon: "https://avatars.githubusercontent.com/u/22677662?s=200&v=4" },
      { name: "Google Sheets", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/512px-Google_Sheets_logo_%282014-2020%29.svg.png" },
      { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png" },
      { name: "Make", icon: "https://logo.clearbit.com/make.com" }
    ],
    details: {
      completionDate: "April 2026",
      overview: "At the end of every year, the operations team manually pulls data from three separate systems (Google Sheets and two Airtable bases) to calculate twelve months of metrics. This process was extremely slow and error-prone.",
      challenge: "The manual process became unmanageable as the organization grew. Manually calculating metrics like turnover rate, cost variance, and conversion rates across different platforms led to frequent data inconsistencies and required days of executive time.",
      solution: "I developed a robust automation that triggers from a single Airtable button. It uses Make.com to aggregate data from all sources, processes it through custom-validated Python scripts for professional-grade accuracy, and writes results back into a centralized dashboard.",
      features: [
        {
          title: "Python-Powered Metrics",
          description: "All calculations (Revenue Trends, Conversion Rates, Turnover) run through validated Python scripts, ensuring higher accuracy than manual spreadsheets."
        },
        {
          title: "Multi-Source Aggregation",
          description: "Seamlessly pulls data from Google Sheets (Sales) and multiple Airtable bases (Project Delivery and People Ops) in a single sequence."
        },
        {
          title: "Robust Data Validation",
          description: "Includes per-field validation and zero-division guards. Specifically handles currency symbols (£/$) and date logic automatically."
        },
        {
          title: "Insufficient Data Flagging",
          description: "Smart handling of missing fields; flags specific cells as 'Insufficient Data' without crashing the entire automation run."
        }
      ],
      results: "Transformed a multi-day manual effort into a 'single click' process that completes in seconds. Achieved 100% accurate, error-free reporting with transparent flagging for missing source data.",
      videoUrls: [],
      liveUrl: "#",
      githubUrl: "https://github.com/PTBYSR/AI-Automation-Projects/tree/master/Reporting%20and%20Dashboard%20Automation"
    }
  }
];
