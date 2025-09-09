import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

type LinkItem = { title: string; url: string };

// Component to display links
function HelpfulLinks({ links }: { links: LinkItem[] }) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
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
  const { t } = useTranslation('links');

  const NAV_LINKS: LinkItem[] = [
    { title: t('links.academic_calendar'), url: '#' },
    { title: t('links.enrollment_application'), url: '#' },
    { title: t('links.parent_infant_application'), url: '#' },
    { title: t('links.parent_infant_intro'), url: '#' },
    { title: t('links.parental_questionnaire'), url: '#' }
  ];

  return (
    <>
      <Head>
        <title>Useful Links - Micasita</title>
        <meta name="description" content={t('meta_description')}/>
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {t('title')}
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              {t('description')}
            </p>
            <HelpfulLinks links={NAV_LINKS} />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['links'])),
    },
  };
};

export default LinksPage;
