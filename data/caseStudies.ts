export interface CaseStudy {
  id: string;
  projectNumber: string;
  category: 'PRODUCT DISCOVERY' | 'PLATFORM' | 'PAYMENTS' | 'MARKETPLACE' | 'AUTOMATION' | 'ANALYTICS';
  title: string;
  subtitle: string;
  shortDescription: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  company: string;
  domain: string;
  role: string;
  timeframe?: string;
  problem: string;
  myRoleDescription: string;
  discovery: {
    overview: string;
    flow?: string[];
    keyPoints: string[];
    behaviouralCauses?: string[];
    technicalCauses?: string[];
  };
  productInsight?: string;
  solution: {
    overview: string;
    keyFeatures: string[];
    userJourneyBefore?: string[];
    userJourneyAfter?: string[];
  };
  productDecisions: string[];
  complexity: {
    technical: string[];
    operational: string[];
  };
  outcome: {
    primaryMetric: string;
    description: string;
    highlights: string[];
  };
  whatILearned: string[];
  flowDiagram?: {
    type: 'linear' | 'split' | 'branching' | 'loop';
    steps: { label: string; detail?: string; badge?: string }[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cancellation-reduction-edit-order',
    projectNumber: 'PROJECT 01',
    category: 'PRODUCT DISCOVERY',
    title: 'Cancellation Reduction & Edit Order',
    subtitle: 'How behavioural and production analysis turned a cancellation problem into an Edit Order experience.',
    shortDescription: 'Used customer behaviour and production data to uncover why users were cancelling orders and translated the findings into product and payment interventions.',
    metric: '33% ↓',
    metricLabel: 'Order Cancellations',
    tags: ['Product Discovery', 'Mixpanel', 'New Relic', 'Customer Behaviour', 'Payments', 'Product Optimization'],
    company: 'elGrocer / Smiles',
    domain: 'eCommerce • Marketplace • FinTech',
    role: 'Product Lead — Discovery, Systems & Delivery',
    problem: 'elGrocer was experiencing significant post-checkout order cancellations. Instead of treating cancellation as a single monolithic metric, the product investigation focused on understanding the exact customer friction: Why are customers cancelling after already committing and deciding to purchase?',
    myRoleDescription: 'Led cross-functional product discovery, analyzed quantitative user funnels in Mixpanel alongside New Relic production logs, formulated the hypothesis, designed the Edit Order product specifications, and coordinated delivery across mobile, backend, retailer portal, and payment gateways.',
    discovery: {
      overview: 'Conducted systematic quantitative funnel investigation and log correlation to map the anatomy of cancellations.',
      flow: ['Mixpanel', 'Order Behaviour', 'Cancellation Patterns', 'Production Logs', 'Payment Failures', 'Root Causes'],
      keyPoints: [
        'Discovered an unexpected cluster: over 40% of cancelling users placed a new order with nearly identical items within 15 minutes.',
        'Identified high correlation between promo-code abandonment and post-order cancellations.',
        'Audited payment gateway webhooks and found transient synchronization drops causing false-failed transaction states.',
      ],
      behaviouralCauses: [
        'Change delivery slots after realizing scheduling conflicts',
        'Apply forgotten promotional vouchers or bank discount codes',
        'Add essential missing grocery products to their basket',
        'Recreate essentially the same basket immediately after cancellation',
      ],
      technicalCauses: [
        'Payment-status synchronization issues between checkout and core database',
        'Tabby BNPL webhook drops causing order state race conditions',
        'Failed transaction states falsely triggering order cancellation pipelines',
      ],
    },
    productInsight: 'Some customers didn\'t actually want to cancel their order. They wanted to modify it.',
    solution: {
      overview: 'Designed and shipped the "Edit Order" experience with a 30-minute operational window, paired with technical resilience fixes across payment webhooks.',
      keyFeatures: [
        'Change Delivery Slot directly without cancelling the active order',
        'Apply Promo Code retroactively to calculate revised total',
        'Add Products to cart with incremental payment authorization',
        'Automated 30-minute grace window aligned with retailer picking cutoffs',
      ],
      userJourneyBefore: [
        'Place Order',
        'Need a Change',
        'Cancel Order',
        'Rebuild Cart From Scratch',
        'Checkout Again',
      ],
      userJourneyAfter: [
        'Place Order',
        'Edit Order Trigger',
        '30-Minute Window',
        'Modify Items / Slot / Code',
        'Confirm Changes Seamlessly',
      ],
    },
    productDecisions: [
      'Bounded the edit window to 30 minutes to safeguard supermarket picking SLAs and prevent delivery route disruptions.',
      'Allowed item additions and promo adjustments, but restricted item removals after the window to prevent merchant inventory lockups.',
      'Integrated delta authorization charges for added items rather than voiding and re-authorizing the entire order balance.',
    ],
    complexity: {
      technical: [
        'Synchronous state locking: freezing order state on retailer and picker tablets while customer is actively editing.',
        'Webhook idempotency and state reconciliation across Adyen, Tabby, and Apple Pay.',
        'Dynamic basket delta calculation: updating delivery fee brackets and promo minimum-spend requirements on the fly.',
      ],
      operational: [
        'Aligning supermarket branch supervisors so pickers did not begin gathering items before the 30-minute edit buffer expired.',
        'Training customer care agents to guide users to self-serve editing rather than manually cancelling orders.',
      ],
    },
    outcome: {
      primaryMetric: '33% Reduction',
      description: 'Achieved a sustained 33% reduction in overall order cancellations through behavioural product intervention combined with payment infrastructure resilience.',
      highlights: [
        '33% drop in post-checkout cancellations within 90 days of rollout',
        'Over 60% reduction in customer support tickets regarding promo code remorse',
        'Preserved gross merchandise value (GMV) by eliminating cart rebuilding friction',
        'Zero disruption to retailer picking throughput and dispatch times',
      ],
    },
    whatILearned: [
      'Never treat a negative metric as a homogenous problem; behavioural segmentation transforms perceived churn into feature innovation.',
      'Product changes in two-sided marketplaces must always be calibrated against physical operational constraints (picking schedules).',
    ],
    flowDiagram: {
      type: 'branching',
      steps: [
        { label: 'Mixpanel Analytics', detail: 'Event tracking & funnel drop-off' },
        { label: 'Order Behaviour', detail: 'Pattern: Re-orders within 15 mins' },
        { label: 'Cancellation Patterns', detail: 'Slot change, promo code, add items' },
        { label: 'Production Logs', detail: 'New Relic log analysis' },
        { label: 'Payment Failures', detail: 'Webhook sync & state transitions' },
        { label: 'Edit Order Solution', detail: '30-min window & delta payment', badge: '33% Cancellation Drop' },
      ],
    },
  },
  {
    id: 'smiles-elgrocer-sdk-integration',
    projectNumber: 'PROJECT 02',
    category: 'PLATFORM',
    title: 'Smiles × elGrocer SDK Integration',
    subtitle: 'Embedding elGrocer\'s grocery marketplace within the Smiles super-app.',
    shortDescription: 'Embedded elGrocer\'s grocery marketplace within the Smiles super-app, creating a cross-platform grocery experience for Smiles users.',
    metric: 'Super-App Expansion',
    metricLabel: 'Cross-Platform Grocery',
    tags: ['SDK', 'APIs', 'Embedded Commerce', 'Loyalty', 'UAT'],
    company: 'elGrocer / Smiles',
    domain: 'Platform • Embedded Commerce • Loyalty',
    role: 'Product & Platform Lead — Technical Integration & UAT',
    problem: 'To scale grocery market penetration, elGrocer needed to embed its full multi-merchant catalog, cart, and checkout directly inside the Smiles super-app (e&) without compromising performance, checkout reliability, or user experience across iOS and Android containers.',
    myRoleDescription: 'Owned technical platform requirements, managed API coordination between engineering groups, orchestrated comprehensive UAT across iOS/Android, and monitored post-launch transaction pipelines.',
    discovery: {
      overview: 'Evaluated host-app container constraints, authentication token handshakes, address mapping, and dual loyalty point accrual.',
      keyPoints: [
        'Analyzed performance overhead of embedding full webview vs. hybrid native SDK components.',
        'Mapped discrepancies between Smiles customer identity format and elGrocer delivery address data schemas.',
        'Identified edge-case token expiration scenarios occurring during lengthy grocery browsing sessions.',
      ],
    },
    solution: {
      overview: 'Delivered an embedded SDK marketplace architecture providing an omnichannel grocery shopping experience natively inside Smiles.',
      keyFeatures: [
        'API coordination across elGrocer core services and Smiles API gateway',
        'UAT leadership across multiple device sizes, operating systems, and network profiles',
        'Bi-directional address synchronization between Smiles location profiles and elGrocer geo-fenced delivery zones',
        'SDK/native order attribution ensuring accurate operational metrics and merchant payouts',
        'Integrated promo codes and Smiles loyalty points redemption/earn engine',
        'Cross-platform notification routing for live order status updates',
        'Cross-platform data validation & financial reconciliation',
        'Post-launch telemetry and rapid incident triage',
      ],
    },
    productDecisions: [
      'Implemented silent background token refreshes to prevent checkout drop-offs during 20+ minute grocery browsing sessions.',
      'Designed modular catalog caching layers so super-app memory limits were never exceeded.',
      'Created a unified error fallback screen directing users to dedicated support without crashing the parent application.',
    ],
    complexity: {
      technical: [
        'Cross-platform SDK bridge communication between Swift/Kotlin native shells and React/web core.',
        'Bi-directional token authentication maintaining PCI compliance and data isolation.',
        'Real-time geo-location mapping with elGrocer store polygon boundaries.',
      ],
      operational: [
        'Synchronizing release schedules across two distinct engineering organizations and app store submission cycles.',
        'Managing end-to-end UAT matrix covering hundreds of test cases and payment scenarios.',
      ],
    },
    outcome: {
      primaryMetric: 'Production Super-App Delivery',
      description: 'Successfully launched elGrocer grocery ordering inside Smiles, opening a multi-million user channel with robust uptime and seamless loyalty point utilization.',
      highlights: [
        'Flawless launch on iOS and Android with zero critical Sev-1 integration defects',
        'Seamless Smiles points redemption driving high repeat order velocity',
        'Standardized integration architecture reusable for future embedded merchant partnerships',
      ],
    },
    whatILearned: [
      'Platform integrations depend heavily on contract-first API design and defensive exception handling across host containers.',
      'Rigorous cross-functional UAT is non-negotiable when combining two complex distributed architectures.',
    ],
    flowDiagram: {
      type: 'linear',
      steps: [
        { label: 'Smiles Host App', detail: 'User opens grocery tab' },
        { label: 'SDK Auth Handshake', detail: 'Silent token exchange & address sync' },
        { label: 'elGrocer Catalog API', detail: 'Geo-located supermarket inventory' },
        { label: 'Cart & Points Engine', detail: 'Smiles points + card checkout' },
        { label: 'Order Dispatch', detail: 'Attribution & operational routing' },
        { label: 'Live Notifications', detail: 'Bi-directional status tracking' },
      ],
    },
  },
  {
    id: 'split-payment-wallet-orchestration',
    projectNumber: 'PROJECT 03',
    category: 'PAYMENTS',
    title: 'Split Payment & Wallet Orchestration',
    subtitle: 'Multi-source payment journeys combining primary cards, digital wallets, points, and promotional balances.',
    shortDescription: 'Delivered multi-source payment journeys allowing customers to combine primary and secondary funding methods within a single grocery order.',
    metric: 'Multi-Tender Orchestration',
    metricLabel: 'FinTech Checkout Flow',
    tags: ['Payments', 'Adyen', 'Wallet', 'Loyalty', 'FinTech'],
    company: 'elGrocer / FinTech',
    domain: 'Payments • FinTech • eCommerce',
    role: 'Technical Product Lead — Payments & Checkout Architecture',
    problem: 'Grocery shoppers frequently possessed partial balances across loyalty points, promo vouchers, and digital wallets. The inability to combine these fragmented balances with credit cards or Apple Pay created significant checkout abandonment and depressed loyalty engagement.',
    myRoleDescription: 'Led payment systems product requirements, defined split-tender business logic, mapped out ledger state transitions, and ensured PCI-DSS compliant orchestration with Adyen and banking partners.',
    discovery: {
      overview: 'Analyzed checkout funnel drop-offs where users had positive wallet or points balances but abandoned when unable to offset order totals.',
      keyPoints: [
        'Customers wanted to exhaust expiring points and promotional balances first.',
        'Identified critical failure modes when an order undergoes post-checkout modifications (out-of-stock items, price weight variances).',
        'Audited reconciliation headaches caused by multiple partial refunds across different payment rails.',
      ],
    },
    solution: {
      overview: 'Delivered a deterministic multi-tender payment orchestration engine allowing customers to seamlessly combine primary and secondary funding sources in a single checkout.',
      keyFeatures: [
        'Primary payment methods: Adyen Card, Apple Pay, Cash on Delivery (COD), Card on Delivery',
        'Secondary payment methods: In-app Wallet, Smiles Points, Promotional discounts',
        'Deterministic deduction sequence: Promo first → Points second → Wallet third → Residual via Card/Apple Pay',
        'Real-time balance validation and split authorization pipeline',
      ],
    },
    productDecisions: [
      'Enforced strict waterfall deduction rules to protect customer cash balances while maximizing promotional burn.',
      'In the event of partial out-of-stock refunds, structured the refund hierarchy: primary card refunded first in cash, followed by loyalty point restoration.',
      'Displayed clear transparent ledger receipts in order summary and email invoices.',
    ],
    complexity: {
      technical: [
        'Out-of-stock refunds: partial refund routing ensuring loyalty points and wallet balances are credited correctly without orphan transactions.',
        'Order-value increases: handling weighted produce items (e.g. meat, fruit) where final picked weight exceeds initial estimate.',
        'Substitutions & cancellations: automated multi-tender reversal across Adyen, Smiles loyalty database, and elGrocer wallet ledger.',
        'Loyalty-point restoration and wallet adjustments under network timeout conditions.',
      ],
      operational: [
        'Financial reconciliation between merchant receivables, payment gateway fees, telecom loyalty points liability, and cash delivery reconciliations.',
        'Clear customer service tooling to inspect split-tender breakdowns on disputed orders.',
      ],
    },
    outcome: {
      primaryMetric: 'Seamless Multi-Source Payment',
      description: 'Delivered robust split-payment journeys that significantly boosted checkout conversion, accelerated loyalty balance burn-down, and handled complex edge-case refunds flawlessly.',
      highlights: [
        'Zero balance leakage or reconciliation discrepancies across millions in processed GMV',
        'Increased checkout completion rate among users with active wallet/points balances',
        'Automated edge-case refund workflows, eliminating manual finance adjustments',
      ],
    },
    whatILearned: [
      'In FinTech and payment systems, happy paths are straightforward; true product rigor lies in handling weighted items, partial refunds, and asynchronous webhook cancellations.',
    ],
    flowDiagram: {
      type: 'split',
      steps: [
        { label: 'Order Total', detail: 'AED 50 Total Bill' },
        { label: 'Smiles Points', detail: '- AED 20 (Secondary)' },
        { label: 'In-App Wallet', detail: '- AED 10 (Secondary)' },
        { label: 'Promo Code', detail: '- AED 10 (Discount)' },
        { label: 'Remaining Balance', detail: 'AED 10 (Primary Rail)' },
        { label: 'Adyen / Apple Pay / COD', detail: 'Final Charged Transaction', badge: '100% Reconciled' },
      ],
    },
  },
  {
    id: 'substitution-picker-fulfilment',
    projectNumber: 'PROJECT 04',
    category: 'MARKETPLACE',
    title: 'Substitution & Picker Fulfilment',
    subtitle: 'Designing out-of-stock resolution workflows connecting customer preferences with in-store supermarket picker operations.',
    shortDescription: 'Designed an out-of-stock resolution workflow connecting customer preferences with in-store Picker operations.',
    metric: 'Customer Control ↔ Fulfilment Speed',
    metricLabel: 'Operational SLA Trade-Off',
    tags: ['Marketplace', 'Picker App', 'WhatsApp', 'Fulfilment', 'SLA'],
    company: 'elGrocer / Operations',
    domain: 'Marketplace • Logistics • Operations',
    role: 'Product Manager — Marketplace & Store Operations',
    problem: 'When supermarket shelf stock ran out, pickers were forced into ad-hoc phone calls or arbitrary item replacements. This resulted in delayed picking times, missed delivery windows, or unhappy customers receiving unwanted substitutes.',
    myRoleDescription: 'Conducted in-store shadowing with supermarket pickers, mapped operational bottlenecks, designed the out-of-stock communication protocol, and balanced customer control with strict fulfillment speed SLAs.',
    discovery: {
      overview: 'Shadowed supermarket pickers during peak evening shifts to discover the exact points of operational breakdown.',
      keyPoints: [
        'Pickers spent an average of 4-7 minutes per out-of-stock item attempting to call unresponsive customers.',
        'Customers were frustrated by sudden cold calls during working hours or receiving random replacement brands.',
        'A single delayed order caused a compounding chain reaction across delivery driver dispatch schedules.',
      ],
    },
    solution: {
      overview: 'Designed a structured multi-channel substitution workflow that captures explicit user preferences upfront and enforces an automated 6-minute decision SLA.',
      keyFeatures: [
        'Upfront customer preference selection at checkout: CALL | WHATSAPP | REMOVE ITEM',
        'Picker app algorithmic recommendations for relevant alternative products (brand, size, price parity)',
        'Automated 6-Minute customer response window with live countdown timer',
        'Automatic picker fallback execution if response window elapses',
        'Instant driver handoff upon picking completion',
      ],
    },
    productDecisions: [
      'Selected 6 minutes as the golden threshold: enough time for customers to review WhatsApp alternatives, short enough to protect overall delivery SLAs.',
      'Empowered pickers with intelligent alternative suggestions to avoid manual searching across aisles.',
      'Automated price differential handling so substitutions costing slightly more or less adjust automatically at final checkout.',
    ],
    complexity: {
      technical: [
        'WhatsApp Business API integration with real-time webhooks updating the picker tablet app state.',
        'Dynamic basket pricing updates and delta pre-authorizations when replacement items differ in cost.',
        'Asynchronous response synchronization: handling customer decisions submitted at minute 5:58.',
      ],
      operational: [
        'Designing simple, high-contrast UI for in-store pickers operating in busy, noisy retail aisles under tight time limits.',
        'Ensuring supermarket floor staff adhere to substitution guidelines without skipping steps.',
      ],
    },
    outcome: {
      primaryMetric: 'SLA Protection & CSAT',
      description: 'Balanced customer autonomy with store fulfillment velocity, reducing picking idle time and eliminating unwanted item disputes.',
      highlights: [
        'Significantly shortened average out-of-stock handling time per order',
        'Customer satisfaction scores on order accuracy increased markedly',
        'Compounding delivery delays reduced across peak grocery shifts',
      ],
    },
    whatILearned: [
      'In on-demand marketplaces, the best customer experience is useless if it destroys the unit economics and physical operational throughput of field workers.',
    ],
    flowDiagram: {
      type: 'branching',
      steps: [
        { label: 'Product Unavailable', detail: 'Picker flags out-of-stock' },
        { label: 'Customer Preference', detail: 'CALL | WHATSAPP | REMOVE ITEM' },
        { label: 'Relevant Alternatives', detail: 'Algorithmic suggestions' },
        { label: '6-Minute SLA Window', detail: 'Live response timer countdown' },
        { label: 'Customer Decision / Fallback', detail: 'Approved or fallback triggered' },
        { label: 'Picking Complete → Driver', detail: 'Immediate handoff to delivery' },
      ],
    },
  },
  {
    id: 'automated-order-lifecycle-escalation',
    projectNumber: 'PROJECT 05',
    category: 'AUTOMATION',
    title: 'Automated Order Lifecycle Escalation',
    subtitle: 'Automated operational intervention when orders remained too long within critical fulfillment states.',
    shortDescription: 'Automated operational intervention when orders remained too long within critical fulfilment states.',
    metric: 'Zero-Stall Lifecycle',
    metricLabel: 'Operational Automation',
    tags: ['Workflow Automation', 'IVR', 'Slack', 'SLA', 'Operations'],
    company: 'elGrocer / Operations & Support',
    domain: 'Automation • Operations • Systems',
    role: 'Product Operations & Systems Lead',
    problem: 'During high-volume periods, orders occasionally stalled silently in transitional states (e.g., supermarket failing to accept order, picker unassigned), leading to missed customer delivery promises and manual customer support firefighting.',
    myRoleDescription: 'Mapped the complete order fulfillment state machine, established state threshold limits, designed the automated IVR voice alert pipeline, and architected Slack channel escalation workflows.',
    discovery: {
      overview: 'Audited delayed orders to identify the root cause of fulfillment stalls across the entire lifecycle.',
      keyPoints: [
        'Most fulfillment delays occurred before picking even started — in the PENDING and ACCEPTANCE phases.',
        'Store supervisors frequently missed tablet push notifications during noisy rush hours.',
        'By the time customer support noticed a stalled order, delivery was already doomed to be late.',
      ],
    },
    solution: {
      overview: 'Engineered an autonomous watchdog service monitoring state transitions and executing multi-tier escalating interventions.',
      keyFeatures: [
        'State-by-state monitoring: PENDING → IN PROGRESS → PICKING → CHECKOUT → EN ROUTE',
        'Dynamic threshold triggers based on store volume and historical fulfillment speed',
        'Automated IVR telephone call dispatch to branch manager on initial threshold breach',
        'Smart retry logic: up to 3 attempts with progressive intervals',
        'Automated high-priority Slack channel escalation with actionable order buttons if IVR is unanswered',
      ],
    },
    productDecisions: [
      'Prioritized voice phone calls (IVR) over emails or push notifications because physical ringtones penetrate noisy grocery stockrooms.',
      'Included quick-action buttons directly inside Slack alerts (e.g., "Reassign Branch", "Extend SLA", "Call Store") so operations could resolve issues in seconds.',
    ],
    complexity: {
      technical: [
        'Real-time state machine listener connected to MongoDB / event streams with sub-second latency.',
        'Integration with cloud telephony APIs (IVR) with automated answer-machine detection and webhook confirmation.',
        'Race-condition suppression: ensuring that if a store manager clicks "Accept" while IVR is dialing, subsequent retry calls instantly terminate.',
      ],
      operational: [
        'Setting threshold sensitivity to avoid alert fatigue among store supervisors while maintaining strict SLA protection.',
        'Routing Slack alerts to specific regional operations pods based on store geo-location.',
      ],
    },
    outcome: {
      primaryMetric: 'Proactive Delay Prevention',
      description: 'Replaced manual reactive firefighting with an automated operational safety net, virtually eliminating unmonitored stalled orders.',
      highlights: [
        'Over 75% of stalled orders resolved on the first IVR voice call before human ops intervention',
        'Drastic decrease in late-delivery customer complaints',
        'Operational teams freed from manual spreadsheet order tracking',
      ],
    },
    whatILearned: [
      'The most valuable automations are those that silently protect customer promises by enforcing operational discipline on the ground.',
    ],
    flowDiagram: {
      type: 'linear',
      steps: [
        { label: 'Fulfilment State Machine', detail: 'PENDING → PICKING → EN ROUTE' },
        { label: 'Threshold Exceeded', detail: 'State duration triggers alert' },
        { label: 'Identify Branch Owner', detail: 'Geo & store registry lookup' },
        { label: 'Automated IVR Call', detail: 'Voice prompt: Answered? YES=Stop' },
        { label: 'Retry Loop', detail: 'Maximum 3 attempts' },
        { label: 'Slack Escalation', detail: 'Urgent Ops alert with actionable buttons', badge: 'Auto-Triage' },
      ],
    },
  },
  {
    id: 'delivery-slot-demand-optimization',
    projectNumber: 'PROJECT 06',
    category: 'ANALYTICS',
    title: 'Delivery Slot Demand Optimization',
    subtitle: 'Analyzed approximately 12 months of historical order data to identify demand patterns across delivery windows, weekdays and seasonal periods.',
    shortDescription: 'Analyzed approximately 12 months of historical order data to identify demand patterns across delivery windows, weekdays and seasonal periods.',
    metric: 'Data-Driven Capacity',
    metricLabel: 'Demand Modeling & Planning',
    tags: ['Python', 'Product Analytics', 'Demand Analysis', 'Capacity Planning'],
    company: 'elGrocer / Fleet & Planning',
    domain: 'Analytics • Data • Capacity Planning',
    role: 'Product Analytics & Operations Lead',
    problem: 'Grocery demand varied wildly across days of the week, delivery hours, and holidays. Static delivery slot allocations resulted in sold-out slots during Friday evening surges (lost revenue) and idle delivery drivers on Tuesday mornings (wasted fleet costs).',
    myRoleDescription: 'Extracted and modeled ~12 months of historical order data using Python, identified peak purchasing windows, developed capacity curve models, and translated data insights into dynamic delivery slot configurations.',
    discovery: {
      overview: 'Conducted in-depth exploratory data analysis across millions of historical order records spanning various geographical zones and retail partners.',
      keyPoints: [
        'Identified severe demand skew: over 65% of weekend grocery volume was concentrated in two 2-hour evening windows.',
        'Observed that slot scarcity caused users to either abandon their cart or select next-day delivery with higher cancellation propensity.',
        'Correlated delivery delays with vehicle fleet bottlenecks rather than picker capacity.',
      ],
    },
    solution: {
      overview: 'Constructed an analytical capacity-planning model that transformed static scheduling into demand-aligned dynamic delivery windows.',
      keyFeatures: [
        'Historical Orders extraction & cleansing (~12 months of multi-emirate transaction logs)',
        'Time & Day Analysis mapping hour-by-hour order velocities',
        'Identification of localized peak demand windows per retail hub',
        'Capacity insights balancing supermarket picker capacity with delivery driver route density',
        'Dynamic delivery slot allocation strategy for store operations',
      ],
    },
    productDecisions: [
      'Transitioned from uniform slot capacity to tiered slot allowances dynamically calibrated to historical demand curves.',
      'Introduced dynamic buffer margins ahead of peak rush hours to accommodate express same-day demand.',
      'Shared data dashboards with supermarket chain partners to align in-store staff shift scheduling with projected demand peaks.',
    ],
    complexity: {
      technical: [
        'Processing large historical datasets, handling null timestamps, and normalizing regional holiday anomalies (e.g., Ramadan schedules).',
        'Building reusable Python analytical scripts for monthly demand forecasting.',
        'Modeling multi-variable constraints: store picking capacity, parking access, and driver travel radiuses.',
      ],
      operational: [
        'Persuading traditional supermarket partners to adjust staffing shifts to match empirical order curves.',
        'Aligning third-party logistics fleet contracts with variable weekend capacity spikes.',
      ],
    },
    outcome: {
      primaryMetric: 'Capacity & Revenue Optimization',
      description: 'Delivered data-backed slot allocation schedules that captured previously missed peak-hour revenue while improving fleet efficiency during off-peak windows.',
      highlights: [
        'Substantial increase in available peak-hour order capacity without expanding fleet size',
        'Reduced delivery slot stockouts by over 40% during weekend rush periods',
        'Improved driver fleet utilization rates across weekday morning shifts',
      ],
    },
    whatILearned: [
      'Data science is only as good as the operational decisions it influences; the real victory was translating Python insights into changes on the supermarket floor.',
    ],
    flowDiagram: {
      type: 'linear',
      steps: [
        { label: '12-Month Historical Orders', detail: 'Cleansed multi-emirate dataset' },
        { label: 'Time & Day Analysis', detail: 'Hour-by-hour velocity patterns' },
        { label: 'Demand Clustering', detail: 'Weekend & seasonal surges mapped' },
        { label: 'Peak Windows Identified', detail: 'Identified chronic bottlenecks' },
        { label: 'Capacity Insights', detail: 'Balanced picking vs driver fleet' },
        { label: 'Slot Planning Rollout', detail: 'Dynamic tiered delivery windows', badge: 'Demand Aligned' },
      ],
    },
  },
];
