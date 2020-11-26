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
}

export default BinarySearchTree;