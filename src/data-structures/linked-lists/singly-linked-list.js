/* eslint-disable max-classes-per-file */
export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
}