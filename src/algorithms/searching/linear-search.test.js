import linearSearch from './linear-search';

describe('Linear Search', () => {
    test('search for a number', () => {
        const arr = [3, 5, 4, 6, 7, 2, 1];
        expect(linearSearch(arr, 4)).toEqual(2);
        expect(linearSearch(arr, 3)).toEqual(0);
        expect(linearSearch(arr, 5)).toEqual(1);
        expect(linearSearch(arr, 1)).toEqual(6);
    });

    test('search for a string', () => {
        const arr = ['dog', 'cat', 'zebra', 'panda', 'bear', 'elephant', 'tiger', 'lion'];
        expect(linearSearch(arr, 'zebra')).toEqual(2);
        expect(linearSearch(arr, 'dog')).toEqual(0);
        expect(linearSearch(arr, 'cat')).toEqual(1);
        expect(linearSearch(arr, 'tiger')).toEqual(6);
    });

    test('search for a number not present', () => {
        const arr = [3, 5, 4, 6, 7, 2, 1];
        expect(linearSearch(arr, 34)).toEqual(-1);
        expect(linearSearch(arr, 22)).toEqual(-1);
        expect(linearSearch(arr, 55)).toEqual(-1);
        expect(linearSearch(arr, 19)).toEqual(-1);
    });

    test('search for a string not present', () => {
        const arr = ['dog', 'cat', 'zebra', 'panda', 'bear', 'elephant', 'tiger', 'lion'];
        expect(linearSearch(arr, 'mouse')).toEqual(-1);
        expect(linearSearch(arr, 'horse')).toEqual(-1);
        expect(linearSearch(arr, 'pig')).toEqual(-1);
        expect(linearSearch(arr, 'cow')).toEqual(-1);
    });
});
