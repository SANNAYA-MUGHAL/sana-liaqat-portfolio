export interface CareerStep {
  stage: string;
  subtitle: string;
  insight: string;
  details: string[];
}

export const CAREER_JOURNEY: CareerStep[] = [
  {
    stage: 'QUALITY ENGINEERING',
    subtitle: 'Understanding how products fail.',
    insight: 'Grounded at Dzine Media in software testing, defect analysis, and regression resilience. Learned how systems break under stress and why deep quality rigor prevents customer-facing failures.',
    details: [
      '3+ years executing functional, regression, and cross-platform application testing',
      'Identified critical edge cases, race conditions, and integration bugs',
      'Instilled a zero-assumption mindset toward user requirements and software reliability',
    ],
  },
  {
    stage: 'QA LEADERSHIP',
    subtitle: 'Understanding systems, risks and release quality.',
    insight: 'Shifted from individual defect detection to systemic risk modeling, release gate governance, and cross-functional quality standards.',
    details: [
      'Led end-to-end UAT across mobile, web, and internal operational platforms',
      'Governed release pipelines and zero-downtime production deployments',
      'Bridged engineering execution with business stakeholder expectations',
    ],
  },
  {
    stage: 'TECHNICAL SUPPORT',
    subtitle: 'Understanding what happens after customers meet the product.',
    insight: 'Experienced firsthand the real-world friction, customer frustration, and operational bottlenecks that occur when reality departs from product assumptions.',
    details: [
      'Analyzed live incident logs, customer escalation threads, and support ticket trends',
      'Identified the delta between intended UX design and ground-level user behavior',
      'Championed rapid root-cause fixes over band-aid support workarounds',
    ],
  },
  {
    stage: 'PROJECT DELIVERY',
    subtitle: 'Understanding teams, dependencies and execution.',
    insight: 'Mastered coordinating multi-stakeholder delivery, unblocking cross-team dependencies, and turning complex roadmaps into high-velocity execution.',
    details: [
      'Managed cross-functional squads: mobile, backend, ops, design, and 3rd-party vendors',
      'Orchestrated partner platform rollouts (telecom super-apps, payment gateways)',
      'Disciplined sprint planning, critical-path mapping, and proactive scope management',
    ],
  },
  {
    stage: 'PRODUCT MANAGEMENT',
    subtitle: 'Bringing customer, business, technology and delivery together.',
    insight: 'Combining analytical curiosity, deep technical fluency, and operational empathy to discover real problems, define robust solutions, and drive measurable business impact.',
    details: [
      'End-to-end product ownership from problem discovery to continuous optimization',
      'P&L, conversion funnels, unit economics, and customer NPS stewardship',
      'Architecting resilient FinTech, marketplace, and platform products',
    ],
  },
];

