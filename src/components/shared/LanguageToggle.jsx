import { useLanguage } from '../../hooks/useLanguage';

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2 items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
          lang === 'en'
            ? 'bg-primary text-white'
            : 'text-primary hover:bg-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('fr')}
        className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
          lang === 'fr'
            ? 'bg-primary text-white'
            : 'text-primary hover:bg-white'
        }`}
      >
        FR
      </button>
    </div>
  );
};