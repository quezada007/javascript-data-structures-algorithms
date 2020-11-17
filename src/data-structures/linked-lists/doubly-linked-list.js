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

    /**
     * Add a new node at the beginning of the linked list.
     * @param {string|number} data - The data for the node.
     */
    insertFirst(data) { // O(1)
        const newNode = new Node(data);
        // Check to see if the list is empty
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
    }

    /**
     * Add a new node at the end of the linked list.
     * @param {string|number} data - The data for the node.
     */
    insertLast(data) { // O(n)
        const newNode = new Node(data);
        // Check to see if the list is empty
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        this.length += 1;
    }

    /**
     * Insert a node at a specific position in the list.
     * @param {string|number} data - The data for the node.
     * @param {number} position - The position (index) of the list to insert the new node.
     * @throws Will throw an error if the position is invalid.
     */
    insert(data, position) { // O(n)
        // Check for invalid position values
        if (!Number.isInteger(position) || position < 1 || position > this.length + 1) {
            throw new Error(`The position needs to be an integer greater than 0 and less than ${this.length + 2}`);
        }
        if (position === 1) {
            // If position is 1 then insert at the head
            this.insertFirst(data);
        } else if (position === this.length + 1) {
            // If position is 1 more than the list length, then insert at the tail
            this.insertLast(data);
        } else {
            // Insert at the middle
            let index = 1;
            let current = this.head;
            const newNode = new Node(data);
            while (index <= position && current.next !== null) {
                if (index === position - 1) {
                    newNode.next = current.next;
                    current.next.prev = newNode;
                    current.next = newNode;
                    newNode.prev = current;
                }
                index += 1;
                current = current.next;
            }
            this.length += 1;
        }
    }
}

export default DoublyLinkedList;