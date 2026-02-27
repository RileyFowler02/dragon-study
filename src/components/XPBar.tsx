"use client";

import { motion } from "framer-motion";

interface Props {
  currentXP: number;
  nextLevelXP: number;
}

export default function XPBar({ currentXP, nextLevelXP }: Props) {
  const percent = (currentXP / nextLevelXP) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-3 text-amber-700 dark:text-amber-300 font-medium tracking-wide">
        <span>{currentXP} / {nextLevelXP} XP</span>
        <span className="text-amber-600 dark:text-amber-400">{Math.round(percent)}%</span>
      </div>

      <div className="relative h-6 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-slate-700 dark:to-slate-600 rounded-full overflow-hidden shadow-sm border border-amber-200/50 dark:border-amber-700/30">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 dark:from-amber-500 dark:via-orange-500 dark:to-amber-600 shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}