"use client";

import { useState } from "react";

interface Props {
  addXP: (xp: number) => void;
}

export default function StudyForm({ addXP }: Props) {
  const [type, setType] = useState("study");
  const [minutes, setMinutes] = useState(0);
  const [note, setNote] = useState("");

  function calculateXP() {
    if (type === "study") return minutes * 2;
    if (type === "testprep") return minutes * 3;
    if (type === "assignment") return 1000;
    return 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const earned = calculateXP();
    addXP(earned);
    setMinutes(0);
    setNote("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl flex flex-col gap-5 w-full max-w-md border border-amber-100 dark:border-amber-900/30 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-amber-900 dark:text-amber-200 tracking-wide">Activity Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-amber-50 dark:bg-slate-700 border border-amber-200 dark:border-amber-800 p-3 rounded-xl text-amber-900 dark:text-amber-50 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 transition"
        >
          <option value="study">📚 Study</option>
          <option value="testprep">🔬 Test Prep</option>
          <option value="assignment">✏️ Assignment</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-amber-900 dark:text-amber-200 tracking-wide">Duration (mins)</label>
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="bg-amber-50 dark:bg-slate-700 border border-amber-200 dark:border-amber-800 p-3 rounded-xl text-amber-900 dark:text-amber-50 placeholder-amber-400 dark:placeholder-amber-600 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-amber-900 dark:text-amber-200 tracking-wide">What did you study?</label>
        <input
          type="text"
          placeholder="e.g., Chapter 3, Math problems..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="bg-amber-50 dark:bg-slate-700 border border-amber-200 dark:border-amber-800 p-3 rounded-xl text-amber-900 dark:text-amber-50 placeholder-amber-400 dark:placeholder-amber-600 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 transition"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-500 dark:to-orange-500 hover:from-amber-500 hover:to-orange-500 dark:hover:from-amber-600 dark:hover:to-orange-600 text-white dark:text-amber-950 font-bold p-3 rounded-xl transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 duration-200"
      >
        🐉 Add XP
      </button>
    </form>
  );
}