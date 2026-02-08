import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Calendar,  
  AlertTriangle, Info, AlertCircle, Lightbulb, CheckCircle2 
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { BLOG_POSTS } from '../data/posts'

export const Route = createFileRoute('/blog/$id')({
  component: ArticleDetail,
})

function ArticleDetail() {
  const { id } = Route.useParams()
  const post = BLOG_POSTS[id]

  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-background text-zinc-500">
        <AlertTriangle className="text-rose-500" size={48} />
        <h2 className="text-xl font-black uppercase tracking-[0.3em]">Log Not Found</h2>
        <Link to="/insights" className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">
          Return to Terminal
        </Link>
      </div>
    )
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 px-6 bg-white dark:bg-background transition-colors duration-300"
    >
      {/* HEADER ARTICLE */}
      <header className="space-y-8 mb-16">
        <Link to="/insights" className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 text-[10px] font-black uppercase tracking-widest transition-colors">
          <ArrowLeft size={14} /> Back to Insights
        </Link>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[10px] font-black">
            <span className="px-3 py-1 bg-blue-500 text-white rounded uppercase bg-opacity-85">{post.category}</span>
            <span className="text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} /> {new Date(post.date).toLocaleDateString()}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
            {post.title}
          </h1>

          {/* ✅ IMAGE POSITIONNÉE JUSTE APRÈS LE TITRE */}
          {post.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shadow-sm mt-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </header>

      {/* ZONE DE CONTENU DYNAMIQUE */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <ReactMarkdown
          children={post.content}
          components={{
            h3({ children }) {
              return (
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mt-12 mb-6 block border-b border-zinc-200 dark:border-white/10 pb-2">
                  {children}
                </h3>
              )
            },
            p({ children }) {
              return <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed my-6">{children}</p>
            },
            ul({ children }) {
              return <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300 my-6">{children}</ul>
            },
            blockquote({ children }) {
              let textContent = "";
              if (Array.isArray(children)) {
                const textElement = children.find(child => typeof child === 'string' || (child as any)?.props?.children);
                textContent = typeof textElement === 'string' ? textElement : String((textElement as any)?.props?.children || "");
              } else { textContent = String(children || ""); }

              const upperText = textContent.toUpperCase();
              let style = { icon: <Info size={20} />, border: "border-blue-500", bg: "bg-zinc-50 dark:bg-zinc-900", text: "text-blue-600 dark:text-blue-400", label: "Note" };
              
              if (upperText.includes("ATTENTION") || upperText.includes("WARNING")) {
                style = { icon: <AlertCircle size={20} />, border: "border-rose-600", bg: "bg-rose-50 dark:bg-zinc-900", text: "text-rose-600 dark:text-rose-500", label: "Attention" };
              } else if (upperText.includes("ASTUCE") || upperText.includes("TIP")) {
                style = { icon: <Lightbulb size={20} />, border: "border-amber-500", bg: "bg-amber-50 dark:bg-zinc-900", text: "text-amber-600 dark:text-amber-500", label: "Tip" };
              } else if (upperText.includes("IMPORTANT")) {
                style = { icon: <CheckCircle2 size={20} />, border: "border-emerald-500", bg: "bg-emerald-50 dark:bg-zinc-900", text: "text-emerald-600 dark:text-emerald-500", label: "Important" };
              }

              return (
                <div className={`my-10 border-l-8 ${style.border} ${style.bg} p-8 rounded-r-lg border-y border-r border-zinc-200 dark:border-white/5`}>
                  <div className={`flex items-center gap-3 mb-4 ${style.text} text-xs font-black uppercase tracking-widest`}>
                    {style.icon} {style.label}
                  </div>
                  <div className="text-zinc-800 dark:text-white font-medium italic prose-p:my-0">{children}</div>
                </div>
              );
            },
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <div className="relative my-10">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-500 text-[10px] font-black text-white rounded uppercase z-10">{match[1]}</div>
                  <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" className="!rounded-lg !bg-black !border-2 !border-zinc-800 dark:!border-white/10 !p-8 !pt-10 shadow-xl" {...props}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className="bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-mono border border-zinc-200 dark:border-zinc-700" {...props}>{children}</code>
              )
            }
          }}
        />
      </div>
    </motion.main>
  )
}