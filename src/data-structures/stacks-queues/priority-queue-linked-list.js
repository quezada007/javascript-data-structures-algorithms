/* eslint-disable max-classes-per-file */
/**
 * Class representing a node for the Priority Queue Linked List.
 */
class Node {
    /**
     * Create a node.
     * @param {string|number} data - The data for the node.
     * @param {number} priority - The priority number.
     */
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

/**
 * Class representing a Priority Queue using a linked list.
 */
class PriorityQueueLinkedList {
    /**
     * Create a Priority Queue Linked List.
     */
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * Check the queue to see if it's empty.
     * @returns {boolean} - true if the list is empty or false if not.
     */
    isEmpty() { // O(1)
        return this.head === null;
    }
}

export default PriorityQueueLinkedList;