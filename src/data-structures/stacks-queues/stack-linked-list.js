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

    /**
     * Remove data from the top of the stack.
     * @returns {string|number} - The data removed from the top of the stack.
     * @throws Will throw an error if the stack is empty.
     */
    pop() { // O(1)
        if (this.isEmpty()) {
            throw new Error('The Stack is empty');
        }
        const current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length -= 1;
        return current.data;
    }

    /**
     * Return the data from the top of the stack without removing it.
     * @returns {string|number} - The data from the top of the stack.
     * @throws Will throw an error if the stack is empty.
     */
    peek() { // O(1)
        if (this.isEmpty()) {
            throw new Error('The Stack is empty');
        }
        return this.head.data;
    }
}

export default StackLinkedList;