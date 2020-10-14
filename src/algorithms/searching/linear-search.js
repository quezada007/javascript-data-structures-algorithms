/**
 * Linear Search
 * @module Linear-Search
 */

/**
 * Searches for an item in an array. It returns the index if found or -1 if not.
 * @param {Array} arr - An array.
 * @param {number|string} item - The item to search in the array.
 * @returns {number} - The index of array where the item was found or -1 if not present.
 */
export default function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}