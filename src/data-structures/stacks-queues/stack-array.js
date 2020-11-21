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

    /**
     * Remove data from the top of the stack.
     * @returns {string|number} - The data removed from the top of the stack.
     * @throws Will throw an error if the stack is empty.
     */
    pop() { // O(1)
        if (this.isEmpty()) {
            throw new Error('The Stack is empty');
        }
        return this.stack.pop();
    }
}

export default StackArray;