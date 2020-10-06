import insertionSort from './insertion-sort';

describe('Insertion Sort', () => {
    test('sort array of numbers', () => {
        const unsortedArray = [3, 5, 4, 6, 7, 2, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7];
        const result = insertionSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });

    test('sort array of strings', () => {
        const unsortedArray = ['dog', 'cat', 'zebra', 'panda', 'bear', 'elephant', 'tiger', 'lion'];
        const expectedResult = ['bear', 'cat', 'dog', 'elephant', 'lion', 'panda', 'tiger', 'zebra'];
        const result = insertionSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });
});
