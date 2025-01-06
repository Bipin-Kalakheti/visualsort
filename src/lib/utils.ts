import { run } from "node:test";
import { SortingAlgorithmType, AnimationArrayType } from "./types";
import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { label: "Bubble Sort", value: "bubble" },
  { label: "Selection Sort", value: "selection" },
  { label: "Insertion Sort", value: "insertion" },
  { label: "Quick Sort", value: "quick" },
  { label: "Merge Sort", value: "merge" },
];


export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,

) {
  switch (selectedAlgorithm) {
    case "bubble":
      return generateBubbleSortAnimationArray(isSorting, array, runAnimation);
    case "selection":
      return selectionSort(array, runAnimation);
    case "insertion":
      return insertionSort(array, runAnimation);
    case "quick":
      return quickSort(array, runAnimation);
    case "merge":
      return mergeSort(array, runAnimation);
  }
}