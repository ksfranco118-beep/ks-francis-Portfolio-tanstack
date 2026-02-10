import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  // 1. Récupère la progression du scroll (de 0 à 1)
  const { scrollYProgress } = useScroll();

  // 2. Ajoute un effet de ressort pour que le remplissage soit fluide
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 origin-[0%] z-[100]"
      style={{ scaleX }}
    />
  );
}