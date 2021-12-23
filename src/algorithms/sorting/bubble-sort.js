/**
 * Bubble Sort
 * @module Bubble-Sort
 */

/**
 * Sorts an array using Bubble Sort.
 * @param {Array} unsortedArray - An unsorted array.
 * @returns {Array} - A new sorted array.
 */
export default function bubbleSort(unsortedArray) {
    // Create a copy of the unsorted array
    const arr = [...unsortedArray];
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap values
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return arr;
}