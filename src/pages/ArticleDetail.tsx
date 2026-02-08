// import { useParams, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { ArrowLeft, Clock, BarChart, Calendar, Share2, Bookmark } from 'lucide-react'

// // Simulation d'une base de données (À remplacer par ton API ou fichier de données)
// const articlesData = {
//   "1": {
//     category: "Architecture",
//     title: "Understanding Micro-services communication",
//     date: "Feb 12, 2026",
//     readTime: "8 min",
//     level: "Intermediate",
//     content: `
//       Micro-services are powerful but communication is the biggest challenge. 
//       In this guide, we explore how to choose the right protocol for your system...
      
//       ### 1. Synchronous vs Asynchronous
//       Rest and gRPC are great for immediate needs, but message brokers like RabbitMQ 
//       are better for decoupling systems.
      
//       ### 2. Performance Impact
//       Using gRPC can reduce latency by up to 30% compared to traditional JSON APIs.
//     `
//   },
//   // ... ajoute les autres articles ici
// }

// export default function ArticleDetail() {
//   const { id } = useParams()
//   const article = articlesData[id as keyof typeof articlesData]

//   if (!article) return <div className="py-20 text-center">Article not found.</div>

//   return (
//     <motion.main 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen py-20 px-6 max-w-4xl mx-auto"
//     >
//       {/* Navigation de retour */}
//       <Link 
//         to="/insights" 
//         className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
//       >
//         <ArrowLeft size={16} /> Back to Insights
//       </Link>

//       {/* Header de l'article */}
//       <header className="space-y-8 mb-16">
//         <div className="flex flex-wrap items-center gap-4">
//           <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-md border border-blue-500/20">
//             {article.category}
//           </span>
//           <div className="flex items-center gap-4 text-zinc-400 text-xs font-bold">
//             <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
//             <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
//             <span className="flex items-center gap-1.5 text-blue-500/80"><BarChart size={14} /> {article.level}</span>
//           </div>
//         </div>

//         <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-foreground">
//           {article.title}
//         </h1>

//         <div className="flex items-center justify-between py-6 border-y border-zinc-100 dark:border-zinc-800">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
//             <div>
//               <p className="text-sm font-bold">Your Name</p>
//               <p className="text-xs text-zinc-500">Software Architect</p>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><Share2 size={18} /></button>
//             <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><Bookmark size={18} /></button>
//           </div>
//         </div>
//       </header>

//       {/* Corps de l'article (Markdown style) */}
//       <article className="prose prose-zinc dark:prose-invert max-w-none">
//         <div className="whitespace-pre-line text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
//           {article.content}
//         </div>
//       </article>

//       {/* Footer de l'article */}
//       <footer className="mt-20 pt-10 border-t border-zinc-100 dark:border-zinc-800 text-center">
//         <p className="text-zinc-500 mb-6 font-medium">Enjoyed this technical dive?</p>
//         <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-500/20">
//           Share your feedback
//         </button>
//       </footer>
//     </motion.main>
//   )
// }