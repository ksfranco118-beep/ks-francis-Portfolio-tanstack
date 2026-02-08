import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/use-theme' // Vérifie l'import relatif

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-zinc-900/50 hover:border-cyan-400/30 hover:bg-zinc-800 transition-all group"
      aria-label="Changer de thème"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-zinc-500 group-hover:text-amber-400 transition-colors" />
      ) : (
        <Moon size={18} className="text-zinc-600 group-hover:text-cyan-600 transition-colors" />
      )}
    </button>
  )
}