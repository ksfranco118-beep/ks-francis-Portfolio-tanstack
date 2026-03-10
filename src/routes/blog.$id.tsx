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
import React, { useState } from 'react'

export const Route = createFileRoute('/blog/$id')({
  component: ArticleDetail,
})


type ReactNodeLike = string | number | React.ReactNode | ReactNodeLike[]



/**
 * Extracts plain text from a React node tree.
 * FIX: Replaced any-typed version — uses explicit type + React.isValidElement guard.
 */
function extractRawText(node: ReactNodeLike): string {
  if (node == null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractRawText).join('')
  if (React.isValidElement(node)) {
    return extractRawText((node.props as { children?: ReactNodeLike }).children ?? '')
  }
  return ''
}

/**
 * Safely formats a date string. Returns null if the date is invalid.
 * FIX: Prevents "Invalid Date" from appearing in the UI.
 */
function formatDate(dateStr: string, locale: string): string | null {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return null
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}



interface BoundaryProps { children: React.ReactNode }
interface BoundaryState { hasError: boolean }

/**
 * FIX (new): Wraps ReactMarkdown to catch any runtime render/parse exceptions.
 * Class component is required — hooks cannot catch render errors.
 */
class MarkdownErrorBoundary extends React.Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false }

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[MarkdownErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="my-10 border-l-8 border-rose-600 bg-rose-50/30 dark:bg-zinc-900/50 p-8 rounded-r-lg border-y border-r dark:border-white/5 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-rose-600 dark:text-rose-500 text-xs font-black uppercase tracking-widest">
            <AlertTriangle size={20} /> Render Error
          </div>
          <p className="text-zinc-700 dark:text-zinc-400 text-sm mb-4">
            This article could not be rendered.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:underline"
          >
            Try again →
          </button>
        </div>
      )
    }
    return this.props.children
  }
}


function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (errored) {
    return (
      <div className="w-full aspect-video rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center mt-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
          Cover image unavailable
        </span>
      </div>
    )
  }

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shadow-sm mt-8">
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}


function MarkdownImage({ src, alt }: { src?: string; alt?: string }) {
  const [errored, setErrored] = useState(false)

  if (errored || !src) {
    return (
      <span className="rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 my-10 mx-auto w-full aspect-video flex flex-col items-center justify-center gap-3 bg-zinc-50 dark:bg-zinc-900">
        <span className="text-3xl">🖼</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
          Image unavailable
        </span>
        {alt && <span className="text-xs text-zinc-400 italic">{alt}</span>}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt ?? 'Article image'}
      onError={() => setErrored(true)}
      className="rounded-xl border border-zinc-200 dark:border-zinc-800 my-10 mx-auto"
    />
  )
}


function ArticleDetail() {
  const { id } = Route.useParams()
  const { i18n, t } = useTranslation()

  const postData = BLOG_POSTS[id]
  const post = postData ? (postData[i18n.language] ?? postData['en']) : null

  // Error state: article not found
  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-background text-zinc-500">
        <AlertTriangle className="text-rose-500" size={48} />
        <h2 className="text-xl font-black uppercase tracking-[0.3em]">{t('log_not_found')}</h2>
        <Link
          to="/insights"
          className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline"
        >
          {t('return_terminal')}
        </Link>
      </div>
    )
  }

  const formattedDate = post.date ? formatDate(post.date, i18n.language) : null

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-6 bg-white dark:bg-background transition-colors duration-300"
    >
      {/* HEADER */}
      <header className="space-y-8 mb-16">
        <Link
          to="/insights"
          className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 text-[10px] font-black uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={14} /> {t('back_to_insights')}
        </Link>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[10px] font-black">
            {post.category && (
              <span className="px-3 py-1 bg-blue-500 bg-opacity-85 text-white rounded uppercase">
                {post.category}
              </span>
            )}
            {/* FIX: Only render date if it's valid */}
            {formattedDate && (
              <span className="text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <Calendar size={12} />
                {formattedDate}
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
            {post.title}
          </h1>

          {/* FIX: HeroImage component handles load + error states */}
          {post.image && <HeroImage src={post.image} alt={post.title} />}
        </div>
      </header>

      {/* BODY */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {/* FIX: MarkdownErrorBoundary catches any render crash */}
        <MarkdownErrorBoundary>
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

              // FIX: Named component so useState works correctly
              img: ({ src, alt }) => <MarkdownImage src={src} alt={alt} />,

              // FIX: Blockquote reads only the first line for keyword detection
              // to avoid false positives from deep nested content.
              blockquote: ({ children }: { children?: React.ReactNode }) => {
                const childrenArray = React.Children.toArray(children)
                const firstLine = extractRawText(childrenArray).split('\n')[0].toUpperCase()

                let config = {
                  icon: <Info size={20} />,
                  border: 'border-blue-500',
                  bg: 'bg-blue-50/30 dark:bg-zinc-900/50',
                  text: 'text-blue-600 dark:text-blue-400',
                  label: t('note_label'),
                }

                if (firstLine.includes('ATTENTION') || firstLine.includes('WARNING')) {
                  config = {
                    icon: <AlertCircle size={20} />,
                    border: 'border-rose-600',
                    bg: 'bg-rose-50/30 dark:bg-zinc-900/50',
                    text: 'text-rose-600 dark:text-rose-500',
                    label: t('warning_label'),
                  }
                } else if (firstLine.includes('ASTUCE') || firstLine.includes('TIP')) {
                  config = {
                    icon: <Lightbulb size={20} />,
                    border: 'border-amber-500',
                    bg: 'bg-amber-50/30 dark:bg-zinc-900/50',
                    text: 'text-amber-600 dark:text-amber-500',
                    label: t('tip_label'),
                  }
                } else if (firstLine.includes('IMPORTANT')) {
                  config = {
                    icon: <CheckCircle2 size={20} />,
                    border: 'border-emerald-500',
                    bg: 'bg-emerald-50/30 dark:bg-zinc-900/50',
                    text: 'text-emerald-600 dark:text-emerald-500',
                    label: t('important_label'),
                  }
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

              // FIX: Removed deprecated `inline` prop — block detection via className only.
              code({ className, children, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
                const match = /language-(\w+)/.exec(className ?? '')
                return match ? (
                  <div className="relative my-10 group">
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-[10px] font-black text-white rounded uppercase z-10 shadow-lg">
                      {match[1]}
                    </div>
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="!rounded-xl !bg-[#0d0d0d] !border-2 !border-zinc-800 dark:!border-white/10 !p-8 !pt-10 shadow-2xl"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code
                    className="bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-mono border border-zinc-200 dark:border-zinc-700"
                    {...props}
                  >
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </MarkdownErrorBoundary>
      </div>
    </motion.main>
  )
}