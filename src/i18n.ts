import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // Navigation
          nav_home: "Home",
          nav_projects: "Projects",
          nav_insights: "Insights",
          nav_websites: "Websites",

        //   telecommunication
        net_badge: "Network Engineer Core",
net_title_part1: "The architecture of ",
net_title_accent: "flow",
net_title_part2: "The science of connection.",
net_description_start: "I ensure that every application rests on a",
net_desc_highlight1: "high-availability",
net_desc_highlight2: "secure",
net_description_end: "and optimized infrastructure.",
net_skill_routing: "Routing & Switching",
net_skill_security: "Network Security",
net_skill_cloud: "Cloud Infrastructure",
net_skill_wireless: "Wireless & IoT",
net_future_label: "Future",
net_status_label: "Status",
// project
lab_badge: "The Laboratory",
lab_title_part1: "Upcoming",
lab_title_accent: "Inventions",
lab_title_part2: "Engineering the Future.",
lab_loading: "Loading...",
lab_cta: "Access Repository",
lab_status_arch: "Architecture",
lab_status_dev: "Development",
lab_status_proto: "Prototyping",
lab_proj1_title: "High-Load Gateway",
lab_proj1_desc: "Designing a low-latency streaming gateway optimized for 10k+ simultaneous connections.",
lab_proj2_title: "Cloud-Native Engine",
lab_proj2_desc: "Microservices orchestration engine with auto-scaling based on predictive traffic analysis.",
lab_proj3_title: "SecOps Dashboard",
lab_proj3_desc: "Real-time network monitoring interface with visualization of encrypted data flows.",

        //   website
web_technical_label: "Technical project details",
web_site1_title: "Luxury E-Commerce",
web_site1_desc: "Building high-end online stores. I focus on fast loading speeds and a clean, simple shopping experience.",
web_site2_title: "Enterprise Network",
web_site2_desc: "Monitoring interfaces for important infrastructure. I help visualize complex data and manage network nodes in real-time.",
web_site3_title: "Creative Portfolio",
web_site3_desc: "Interactive websites for studios. I focus on beautiful typography and making sure the navigation feels smooth.",
// insight
insight_kb: "Knowledge Base",
insight_description: "Technical documentations, network architecture analysis, and frontend explorations.",
insights_open_report: "Open_Report",
insights_init: "Initialize",
insights_archive: "Archive_Access",
cat_networking: "Networking 101",
// Article 1
insight_1_title: "Network Routing: The GPS of the Internet",
insight_1_excerpt: "Ever wondered how your data crosses the globe in milliseconds? A deep dive into Routing Tables, Dynamic Protocols, and the power of BGP.",
// Article 2
insight_2_title: "OSI: The famous seven layers of Internet",
insight_2_excerpt: "Sometimes we need to know the real benefits of internet subdivision. Let's dive into the world of the OSI model.",

// Article3
insight_3_title: "TCP/IP: The 4-Layer Standard",
insight_3_excerpt: "See how 4 practical layers replaced theoretical OSI. TCP/UDP, IP routing, encapsulation decoded visually.",



        //   skillgrid
skills_header_title: "My",
skills_header_accent: "expertise",
skills_intro_start: "Driven and efficient, I constantly refine my work by merging",
skills_intro_performance: "high performance",
skills_intro_and: "and",
skills_intro_experience: "seamless user experience",
level_beginner: "beginner",
level_intermediate: "intermediate",
level_advanced: "advanced",
skill_tag_interface: "Interface",
skill_tag_ecosystem: "Ecosystem",
skill_tag_framework: "Framework",
skill_tag_design: "Design",
skill_tag_backend: "Backend",
skill_react_desc: "Architecting reusable components systems. I build with a future-proof logic in mind.",
skill_tanstack_desc: "Implementing clean routing and state management. This portfolio demonstrates my mastery of the TanStack ecosystem.",
skill_next_desc: "SEO optimization and cutting-edge hybrid rendering (SSR/ISR) for high-performance applications.",
skill_tailwind_desc: "Crafting interfaces with utility-first CSS, focusing on rapid development and responsive precision.",
skill_node_desc: "Building scalable APIs and robust server-side architectures to power modern web applications.",
          // Insights Page
          insights_kb: "Knowledge Base",
          insights_description: "Technical documentations, network architecture analysis, and frontend explorations.",
          open_report: "Open_Report",
          archive_btn: "Initialize",
          archive_btn_sub: "Archive_Access",
          
          // Blog Detail
          back_to_insights: "Back to Insights",
          log_not_found: "Log Not Found",
          return_terminal: "Return to Terminal",
          note_label: "Note",
          warning_label: "Warning",
          tip_label: "Tip",
          important_label: "Important",

        //   index.tsx
        hero_badge: "Network Engineer",
