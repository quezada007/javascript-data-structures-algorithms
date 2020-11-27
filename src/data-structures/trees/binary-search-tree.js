/* eslint-disable no-constant-condition */
/* eslint-disable max-classes-per-file */
/**
 * Class representing a node for the Binary Search Tree.
 */
class Node {
    /**
     * Create a node.
     * @param {string|number} data - The data for the node.
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * Class representing a Binary Search Tree.
 */
class BinarySearchTree {
    /**
     * Create a Binary Search Tree.
     */
    constructor() {
        this.root = null;
    }

    /**
     * Insert a new node to the tree.
     * @param {string|number} data - The data for the node.
     */
    insert(data) { // O(log n)
        const newNode = new Node(data);
        // If the treen is empty, insert at the root
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        // The tree is not empty
        while (true) {
            // Check for duplicate Node values
            if (data === current.data) {
                break;
            }
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    /**
     * Search for a given node.
     * @param {string|number} data - The data to search.
     * @returns {boolean} - true if the node was found or false if not.
     */
    search(data) { // O(log n)
        let current = this.root;
        while (current !== null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    /**
     * Delete a node with the given data.
     * @param {string|number} data - The data of the node to delete.
     */
    delete(data) { // O(log n)
        let current = this.root;
        let parent = null;
        // Find the node to delete
        while (current !== null) {
            if (data === current.data) {
                break;
            }
            parent = current;
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        // The node was not found
        if (current === null) {
            return;
        }
        // 2 children
        // Find the in-order successor and its parent
        if (current.left !== null && current.right !== null) {
            let parentSuccessor = current;
            let successor = current.right;
            while (successor.left !== null) {
                parentSuccessor = successor;
                successor = successor.left;
            }
            current.data = successor.data;
            current = successor;
            parent = parentSuccessor;
        }
        // 1 child or no child
        let child = null;
        if (current.left !== null) {
            child = current.left;
        } else {
            child = current.right;
        }
        // Check to see if the root needs to get deleted
        if (parent === null) {
            this.root = child;
        } else if (current === parent.left) {
            parent.left = child;
        } else {
            parent.right = child;
        }
    }
}

export default BinarySearchTree;