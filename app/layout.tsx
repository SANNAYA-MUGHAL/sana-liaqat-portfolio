import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#F7F8FC',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sana Liaqat | Product Manager — FinTech, SaaS & Marketplace Products',
  description:
    'Product Manager with 7+ years across FinTech, eCommerce, SaaS and PropTech. Explore product case studies spanning discovery, payments, platform integrations, marketplaces, automation and analytics.',
  keywords: [
    'Product Manager',
    'Technical Product Manager',
    'FinTech Product Manager',
    'SaaS Product Manager',
    'eCommerce Product Manager',
    'Marketplace Product Manager',
    'Product Portfolio',
    'Sana Liaqat',
  ],
  authors: [{ name: 'Sana Liaqat' }],
  creator: 'Sana Liaqat',
  openGraph: {
    title: 'Sana Liaqat | Product Manager — FinTech, SaaS & Marketplace Products',
    description:
      'Product Manager with 7+ years across FinTech, eCommerce, SaaS and PropTech. Explore product case studies spanning discovery, payments, platform integrations, marketplaces, automation and analytics.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sana Liaqat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sana Liaqat | Product Manager — FinTech, SaaS & Marketplace Products',
    description:
      'Product Manager with 7+ years across FinTech, eCommerce, SaaS and PropTech. Explore product case studies spanning discovery, payments, platform integrations, marketplaces, automation and analytics.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sana Liaqat',
    jobTitle: 'Product Manager',
    email: 'mailto:sannayamughal9@gmail.com',
    sameAs: ['https://www.linkedin.com/in/sanaliaqatpage/'],
    description:
      'Product Manager with 7+ years across FinTech, eCommerce, SaaS and PropTech, combining product thinking with deep experience in payments, APIs, marketplace operations and cross-functional delivery.',
    knowsAbout: [
      'Product Management',
      'Technical Product Management',
      'FinTech',
      'Payments & Orchestration',
      'Marketplaces',
      'API & SDK Integrations',
      'Workflow Automation',
      'Product Analytics',
      'Quality Assurance',
      'AI Product Development',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-[#172033] font-sans antialiased selection:bg-[#6C5CE7]/20 selection:text-[#172033]">
        {children}
      </body>
    </html>
  );
}
