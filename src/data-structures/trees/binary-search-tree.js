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
}

export default BinarySearchTree;