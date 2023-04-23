"use client";

import { useEffect, useState } from "react";
import { Challenge } from "./challenge";
import { GitHubChallenge, Level, LocalChallenge } from "./types";

export const Challenges = ({ data }: { data: GitHubChallenge[] }) => {
  const [gameState, setGameState] = useState<LocalChallenge[]>([]);

  useEffect(() => {
    const gameStateFromLocalStorage = getInitialGameState();
    setGameState(gameStateFromLocalStorage);
  }, []);

  const getInitialGameState = (): LocalChallenge[] => {
    const completions = localStorage.getItem("completions") ?? "[]";
    const parsedCompletions = JSON.parse(completions).map(Number);

    return data.map((d) => ({
      name: d.name,
      number: d.number,
      level: d.level,
      isCompleted: parsedCompletions.includes(d.number),
    }));
  };

  return (
    <div className="w-full flex flex-col items-start space-y-6 mt-12">
      <ChallengePerLevel level={Level.easy} data={gameState} />
      <ChallengePerLevel level={Level.medium} data={gameState} />
      <ChallengePerLevel level={Level.hard} data={gameState} />
      <ChallengePerLevel level={Level.extreme} data={gameState} />
    </div>
  );
};

const ChallengePerLevel = ({
  level,
  data,
}: {
  level: Level;
  data: LocalChallenge[];
}) => {
  const challengesInCurrentLevel = data.filter((d) => d.level == level);

  const getReadableCurrentLevel = () => {
    switch (level) {
      case Level.easy:
        return "Easy";
      case Level.medium:
        return "Medium";
      case Level.hard:
        return "Hard";
      case Level.extreme:
        return "Extreme";
    }
  };

  const getBorderColorForCurrentLevel = () => {
    switch (level) {
      case Level.easy:
        return "border-green-700";
      case Level.medium:
        return "border-yellow-700";
      case Level.hard:
        return "border-orange-900";
      case Level.extreme:
        return "border-red-800";
    }
  };

  return (
    <div
      className={`p-10 border-l-[32px] border-t-2 w-full rounded-tl bg-neutral-900 ${getBorderColorForCurrentLevel()}`}
    >
      <div className="text-3xl font-bold">{getReadableCurrentLevel()}</div>
      <div className="w-full space-y-2 mt-4">
        {challengesInCurrentLevel.map((d) => (
          <Challenge key={d.number} data={d} />
        ))}
      </div>
    </div>
  );
};
