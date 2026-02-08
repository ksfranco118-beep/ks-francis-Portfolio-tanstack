
import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { MobileNav } from '../components/MobileNav'
import { ThemeToggle } from '../components/theme-toggle'

// ✅ L'export doit s'appeler "Route" (et non RootLayout)
export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground selection:bg-cyan-500/30 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            KS-francis<span className="text-cyan-500">.</span>
          </Link>
          
          <div className="flex items-center gap-4 h-full">
            <div className="hidden md:flex gap-1 items-stretch h-full">
              {[
                { to: '/', label: 'Home' },
                { to: '/posts', label: 'Projects' },
                { to: '/insights', label: 'Insights' },
                { to: '/web', label: 'Websites' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to as any}
                  className={`flex items-center text-[10px] font-black uppercase tracking-[0.25em] px-4 border-t-2 transition-all
                    ${currentPath === link.to 
                      ? 'text-cyan-500 border-t-cyan-500 bg-cyan-500/5' 
                      : 'opacity-60 border-t-transparent hover:opacity-100 hover:text-cyan-500'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10">
        {/* ✅ L'Outlet est indispensable pour afficher les pages enfants */}
        <Outlet /> 
      </main>

      <footer className="py-20 border-t border-border/40 text-center opacity-40 text-[10px] uppercase tracking-widest font-mono">
        © {new Date().getFullYear()} KISSOU Francis // Performance Architecture [1]
      </footer>

      <MobileNav />
    </div>
  )
}