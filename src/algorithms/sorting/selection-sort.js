/**
 * Selection Sort
 * @module Selection-Sort
 */

/**
 * Sorts an array using Selection Sort.
 * @param {Array} unsortedArray - An unsorted array.
 * @returns {Array} - A new sorted array.
 */
export default function selectionSort(unsortedArray) {
    const arr = [...unsortedArray];
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
        }
    }
    return arr;
}