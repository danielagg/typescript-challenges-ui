export type GitHubChallenge = {
  name: string;
  number: number;
  level: Level;
  originalName: string;
};

export type LocalChallenge = {
  name: string;
  number: number;
  level: Level;
  isCompleted: boolean;
};

export enum Level {
  easy = 1,
  medium = 2,
  hard = 3,
  extreme = 4,
}
