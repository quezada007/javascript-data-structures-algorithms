import MinBinaryHeap from './min-binary-heap';

describe('Min Binary Heap', () => {
    test('inserting data to the heap', () => {
        const heap = new MinBinaryHeap();
        expect(heap.heap).toHaveLength(0);
        heap.insert(13);
        expect(heap.heap).toEqual([13]);
        heap.insert(10);
        expect(heap.heap).toEqual([10, 13]);
        heap.insert(11);
        expect(heap.heap).toEqual([10, 13, 11]);
        heap.insert(5);
        expect(heap.heap).toEqual([5, 10, 11, 13]);
        heap.insert(12);
        expect(heap.heap).toEqual([5, 10, 11, 13, 12]);
        heap.insert(9);
        expect(heap.heap).toEqual([5, 10, 9, 13, 12, 11]);
        heap.insert(1);
        expect(heap.heap).toEqual([1, 10, 5, 13, 12, 11, 9]);
    });

    test('extracting the min value of the heap', () => {
        const heap = new MinBinaryHeap();
        expect(heap.heap).toHaveLength(0);
        heap.insert(13);
        heap.insert(10);
        heap.insert(11);
        heap.insert(5);
        heap.insert(12);
        heap.insert(9);
        heap.insert(1);
        expect(heap.heap).toEqual([1, 10, 5, 13, 12, 11, 9]);
        expect(heap.extractMin()).toEqual(1);
        expect(heap.heap).toEqual([5, 10, 9, 13, 12, 11]);
        expect(heap.extractMin()).toEqual(5);
        expect(heap.heap).toEqual([9, 10, 11, 13, 12]);
        expect(heap.extractMin()).toEqual(9);
        expect(heap.heap).toEqual([10, 12, 11, 13]);
        expect(heap.extractMin()).toEqual(10);
        expect(heap.heap).toEqual([11, 12, 13]);
        expect(heap.extractMin()).toEqual(11);
        expect(heap.heap).toEqual([12, 13]);
        expect(heap.extractMin()).toEqual(12);
        expect(heap.heap).toEqual([13]);
        expect(heap.extractMin()).toEqual(13);
        expect(heap.heap).toEqual([]);
        expect(() => { heap.extractMin(); }).toThrow();
    });
});