import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Flame, MessageCircle } from 'lucide-react'
import { useTheme } from '../hooks/use-theme'
import { SkillsGrid } from '../components/skills-grid'
import { Synopsys } from '../components/synopsys' 
import { StepWork } from '../components/stepwork'
import { NetworkExpertise } from '../components/telecommunication'
import { Website } from '../components/website'
import { Collaborate } from '../components/collaborate'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { theme } = useTheme() // Maintenant utilisé ci-dessous
  const whatsappNumber = "22644972690" 

  return (
    <div className="relative flex flex-col gap-20 pb-24 text-2xl animate-in fade-in duration-700">
      
      {/* SECTION HERO */}
      <section className="pt-20 md:pt-32 flex flex-col items-center text-center space-y-6 min-h-[80vh] justify-center relative overflow-hidden">
        
        {/* Badge Network Engineer */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-xs font-medium relative z-10">
          <Flame size={14} className='animate-pulse text-cyan-600' />
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold tracking-wide uppercase">
            Network Engineer
          </span>      
        </div>
         
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <h1 className="text-5xl md:text-7xl tracking-tighter max-w-4xl leading-[0.95] font-bold relative z-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            ''Great things <br />
          </span>
          <span className="font-light italic text-zinc-500/40 dark:text-zinc-100/20">
            rise from solid ground.''
          </span>
        </h1>

        {/* ACTIONS BUTTONS */}
        <div className="flex flex-col md:flex-row items-center gap-4 pt-4 relative z-10">
          
          <Link 
            to="/posts" 
            className="h-11 w-52 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 active:scale-95"
          >
            My projects <ArrowRight size={18} />
          </Link>

          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`h-11 w-52 rounded-lg text-sm font-medium border flex items-center justify-center gap-2 transition-all active:scale-95
              ${theme === 'dark' 
                ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' 
                : 'border-black/10 bg-black/5 text-black hover:bg-black/10'
              }`}
          >
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Call me
            </span>
            <MessageCircle size={18} className="text-blue-600" />
          </a>
        </div>
      </section>

      {/* AUTRES SECTIONS */}
      <SkillsGrid />
      <Synopsys />
      <StepWork />
      <NetworkExpertise />
      <Website />
      <Collaborate />
    </div>
  )
}