"use client";

import { useEffect, useState } from "react";
import DragonStage from "../components/DragonStage";
import StudyForm from "../components/StudyForm";
import XPBar from "../components/XPBar";
import LevelUpOverlay from "../components/LevelUpOverlay";
import { calculateLevel } from "../lib/progression";

export default function Home() {
  const [totalXP, setTotalXP] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [previousLevel, setPreviousLevel] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem("dragonXP");
    if (saved !== null) {
      setTotalXP(Number(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dragonXP", totalXP.toString());
  }, [totalXP]);

  const { level, currentXP, nextLevelXP } = calculateLevel(totalXP);

  useEffect(() => {
    if (level > previousLevel) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 2000);
      setPreviousLevel(level);
    }
  }, [level]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-amber-900 dark:to-slate-800 text-slate-800 dark:text-amber-50 flex flex-col items-center justify-center p-6 gap-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 dark:from-amber-600/10 dark:to-orange-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col items-center gap-4">
        <div className="text-6xl">🐉</div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-200 dark:via-orange-300 dark:to-amber-200 bg-clip-text text-transparent tracking-tight">
          Dragon Study
        </h1>
        <p className="text-amber-700 dark:text-amber-300 font-medium">For my beautiful lil lady</p>
      </div>

      <DragonStage level={level} />

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-medium text-amber-600 dark:text-amber-400 uppercase tracking-widest">Progress</p>
        <div className="text-4xl font-bold text-amber-900 dark:text-amber-100">Level {level}</div>
      </div>

      <div className="w-full max-w-md px-6">
        <XPBar currentXP={currentXP} nextLevelXP={nextLevelXP} />
      </div>

      <StudyForm addXP={(xp) => setTotalXP(totalXP + xp)} />

      <LevelUpOverlay show={showLevelUp} level={level} />

    </main>
  );
}