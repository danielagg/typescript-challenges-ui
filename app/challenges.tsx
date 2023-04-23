import { Challenge } from "./challenge";
import { Challenge as ChallengeData, Level } from "./types";

export const Challenges = ({ data }: { data: ChallengeData[] }) => {
  return (
    <div className="w-full flex flex-col items-start space-y-6 mt-12">
      <ChallengePerLevel level={Level.easy} data={data} />
      <ChallengePerLevel level={Level.medium} data={data} />
      <ChallengePerLevel level={Level.hard} data={data} />
      <ChallengePerLevel level={Level.extreme} data={data} />
    </div>
  );
};

const ChallengePerLevel = ({
  level,
  data,
}: {
  level: Level;
  data: ChallengeData[];
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
      className={`p-10 border-l-[32px] border-t-2 w-full rounded-tl ${getBorderColorForCurrentLevel()}`}
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
