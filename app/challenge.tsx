"use client";

import { useState } from "react";
import { LocalChallenge } from "./types";
import { UndoButton } from "./undoButton";
import { CompleteButton } from "./completeButton";

export const Challenge = ({ data }: { data: LocalChallenge }) => {
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const getBackground = () => {
    if (isCompleted) {
      return "bg-sky-800";
    } else {
      return "bg-black";
    }
  };

  const onIsCompleted = () => {
    const completions = localStorage.getItem("completions");
    setIsCompleted(true);

    if (!completions) {
      localStorage.setItem("completions", JSON.stringify([data.number]));
      return;
    }

    const parsedCompletions = parseCompletions(completions);

    parsedCompletions.add(data.number);

    setLocalStorage(parsedCompletions);
  };

  const onUndo = () => {
    setIsCompleted(false);

    const parsedCompletions = parseCompletions(
      localStorage.getItem("completions")!
    );

    parsedCompletions.delete(data.number);

    setLocalStorage(parsedCompletions);
  };

  const parseCompletions = (completions: string): Set<number> => {
    return new Set(
      JSON.parse(completions, (_, value) => {
        if (!Array.isArray(value)) {
          value = [value];
        }
        return value.map(Number);
      }).flat()
    );
  };

  const setLocalStorage = (data: Set<number>) => {
    localStorage.setItem("completions", JSON.stringify(Array.from(data)));
  };

  return (
    <div
      className={`border border-neutral-700 p-2 rounded w-full flex items-center justify-between ${getBackground()}`}
    >
      <a
        href={`https://tsch.js.org/${data.number}/play`}
        target="_blank"
        className={`cursor-pointer hover:underline pl-4 ${
          isCompleted ? "opacity-50" : "opacity-100"
        }`}
      >
        {data.number.toString().padStart(5, "0")}.{" "}
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </a>
      {isCompleted ? (
        <UndoButton onClick={onUndo} />
      ) : (
        <CompleteButton onClick={onIsCompleted} />
      )}
    </div>
  );
};
