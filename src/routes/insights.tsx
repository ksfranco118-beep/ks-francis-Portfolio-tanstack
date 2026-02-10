import { useState, useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Clock, Link2, Library, ChevronRight } from 'lucide-react'

export const Route = createFileRoute('/insights')({
  component: InsightsPage,
})

const articles = [
  {
    id: 1,
    title: "Network Routing: The GPS of the Internet",
    excerpt: "Ever wondered how your data crosses the globe in milliseconds? A deep dive into Routing Tables, Dynamic Protocols, and the power of BGP.",
    date: "2026-02-08T10:00:00Z", 
    readTime: "8 min",
    category: "Networking 101",
    image: "/routing.jpg", 
    sources: [
      { name: "Cloudflare", url: "https://www.cloudflare.com/learning/network-layer/what-is-routing/" }, 
      { name: "Cisco BGP", url: "https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html" }
    ]
  },
  {
    id: 2,
    title: "OSI, the famous seven layer of internet",
    excerpt: "Sometime we need to know the real beneficts of internet subdivision. In this case let go to the world of division",
    // Correction de la date : format ISO valide (YYYY-MM-DDTHH:mm:ssZ)
    date: "2026-02-10T01:00:00Z", 
    readTime: "15 min",
    category: "Networking 101",
    image: "/OSIMODEL.jpg",
    sources: [
      { name: "Cloudflare", url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" }, 
      { name: "AWS", url: "https://aws.amazon.com/what-is/osi-model/" },
      { name: "Youtube +1", url: "https://youtu.be/v4sRKGarh5Q?si=cOQBO9rO4jBYCGr6" },
      { name: "wikipedia", url: "https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI" }
    ]
  },
]

/**
 * COMPOSANT TIMEAGO AMÉLIORÉ
 */
function TimeAgo({ date }: { date: string }) {
  const [relativeTime, setRelativeTime] = useState<string | null>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime()
      const published = new Date(date).getTime()
      
      // Sécurité si la date est invalide
      if (isNaN(published)) {
        setRelativeTime('Recently')
        return
      }

      const diffInMinutes = Math.floor((now - published) / (1000 * 60))

      if (diffInMinutes < 1) setRelativeTime('Just now')
      else if (diffInMinutes < 60) setRelativeTime(`${diffInMinutes}m ago`)
      else if (diffInMinutes < 1440) setRelativeTime(`${Math.floor(diffInMinutes / 60)}h ago`)
      else setRelativeTime(`${Math.floor(diffInMinutes / 1440)}d ago`)
    }

    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [date])

  if (!relativeTime) return <span className="opacity-0">...</span>
  return <span className="font-medium text-blue-500 tracking-tight">{relativeTime}</span>
}

function InsightsPage() {
  const navigate = useNavigate()

  return (
    <div className="w-full py-8 sm:py-12 bg-background min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        
        {/* HEADER SECTION */}
        <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border shadow-sm text-[10px] uppercase tracking-widest font-bold text-foreground/50">
                 <Library size={12} />
                 Knowledge Base
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-foreground uppercase">
                Engineering <span className="text-blue-500 font-serif italic normal-case">Logs</span>
            </h1>
            <p className="text-zinc-500 max-w-lg mx-auto text-sm sm:text-base font-medium">
              Technical documentations, network architecture analysis, and frontend explorations.
            </p>
        </div>

        {/* ARTICLES LIST */}
        <div className="grid grid-cols-1 gap-8">
          {articles.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate({ to: '/blog/$id', params: { id: post.id.toString() } })}
              className="group cursor-pointer block relative overflow-hidden rounded-3xl bg-muted/10 border border-border/50 transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-sky-500/5"
            >
              <article className="flex flex-col md:flex-row items-stretch">
                
                {/* THUMBNAIL */}
                <div className="relative w-full md:w-64 lg:w-72 shrink-0 flex items-center justify-center bg-muted/20 md:p-4">
                  <div className="relative w-full h-full overflow-hidden rounded-t-2xl md:rounded-2xl shadow-inner aspect-video md:aspect-square">
                    <img 
                      src={post.image} 
                      alt={post.title} 
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
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[10px] text-foreground/40 font-mono">
                       <span className="text-blue-500 font-bold px-2 py-0.5 bg-blue-500/10 rounded-md border border-blue-500/20">
                         LOG_{post.id.toString().padStart(3, '0')}
                       </span>
                       <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                       <span>•</span>
                       <TimeAgo date={post.date} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-3xl font-black text-foreground tracking-tighter group-hover:text-blue-500 transition-colors flex items-center justify-between uppercase leading-none">
                        {post.title}
                        <ChevronRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500 shrink-0" />
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 font-medium">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* CLICKABLE SOURCES & ACTION BAR */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <div className="flex flex-wrap gap-2">
                      {post.sources.map((source, idx) => (
                        <a 
                          key={idx} 
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-background border border-border text-[9px] text-foreground/60 font-bold uppercase tracking-widest hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all z-30"
                        >
                          <Link2 size={10} className="text-blue-500/50" />
                          {source.name}
                        </a>
                      ))}
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      Open_Report
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* ARCHIVE FOOTER */}
        <div className="text-center pt-8 pb-20">
            <button className="group px-10 py-4 rounded-full border border-border bg-muted/20 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 hover:text-blue-500 hover:border-blue-500/50 transition-all">
              Initialize <span className="group-hover:text-foreground transition-colors">Archive_Access</span>
            </button>
        </div>
      </div>
    </div>
  )
}