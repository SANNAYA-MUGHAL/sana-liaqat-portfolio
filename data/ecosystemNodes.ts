export interface CommerceNode {
  id: string;
  label: string;
  stepNumber: number;
  description: string;
  externalSystems?: string[];
  responsibilities: string[];
  relatedProjects: string[];
}

export const COMMERCE_NODES: CommerceNode[] = [
  {
    id: 'customer-app',
    label: 'CUSTOMER APP',
    stepNumber: 1,
    description: 'Native iOS, Android, and web client entry points where users browse supermarket catalogs, manage accounts, and build carts.',
    externalSystems: ['Smiles Super-App'],
    responsibilities: [
      'Omnichannel user experience and embedded SDK host integration',
      'Address book geocoding and store availability verification',
      'Real-time session management and SSO token handoffs',
    ],
    relatedProjects: ['smiles-elgrocer-sdk-integration', 'cancellation-reduction-edit-order'],
  },
  {
    id: 'catalogue-cart',
    label: 'CATALOGUE & CART',
    stepNumber: 2,
    description: 'Dynamic multi-merchant inventory indexing, category taxonomies, search, promotional pricing, and persistent shopping cart services.',
    externalSystems: ['Algolia / Search', 'Dynamic Pricing Engine'],
    responsibilities: [
      'Multi-branch inventory synchronization across thousands of SKUs',
      'Promotional discounts, minimum order rules, and loyalty eligibility',
      'Edit Order cart delta computations within the 30-minute window',
    ],
    relatedProjects: ['cancellation-reduction-edit-order', 'smiles-elgrocer-sdk-integration'],
  },
  {
    id: 'checkout',
    label: 'CHECKOUT',
    stepNumber: 3,
    description: 'Order configuration engine capturing customer preferences, delivery slot scheduling, notes, and multi-source payment splits.',
    externalSystems: ['Delivery Slot Planner'],
    responsibilities: [
      'Dynamic delivery slot reservation and capacity checking',
      'Out-of-stock customer preference selection (Call, WhatsApp, Remove)',
      'Split-tender calculation (points + wallet + promo + residual)',
    ],
    relatedProjects: ['split-payment-wallet-orchestration', 'substitution-picker-fulfilment', 'delivery-slot-demand-optimization'],
  },
  {
    id: 'payments',
    label: 'PAYMENTS',
    stepNumber: 4,
    description: 'PCI-DSS compliant payment orchestration managing card tokenization, 3DS verification, digital wallets, BNPL, and idempotent webhook ledgers.',
    externalSystems: ['Adyen', 'Apple Pay', 'Tabby', 'Smiles Points Ledger'],
    responsibilities: [
      'Multi-tender waterfall authorization pipeline',
      'Tabby BNPL webhook synchronization and state machine resilience',
      'Partial refund handling, point restoration, and weighted item adjustment',
    ],
    relatedProjects: ['split-payment-wallet-orchestration', 'cancellation-reduction-edit-order'],
  },
  {
    id: 'order-management',
    label: 'ORDER MANAGEMENT',
    stepNumber: 5,
    description: 'Central transactional state machine (OMS) governing order lifecycles, operational SLAs, event broadcasts, and automated monitoring.',
    externalSystems: ['IVR Telephony', 'Slack Ops Webhook'],
    responsibilities: [
      'Lifecycle state transitions: Pending → Accepted → Picking → Checkout → En Route',
      'Real-time state duration watchers and automated escalation triggers',
      'Supermarket branch routing and dispatch rules',
    ],
    relatedProjects: ['automated-order-lifecycle-escalation', 'cancellation-reduction-edit-order'],
  },
  {
    id: 'retailer-picker',
    label: 'RETAILER / PICKER',
    stepNumber: 6,
    description: 'In-store operations portal and mobile picker application directing grocery gathering, barcode scanning, and substitution resolution.',
    externalSystems: ['WhatsApp Business API', 'Store Manager Dashboard'],
    responsibilities: [
      'Barcode validation and picking route optimization inside aisles',
      'Out-of-stock substitution suggestions and automated 6-minute SLA timers',
      'Weighted produce scale capture and checkout confirmation',
    ],
    relatedProjects: ['substitution-picker-fulfilment', 'automated-order-lifecycle-escalation'],
  },
  {
    id: 'driver',
    label: 'DRIVER',
    stepNumber: 7,
    description: 'Logistics fleet and courier routing application managing order pickup verification, vehicle dispatch, GPS navigation, and route clustering.',
    externalSystems: ['Careem Logistics', 'Fleet Dispatch Engine'],
    responsibilities: [
      'Picker-to-driver handoff verification and package seal checks',
      'Dynamic route batching and delivery time prediction',
      'Proof-of-delivery barcode scans and cash-on-delivery collection',
    ],
    relatedProjects: ['delivery-slot-demand-optimization', 'substitution-picker-fulfilment'],
  },
  {
    id: 'delivery',
    label: 'DELIVERY',
    stepNumber: 8,
    description: 'Final customer touchpoint including doorstep handover, contactless drops, real-time push alerts, and post-order CSAT feedback.',
    externalSystems: ['Customer Push Notification Service', 'Support Desk'],
    responsibilities: [
      'Doorstep completion confirmation and automated receipt dispatch',
      'Customer rating capture and driver tipping ledger',
      'Automated feedback ingestion into analytics data lake',
    ],
    relatedProjects: ['cancellation-reduction-edit-order', 'automated-order-lifecycle-escalation'],
  },
];

