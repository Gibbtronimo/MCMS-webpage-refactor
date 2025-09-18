import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <Head>
        <title>{t('page.title')}</title>
        <meta name="description" content={t('page.description')} />
      </Head>
      
      <main>
        {/* Section 1: Why Montessori? - White Background */}
        <section className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12">
              {t('first.title')}
            </h1>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {t('first.paragraph1')}
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {t('first.paragraph2')}
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {t('first.paragraph3')}
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {t('first.paragraph4')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Montessori is for your child - Colored Background */}
        <section className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-16">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-12">
              {t('second.title')}
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-blue-700 leading-relaxed">
                {t('second.paragraph1')}
              </p>
              <p className="text-xl md:text-2xl text-blue-700 leading-relaxed">
                {t('second.paragraph2')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: History and Bilingual Information - White Background */}
        <section className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {/* History Component */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  {t('third.history.title')}
                </h3>
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('third.history.paragraph1')}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('third.history.paragraph2')}
                  </p>
                </div>
              </div>

              {/* Bilingual 1 Component */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  {t('third.bilingual1.title')}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t('third.bilingual1.paragraph')}
                </p>
              </div>

              {/* Bilingual 2 Component */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  {t('third.bilingual2.title')}
                </h3>
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('third.bilingual2.paragraph1')}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('third.bilingual2.paragraph2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Montessori - Colored Background */}
        <section className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-16">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-green-800 mb-12">
              {t('fourth.title')}
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-green-700 leading-relaxed">
                {t('fourth.paragraph1')}
              </p>
              <p className="text-xl md:text-2xl text-green-700 leading-relaxed">
                {t('fourth.paragraph2')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Mi Casita, a BILINGUAL MONTESSORI environment - White Background */}
        <section className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12">
              {t('fifth.title')}
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {t('fifth.paragraph1')}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['about'])),
    },
  };
};

export default AboutPage;
