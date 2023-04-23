import { Octokit } from "octokit";
import { Challenges } from "./challenges";
import { Challenge, Level } from "./types";
import Image from "next/image";

export default async function Home() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const dirContentsMetadata = await octokit.rest.repos.getContent({
    owner: "type-challenges",
    repo: "type-challenges",
    path: "/questions",
  });

  const result: { name: string }[] = dirContentsMetadata?.data as any;

  const parseResult = (arr: string[]): Challenge[] => {
    const parsed = arr.map((a) => {
      const [aNum, aWord, ...aRest] = a.split("-");
      const aNumInt = parseInt(aNum);
      const res: Challenge = {
        name: aRest.join("-"),
        number: aNumInt,
        level: Level[aWord as keyof typeof Level],
      };

      return res;
    });

    parsed.sort((a: Challenge, b: Challenge) => {
      if (a.level < b.level) return -1;
      if (a.level > b.level) return 1;

      if (a.number < b.number) return -1;
      if (a.number > b.number) return 1;

      return 0;
    });

    return parsed;
  };

  return (
    <main className="flex min-h-screen w-full justify-center py-16">
      <div className="w-2/3">
        <div className="flex items-center space-x-4">
          <Image
            src="/typescript.svg"
            alt="Typescript Logo"
            width={100}
            height={24}
            priority
          />
          <div>
            <div className="text-5xl font-bold">TypeScript Challenges</div>
            <div className="p-2 text-sm">
              This is a{" "}
              <a
                href="https://neetcode.io/"
                target="_blank"
                className="cursor-pointer text-blue-400 underline"
              >
                Neetcode
              </a>{" "}
              inspired UI over the amazing{" "}
              <a
                href="https://github.com/type-challenges/type-challenges/"
                target="_blank"
                className="cursor-pointer text-blue-400 underline"
              >
                collection of TypeScript challenges
              </a>
              , curated by Anthony Fu{" "}
              <a
                href="https://github.com/antfu"
                target="_blank"
                className="cursor-pointer text-blue-400 underline"
              >
                @antfu
              </a>
              .
            </div>
          </div>
        </div>

        <Challenges data={parseResult(result.map((file) => file.name))} />
      </div>
    </main>
  );
}
