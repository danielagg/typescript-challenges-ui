export type Challenge = {
  name: string;
  number: number;
  level: Level;
  originalName: string;
};

export enum Level {
  easy = 1,
  medium = 2,
  hard = 3,
  extreme = 4,
}
