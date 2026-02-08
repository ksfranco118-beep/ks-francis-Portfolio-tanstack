import { motion } from 'framer-motion'
import { Network, Server, ShieldIcon, Radio } from 'lucide-react'

const netSkills = [
  { label: 'Routing & Switching', icon: <Network size={20} />, detail: 'L2/L3 Architecture, OSPF, BGP', status: 'core' },
  { label: 'Network Security', icon: <ShieldIcon size={20} />, detail: 'Firewalling, VPN, Advanced filtering', status: 'core' },
  { label: 'Cloud Infrastructure', icon: <Server size={20} />, detail: 'Hybrid, SDN, Micro-services', status: 'future' },
  { label: 'Wireless & IoT', icon: <Radio size={20} />, detail: 'Signal optimization & low-power protocols', status: 'future' },
]

export function NetworkExpertise() {
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden bg-background">
      
      {/* Grille technique - OPACITÉ AUGMENTÉE (0.08) */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] pointer-events-none bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXTE */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-500 text-[10px] font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Network Engineer Core
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-foreground leading-tight">
              The architecture of <span className="text-sky-500">flow</span>.<br />
              The science of connection.
            </h2>

            {/* Texte descriptif plus foncé (zinc-600) */}
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-lg">
              I ensure that every application rests on a <strong className="text-foreground font-semibold underline decoration-sky-500/40">high-availability</strong>, <strong className="text-foreground font-semibold underline decoration-sky-500/40">secure</strong>, and optimized infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {netSkills.map((item, i) => (
                <div 
                  key={i}
                  className={`flex flex-col gap-2 ${item.status === 'future' ? 'opacity-30' : 'opacity-100'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-sky-500">{item.icon}</div>
                    {item.status === 'future' && (
                      <span className="text-[8px] px-2 py-0.5 rounded-full border border-sky-500/40 text-sky-500 font-bold uppercase tracking-tighter">
                        Future
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-foreground">{item.label}</h4>
                  {/* Détails plus sombres (zinc-600) */}
                  <p className="text-[10px] text-zinc-600 dark:text-zinc-500 font-medium uppercase tracking-widest leading-snug">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISUEL "CORE NODE" */}
          <div className="relative flex items-center justify-center py-12">
            {/* Cercles - OPACITÉ AUGMENTÉE (0.2) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] border border-sky-500/20 rounded-full border-dashed"
            />
            
            {/* Card centrale plus sombre */}
            <div className="relative p-10 bg-zinc-950/80 backdrop-blur-2xl rounded-[2.5rem] border border-zinc-800 shadow-2xl">
               <Network size={60} className="text-sky-500 opacity-40 mb-4 mx-auto" />
               <div className="text-center space-y-1">
                  <div className="text-[10px] font-mono text-sky-500 tracking-[0.3em] uppercase font-bold">Status: Active</div>
                  <div className="text-3xl font-mono font-bold tracking-tighter text-white">127.0.0.1</div>
                  
                  <div className="h-2 w-24 bg-sky-500/20 mx-auto rounded-full overflow-hidden mt-6">
                    <motion.div 
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="h-full w-1/2 bg-sky-500" 
                    />
                  </div>
               </div>
            </div>
            
            {/* Noeuds flottants - OPACITÉ AUGMENTÉE */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, delay: i * 1, repeat: Infinity }}
                className="absolute h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                style={{
                  top: i === 0 ? '10%' : i === 1 ? '85%' : '45%',
                  left: i === 0 ? '15%' : i === 1 ? '75%' : '90%',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}