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
}