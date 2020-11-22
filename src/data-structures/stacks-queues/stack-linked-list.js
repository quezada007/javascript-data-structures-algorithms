/* eslint-disable max-classes-per-file */
/**
 * Class representing a node for the Stack Linked List.
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
class StackLinkedList {
    /**
     * Create a Stack Linked List.
     */
    constructor() {
        this.head = null;
        this.length = 0;
    }
}

export default StackLinkedList;