hero_title_gradient: "''Great things",
hero_title_italic: "rise from solid ground.''",
hero_btn_projects: "My projects",
hero_btn_call: "Call me",

// synopsys
synopsys_badge: "Methodology",
synopsys_title_start: "Design with",
synopsys_title_italic: "intention",
synopsys_title_end: "develop for",
synopsys_title_impact: "impact.",
synopsys_description_start: "My work is not just about writing code. It is a journey that turns an abstract idea into a real digital product, where",
synopsys_description_highlight: "every pixel",
synopsys_description_end: "and every function is important.",
synopsys_point_1: "Clean design",
synopsys_point_2: "Fast performance",
synopsys_point_3: "Strong code",

// stepwork
step_label:"step",
step1_title:"my approach",
step1_desc: "I begin every project with a pencil and notebook. Away from digital noise, I think deeply about unique ways to bring your vision to life.",
step2_title: "Mapping",
step2_desc: "Secondly, I organize raw ideas into a coherent and structured plan before touching any software.",
step3_title: "Implementation",
step3_desc: "Third, I transform these physical notes onto modern, high-performance web interfaces and robust network architectures.",
step4_title: "Deployment",
step4_desc: "After coding, I conduct rigorous testing before launch. I ensure to choose a deployment adapted to your budget and needs.",

