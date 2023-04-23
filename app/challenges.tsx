"use client";

import { Challenge, Level } from "./types";

export const Challenges = ({ data }: { data: Challenge[] }) => {
  const easyChallenges = data.filter((d) => d.level == Level.easy);

  return (
    <div className="w-full flex items-start space-y-4">
      <div className="w-6 h-12 bg-green-700" />
      <div>
        <div className="text-2xl font-bold">Easy</div>
        <div className="w-full">
          {easyChallenges.map((d) => (
            <div key={d.number}>{d.name}</div>
          ))}
        </div>
      </div>

      {/* <div className="rounded border-2 border-green-800">
        <div className="text-2xl font-bold text-green-300">Easy</div>
       
      </div> */}
    </div>
  );
};
