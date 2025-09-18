import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import StaffProfile from '../components/StaffProfile';

const StaffPage: React.FC = () => {
  const { t } = useTranslation('staff');

  // Array of staff member keys for easy iteration
  const staffMembers = ['member1', 'member2', 'member3', 'member4', 'member5', 'member6', 'member7'];

  return (
    <>
      <Head>
        <title>{t('page.title')}</title>
        <meta name="description" content={t('page.description')} />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {t('page.heading')}
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              {t('page.intro')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((memberKey, index) => (
              <StaffProfile
                key={memberKey}
                profileImage={`/staff/${memberKey}.jpg`}
                name={t(`staff.${memberKey}.name`) || `Staff Member ${index + 1}`}
                description={t(`staff.${memberKey}.description`) || 'Description coming soon...'}
                readMoreText={t('readMore')}
                readMoreLink={t(`staff.${memberKey}.readMoreLink`) || '#'}
                altText={`Profile picture of ${t(`staff.${memberKey}.name`) || `Staff Member ${index + 1}`}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['staff', 'common'])),
    },
  };
};

export default StaffPage;
