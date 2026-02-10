import { motion } from 'framer-motion'

const steps = [
  { 
    roman: "I", 
    title: "my approach", 
    subtitle: "L'Analyse", 
    desc: "I begin every project with a pencil and notebook. Away from digital noise, I think deeply about unique ways to bring your vision to life." 
  },
  { 
    roman: "II", 
    title: "Mapping", 
    subtitle: "logique", 
    desc: "secondly, I organize raw ideas into a coherent and structured plan before touching any software." 
  },
  { 
    roman: "III", 
    title: "Digital implementation", 
    subtitle: "digital" , 
    desc: "Third, I transform these physical notes onto modern, high-performance web interfaces and robust network architectures." 
  },
  { 
    roman: "IV", 
    title: "Deployment", 
    subtitle: "deployment", 
    desc: "After coding, I conduct rigorous testing before launch. I ensure to choose a deployment adapted to your budget and needs." 
  }
]

export function StepWork() {
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
            whileInView={{ opacity: 0.15, y: 0 }} // Opacité augmentée pour la visibilité
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none"
          >
            {/* Utilisation de la couleur text-roman définie dans ta config */}
            <span className="text-[40vw] text-center font-serif font-light leading-none tracking-tighter text-roman">
              {step.roman}
            </span>
          </motion.div>

          {/* CONTENU TEXTUEL HARMONIEUX */}
          <div className="relative z-10 max-w-4xl text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 flex justify-center"
            >
              {/* Rappel du chiffre en petit */}
              <span className="text-center text-primary text-[10px] font-bold border border-primary/30 px-3 py-1 rounded-sm tracking-[0.2em] uppercase">
                Step {step.roman}
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

          {/* INDICATEUR DE CONTINUITÉ (Flèche/Ligne du bas) */}
          <div className="absolute bottom-10 w-full flex justify-center">
             <motion.div 
               animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="flex flex-col items-center gap-2"
             >
                <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Scroll</span>
             </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}