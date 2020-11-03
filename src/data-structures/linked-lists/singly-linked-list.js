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
     * Add a new node at the beginning of the linked list.
     * @param {string|number} data - The data for the node.
     */
    insertFirst(data) { // O(1)
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
    }

    /**
     * Add a new node at the end of the linked list.
     * @param {string|number} data - The data for the node.
     */
    insertLast(data) { // O(n)
        // Check to see if the list is empty
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.length += 1;
    }
}