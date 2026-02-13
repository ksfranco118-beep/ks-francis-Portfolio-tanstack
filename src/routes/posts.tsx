import { ArrowRight, Lightbulb, Cog, Terminal, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next'; // ✅ Import

export const Route = createFileRoute('/posts')({
  component: ProjectsSection,
});

export default function ProjectsSection() {
  const { t } = useTranslation(); // ✅ Hook

  const upcomingProjects = [
    {
      id: 1,
      title: t('lab_proj1_title'),
      tech: "Rust / WebRTC",
      desc: t('lab_proj1_desc'),
      icon: <Network size={24} />,
      status: t('lab_status_arch')
    },
    {
      id: 2,
      title: t('lab_proj2_title'),
      tech: "Go / Kubernetes",
      desc: t('lab_proj2_desc'),
      icon: <Cpu size={24} />,
      status: t('lab_status_dev')
    },
    {
      id: 3,
      title: t('lab_proj3_title'),
      tech: "React / TanStack",
      desc: t('lab_proj3_desc'),
      icon: <Terminal size={24} />,
      status: t('lab_status_proto')
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-[10px] font-bold tracking-widest uppercase">
            <Lightbulb size={14} />
            {t('lab_badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-foreground leading-tight">
            {t('lab_title_part1')} <span className="text-blue-500 italic font-serif">{t('lab_title_accent')}</span>.<br />
            {t('lab_title_part2')}
          </h2>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/5 dark:bg-white/5 border border-border/70 rounded-2xl p-8 space-y-6 hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <span className="text-[9px] font-mono font-bold px-2 py-1 rounded border border-blue-500/20 text-blue-500/70 bg-blue-500/5 uppercase tracking-tighter">
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Tech Stack Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>Stack: {project.tech}</span>
                  <span className="animate-pulse">{t('lab_loading')}</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-blue-500/50" 
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-600 uppercase">Ref: 00{project.id}</span>
                <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Blueprint Decoration */}
              <div className="absolute top-0 right-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-blue-500">
                   <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                   <path d="M10 50 L90 50 M50 10 L50 90" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="flex justify-center mt-16">
          <motion.a 
            href="https://github.com/votre-user" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-xl"
          >
            {t('lab_cta')} <Cog size={16} className="group-hover:rotate-90 transition-transform duration-500" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}