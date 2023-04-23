export type Challenge = {
  name: string;
  number: number;
  level: Level;
};

export enum Level {
  easy = 1,
  medium = 2,
  hard = 3,
  extreme = 4,
}
