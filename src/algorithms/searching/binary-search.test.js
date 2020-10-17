import binarySearch from './binary-search';

describe('Binary Search', () => {
    test('search for a number', () => {
        const sortedArray = [1, 2, 3, 4, 5, 6, 7];
        expect(binarySearch(sortedArray, 4)).toEqual(3);
        expect(binarySearch(sortedArray, 3)).toEqual(2);
        expect(binarySearch(sortedArray, 5)).toEqual(4);
        expect(binarySearch(sortedArray, 1)).toEqual(0);
    });

    test('search for a string', () => {
        const sortedArray = ['bear', 'cat', 'dog', 'elephant', 'lion', 'panda', 'tiger', 'zebra'];
        expect(binarySearch(sortedArray, 'zebra')).toEqual(7);
        expect(binarySearch(sortedArray, 'bear')).toEqual(0);
        expect(binarySearch(sortedArray, 'cat')).toEqual(1);
        expect(binarySearch(sortedArray, 'tiger')).toEqual(6);
    });

    test('search for a number not present', () => {
        const sortedArray = [1, 2, 3, 4, 5, 6, 7];
        expect(binarySearch(sortedArray, 34)).toEqual(-1);
        expect(binarySearch(sortedArray, 22)).toEqual(-1);
        expect(binarySearch(sortedArray, 55)).toEqual(-1);
        expect(binarySearch(sortedArray, 19)).toEqual(-1);
    });

    test('search for a string not present', () => {
        const sortedArray = ['bear', 'cat', 'dog', 'elephant', 'lion', 'panda', 'tiger', 'zebra'];
        expect(binarySearch(sortedArray, 'mouse')).toEqual(-1);
        expect(binarySearch(sortedArray, 'horse')).toEqual(-1);
        expect(binarySearch(sortedArray, 'pig')).toEqual(-1);
        expect(binarySearch(sortedArray, 'cow')).toEqual(-1);
    });
});
