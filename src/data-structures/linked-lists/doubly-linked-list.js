/* eslint-disable max-classes-per-file */
/**
 * Class representing a node for the Doubly Linked List.
 */
export class Node {
    /**
     * Create a node.
     * @param {string|number} data - The data for the node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
 * Class representing a Doubly Linked List.
 */
class DoublyLinkedList {
    /**
     * Create a Doubly Linked List.
     */
    constructor() {
        this.head = null;
        this.length = 0;
    }
}

export default DoublyLinkedList;