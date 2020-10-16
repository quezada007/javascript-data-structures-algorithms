/**
 * Binary Search
 * @module Binary-Search
 */

/**
 * Searches for an item in an array. It returns the index if found or -1 if not.
 * @param {Array} sortedArray - A sorted array.
 * @param {number|string} item - The item to search in the array.
 * @returns {number} - The index of array where the item was found or -1 if not present.
 */
export default function binarySearch(sortedArray, item) {
    let left = 0;
    let right = sortedArray.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (left <= right) {
        if (sortedArray[middle] === item) {
            return middle;
        }
        if (sortedArray[middle] < item) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return -1;
}