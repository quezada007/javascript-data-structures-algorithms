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
}

export default QueueArray;