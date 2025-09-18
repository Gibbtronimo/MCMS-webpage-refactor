import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const ProgramsPage: React.FC = () => {
  const { t } = useTranslation('programs');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {t('header.title')}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('header.subtitle')}
          </p>
          
          {/* Tuition Banner */}
          <div className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg shadow-md mb-8 w-1/3 mx-auto">
            <a href={t('tuition_banner.link')} className="block p-4 text-center">
              <span className="text-white font-semibold text-lg">
                {t('tuition_banner.text')}
              </span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Toddler Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full aspect-square">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt={t('programs.toddler_community.alt_text')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">{t('programs.toddler_community.title')}</h2>
                  <p className="text-gray-600 mb-4">
                    {t('programs.toddler_community.age_range')}
                    <br /><br />
                    {t('programs.toddler_community.description')}        
                  </p>
                  <div className="mt-auto">
                    <a href={t('programs.toddler_community.link')} className="text-blue-600 hover:text-blue-800 transition-colors duration-200">{t('programs.toddler_community.read_more')}</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Children's House */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full aspect-square">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt={t('programs.childrens_house.alt_text')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">{t('programs.childrens_house.title')}</h2>
                  <p className="text-gray-600 mb-4">
                    {t('programs.childrens_house.age_range')}
                    <br /><br />
                    {t('programs.childrens_house.description')}
                  </p>
                  <div className="mt-auto">
                    <a href={t('programs.childrens_house.link')} className="text-blue-600 hover:text-blue-800 transition-colors duration-200">{t('programs.childrens_house.read_more')}</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Family Services */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full aspect-square">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt={t('programs.family_services.alt_text')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-purple-800 mb-4">{t('programs.family_services.title')}</h2>
                  <p className="text-gray-600 mb-4">
                    {t('programs.family_services.age_range')}
                    <br /><br />
                    {t('programs.family_services.description')}
                  </p>
                  <div className="mt-auto">
                    <a href={t('programs.family_services.link')} className="text-blue-600 hover:text-blue-800 transition-colors duration-200">{t('programs.family_services.read_more')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['programs'])),
    },
  };
};

export default ProgramsPage;