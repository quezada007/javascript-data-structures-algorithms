/**
 * Insertion Sort
 * @module Insertion-Sort
 */

/**
 * Sorts an array using Insertion Sort.
 * @param {Array} unsortedArray - An unsorted array.
 * @returns {Array} - A new sorted array.
 */
export default function insertionSort(unsortedArray) {
    const arr = [...unsortedArray];
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}