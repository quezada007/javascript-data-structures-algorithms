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
 * Class representing a Stack using a linked list.
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
}

export default QueueLinkedList;