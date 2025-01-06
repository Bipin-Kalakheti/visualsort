import { AnimationArrayType } from "@/lib/types";

function runSelectionSort(array: number[], animations: AnimationArrayType) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      animations.push([[j, minIndex], false]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    animations.push([[minIndex, array[i]], true]);
    animations.push([[i, array[minIndex]], true]);
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}



export function generateSelectionSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runSelectionSort(auxiliaryArray, animations);
  runAnimation(animations);
}