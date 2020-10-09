/* eslint-disable no-param-reassign */

/**
 * Quick Sort
 * @module Quick-Sort
 */

/**
 * Chooses a pivot and sorts it in place.
 * @param {Array} arr - The unsorted array.
 * @param {number} start - The start index of the array.
 * @param {number} end - The end index of the array.
 * @returns {number} - The pivot.
 */
export function pivot(arr, start = 0, end = arr.length - 1) {
    // We are going to use the first element as the pivot
    const pivotValue = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            swapIndex += 1;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
}

/**
 * Sorts an array using Quick Sort.
 * @param {Array} arr - An unsorted array.
 * @param {number} left - The index of the left side of the array.
 * @param {number} right - The index of the right side of the array.
 * @returns {Array} - A sorted array.
 */
export default function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        // left side of the array
        quickSort(arr, left, pivotIndex - 1);
        // right side of the array
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}