export interface ExperienceRole {
  company: string;
  title: string;
  location: string;
  period: string;
  domain: string;
  highlight: string;
  focusAreas?: string[];
  areas?: string[];
  details: string[];
}

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    company: 'Bayuti',
    title: 'Product Manager',
    location: 'UK (Remote)',
    period: 'Recent / Ongoing',
    domain: 'FinTech / PropTech',
    highlight: 'Owned product roadmap and backlog across web and mobile experiences while working with engineering, design, compliance and business stakeholders.',
    focusAreas: [
      'Product Roadmap',
      'Backlog Management',
      'Investor Onboarding',
      'KYC & AML',
      'Payments & Wallets',
      'FCA Compliance',
      'Resale Marketplace',
      'Dividends Distribution',
      'Admin Platform',
    ],
    details: [
      'Drove end-to-end product strategy for a regulated UK property investment platform, translating complex FCA compliance mandates into frictionless investor onboarding.',
      'Partnered with legal and compliance officers to architect automated biometric KYC and AML verification journeys using Onfido.',
      'Integrated e-money wallet infrastructure and payment rails with MangoPay and Plaid Open Banking for seamless fiat transfers and safeguarded accounts.',
      'Designed fractional investment workflows, SPV share issuance automation, and secondary resale marketplace mechanics.',
      'Managed engineering backlogs in Jira, prioritized quarterly sprints, and delivered internal back-office administration portals.',
    ],
  },
  {
    company: 'elGrocer / Smiles',
    title: 'Product, Project & Technical Leadership',
    location: 'Dubai, UAE',
    period: 'Multi-Year Leadership',
    domain: 'eCommerce • FinTech • Marketplace • Logistics',
    highlight: 'Delivered product initiatives across customer, retailer, picker and driver ecosystems with deep exposure to marketplace operations, payments, integrations and production systems.',
    areas: [
      'Payments & FinTech',
      'Order Management (OMS)',
      'Smiles Super-App Integration',
      'Customer Experience (CX)',
      'Fulfilment & Picking',
      'Logistics & Delivery',
      'Product Analytics (Mixpanel)',
      'Operational Automation (IVR/Slack)',
    ],
    details: [
      'Delivered 50+ product initiatives spanning the complete digital commerce lifecycle: customer discovery, checkout, payments, retailer operations, in-store picking, and logistics dispatch.',
      'Spearheaded the flagship Edit Order discovery and launch, turning cancellation patterns into a 33% reduction in post-order cancellations.',
      'Led the technical platform integration embedding elGrocer within the Smiles super-app (e&), orchestrating APIs, UAT, address synchronization, and loyalty mechanics.',
      'Architected multi-source split-tender checkout combining Adyen card processing, Apple Pay, cash on delivery, Smiles points, and digital wallet balances.',
      'Designed the out-of-stock substitution workflow connecting supermarket pickers with customers via WhatsApp Business API under a 6-minute SLA.',
      'Automated order lifecycle state monitoring with multi-tier IVR telephony retries and high-priority Slack ops escalation to eliminate delivery delays.',
      'Extracted and analyzed 12 months of historical transaction datasets using Python to model dynamic delivery slot capacity curves.',
    ],
  },
  {
    company: 'Dzine Media',
    title: 'Quality Assurance & Product Testing Specialist',
    location: 'Pakistan',
    period: '3+ Years Experience',
    domain: 'Web & Mobile Applications • Digital Products',
    highlight: 'Spearheaded software testing, functional/regression verification, and product quality standards across web and mobile applications, collaborating directly with developers to ensure reliable releases.',
    focusAreas: [
      'Quality Assurance',
      'Software Testing',
      'Product Quality',
      'Requirement Understanding',
      'Functional Testing',
      'Regression Testing',
      'Bug Identification & Reporting',
      'Release Validation',
      'Cross-functional Collaboration',
      'Developer Coordination',
      'Test Planning',
      'Issue Lifecycle Management',
      'Product Usability',
    ],
    details: [
      'Spearheaded comprehensive software testing and quality assurance across responsive web platforms and mobile applications, ensuring rigorous adherence to product requirements.',
      'Designed detailed test plans, test suites, and test cases covering functional testing, regression testing, smoke testing, and sanity verification for release cycles.',
      'Identified, documented, and tracked bugs through their complete lifecycle, collaborating closely with developers to isolate root causes and accelerate resolutions.',
      'Conducted pre-launch release validation and production verification, significantly improving product usability and defect detection before customer release.',
      'Partnered closely with engineering, design, and client stakeholders to translate complex requirements into verifiable functional behavior.',
    ],
  },
];

