/**
 * Class representing a Stack using an array.
 */
class StackArray {
    /**
     * Create a Stack Array.
     */
    constructor() {
        this.stack = [];
    }

    /**
     * Check the stack to see if it's empty.
     * @returns {boolean} - true if the list is empty or false if not.
     */
    isEmpty() { // O(1)
        return this.stack.length === 0;
    }

    /**
     * Add data to the top of the stack.
     * @param {string|number} data - The data for the stack.
     */
    push(data) { // O(1)
        this.stack.push(data);
    }
}

export default StackArray;