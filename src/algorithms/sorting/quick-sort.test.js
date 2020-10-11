import quickSort, { pivot } from './quick-sort';

describe('Quick Sort', () => {
    test('get pivot of array', () => {
        const arr1 = [4, 8, 2, 1, 5, 7, 6, 3];
        const expectedResult = 3;
        const result = pivot(arr1);
        expect(result).toEqual(expectedResult);
    });

    test('sort array of numbers', () => {
        const unsortedArray = [3, 5, 4, 6, 7, 2, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7];
        const result = quickSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });

    test('sort array of strings', () => {
        const unsortedArray = ['dog', 'cat', 'zebra', 'panda', 'bear', 'elephant', 'tiger', 'lion'];
        const expectedResult = ['bear', 'cat', 'dog', 'elephant', 'lion', 'panda', 'tiger', 'zebra'];
        const result = quickSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });
});