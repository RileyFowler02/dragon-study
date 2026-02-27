"use client";

import { motion } from "framer-motion";

interface Props {
  level: number;
}

export default function DragonStage({ level }: Props) {
  const scale = 0.8 + level * 0.03;

  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      {/* Warm glow aura */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-300/20 blur-3xl"
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.95, 1.05, 0.95] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      
      {/* Secondary softer glow */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-300/20 to-blue-300/20 dark:from-purple-500/10 dark:to-blue-500/10 blur-2xl"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <motion.img
        src="/dragons/stage1.png" 
        alt="Dragon"
        className="w-72 drop-shadow-xl relative z-10"
        animate={{
          scale: scale,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
      />
    </motion.div>
  );
}