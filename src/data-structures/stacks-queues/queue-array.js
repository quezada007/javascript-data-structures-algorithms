/**
 * Class representing a Queue using an array.
 */
class QueueArray {
    /**
     * Create a Queue Array.
     */
    constructor() {
        this.queue = [];
    }

    /**
     * Check the queue to see if it's empty.
     * @returns {boolean} - true if the list is empty or false if not.
     */
    isEmpty() { // O(1)
        return this.queue.length === 0;
    }

    /**
     * Add data to the end of the queue.
     * @param {string|number} data - The data for the queue.
     */
    enqueue(data) { // O(1)
        this.queue.push(data);
    }

    /**
     * Remove data from the front of the queue.
     * @returns {string|number} - The data removed from the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    dequeue() { // O(n)
        if (this.isEmpty()) {
            throw new Error('The Queue is empty');
        }
        return this.queue.shift();
    }
}

export default QueueArray;