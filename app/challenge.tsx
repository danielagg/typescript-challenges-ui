"use client";

import { Octokit } from "octokit";
import { Challenge as ChallengeData } from "./types";
import { useState } from "react";

export const Challenge = ({ data }: { data: ChallengeData }) => {
const [isCompleted, setIsCompleted] = useState(false)


  return (
    <div className="border-2 border-neutral-700 bg-neutral-900 p-2 rounded w-full flex items-center justify-between">
      <a
        href={`https://tsch.js.org/${data.number}/play`}
        target="_blank"
        className="cursor-pointer hover:underline pl-4"
      >
        {data.number.toString().padStart(5, "0")}.{" "}
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </a>
      <div className="bg-neutral-400 text-black py-2 px-6 rounded flex items-center space-x-2 hover:bg-neutral-300 cursor-pointer font-medium"
      onClick={() => setIsCompleted(!isCompleted)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div>Completed</div>
      </div>
    </div>
  );
};
