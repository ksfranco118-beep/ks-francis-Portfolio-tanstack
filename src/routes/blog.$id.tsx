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
import { useTranslation } from 'react-i18next'
import React from 'react'

export const Route = createFileRoute('/blog/$id')({
  component: ArticleDetail,
})

function ArticleDetail() {
  const { id } = Route.useParams()
  const { i18n, t } = useTranslation()

  // Récupération des données selon la langue active
  const postData = BLOG_POSTS[id]
  const post = postData ? (postData[i18n.language] || postData['en']) : null

  // Fonction utilitaire pour extraire le texte brut des enfants React (évite l'erreur 7053)
  const extractRawText = (node: any): string => {
    if (!node) return ""
    if (typeof node === "string") return node
    if (Array.isArray(node)) return node.map(extractRawText).join("")
    if (node.props?.children) return extractRawText(node.props.children)
    return ""
  }

  // État d'erreur si l'article n'existe pas
  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-background text-zinc-500">
        <AlertTriangle className="text-rose-500" size={48} />
        <h2 className="text-xl font-black uppercase tracking-[0.3em]">{t('log_not_found')}</h2>
        <Link to="/insights" className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">
          {t('return_terminal')}
        </Link>
      </div>
    )
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-6 bg-white dark:bg-background transition-colors duration-300"
    >
      {/* HEADER : Navigation & Métadonnées */}
      <header className="space-y-8 mb-16">
        <Link 
          to="/insights" 
          className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 text-[10px] font-black uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={14} /> {t('back_to_insights')}
        </Link>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[10px] font-black">
            <span className="px-3 py-1 bg-blue-500 text-white rounded uppercase bg-opacity-85">
              {post.category}
            </span>
            <span className="text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} /> 
              {new Date(post.date).toLocaleDateString(i18n.language, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
            {post.title}
          </h1>

          {post.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shadow-sm mt-8">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </header>

      {/* BODY : Contenu Markdown avec composants personnalisés */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h3: ({ children }) => (
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mt-12 mb-6 block border-b border-zinc-200 dark:border-white/10 pb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed my-6">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300 my-6">
                {children}
              </ul>
            ),
            img: ({ ...props }) => (
              <img className="rounded-xl border border-zinc-200 dark:border-zinc-800 my-10 mx-auto" {...props} alt={props.alt || "Article image"} />
            ),
            
            // BLOCKQUOTE INTELLIGENT (Alerte, Note, Astuce)
            blockquote: ({ children }: any) => {
              const childrenArray = React.Children.toArray(children)
              const content = extractRawText(childrenArray).toUpperCase()
              
              let config = { 
                icon: <Info size={20} />, 
                border: "border-blue-500", 
                bg: "bg-blue-50/30 dark:bg-zinc-900/50", 
                text: "text-blue-600 dark:text-blue-400", 
                label: t('note_label') 
              }
              
              if (content.includes("ATTENTION") || content.includes("WARNING")) {
                config = { icon: <AlertCircle size={20} />, border: "border-rose-600", bg: "bg-rose-50/30 dark:bg-zinc-900/50", text: "text-rose-600 dark:text-rose-500", label: t('warning_label') }
              } else if (content.includes("ASTUCE") || content.includes("TIP")) {
                config = { icon: <Lightbulb size={20} />, border: "border-amber-500", bg: "bg-amber-50/30 dark:bg-zinc-900/50", text: "text-amber-600 dark:text-amber-500", label: t('tip_label') }
              } else if (content.includes("IMPORTANT")) {
                config = { icon: <CheckCircle2 size={20} />, border: "border-emerald-500", bg: "bg-emerald-50/30 dark:bg-zinc-900/50", text: "text-emerald-600 dark:text-emerald-500", label: t('important_label') }
              }

              return (
                <div className={`my-10 border-l-8 ${config.border} ${config.bg} p-8 rounded-r-lg border-y border-r border-zinc-200 dark:border-white/5 shadow-sm`}>
                  <div className={`flex items-center gap-3 mb-4 ${config.text} text-xs font-black uppercase tracking-widest`}>
                    {config.icon} {config.label}
                  </div>
                  <div className="text-zinc-800 dark:text-white font-medium italic leading-relaxed">
                    {children}
                  </div>
                </div>
              )
            },

            // COLORATION SYNTAXIQUE POUR LES BLOCS DE CODE
            code({ inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <div className="relative my-10 group">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-[10px] font-black text-white rounded uppercase z-10 shadow-lg">
                    {match[1]}
                  </div>
                  <SyntaxHighlighter 
                    style={vscDarkPlus} 
                    language={match[1]} 
                    PreTag="div" 
                    className="!rounded-xl !bg-[#0d0d0d] !border-2 !border-zinc-800 dark:!border-white/10 !p-8 !pt-10 shadow-2xl" 
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className="bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-mono border border-zinc-200 dark:border-zinc-700" {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </motion.main>
  )
}