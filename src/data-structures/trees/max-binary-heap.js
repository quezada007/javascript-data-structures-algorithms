/* eslint-disable no-constant-condition */
/**
 * Class representing a Max Binary Heap.
 */
class MaxBinaryHeap {
    /**
     * Create a Max Binary Heap.
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
            if (element <= parent) {
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

    /**
     * Move the root element of the Heap to its correct position.
     */
    siftDown() { // O(log n)
        let elementIndex = 0;
        const { length } = this.heap;
        const element = this.heap[0];
        while (true) {
            const leftChildIndex = 2 * elementIndex + 1;
            const rightChildIndex = 2 * elementIndex + 2;
            let leftChild;
            let rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (swapIndex === null || (swapIndex !== null && rightChild > leftChild)) {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) {
                break;
            }
            this.heap[elementIndex] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            elementIndex = swapIndex;
        }
    }

    /**
     * Extract the max value of the heap.
     * @throws Will throw an error if the heap is empty.
     */
    extractMax() { // O(log n)
        if (this.heap.length === 0) {
            throw new Error('The Heap is empty');
        }
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.siftDown();
        }
        return max;
    }
}

export default MaxBinaryHeap;