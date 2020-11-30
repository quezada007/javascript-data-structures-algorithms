import MaxBinaryHeap from './max-binary-heap';

describe('Max Binary Heap', () => {
    test('inserting data to the heap', () => {
        const heap = new MaxBinaryHeap();
        expect(heap.heap).toHaveLength(0);
        heap.insert(10);
        expect(heap.heap).toEqual([10]);
        heap.insert(13);
        expect(heap.heap).toEqual([13, 10]);
        heap.insert(11);
        expect(heap.heap).toEqual([13, 10, 11]);
        heap.insert(1);
        expect(heap.heap).toEqual([13, 10, 11, 1]);
        heap.insert(12);
        expect(heap.heap).toEqual([13, 12, 11, 1, 10]);
        heap.insert(25);
        expect(heap.heap).toEqual([25, 12, 13, 1, 10, 11]);
        heap.insert(25);
        expect(heap.heap).toEqual([25, 12, 25, 1, 10, 11, 13]);
    });
});