export type SortingAlgorithmType =
  | "bubble"
  | "selection"
  | "insertion"
  | "quick"
  | "merge";

export type SelectOptionsType = {
  label: string;
  value: string;
};

export type AnimationArrayType = [number[], boolean][];