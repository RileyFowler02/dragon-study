"use client";

import { motion } from "framer-motion";

interface Props {
  show: boolean;
  level: number;
}

export default function LevelUpOverlay({ show, level }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <motion.div
        className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-slate-800 dark:to-amber-900 p-12 rounded-3xl text-center shadow-2xl border border-amber-300 dark:border-amber-600 max-w-sm mx-4"
        initial={{ scale: 0.5, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div
          className="text-7xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          🐉
        </motion.div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-300 dark:to-orange-300 bg-clip-text text-transparent mb-4">
          LEVEL UP!
        </h2>
        <p className="text-xl text-amber-900 dark:text-amber-50 font-medium mb-2">
          Your dragon reached
        </p>
        <p className="text-4xl font-bold text-amber-800 dark:text-amber-200">
          Level {level}
        </p>
        <motion.div
          className="mt-6 flex justify-center gap-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-2xl">✨</span>
          <span className="text-2xl">🌟</span>
          <span className="text-2xl">✨</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}