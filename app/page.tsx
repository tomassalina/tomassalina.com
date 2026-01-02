import { ChatLayout } from '@/components/chat/chat-layout';

import Script from 'next/script';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tomas Ezequiel Salina',
  givenName: 'Tomas',
  familyName: 'Salina',
  url: 'https://www.tomassalina.com',
  jobTitle: 'Co-Founder & Builder',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Instituto Tecnológico de Buenos Aires (ITBA)',
  },
  knowsAbout: ['Computer Science', 'Business', 'Web3', 'Fintech', 'EdTech'],
  worksFor: [
    { '@type': 'Organization', name: 'Slice', url: 'https://www.slicehub.xyz' },
    { '@type': 'Organization', name: 'Koopay', url: 'https://www.koopay.io' },
  ],
  sameAs: [
    'https://x.com/salinatomass',
    'https://github.com/tomassalina',
    'https://linkedin.com/in/tomassalina',
  ],
};

export default function Home() {
  return (
    <main>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChatLayout />
    </main>
  );
}
