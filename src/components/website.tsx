import { useTranslation } from 'react-i18next' // ✅ Import

export function Website() {
  const { t } = useTranslation() // ✅ Hook

  const sites = [
    { 
      id: "I",
      title: t('web_site1_title'), 
      desc: t('web_site1_desc'),
      image: "/luxaryecom.jpg" 
    },
    { 
      id: "II",
      title: t('web_site2_title'), 
      desc: t('web_site2_desc'),
      image: "/entreprizenetwork.jpg"
    },
    { 
      id: "III",
      title: t('web_site3_title'), 
      desc: t('web_site3_desc'),
      image: "/creativeportfolio.jpg"
    }
  ]

  return (
    <div className="w-full flex flex-col border-t border-zinc-800">
      {sites.map((site, i) => (
        <details 
          key={i} 
          className="group w-full border-b border-zinc-800 outline-none"
        >
          {/* Header */}
          <summary className="list-none cursor-pointer px-6 lg:px-20 py-10 hover:bg-cyan-500/5 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className="text-cyan-500 font-serif italic text-2xl w-8">
                  {site.id}
                </span>
                <h3 className="text-2xl lg:text-4xl font-bold tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">
                  {site.title}
                </h3>
              </div>
              
              {/* Visual indicator animée */}
              <div className="text-xl font-mono text-cyan-500/40 group-open:rotate-45 transition-transform duration-300 w-10 h-10 flex items-center justify-center">
                [+]
              </div>
            </div>
          </summary>

          {/* Content */}
          <div className="px-6 lg:px-20 pb-16 flex gap-10 flex-row-reverse items-start justify-between max-md:flex-col-reverse">
            
            {/* Image Container */}
            <div className="relative max-md:w-full w-64 h-64 shrink-0 overflow-hidden rounded-2xl bg-zinc-900 ml-10 max-md:ml-0 border border-zinc-800 group-hover:border-cyan-500/30 transition-colors">
              <img 
                src={site.image} 
                alt={site.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>

            {/* Text */}
            <div className="flex flex-col space-y-4 flex-1 pt-2 animate-in fade-in slide-in-from-top-4 duration-500">
              <p className="text-zinc-400 text-lg lg:text-xl max-w-xl leading-relaxed font-light">
                {site.desc}
              </p>
              
              <div className="pt-8 flex items-center gap-4">
                 <div className="h-px w-8 bg-cyan-500/50" />
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600">
                    {t('web_technical_label')}
                 </span>
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}