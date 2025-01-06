import { SortingAlgorithmType, AnimationArrayType } from "./types";
import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";

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
  runAnimation: (animations: AnimationArrayType) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      return generateBubbleSortAnimationArray(isSorting, array, runAnimation);
    case "selection":
      return generateSelectionSortAnimationArray(
        isSorting,
        array,
        runAnimation
      );
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Like bubbles rising to the surface, this algorithm repeatedly steps through the list, comparing adjacent pairs of elements and swapping them if they're out of order. With each pass, the largest unsorted element 'bubbles up' to its correct position at the end. While simple to understand, it's generally inefficient for large datasets.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Imagine sorting a hand of playing cards - you pick up one card at a time and insert it into its correct position among the cards you're already holding. Similarly, this algorithm builds the sorted array one element at a time, shifting elements as needed to insert each new one into its proper place.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Think of selecting the smallest number from a list of unsorted numbers and placing it first, then finding the next smallest for second place, and so on. This algorithm divides the input into a sorted region and an unsorted region, repeatedly selecting the smallest element from the unsorted region to build up the sorted region one element at a time.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Following the divide-and-conquer strategy, this algorithm splits the array into smaller pieces, sorts them, and then merges them back together - like sorting small piles of cards separately and then merging them into one sorted deck. It's highly efficient and stable, making it ideal for sorting large datasets where memory space isn't a constraint.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Using a divide-and-conquer approach, this algorithm picks an element as a 'pivot' and partitions the array around it, ensuring smaller elements move before the pivot and larger ones after it. The process repeats for each partition until the entire array is sorted. Despite its worst-case complexity, it's often the fastest in practice due to its excellent average performance and cache efficiency.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
