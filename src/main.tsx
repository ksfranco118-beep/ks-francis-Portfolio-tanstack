import './i18n'; // ✅ Config i18n chargée en premier
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import de l'arbre des routes généré par TanStack Router
import { routeTree } from './routeTree.gen'

import './index.css'

// 1. Création de l'instance du router
const router = createRouter({ 
  routeTree,
  // Optionnel : affiche un loader global lors des transitions de routes
  defaultPreload: 'intent',
})

// 2. Enregistrement du router pour le support TypeScript (autocomplétion des liens)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 3. Création du QueryClient (pour la gestion du cache et des requêtes)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Les données sont considérées "fraîches" pendant 5 min
    },
  },
})

// 4. Rendu de l'application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)