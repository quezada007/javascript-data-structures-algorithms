/**
 * Class representing a Priority Queue using an array.
 */
class PriorityQueueArray {
    /**
     * Create a Priority Queue Array.
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
     * @param {number} priority - The priority number.
     */
    enqueue(data, priority) { // O(n)
        const element = { data, priority };
        let isAdded = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (priority < this.queue[i].priority) {
                this.queue.splice(i, 0, element);
                isAdded = true;
                break;
            }
        }
        if (!isAdded) {
            this.queue.push(element);
        }
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
        const element = this.queue.shift();
        return element.data;
    }
}

export default PriorityQueueArray;