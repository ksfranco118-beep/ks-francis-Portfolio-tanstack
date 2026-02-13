import { motion } from 'framer-motion'
import { Eye, PenTool, Layout, Zap } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next' // ✅ Import

export const Route = createFileRoute('/web')({
  component: WebExcellencePage,
})

export default function WebExcellencePage() {
  const { t } = useTranslation() // ✅ Hook
  const whatsappNumber = "22601692660" 
  const message = t('web_wa_message') // ✅ Message traduit

  return (
    <div className="min-h-screen space-y-24 py-20 px-6 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <header className="space-y-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]"
        >
          {t('web_badge')}
        </motion.div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
          {t('web_title_1')} <br />
          <span className="text-zinc-500">{t('web_title_2')}.</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
          {t('web_description')}
        </p>
      </header>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <SkillSection 
          icon={<Eye size={20} />}
          title={t('web_skill1_title')}
          desc={t('web_skill1_desc')}
        />
        <SkillSection 
          icon={<Zap size={20} />}
          title={t('web_skill2_title')}
          desc={t('web_skill2_desc')}
        />
        <SkillSection 
          icon={<Layout size={20} />}
          title={t('web_skill3_title')}
          desc={t('web_skill3_desc')}
        />
        <SkillSection 
          icon={<PenTool size={20} />}
          title={t('web_skill4_title')}
          desc={t('web_skill4_desc')}
        />
      </div>

      {/* FOOTER CALLOUT */}
      <footer className="pt-20 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">{t('web_footer_title')}</h2>
            <p className="text-zinc-500 text-sm max-w-md">
              {t('web_footer_desc')}
            </p>
          </div>
          <a rel="noopener noreferrer" 
            target='_blank'           
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} 
            className="px-8 py-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all">
            {t('web_cta')}
          </a>
        </div>
      </footer>
    </div>
  )
}

function SkillSection({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="space-y-4 group">
      <div className="flex items-center gap-3">
        <div className="text-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium pl-8 border-l border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
        {desc}
      </p>
    </div>
  )
}