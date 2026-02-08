import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, MessageCircle } from 'lucide-react'

export function Collaborate() {
  const whatsappNumber = "22644972690" 
  const message = encodeURIComponent("Bonjour ! J'ai vu votre portfolio et j'aimerais discuter d'un projet.")

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-zinc-950 overflow-hidden relative rounded-t-[3rem] border-t border-zinc-900">
      
      {/* Halo lumineux en arrière-plan */}
      <div className="absolute w-75 sm:w-125 h-75 sm:h-125 bg-cyan-500/10 blur-[80px] sm:blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full space-y-6 sm:space-y-8"
      >
        <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase px-2">
          Ready to build the next <span className="text-cyan-500 italic font-serif block sm:inline">infrastructure?</span>
        </h2>
        
        <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto px-2 font-light">
          Let’s combine your vision with my networking and fullstack skills to create systems that are <span className="text-zinc-100">strong and beautiful</span>.
        </p>

        {/* BOUTON WHATSAPP ANIMÉ */}
        <div className="pt-4 sm:pt-6">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-zinc-900 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl w-full sm:w-auto"
          >
            {/* Effet de balayage lumineux (Shine) */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                ease: "linear",
                repeatDelay: 1
              }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent w-full"
            />

            <span className="absolute inset-0 rounded-full border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors" />

            <span className="relative z-10 flex items-center justify-center gap-3">
              <MessageCircle size={18} className="text-cyan-500" />
              Let’s work together
            </span>
          </a>
        </div>

        {/* EXPERTISE TAGS */}
        <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-3 sm:gap-8 text-[9px] sm:text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase font-mono">
          <span>Consulting</span>
          <span className="hidden xs:inline text-zinc-800">•</span>
          <span>Architecture</span>
          <span className="hidden xs:inline text-zinc-800">•</span>
          <span>Development</span>
        </div>

        {/* SOCIAL LOGOS */}
        <div className="pt-8 flex justify-center gap-6 sm:gap-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1">
            <Twitter size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}