/* eslint-disable no-constant-condition */
/**
 * Class representing a Min Binary Heap.
 */
class MinBinaryHeap {
    /**
     * Create a Min Binary Heap.
     */
    constructor() {
        this.heap = [];
    }

    /**
     * Move the last element of the Heap to its correct position.
     */
    siftUp() { // O(log n)
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element >= parent) {
                break;
            }
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    /**
     * Insert data to the heap.
     * @param {string|number} data - The data to insert.
     */
    insert(data) { // O(log n)
        this.heap.push(data);
        this.siftUp();
    }
}

export default MinBinaryHeap;