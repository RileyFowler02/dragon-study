export function xpForNextLevel(level: number) {
  // Nonlinear semester scaling
  return Math.floor(500 * Math.pow(level, 1.4));
}

export function calculateLevel(totalXP: number) {
  let level = 1;
  let xpNeeded = xpForNextLevel(level);

  while (totalXP >= xpNeeded) {
    totalXP -= xpNeeded;
    level++;
    xpNeeded = xpForNextLevel(level);
  }

  return {
    level,
    currentXP: totalXP,
    nextLevelXP: xpNeeded,
  };
}