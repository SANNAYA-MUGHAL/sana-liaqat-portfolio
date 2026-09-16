export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: 'In Progress' | 'Completed';
  dateBadge?: string;
  description: string;
  skillTags: string[];
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-ai-pm',
    title: 'IBM AI Product Manager Professional Certificate',
    issuer: 'IBM • Coursera',
    status: 'In Progress',
    description: '10-course professional certificate covering AI product strategy, product lifecycle management, generative AI fundamentals, Agile methodologies, and stakeholder management.',
    skillTags: ['AI Product Strategy', 'Product Lifecycle', 'Generative AI', 'Agile', 'Stakeholder Management'],
  },
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google • Coursera',
    status: 'In Progress',
    description: '9-course professional certificate covering SQL, R programming, Tableau, data storytelling, statistical thinking, and applied analytics.',
    skillTags: ['SQL', 'R', 'Tableau', 'Data Analytics', 'Data Storytelling', 'Statistical Thinking'],
  },
  {
    id: 'gen-ai-prompt-engineering',
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM • Coursera',
    status: 'In Progress',
    description: 'Training covering prompt patterns, model evaluation, and practical prompt engineering with generative AI tools.',
    skillTags: ['Prompt Engineering', 'Generative AI', 'Model Evaluation'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Visual Design',
    issuer: 'e-Rozgaar Program Pakistan',
    status: 'Completed',
    dateBadge: 'Completed • 2019',
    description: 'Practical training in UI/UX and visual design using Adobe XD and Adobe Illustrator.',
    skillTags: ['UI/UX', 'Adobe XD', 'Adobe Illustrator', 'Prototyping'],
  },
  {
    id: 'web-dev-foundations',
    title: 'Web Development & Technical Foundations',
    issuer: 'Virtual Soft',
    status: 'Completed',
    dateBadge: '2016–2017',
    description: 'Technical foundations covering HTML, CSS, JavaScript, jQuery, PHP, SQL, and Java.',
    skillTags: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Java'],
  },
];

export interface Award {
  id: string;
  title: string;
  subtitle?: string;
  organization: string;
  date: string;
  category: string;
}

export const AWARDS: Award[] = [
  {
    id: 'award-fintech',
    title: 'Product Vision & FinTech Domain Recognition',
    organization: 'elGrocer by Smiles',
    date: 'October 2024',
    category: 'Product & FinTech',
  },
  {
    id: 'award-hackathon',
    title: 'Hackathon Recognition',
    subtitle: 'Project Management & Product Execution',
    organization: 'elGrocer by Smiles',
    date: 'June 2024',
    category: 'Product Execution',
  },
  {
    id: 'award-kpi',
    title: 'Best KPI Achiever',
    subtitle: 'Performance Excellence',
    organization: 'elGrocer by Smiles',
    date: 'June 2023',
    category: 'Performance',
  },
  {
    id: 'award-contribution',
    title: 'Outstanding Contribution Award',
    organization: 'elGrocer by Smiles',
    date: 'June 2023',
    category: 'Contribution',
  },
];

export interface LanguageItem {
  language: string;
  proficiency: string;
  credential?: string;
  statusBadge?: string;
  isDeveloping?: boolean;
}

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Urdu',
    proficiency: 'Native',
  },
  {
    language: 'English',
    proficiency: 'B2',
    credential: 'IELTS Academic • Band 6.5',
  },
  {
    language: 'French',
    proficiency: 'A1',
    statusBadge: 'Currently Learning',
    isDeveloping: true,
  },
];

export interface BeyondProductItem {
  title: string;
  activity: string;
  description: string;
  iconName: 'chess' | 'activity' | 'lightbulb';
}

export const BEYOND_PRODUCT: BeyondProductItem[] = [
  {
    title: 'Strategic Thinking',
    activity: 'Chess',
    description: 'An interest in strategy, pattern recognition, and decision-making.',
    iconName: 'chess',
  },
  {
    title: 'Active Lifestyle',
    activity: 'Table Tennis • Football',
    description: 'Staying active and maintaining energy outside work.',
    iconName: 'activity',
  },
  {
    title: 'Continuous Learning',
    activity: 'Emerging Technology • AI • Product Innovation',
    description: 'Regularly exploring new technologies, product ideas, and evolving digital experiences.',
    iconName: 'lightbulb',
  },
];
