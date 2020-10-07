/**
 * Merge Sort
 * @module Merge-Sort
 */

/**
 * Merges 2 sorted arrays in order.
 * @param {Array} arr1 - A sorted array.
 * @param {Array} arr2 - A sorted array.
 * @returns {Array} - A new sorted array.
 */
export function merge(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i += 1;
        } else {
            mergedArray.push(arr2[j]);
            j += 1;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i += 1;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j += 1;
    }
    return mergedArray;
}

/**
 * Sorts an array using Merge Sort.
 * @param {Array} arr - An unsorted array.
 * @returns {Array} - A new sorted array.
 */
export default function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}