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

    /**
     * Check the stack to see if it's empty.
     * @returns {boolean} - true if the list is empty or false if not.
     */
    isEmpty() { // O(1)
        return this.head === null;
    }

    /**
     * Add data to the top of the stack.
     * @param {string|number} data - The data for the stack.
     */
    push(data) { // O(1)
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
    }
}

export default StackLinkedList;