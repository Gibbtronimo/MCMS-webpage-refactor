# Next.js Internationalization (i18n) Setup Guide

This guide contains code snippets and instructions for implementing internationalization in your Next.js project using next-i18next.

## Project Structure

Your locales are organized as follows:
```
src/
  locales/
    en/
      common.json
      home.json
    es/
      common.json
      home.json
```

## Configuration Files Already Set Up

- ✅ `next-i18next.config.js` - i18n configuration
- ✅ `next.config.ts` - Next.js config with i18n enabled
- ✅ `src/pages/_app.tsx` - App wrapper with translation support
- ✅ `src/components/LanguageToggle.tsx` - Language switcher component
- ✅ `src/components/Layout.tsx` - Layout with Navbar and Footer

## Code Snippets for Future Use

### 1. Adding Translations to a Page Component

Use this pattern for any page that needs translations:

```typescript
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <h1>{t('navigation.home')}</h1>
      <p>{t('common.loading')}</p>
      <button>{t('buttons.submit')}</button>
      {/* Rest of your page content */}
    </Layout>
  );
};

// REQUIRED: Add this to every page that uses translations
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
      // Add other translation namespaces as needed: ['common', 'home', 'about', etc.]
    },
  };
};

export default HomePage;
```

### 2. Using Translations in Regular Components

For components that are not pages, use this pattern:

```typescript
import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h2>{t('navigation.about')}</h2>
      <p>{t('common.error')}</p>
      <button>{t('buttons.cancel')}</button>
    </div>
  );
};

export default MyComponent;
```

### 3. Using Multiple Translation Namespaces

If you need translations from multiple JSON files:

```typescript
import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tHome } = useTranslation('home');
  
  return (
    <div>
      <h1>{tHome('welcome_message')}</h1>
      <button>{tCommon('buttons.submit')}</button>
    </div>
  );
};
```

### 4. For Server-Side Rendered Pages (getServerSideProps)

If using `getServerSideProps` instead of `getStaticProps`:

```typescript
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
    },
  };
};
```

## Translation File Structure

Your JSON files should follow this structure:

### common.json (already set up)
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  },
  "buttons": {
    "submit": "Submit",
    "cancel": "Cancel",
    "close": "Close",
    "learn_more": "Learn More"
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "success": "Success"
  }
}
```

## How to Access Translations

- Use `t('key')` for simple strings: `t('buttons.submit')`
- Use nested keys with dots: `t('navigation.home')`
- The LanguageToggle component automatically switches between languages
- All text will automatically update when language changes

## Adding New Translation Keys

1. Add the key to both `en/common.json` and `es/common.json`
2. Use the key in your component with `t('your.new.key')`
3. Make sure to include the namespace in `getStaticProps` or `getServerSideProps`

## Testing the Setup

1. Start your development server: `npm run dev`
2. Visit your page
3. Click the EN/ES buttons in the LanguageToggle component
4. Verify that text changes between languages

## Available Translation Keys (from your current files)

### Navigation
- `navigation.home` - "Home" / "Inicio"
- `navigation.about` - "About" / "Acerca de"
- `navigation.services` - "Services" / "Servicios"
- `navigation.contact` - "Contact" / "Contacto"

### Buttons
- `buttons.submit` - "Submit" / "Enviar"
- `buttons.cancel` - "Cancel" / "Cancelar"
- `buttons.close` - "Close" / "Cerrar"
- `buttons.learn_more` - "Learn More" / "Saber Más"

### Common
- `common.loading` - "Loading..." / "Cargando..."
- `common.error` - "An error occurred" / "Ocurrió un error"
- `common.success` - "Success" / "Éxito"

## Troubleshooting

- If translations don't work, make sure you have the correct namespace in `getStaticProps`
- If the language toggle doesn't work, check that the Next.js router is properly configured
- Make sure all translation keys exist in both language files
- Check the browser console for any i18n-related errors

---

**Note**: Remember to restart your development server after making changes to configuration files.
