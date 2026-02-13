import { motion } from 'framer-motion'
import { Network, Server, ShieldIcon, Radio } from 'lucide-react'
import { useTranslation } from 'react-i18next' // ✅ Import

export function NetworkExpertise() {
  const { t } = useTranslation() // ✅ Hook

  const netSkills = [
    { label: t('net_skill_routing'), icon: <Network size={20} />, detail: 'L2/L3 Architecture, OSPF, BGP', status: 'core' },
    { label: t('net_skill_security'), icon: <ShieldIcon size={20} />, detail: 'Firewalling, VPN, Advanced filtering', status: 'core' },
    { label: t('net_skill_cloud'), icon: <Server size={20} />, detail: 'Hybrid, SDN, Micro-services', status: 'future' },
    { label: t('net_skill_wireless'), icon: <Radio size={20} />, detail: 'Signal optimization & low-power protocols', status: 'future' },
  ]

  return (
    <section className="py-12 sm:py-24 relative overflow-hidden bg-background">
      
      {/* Grille technique */}
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
              {t('net_badge')}
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-foreground leading-tight">
              {t('net_title_part1')}<span className="text-sky-500">{t('net_title_accent')}</span>.<br />
              {t('net_title_part2')}
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-lg">
              {t('net_description_start')}{' '}
              <strong className="text-foreground font-semibold underline decoration-sky-500/40">{t('net_desc_highlight1')}</strong>,{' '}
              <strong className="text-foreground font-semibold underline decoration-sky-500/40">{t('net_desc_highlight2')}</strong>{' '}
              {t('net_description_end')}
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
                        {t('net_future_label')}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-foreground">{item.label}</h4>
                  <p className="text-[10px] text-zinc-600 dark:text-zinc-500 font-medium uppercase tracking-widest leading-snug">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISUEL "CORE NODE" */}
          <div className="relative flex items-center justify-center py-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] border border-sky-500/20 rounded-full border-dashed"
            />
            
            <div className="relative p-10 bg-zinc-950/80 backdrop-blur-2xl rounded-[2.5rem] border border-zinc-800 shadow-2xl">
               <Network size={60} className="text-sky-500 opacity-40 mb-4 mx-auto" />
               <div className="text-center space-y-1">
                  <div className="text-[10px] font-mono text-sky-500 tracking-[0.3em] uppercase font-bold">
                    {t('net_status_label')}: Active
                  </div>
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