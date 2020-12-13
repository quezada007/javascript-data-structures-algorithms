/* eslint-disable max-classes-per-file */
/**
 * Class representing a node for the Queue Linked List.
 */
class Node {
    /**
     * Create a node.
     * @param {string|number} data - The data for the node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class representing a Queue using a linked list.
 */
class QueueLinkedList {
    /**
     * Create a Queue Linked List.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Check the queue to see if it's empty.
     * @returns {boolean} - true if the list is empty or false if not.
     */
    isEmpty() { // O(1)
        return this.head === null;
    }

    /**
     * Add data to the tail of the queue.
     * @param {string|number} data - The data for the queue.
     */
    enqueue(data) { // O(1)
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length += 1;
    }

    /**
     * Remove data from the front of the queue.
     * @returns {string|number} - The data removed from the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    dequeue() { // O(1)
        if (this.isEmpty()) {
            throw new Error('The Queue is empty');
        }
        const current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length -= 1;
        return current.data;
    }

    /**
     * Return the data from the front of the queue without removing it.
     * @returns {string|number} - The data from the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    peek() { // O(1)
        if (this.isEmpty()) {
            throw new Error('The Queue is empty');
        }
        return this.head.data;
    }

    /**
     * Get the length of the queue.
     * @returns {number} - The length of the queue.
     */
    getLength() { // O(1)
        return this.length;
    }
}

export default QueueLinkedList;