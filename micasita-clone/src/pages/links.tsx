import React from 'react';
import Head from 'next/head';

type LinkItem = { title: string; url: string };

const NAV_LINKS: LinkItem[] = [
  { title: 'Academic Calendar 2024-2025', url: '#' },
  { title: 'MCMS Application for Enrollment', url: '#' },
  { title: 'Application for Parent-Infant Class', url: '#' },
  { title: 'Introduction letter for Parent-Infant Class', url: '#' },
  { title: 'Parental Questionnaire', url: '#' },
];

// Component to display links
function HelpfulLinks() {
  return (
    <ul className="space-y-3">
      {NAV_LINKS.map((link) => (
        <li key={link.url}>
          <a href={link.url} className="text-blue-600 hover:text-blue-800 underline block">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

const LinksPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Useful Links - Micasita</title>
        <meta name="description" content="Find helpful resources and community links" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Useful Links
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Find helpful resources, community partners, and important links to support 
              your needs and connect you with additional services.
            </p>
            <HelpfulLinks />
          </div>
        </div>
      </main>
    </>
  );
};

export default LinksPage;
