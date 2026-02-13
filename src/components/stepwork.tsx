import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next' // ✅ Import

export function StepWork() {
  const { t } = useTranslation() // ✅ Hook

  // Définition des étapes à l'intérieur pour la traduction dynamique
  const steps = [
    { 
      roman: "I", 
      title: t('step1_title'), 
      desc: t('step1_desc') 
    },
    { 
      roman: "II", 
      title: t('step2_title'), 
      desc: t('step2_desc') 
    },
    { 
      roman: "III", 
      title: t('step3_title'), 
      desc: t('step3_desc') 
    },
    { 
      roman: "IV", 
      title: t('step4_title'), 
      desc: t('step4_desc') 
    }
  ]

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar w-full bg-background">
      {steps.map((step, i) => (
        <section 
          key={i} 
          className="h-screen w-full snap-start snap-always relative flex flex-col items-center justify-center overflow-hidden"
        >
          {/* CHIFFRE ROMAIN GÉANT EN ARRIÈRE-PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none"
          >
            <span className="text-[40vw] text-center font-serif font-light leading-none tracking-tighter text-roman">
              {step.roman}
            </span>
          </motion.div>

          {/* CONTENU TEXTUEL */}
          <div className="relative z-10 max-w-4xl text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 flex justify-center"
            >
              <span className="text-center text-primary text-[10px] font-bold border border-primary/30 px-3 py-1 rounded-sm tracking-[0.2em] uppercase">
                {t('step_label')} {step.roman}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 uppercase text-foreground"
            >
              {step.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-foreground/70 text-lg md:text-2xl leading-relaxed font-light max-w-2xl mx-auto italic font-serif"
            >
              « {step.desc} »
            </motion.p>
          </div>

          {/* INDICATEUR DE CONTINUITÉ */}
          <div className="absolute bottom-10 w-full flex justify-center">
             <motion.div 
               animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="flex flex-col items-center gap-2"
             >
                <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">
                  {t('scroll_label')}
                </span>
             </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}