export interface FinTechNode {
  id: string;
  label: string;
  stepNumber: number;
  description: string;
  externalSystems?: string[];
  regulatoryFocus: string;
}

export const FINTECH_NODES: FinTechNode[] = [
  {
    id: 'investor',
    label: 'INVESTOR',
    stepNumber: 1,
    description: 'High-net-worth and retail investors accessing fractional property investment opportunities in the UK property market.',
    regulatoryFocus: 'FCA suitability screening & investor classification (High Net Worth, Sophisticated, Everyday Investor)',
  },
  {
    id: 'onboarding',
    label: 'ONBOARDING',
    stepNumber: 2,
    description: 'Digital sign-up journey gathering investor profile, investment capacity, risk tolerance declarations, and account credentials.',
    regulatoryFocus: 'Appropriateness testing, investor risk disclosures, and terms acceptance',
  },
  {
    id: 'kyc-compliance',
    label: 'KYC / COMPLIANCE',
    stepNumber: 3,
    description: 'Automated biometric identity verification, PEP/sanctions screening, and AML source-of-funds verification.',
    externalSystems: ['Onfido', 'Plaid'],
    regulatoryFocus: 'Anti-Money Laundering (AML) 5MLD compliance, biometric passport verification, and automated PEP checks via Onfido',
  },
  {
    id: 'payments-wallet',
    label: 'PAYMENTS & WALLET',
    stepNumber: 4,
    description: 'E-money wallet infrastructure supporting bank transfers, open banking deposits, investor sub-wallets, and escrow account holding.',
    externalSystems: ['MangoPay', 'Plaid Open Banking'],
    regulatoryFocus: 'Safeguarded client funds accounts, e-money issuance under FCA regulations, and Open Banking SCA authorization via Plaid & MangoPay',
  },
  {
    id: 'property-investment',
    label: 'PROPERTY INVESTMENT',
    stepNumber: 5,
    description: 'Browse curated UK property assets, inspect financial yields, rental forecasts, and execute fractional share purchases.',
    regulatoryFocus: 'FCA statutory product disclosures, independent property valuation reports, and real-time equity allocation',
  },
  {
    id: 'spv-ownership',
    label: 'SPV / OWNERSHIP',
    stepNumber: 6,
    description: 'Issuance of fractional shares in ring-fenced Special Purpose Vehicles (SPVs) owning the underlying physical property assets.',
    regulatoryFocus: 'UK Companies House share allocation records, legal articles of association, and digital certificate issuance',
  },
  {
    id: 'dividends-resale',
    label: 'DIVIDENDS / RESALE',
    stepNumber: 7,
    description: 'Automated rental dividend distribution into investor wallets and secondary-market trading for fractional share liquidity.',
    regulatoryFocus: 'Tax statement reporting, automated dividend withholding calculation, and regulated secondary bulletin board rules',
  },
];