export interface Capability {
  title: string;
  category: string;
  description: string;
  skills: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    title: 'Product Discovery & Strategy',
    category: 'DISCOVERY',
    description: 'Transforming qualitative customer signals and quantitative funnel churn into validated problem statements and prioritized roadmaps.',
    skills: [
      'Problem discovery',
      'Customer behaviour',
      'Product requirements',
      'Prioritization',
      'Roadmaps',
      'User journeys',
    ],
  },
  {
    title: 'Product Analytics',
    category: 'ANALYTICS',
    description: 'Using behavioral event data, cohort analysis, and statistical distributions to diagnose drop-offs and measure true product impact.',
    skills: [
      'Mixpanel',
      'Funnels',
      'KPI analysis',
      'Root-cause analysis',
      'Python',
      'Experimentation',
    ],
  },
  {
    title: 'Technical Product Management',
    category: 'TECHNICAL PM',
    description: 'Bridging engineering feasibility and business goals through contract-first API design, SDK architecture, and data flow modeling.',
    skills: [
      'REST APIs',
      'SDKs',
      'Webhooks',
      'Postman',
      'System integrations',
      'Data flows',
    ],
  },
  {
    title: 'Payments & FinTech',
    category: 'FINTECH',
    description: 'Designing resilient checkout architectures, multi-tender split journeys, escrow accounting, and fraud-resistant payment flows.',
    skills: [
      'Adyen',
      'Tabby',
      'MangoPay',
      'Plaid',
      'Apple Pay',
      'Wallets',
      'Split payments',
    ],
  },
  {
    title: 'Marketplace Products',
    category: 'MARKETPLACE',
    description: 'Balancing the competing incentives of four-sided marketplaces: end-consumers, merchant retailers, in-store pickers, and couriers.',
    skills: [
      'Customer apps',
      'Retailer apps',
      'Picker operations',
      'Driver workflows',
      'Fulfilment',
      'Delivery',
    ],
  },
  {
    title: 'Product Delivery',
    category: 'DELIVERY',
    description: 'Leading cross-functional squads with disciplined Agile rituals, exhaustive UAT governance, and production observability.',
    skills: [
      'Agile',
      'Jira',
      'Confluence',
      'UAT',
      'Release management',
      'Production monitoring',
    ],
  },
];

export interface ToolboxCategory {
  id: string;
  category: string;
  tagline?: string;
  skills: string[];
}

