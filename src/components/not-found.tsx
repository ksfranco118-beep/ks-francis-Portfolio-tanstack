import { createFileRoute, Link } from '@tanstack/react-router'
import { WifiOff, Terminal, RefreshCw, Home } from 'lucide-react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: NotFoundPage,
})

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center p-6 text-center">
      
      {/* ILLUSTATION ANIMÉE */}
      <div className="relative mb-12">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-10"
        >
          <WifiOff size={120} className="text-blue-500/20" strokeWidth={1} />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="text-8xl md:text-9xl font-black opacity-[0.03] select-none tracking-tighter">
             404
           </span>
        </div>
      </div>

      {/* TEXTE DE DIAGNOSTIC */}
      <div className="space-y-4 max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
          <Terminal size={12} />
          Error: Destination_Unreachable
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Packet <span className="text-blue-500 font-serif italic font-light">Dropped</span>
        </h1>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
          The route to <code className="bg-muted px-1.5 py-0.5 rounded text-blue-500 font-mono italic">{window.location.pathname}</code> is not in the routing table. 
          The request timed out or the gateway is misconfigured.
        </p>
      </div>

      {/* ACTIONS DE RÉCUPÉRATION */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
        <Link
          to="/"
          className="h-11 px-8 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center gap-2 hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
        >
          <Home size={16} />
          Return Home
        </Link>
        
        <button
          onClick={() => window.location.reload()}
          className="h-11 px-8 rounded-full border border-border bg-muted/20 text-sm font-bold flex items-center gap-2 hover:bg-muted/40 transition-all active:scale-95 text-foreground/70"
        >
          <RefreshCw size={16} />
          Retry Request
        </button>
      </div>

      {/* FOOTER TECHNIQUE */}
      <div className="mt-20 opacity-30 font-mono text-[10px] space-y-1">
        <p>TTL: 64</p>
        <p>PROTOCOL: ICMP_TYPE_3_CODE_0</p>
        <p>STATUS: HOP_LIMIT_EXCEEDED</p>
      </div>
    </div>
  )
}