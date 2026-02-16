import { useState, useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Clock, Link2, Library, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/insights')({
  component: InsightsPage,
})

/**
 * COMPOSANT TIMEAGO AMÉLIORÉ
 * - Évite hydratation mismatch en attendant le montage
 * - Gère les dates invalides
 */
function TimeAgo({ date }: { date: string }) {
  const [relativeTime, setRelativeTime] = useState<string | null>(null)
  const { i18n } = useTranslation()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime()
      const published = new Date(date).getTime()
      const isFr = i18n.language.startsWith('fr')
      
      // Gère les dates invalides
      if (isNaN(published)) {
        setRelativeTime(isFr ? 'Récemment' : 'Recently')
        return
      }

      const diffInMinutes = Math.floor((now - published) / (1000 * 60))
      
      let timeStr = ''
      if (diffInMinutes < 1) {
        timeStr = isFr ? "À l'instant" : 'Just now'
      } else if (diffInMinutes < 60) {
        timeStr = isFr ? `Il y a ${diffInMinutes}m` : `${diffInMinutes}m ago`
      } else if (diffInMinutes < 1440) {
        const hours = Math.floor(diffInMinutes / 60)
        timeStr = isFr ? `Il y a ${hours}h` : `${hours}h ago`
      } else {
        const days = Math.floor(diffInMinutes / 1440)
        timeStr = isFr ? `Il y a ${days}j` : `${days}d ago`
      }
      
      setRelativeTime(timeStr)
    }

    // Appel immédiat + intervalle pour updates
    updateTime()
    const timer = setInterval(updateTime, 60000)
    
    return () => clearInterval(timer)
  }, [date, i18n.language])

  // Évite hydration mismatch - placeholder invisible
  if (!relativeTime) {
    return <span className="inline-block w-16 opacity-0">loading</span>
  }
  
  return <span className="font-medium text-blue-500 tracking-tight">{relativeTime}</span>
}

function InsightsPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  // Articles avec métadonnées + contenu traduit
  const articles = [
    {
      id: 1,
      title: t('insight_1_title'),
      excerpt: t('insight_1_excerpt'),
      date: "2026-02-08T10:00:00Z",
      readTime: "8 min",
      category: t('cat_networking'),
      image: "/routing.jpg",
      sources: [
        {
          name: "Cloudflare",
          url: "https://www.cloudflare.com/learning/network-layer/what-is-routing/"
        },
        {
          name: "Cisco BGP",
          url: "https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html"
        }
      ]
    },
    {
      id: 2,
      title: t('insight_2_title'),
      excerpt: t('insight_2_excerpt'),
      date: "2026-02-10T01:00:00Z",
      readTime: "15 min",
      category: t('cat_networking'),
      image: "/OSIMODEL.jpg",
      sources: [
        {
          name: "Cloudflare",
          url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
        },
        {
          name: "AWS",
          url: "https://aws.amazon.com/what-is/osi-model/"
        },
        {
          name: "YouTube",
          url: "https://youtu.be/v4sRKGarh5Q?si=cOQBO9rO4jBYCGr6"
        },
        {
          name: "Wikipedia",
          url: "https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI"
        }
      ]
    },
    {
      id: 3,
      title: t('insight_3_title'),
      excerpt: t('insight_3_excerpt'),
      date: "2026-02-12T09:00:00Z",
      readTime: "12 min",
      category: t('cat_networking'),
      image: "/tcpip.jpg",
      sources: [
        {
          name: "Cloudflare",
          url: "https://www.cloudflare.com/learning/network-layer/what-is-tcp/"
        },
        {
          name: "Fortinet",
          url: "https://www.fortinet.com/fr/resources/cyberglossary/tcp-ip"
        },
        {
          name: "Napsis",
          url: "https://www.napsis.fr/actualite/protocole-tcp-ip-internet/"
        },
        {
          name: "Wikipedia",
          url: "https://fr.wikipedia.org/wiki/Mod%C3%A8le_TCP/IP"
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/results?search_query=mod%C3%A8le+TCP+IP+fran%C3%A7ais"
        }
      ]
    },
    {
    
      id: 4,
      title: t('insight_4_title'),
      excerpt: t('insight_4_excerpt'),
      date: "2026-02-16T06:35:00Z",
      readTime: "45 min",
      category: t('cat_networking'),
      image: "/adressip.jpg",
      sources: [
        {
          name: "cisco.goffinet",
          url: "https://cisco.goffinet.org/ccna/ipv4/introduction-aux-adresses-ip/"
        },
        {
          name: "ATera",
          url: "https://www.atera.com/fr/glossary/adressage-ip/"
        }
      ]
    }
  ]

  /**
   * Gestionnaire de navigation article
   * - Type-safe avec TanStack Router
   */
  const handleArticleClick = (id: number) => {
    navigate({
      to: '/blog/$id',
      params: { id: id.toString() }
    })
  }

  return (
    <div className="w-full py-8 sm:py-12 bg-background min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        
        {/* HEADER SECTION */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border shadow-sm text-[10px] uppercase tracking-widest font-bold text-foreground/50">
            <Library size={12} className="shrink-0" />
            <span>{t('insight_kb')}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-foreground uppercase">
            Engineering{' '}
            <span className="text-blue-500 font-serif italic normal-case">Logs</span>
          </h1>

          <p className="text-zinc-500 max-w-lg mx-auto text-sm sm:text-base font-medium">
            {t('insight_description')}
          </p>
        </div>

        {/* ARTICLES LIST */}
        <div className="grid grid-cols-1 gap-8">
          {articles.map((post) => (
            <article
              key={post.id}
              onClick={() => handleArticleClick(post.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleArticleClick(post.id)
                }
              }}
              role="button"
              tabIndex={0}
              className="group cursor-pointer relative overflow-hidden rounded-3xl bg-muted/10 border border-border/50 transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-sky-500/5 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                
                {/* THUMBNAIL */}
                <div className="relative w-full md:w-64 lg:w-72 shrink-0 flex items-center justify-center bg-muted/20 md:p-4">
                  <div className="relative w-full h-full overflow-hidden rounded-t-2xl md:rounded-2xl shadow-inner aspect-video md:aspect-square">
                    <img
                      src={post.image}
                      alt={`${post.title} - ${t('cat_networking')}`}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute top-6 left-6 z-20 px-2 py-0.5 bg-background/90 backdrop-blur-sm opacity-60 border border-border text-[9px] font-black uppercase tracking-tighter rounded shadow-sm text-foreground">
                    {post.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
                  {/* Métadonnées */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] text-foreground/40 font-mono">
                      <span className="text-blue-500 font-bold px-2 py-0.5 bg-blue-500/10 rounded-md border border-blue-500/20">
                        LOG_{post.id.toString().padStart(3, '0')}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="shrink-0" />
                        {post.readTime}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <TimeAgo date={post.date} />
                    </div>

                    {/* Titre et excerpt */}
                    <div className="space-y-2">
                      <h2 className="text-xl sm:text-3xl font-black text-foreground tracking-tighter group-hover:text-blue-500 transition-colors flex items-center justify-between uppercase leading-none gap-3">
                        <span className="flex-1">{post.title}</span>
                        <ChevronRight
                          size={20}
                          className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500 shrink-0"
                          aria-hidden="true"
                        />
                      </h2>
                      <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 font-medium">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* SOURCES & ACTION BAR */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/40">
                    <div className="flex flex-wrap gap-2">
                      {post.sources.map((source, idx) => (
                        <a
                          key={`${post.id}-source-${idx}`}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${source.name} - ${t('cat_networking')}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-background border border-border text-[9px] text-foreground/60 font-bold uppercase tracking-widest hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          <Link2 size={10} className="text-blue-500/50 shrink-0" />
                          <span className="hidden sm:inline">{source.name}</span>
                          <span className="sm:hidden">{source.name.slice(0, 3)}</span>
                        </a>
                      ))}
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all whitespace-nowrap"
                      aria-hidden="true"
                    >
                      {t('insights_open_report')}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ARCHIVE FOOTER */}
        <div className="text-center pt-8 pb-20">
          <button
            className="group px-10 py-4 rounded-full border border-border bg-muted/20 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 hover:text-blue-500 hover:border-blue-500/50 transition-all focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            aria-label={t('insights_archive')}
          >
            {t('insights_init')}{' '}
            <span className="group-hover:text-foreground transition-colors uppercase">
              {t('insights_archive')}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}