export const EXPANDED_TOOLBOX: ToolboxCategory[] = [
  {
    id: 'pm',
    category: 'Product Management',
    tagline: 'Strategy, Discovery, Roadmaps & Lifecycle',
    skills: [
      'Jira',
      'Confluence',
      'Trello',
      'Figma',
      'Product Roadmapping',
      'Product Strategy',
      'Product Discovery',
      'Product Requirements',
      'PRDs',
      'User Stories',
      'Acceptance Criteria',
      'Backlog Management',
      'Prioritization',
      'Sprint Planning',
      'Agile',
      'Scrum',
      'Kanban',
      'Stakeholder Management',
      'Release Planning',
      'MVP Planning',
      'Product Lifecycle Management',
      'A/B Testing',
      'User Journey Mapping',
      'Feature Prioritization',
      'Cross-functional Leadership',
    ],
  },
  {
    id: 'analytics',
    category: 'Product Analytics',
    tagline: 'Funnels, Telemetry & Data-Driven Decisions',
    skills: [
      'Mixpanel',
      'CleverTap',
      'Segment',
      'Python',
      'Funnel Analysis',
      'Conversion Analysis',
      'Retention Analysis',
      'Product Metrics',
      'KPI Tracking',
      'User Behaviour Analysis',
      'Event Tracking',
      'Root Cause Analysis',
      'Data-driven Decision Making',
    ],
  },
  {
    id: 'technical',
    category: 'Technical Product',
    tagline: 'APIs, Integrations & Systems Architecture',
    skills: [
      'Postman',
      'REST APIs',
      'Webhooks',
      'SDKs',
      'SQL',
      'API Integrations',
      'Third-party Integrations',
      'System Integrations',
      'JSON',
      'API Testing',
      'Client-Server Architecture',
      'Technical Requirements',
      'Integration Testing',
      'Technical Documentation',
    ],
  },
  {
    id: 'qa',
    category: 'Quality Assurance',
    tagline: 'Test Strategy, Defect Lifecycle & UAT',
    skills: [
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'API Testing',
      'UAT',
      'Smoke Testing',
      'Sanity Testing',
      'End-to-End Testing',
      'Test Planning',
      'Test Strategy',
      'Test Cases',
      'Bug Lifecycle Management',
      'Release Validation',
      'Production Verification',
      'Risk-based Testing',
      'Quality Management',
      'Defect Analysis',
    ],
  },
  {
    id: 'payments',
    category: 'Payments & FinTech',
    tagline: 'Gateways, Wallets, KYC & Split Orchestration',
    skills: [
      'Adyen',
      'MangoPay',
      'Tabby',
      'Apple Pay',
      'Payment Integrations',
      'Digital Wallets',
      'Split Payments',
      'KYC',
      'AML',
      'SCA',
      'Payment Flows',
      'Transaction Lifecycle',
      'FinTech Product Operations',
      'Onfido',
    ],
  },
  {
    id: 'ai',
    category: 'AI & AI Product Development',
    tagline: 'LLMs, Prompt Engineering & AI Workflows',
    skills: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'Antigravity',
      'AI Product Development',
      'AI-assisted Prototyping',
      'Prompt Engineering',
      'LLM Product Concepts',
      'AI Feature Design',
      'AI Product Discovery',
      'AI-assisted Development',
      'AI Testing',
      'AI Workflow Automation',
      'AI Product Deployment Concepts',
    ],
  },
  {
    id: 'delivery',
    category: 'Product Delivery & Operations',
    tagline: 'Execution, Sprints, Releases & Incident Ops',
    skills: [
      'Project Management',
      'Technical Project Management',
      'Sprint Management',
      'Release Management',
      'Cross-functional Team Leadership',
      'Stakeholder Communication',
      'Requirements Management',
      'Risk Management',
      'Dependency Management',
      'Incident Management',
      'Technical Support Operations',
      'Product Operations',
      'Delivery Management',
      'Post-launch Support',
      'Process Improvement',
    ],
  },
  {
    id: 'observability',
    category: 'Observability & Production',
    tagline: 'Telemetry, Logging & Issue Investigation',
    skills: [
      'New Relic',
      'Mezmo',
      'Application Monitoring',
      'Production Monitoring',
      'Log Analysis',
      'Incident Analysis',
      'Root Cause Analysis',
      'Production Issue Investigation',
      'Performance Monitoring',
      'Release Monitoring',
    ],
  },
  {
    id: 'ux',
    category: 'UX & Product Design',
    tagline: 'Wireframes, Usability & User Experience',
    skills: [
      'Figma',
      'Wireframing',
      'User Flows',
      'User Journey Mapping',
      'UX Review',
      'UI Review',
      'Usability Testing',
      'Product Prototyping',
      'Design Validation',
      'Customer Experience',
    ],
  },
  {
    id: 'documentation',
    category: 'Documentation',
    tagline: 'PRDs, Specs, User Stories & Release Notes',
    skills: [
      'PRDs',
      'Product Requirements',
      'Functional Requirements',
      'Technical Documentation',
      'Confluence Documentation',
      'User Stories',
      'Acceptance Criteria',
      'Process Documentation',
      'Release Notes',
      'Product Flows',
      'API/Integration Documentation',
    ],
  },
];

export const TOOLBOX = EXPANDED_TOOLBOX;

export const IMPACT_METRICS = [
  {
    value: '50+',
    label: 'Product Initiatives',
    description: 'Across customer experience, payments, marketplace operations, integrations and automation.',
    highlight: 'eCommerce • FinTech • Marketplaces',
  },
  {
    value: '33%',
    label: 'Cancellation Reduction',
    description: 'Product and technical interventions driven by root-cause analysis and the Edit Order experience.',
    highlight: 'Root-Cause Discovery to Shipped Feature',
  },
  {
    value: '7+',
    label: 'Years Experience',
    description: 'Across digital products, technology, systems engineering, QA foundations and cross-functional delivery.',
    highlight: 'Quality → Systems → Delivery → Product',
  },
  {
    value: 'Multi-Sided',
    label: 'Marketplace Experience',
    description: 'Customer • Retailer • Picker • Driver — balancing operational SLAs with customer delight.',
    highlight: 'Full Lifecycle Systems Thinking',
  },
];
