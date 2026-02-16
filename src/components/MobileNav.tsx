import { House, Lightbulb, Library, Globe } from 'lucide-react'
import { Link, useRouterState } from '@tanstack/react-router' // ✅ Meilleur pour TanStack
import { useTranslation } from 'react-i18next' // ✅ Import pour la traduction

export function MobileNav() {
  const { t } = useTranslation()
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname // ✅ Plus fiable que window.location

  const navItems = [
    { to: '/', label: t('nav_home'), icon: House },
    { to: '/posts', label: t('nav_projects'), icon: Lightbulb },
    { to: '/insights', label: t('nav_insights'), icon: Library },
    { to: '/web', label: t('nav_websites'), icon: Globe },
  ]

  return (
    <nav className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6">
      {/* Conteneur Glassmorphism */}
      <div className="flex items-center justify-around w-full max-w-md h-16 bg-white/5 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-white/10 rounded-3xl px-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        
        {navItems.map((item) => {
          const isActive = currentPath === item.to
          
          return (
            <Link
              key={item.to}
              to={item.to as any}
              className={`relative flex flex-col items-center justify-center gap-1 flex-1 h-12 rounded-2xl transition-all duration-300 active:scale-90 group
                ${isActive ? 'text-cyan-500' : 'text-zinc-500 dark:hover:text-zinc-300 hover:text-blue-600 '}`}
            >
              {/* Effet de brillance interne uniquement sur l'élément actif */}
              {isActive && (
                <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full -z-10" />
              )}

              <item.icon 
                size={18} 
                strokeWidth={isActive ? 2.5 : 2} 
                className="transition-transform group-hover:-translate-y-0.5" 
              />
              
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] leading-none text-center">
                {item.label}
              </span>
              
              {/* Indicateur minimaliste */}
              {isActive && (
                <div className="absolute -bottom-1 w-4 h-[2px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              )}
            </Link>
          )
        })}
        
      </div>
    </nav>
  )
}