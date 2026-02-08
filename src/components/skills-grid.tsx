import { Layout, Layers, Globe, Sparkles, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  { 
    name: 'React', 
    icon: <Layout size={24} />, 
    color: 'bg-blue-500', // On sépare la couleur de l'opacité
    text: 'text-blue-600 dark:text-blue-400', 
    border: 'border-blue-500/20', 
    tag: 'Interface',
    level:'intermediate',
    desc: 'Architecting reusable components systems. I build with a future-proof logic in mind.' 
  },
  { 
    name: 'TanStack', 
    icon: <Layers size={24} />, 
    color: 'bg-rose-500', 
    text: 'text-rose-600 dark:text-rose-400', 
    border: 'border-rose-500/20', 
    tag: 'Ecosystem',
    level:'intermediate',
    desc: 'Implementing clean routing and state management. This portfolio demonstrates my mastery of the TanStack ecosystem.' 
  },
  { 
    name: 'Next.js', 
    icon: <Globe size={24} />, 
    color: 'bg-zinc-500', 
    text: 'text-zinc-600 dark:text-zinc-400', 
    border: 'border-zinc-500/20', 
    tag: 'Framework',
    level:'beginner',
    desc: 'SEO optimization and cutting-edge hybrid rendering (SSR/ISR) for high-performance applications.' 
  },
  { 
    name: 'Tailwind v4', 
    icon: <Sparkles size={24} />, 
    color: 'bg-cyan-500', 
    text: 'text-cyan-600 dark:text-cyan-400', 
    border: 'border-cyan-500/20', 
    tag: 'Design',
    level:'advanced',
    desc: 'Crafting interfaces with utility-first CSS, focusing on rapid development and responsive precision.'
  },
  { 
    name: 'Node.js', 
    icon: <Cpu size={24} />, 
    color: 'bg-emerald-500', 
    text: 'text-emerald-600 dark:text-emerald-400', 
    border: 'border-emerald-500/20', 
    tag: 'Backend',
    level:'intermediate',
    desc: 'Building scalable APIs and robust server-side architectures to power modern web applications.' 
  },
]

export function SkillsGrid() {
  return (
    <section className="space-y-12 py-16">
      {/* Header */}
      <div className="flex flex-col space-y-4 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.15em] opacity-60 uppercase">
          My <span className="text-cyan-500">expertise.</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          Driven and efficient, I constantly refine my work by 
          merging <span className="text-foreground font-semibold tracking-tight">high performance</span> and 
          <span className="text-foreground font-semibold tracking-tight"> seamless user experience</span>. 
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, index) => {
          const isLast = index === skills.length - 1;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }} // Animation d'entrée plus douce
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 border rounded-3xl transition-all duration-500 ${skill.border} ${skill.color} bg-opacity-10 dark:bg-opacity-5 
              hover:shadow-2xl hover:shadow-cyan-500/5 min-h-64
              ${isLast ? 'lg:col-span-2' : 'col-span-1'}`}
            >
              {/* Icône de fond décorative */}
              <div className="absolute opacity-5 mx-auto flex w-full justify-center h-full items-center inset-0 pointer-events-none transition-opacity group-hover:opacity-10">
                <div className="scale-[3] grayscale">
                  {skill.icon}
                </div>
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                {/* Icône et Badge */}
                <div className="flex justify-between items-start">
                  <div className={`${skill.text} p-3 rounded-2xl bg-background border ${skill.border} shadow-sm`}>
                    {skill.icon}
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="tracking-widest opacity-40 text-xs uppercase font-mono mb-1">
                      {skill.level}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/80">
                      {skill.tag}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{skill.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {skill.desc}
                  </p>
                </div>
              </div>
              
              {/* Glow effect corrigé pour éviter l'erreur d'opacité */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-3xl -z-10 rounded-full ${skill.color}`} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}