import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation('common');
  const router = useRouter();

  const handleLanguageChange = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div className="language-toggle">
      <button 
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        className={`language-btn ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('es')}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
