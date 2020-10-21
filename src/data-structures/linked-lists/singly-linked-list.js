/* eslint-disable max-classes-per-file */
/**
 * Class representing a node for the Singly Linked List.
 */
export class Node {
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
 * Class representing a Singly Linked List.
 */
export default class SinglyLinkedList {
    /**
     * Create a Singly Linked List.
     */
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * Add a new node to the beginning of the linked list.
     * @param {string|number} data - The data for the node.
     */
    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
    }
}