import { motion } from 'framer-motion'
import { Sparkles, Zap, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next' // ✅ Import

export function Synopsys() {
  const { t } = useTranslation() // ✅ Hook

  // Déplacé ici pour accéder à t()
  const points = [
    { icon: <Sparkles size={18} />, text: t('synopsys_point_1') || "Clean design" },
    { icon: <Zap size={18} />, text: t('synopsys_point_2') || "Fast performance" },
    { icon: <ShieldCheck size={18} />, text: t('synopsys_point_3') || "Strong code" },
  ]

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="flex flex-col items-center text-center space-y-8">
        
        {/* Badge méthodologie */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full"
        >
          {t('synopsys_badge') || 'Methodology'}
        </motion.div>

        {/* Titre Principal */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground"
        >
          {t('synopsys_title_start') || 'Design with'}{' '}
          <span className="text-zinc-500 italic font-serif">
            {t('synopsys_title_italic') || 'intention'}
          </span>,<br /> 
          {t('synopsys_title_end') || 'develop for'}{' '}
          <span className="text-cyan-500">
            {t('synopsys_title_impact') || 'impact.'}
          </span>
        </motion.h2>

        {/* Paragraphe de vision */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
        >
          {t('synopsys_description_start') || 'My work is not just about writing code. It is a journey that turns an abstract idea into a real digital product, where'}{' '}
          <span className="text-foreground">
            {t('synopsys_description_highlight') || 'every pixel'}
          </span>{' '}
          {t('synopsys_description_end') || 'and every function is important.'}
        </motion.p>

        {/* Points d'ancrage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 pt-4"
        >
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/60 group">
              <span className="text-cyan-500 transition-transform group-hover:scale-110 duration-300">
                {point.icon}
              </span>
              {point.text}
            </div>
          ))}
        </motion.div>

        {/* Ligne de séparation animée */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="w-px bg-gradient-to-b from-cyan-500/50 to-transparent mt-12"
        />
      </div>
    </section>
  )
}