import mergeSort, { merge } from './merge-sort';

describe('Merge Sort', () => {
    test('merge two sorted arrays', () => {
        const sortedArray1 = [1, 5, 6, 6];
        const sortedArray2 = [3, 5, 8, 10, 23, 25];
        const expectedResult = [1, 3, 5, 5, 6, 6, 8, 10, 23, 25];
        const result = merge(sortedArray1, sortedArray2);
        expect(result).toEqual(expectedResult);
    });

    test('sort array of numbers', () => {
        const unsortedArray = [3, 5, 4, 6, 7, 2, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7];
        const result = mergeSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });

    test('sort array of strings', () => {
        const unsortedArray = ['dog', 'cat', 'zebra', 'panda', 'bear', 'elephant', 'tiger', 'lion'];
        const expectedResult = ['bear', 'cat', 'dog', 'elephant', 'lion', 'panda', 'tiger', 'zebra'];
        const result = mergeSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });
});
