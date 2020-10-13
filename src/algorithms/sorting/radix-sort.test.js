import radixSort, { getDigit, digitCount, mostDigits } from './radix-sort';

describe('Radix Sort', () => {
    test('the digit in a number at the given place value', () => {
        expect(getDigit(29134, 0)).toEqual(4);
        expect(getDigit(29134, 1)).toEqual(3);
        expect(getDigit(29134, 2)).toEqual(1);
        expect(getDigit(29134, 3)).toEqual(9);
        expect(getDigit(29134, 4)).toEqual(2);
        expect(getDigit(29134, 5)).toEqual(0);
        expect(getDigit(29134, 6)).toEqual(0);
    });

    test('the number of digits in a given number', () => {
        expect(digitCount(0)).toEqual(1);
        expect(digitCount(4)).toEqual(1);
        expect(digitCount(23)).toEqual(2);
        expect(digitCount(876)).toEqual(3);
        expect(digitCount(3467)).toEqual(4);
        expect(digitCount(47466)).toEqual(5);
        expect(digitCount(654454)).toEqual(6);
        expect(digitCount(8700999)).toEqual(7);
        expect(digitCount(11113111)).toEqual(8);
        expect(digitCount(564756435)).toEqual(9);
        expect(digitCount(1000000000)).toEqual(10);
    });

    test('the number of digits of the largest number in an array of numbers', () => {
        expect(mostDigits([2452, 5634, 356, 3, 65, 345345])).toEqual(6);
        expect(mostDigits([52, 4, 35, 3, 65, 45])).toEqual(2);
        expect(mostDigits([2, 5, 1, 3, 4, 7])).toEqual(1);
        expect(mostDigits([2452, 5634, 356, 3, 65, 345])).toEqual(4);
        expect(mostDigits([52, 634, 356, 3, 65, 345])).toEqual(3);
        expect(mostDigits([242, 534, 356, 34335, 65, 345])).toEqual(5);
    });

    test('sort array of numbers', () => {
        const unsortedArray = [343, 5, 4356, 36, 887, 92, 1];
        const expectedResult = [1, 5, 36, 92, 343, 887, 4356];
        const result = radixSort(unsortedArray);
        expect(result).toEqual(expectedResult);
        expect(result).not.toBe(expectedResult);
    });
});