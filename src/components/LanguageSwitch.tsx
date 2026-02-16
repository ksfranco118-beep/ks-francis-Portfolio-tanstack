import { useTranslation } from 'react-i18next';

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const nextLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="group relative flex items-center p-2.5 rounded-xl border  border-black/40 bg-muted/20 hover:bg-muted/50 transition-all duration-300 hover:bg-black"
    >
  

      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-foreground/70 group-hover:text-cyan-500 transition-colors">
        {i18n.language === 'fr' ? 'FRA' : 'ENG'}
      </span>

      {/* Tooltip discret au survol */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase tracking-tighter">
        Switch_Lang
      </div>
    </button>
  );
}