// collaborate
collab_title_main: "Ready to build the next",
collab_title_italic: "infrastructure?",
collab_description_start: "Let’s combine your vision with my networking and fullstack skills to create systems that are",
collab_description_highlight: "strong and beautiful",
collab_btn: "Let’s work together",
expertise_tag_1: "Consulting",
expertise_tag_2: "Architecture",
expertise_tag_3: "Development",
// wesite
web_badge: "identite visuelle",
web_title_1: "Artisanat",
web_title_2: "Web Moderne",
web_description: "Je ne construis pas seulement des sites web. Je crée des expériences numériques où le code propre rencontre une esthétique premium.",
web_skill1_title: "Glassmorphism & Profondeur",
web_skill1_desc: "J'utilise des effets modernes de transparence et de flou pour créer des interfaces élégantes et multicouches qui respirent le professionnalisme.",
web_skill2_title: "Mouvement Fluide",
web_skill2_desc: "Des transitions fluides et des animations organiques qui rendent chaque interaction naturelle et haut de gamme.",
web_skill3_title: "Design Exclusif",
web_skill3_desc: "Je construis des mises en page sur mesure conçues spécifiquement pour votre identité de marque et vos objectifs.",
web_skill4_title: "Copywriting Stratégique",
web_skill4_desc: "Les mots comptent. Je structure le contenu pour capturer l'attention et guider les utilisateurs vers vos objectifs principaux.",
web_footer_title: "La Touche \"Premium\"",
web_footer_desc: "Chaque pixel est placé avec intention. Je me concentre sur les détails que d'autres ignorent pour livrer un produit final supérieur.",
web_cta: "Lancer un projet",
web_wa_message: "J'ai un projet et je souhaite collaborer",
        }
      },
      fr: {
        translation: {
          // Navigation
          nav_home: "Accueil",
          nav_projects: "Projets",
          nav_insights: "Analyses",
          nav_websites: "Sites Web",
        //   telecommunication
net_badge: " Ingénierie Réseau",
net_title_part1: "L'architecture des ",
net_title_accent: "flux",
net_title_part2: "La science de la connexion.",
net_description_start: "Je m'assure que chaque application repose sur une infrastructure à",
net_desc_highlight1: "haute disponibilité",
net_desc_highlight2: "sécurisée",
net_description_end: "et optimisée.",
net_skill_routing: "Routage & Commutation",
net_skill_security: "Sécurité Réseau",
net_skill_cloud: "Infrastructure Cloud",
net_skill_wireless: "Sans-fil & IoT",
net_future_label: "À venir",
net_status_label: "État",
          
          // Insights Page
          insights_kb: "Base de Connaissances",
          insights_description: "Documentations techniques, analyses d'architecture réseau et explorations frontend.",
          open_report: "Ouvrir_Rapport",
          archive_btn: "Initialiser",
          archive_btn_sub: "Accès_Archive",
          
          // Blog Detail
          back_to_insights: "Retour aux Analyses",
          log_not_found: "Journal introuvable",
          return_terminal: "Retour au Terminal",
          note_label: "Note",
          warning_label: "Attention",
          tip_label: "Astuce",
          important_label: "Important",

        //   index.tsx

          hero_badge: "Ingénieur Réseau",
hero_title_gradient: "''Les grandes choses",
hero_title_italic: "naissent d'un sol solide.''",
hero_btn_projects: "Mes projets",
hero_btn_call: "Me contacter",

// project
lab_badge: "Le Laboratoire",
lab_title_part1: "Inventions",
lab_title_accent: "à venir",
lab_title_part2: "L'ingénierie du futur.",
lab_loading: "Chargement...",
lab_cta: "Accéder au Repository",
lab_status_arch: "Architecture",
lab_status_dev: "Développement",
lab_status_proto: "Prototypage",
lab_proj1_title: "Passerelle Haute-Charge",
lab_proj1_desc: "Conception d'une passerelle de streaming à faible latence optimisée pour plus de 10k connexions simultanées.",
lab_proj2_title: "Moteur Cloud-Native",
lab_proj2_desc: "Moteur d'orchestration de microservices avec auto-scaling basé sur l'analyse prédictive du trafic.",
lab_proj3_title: "Tableau de Bord SecOps",
lab_proj3_desc: "Interface de surveillance réseau en temps réel avec visualisation des flux de données chiffrés.",
// website
web_technical_label: "Détails techniques du projet",
web_site1_title: "E-Commerce de Luxe",
web_site1_desc: "Conception de boutiques en ligne haut de gamme. Je me concentre sur la vitesse de chargement et une expérience d'achat épurée.",
web_site2_title: "Réseau d'Entreprise",
web_site2_desc: "Interfaces de monitoring pour infrastructures critiques. J'aide à visualiser des données complexes et à gérer les nœuds réseau en temps réel.",
web_site3_title: "Portfolio Créatif",
web_site3_desc: "Sites web interactifs pour studios. Je mets l'accent sur une typographie soignée et une navigation fluide.",

// synopsys
synopsys_badge: "Méthodologie",
synopsys_title_start: "Concevoir avec",
synopsys_title_italic: "intention",
synopsys_title_end: "développer pour",
synopsys_title_impact: "l'impact.",
synopsys_description_start: "Mon travail ne se limite pas à écrire du code. C'est un voyage qui transforme une idée abstraite en un produit numérique réel, où",
synopsys_description_highlight: "chaque pixel",
synopsys_description_end: "et chaque fonction compte.",
synopsys_point_1: "Design épuré",
synopsys_point_2: "Haute performance",
synopsys_point_3: "Code robuste",

// stepwork
step_label: "Étape",
scroll_label: "Défiler",
step1_title: "Mon approche",
step1_desc: "Je commence chaque projet avec un crayon et un carnet. Loin du bruit numérique, je réfléchis profondément aux moyens uniques de donner vie à votre vision.",
step2_title: "Cartographie",
step2_desc: "Deuxièmement, j'organise les idées brutes en un plan cohérent et structuré avant de toucher au moindre logiciel.",
step3_title: "Mise en œuvre",
step3_desc: "Troisièmement, je transforme ces notes physiques en interfaces web modernes et performantes ainsi qu'en architectures réseau robustes.",
step4_title: "Déploiement",
step4_desc: "Après le codage, j'effectue des tests rigoureux avant le lancement. Je m'assure de choisir un déploiement adapté à votre budget et à vos besoins.",

// collaborate
collab_title_main: "Prêt à bâtir la prochaine",
collab_title_italic: "infrastructure ?",
collab_description_start: "Combinons votre vision avec mes compétences réseau et fullstack pour créer des systèmes",
collab_description_highlight: "robustes et esthétiques",
collab_btn: "Travaillons ensemble",
expertise_tag_1: "Conseil",
expertise_tag_2: "Architecture",
expertise_tag_3: "Développement",

// websites
web_badge: "Visual_Identity_System",
web_title_1: "Modern Web",
web_title_2: "Craftsmanship",
web_description: "I don't just build websites. I create digital experiences where clean code meets premium aesthetics.",
web_skill1_title: "Glassmorphism & Depth",
web_skill1_desc: "I use modern transparency and blur effects to create elegant, layered interfaces that feel deep and professional.",
web_skill2_title: "Fluid Motion",
web_skill2_desc: "Smooth transitions and organic animations that make every interaction feel natural and high-quality.",
web_skill3_title: "Exclusive Design",
web_skill3_desc: " I build custom layouts designed specifically for your brand identity and goals.",
web_skill4_title: "Strategic Copywriting",
web_skill4_desc: "Words matter. I structure content to capture attention and guide users toward your primary goals.",
web_footer_title: "The \"Premium\" Touch",
web_footer_desc: "Every pixel is placed with intention. I focus on details that others ignore to deliver a superior final product.",
web_cta: "Start a project",
web_wa_message: "I have a project and want to collaborate",

// insigth
insight_kb: "Base de Connaissances",
insight_description: "Documentations techniques, analyses d'architecture réseau et explorations frontend.",
insights_open_report: "Ouvrir_Rapport",
insights_init: "Initialiser",
insights_archive: "Accès_Archive",
cat_networking: "Réseau 101",
// Article 1
insight_1_title: "Routage Réseau : Le GPS d'Internet",
insight_1_excerpt: "Vous vous demandez comment vos données traversent le globe en millisecondes ? Une plongée dans les tables de routage, les protocoles dynamiques et la puissance du BGP.",
// Article 2
insight_2_title: "OSI : Les célèbres sept couches d'Internet",
insight_2_excerpt: "Parfois, nous avons besoin de connaître les réels bénéfices de la subdivision d'Internet. Explorons ensemble le monde du modèle OSI.",
// Article 3


insight_3_title: "TCP/IP : La Norme des 4 Couches",
insight_3_excerpt: "Découvrez comment 4 couches pratiques ont remplacé le modèle OSI théorique. TCP/UDP, routage IP, encapsulation décryptés.",






// skillgrid
skills_header_title: "Mon",
skills_header_accent: "expertise",
skills_intro_start: "Déterminé et efficace, je perfectionne constamment mon travail en alliant",
skills_intro_performance: "haute performance",
skills_intro_and: "et",
skills_intro_experience: "expérience utilisateur fluide",
level_beginner: "débutant",
level_intermediate: "intermédiaire",
level_advanced: "avancé",
skill_tag_interface: "Interface",
skill_tag_ecosystem: "Écosystème",
skill_tag_framework: "Framework",
skill_tag_design: "Design",
skill_tag_backend: "Backend",
skill_react_desc: "Architecture de systèmes de composants réutilisables. Je conçois avec une logique durable.",
skill_tanstack_desc: "Mise en œuvre d'un routage et d'une gestion d'état propres. Ce portfolio démontre ma maîtrise de l'écosystème TanStack.",
skill_next_desc: "Optimisation SEO et rendu hybride de pointe (SSR/ISR) pour des applications ultra-performantes.",
skill_tailwind_desc: "Création d'interfaces avec CSS utility-first, axée sur le développement rapide et la précision responsive.",
skill_node_desc: "Construction d'APIs évolutives et d'architectures serveur robustes pour propulser les applications web modernes.",
        }
      }
    }
  });

export default i18n;