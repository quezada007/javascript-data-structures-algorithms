/**
 * Radix Sort
 * @module Radix-Sort
 */

/**
 * Returns the digit in a number at the given place value.
 * @param {number} num - A positive or negative number.
 * @param {number} place - The place value.
 * @returns {number} - The digit at a given place value.
 */
export function getDigit(num, place) {
    return Math.floor(Math.abs(num) / (10 ** place)) % 10;
}

/**
 * Returns the number of digits in a given number.
 * @param {number} num - A positive or negative number.
 * @returns {number} - The number of digits in the number.
 */
export function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Returns the number of digits of the largest number in an array of numbers.
 * @param {number[]} numbersArray - Array of numbers.
 * @returns {number} - The number of digits of the largest number.
 */
export function mostDigits(numbersArray) {
    let maxDigits = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(numbersArray[i]));
    }
    return maxDigits;
}

/**
 * Sorts an array of numbers using Radix Sort.
 * @param {number[]} unsortedNumbersArray - An unsorted array of numbers.
 * @returns {number[]} - A new sorted array of numbers.
 */
export default function radixSort(unsortedNumbersArray) {
    let numbersArray = [...unsortedNumbersArray];
    const maxDigitCount = mostDigits(numbersArray);
    for (let k = 0; k < maxDigitCount; k++) {
        const digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < numbersArray.length; i++) {
            const digit = getDigit(numbersArray[i], k);
            digitBuckets[digit].push(numbersArray[i]);
        }
        numbersArray = [].concat(...digitBuckets);
    }
    return numbersArray;
}
