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

    /**
     * Add data to the queue based on priority.
     * @param {string|number} data - The data for the queue.
     * @param {number} priority - The priority number.
     */
    enqueue(data, priority) { // O(n)
        const newNode = new Node(data, priority);
        if (this.head === null || priority < this.head.priority) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null && current.next.priority <= priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
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
}

export default PriorityQueueLinkedList;