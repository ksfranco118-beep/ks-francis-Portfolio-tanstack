import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// C'est ce fichier (généré automatiquement) qui contient la liste de tes routes
import { routeTree } from './routeTree.gen'

import './index.css'

// 1. On crée l'instance du router
const router = createRouter({ routeTree })

// 2. On connecte le router à TypeScript pour avoir l'autocomplétion sur les liens
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// On crée le client pour TanStack Query (que tu utilises déjà pour tes articles)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* 3. ON REMPLACE <App /> PAR <RouterProvider /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)