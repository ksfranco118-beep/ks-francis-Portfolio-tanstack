import { motion } from 'framer-motion'
import { Eye, PenTool, Layout, Zap } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router' // Import indispensable

// 1. On déclare la route pour que TanStack l'ajoute au routeTree.gen.ts
export const Route = createFileRoute('/web')({
  component: WebExcellencePage,
})

export default function WebExcellencePage() {
  return (
    <div className="min-h-screen space-y-24 py-20 px-6 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <header className="space-y-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]"
        >
          Visual_Identity_System
        </motion.div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
          Modern Web <br />
          <span className="text-zinc-500">Craftsmanship.</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
          I don't just build websites. I create digital experiences where clean code meets premium aesthetics.
        </p>
      </header>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <SkillSection 
          icon={<Eye size={20} />}
          title="Glassmorphism & Depth"
          desc="I use modern transparency and blur effects to create elegant, layered interfaces that feel deep and professional."
        />

        <SkillSection 
          icon={<Zap size={20} />}
          title="Fluid Motion"
          desc="Smooth transitions and organic animations that make every interaction feel natural and high-quality."
        />

        <SkillSection 
          icon={<Layout size={20} />}
          title="Exclusive Design"
          desc="No templates. I build custom layouts designed specifically for your brand identity and goals."
        />

        <SkillSection 
          icon={<PenTool size={20} />}
          title="Strategic Copywriting"
          desc="Words matter. I structure content to capture attention and guide users toward your primary goals."
        />

      </div>

      {/* FOOTER CALLOUT */}
      <footer className="pt-20 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">The "Premium" Touch</h2>
            <p className="text-zinc-500 text-sm max-w-md">
              Every pixel is placed with intention. I focus on details that others ignore to deliver a superior final product.
            </p>
          </div>
          <button className="px-8 py-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all">
            Start a project
          </button>
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