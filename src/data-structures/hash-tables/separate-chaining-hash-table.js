/**
 * Class representing a Separate Chaining Hash Table.
 */
class HashTable {
    /**
     * Create a Separate Chaining Hash Table.
     */
    constructor(size = 53) {
        this.keyMap = new Array(size);
        this.hashTableSize = 0;
    }

    /**
     * Convert a key into a hash number.
     * @param {string} key - The key for the hash table.
     * @returns {number} - The hash number.
     */
    hash(key) { // O(1)
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    /**
     * The size of the Hash Table.
     * @returns {number} - The size of the Hash Table.
     */
    get size() { // O(1)
        return this.hashTableSize;
    }

    /**
     * Add data to the Hash Table using a key.
     * @param {string} key - The key used to store the data in the Hash Table.
     * @param {string|number} data - The data to store.
     */
    set(key, data) { // O(1)
        // Get the hash of the key
        const index = this.hash(key);
        // Check to see if there is data in that index
        if (!this.keyMap[index]) {
            // If there's no data, then add an empty array
            this.keyMap[index] = [];
        }
        // Loop through the array to find the data
        for (let i = 0; i < this.keyMap[index].length; i++) {
            // Look for the key in the array
            if (this.keyMap[index][i][0] === key) {
                // If the key is found, then update the data
                this.keyMap[index][i][1] = data;
                // Exit the function
                return;
            }
        }
        // Push the data to the array in that index
        this.keyMap[index].push([key, data]);
        // Increment the size of the Hash Table
        this.hashTableSize += 1;
    }

    /**
     * Get the data for a given key.
     * @param {string} key - The key used to retrieve the data.
     * @returns {string} - The data for a given key or null if not present.
     */
    get(key) { // O(1)
        // Get the hash of the key
        const index = this.hash(key);
        // Check to see if there's data in that index
        if (this.keyMap[index]) {
            // Loop through the array to find the data
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // Look for the key in the array
                if (this.keyMap[index][i][0] === key) {
                    // If the key is found, then return the data
                    return this.keyMap[index][i][1];
                }
            }
        }
        // If the key is not found, return null
        return null;
    }

    /**
     * Check to see if a key is present in the Hash Table.
     * @param {string} key - The key to look for.
     * @returns {boolean} - true if key is present and false if it's not.
     */
    has(key) { // O(1)
        // Get the hash of the key
        const index = this.hash(key);
        // Check to see if there's data in that index
        if (this.keyMap[index]) {
            // Loop through the array to find the data
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // Look for the key in the array
                if (this.keyMap[index][i][0] === key) {
                    // If the key is found, then return true
                    return true;
                }
            }
        }
        // If the key is not found, return false
        return false;
    }

    /**
     * Delete the data with the given key from the Hash Table.
     * @param {string} key - The key to look for.
     * @returns {boolean} - true if the deleting was successfully or false if not.
     */
    delete(key) { // O(1)
        // Get the hash of the key
        const index = this.hash(key);
        // Check to see if there's data in that index
        if (this.keyMap[index]) {
            // Loop through the array to find the data
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // Look for the key in the array
                if (this.keyMap[index][i][0] === key) {
                    // Delete the data for the array
                    this.keyMap[index].splice(i, 1);
                    // Decrement the size of the Hash Table
                    this.hashTableSize -= 1;
                    // If the key is found, then return true
                    return true;
                }
            }
        }
        // If the key is not found, return false
        return false;
    }

    /**
     * Get all the keys of the Hash Table.
     * @returns {Array} - An array containing all the keys.
     */
    keys() { // O(n)
        // Create an array to store all the keys
        const keysArray = [];
        // Loop through the Hash Table
        for (let i = 0; i < this.keyMap.length; i++) {
            // Only look at indexes with data in them
            if (this.keyMap[i]) {
                // Loop through the array at index "i"
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // Add the keys into the keysArray
                    keysArray.push(this.keyMap[i][j][0]);
                }
            }
        }
        // Return the array containing the keys
        return keysArray;
    }

    /**
     * Get all the values of the Hash Table.
     * @returns {Array} - An array containing all the unique values.
     */
    values() { // O(n)
        // Create an array to store all the values
        const valuesArray = [];
        // Loop through the Hash Table
        for (let i = 0; i < this.keyMap.length; i++) {
            // Only look at indexes with data in them
            if (this.keyMap[i]) {
                // Loop through the array at index "i"
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // Collect only unique values
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        // Add the values into the valuesArray
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        // Return the array containing the values
        return valuesArray;
    }

    /**
     * Get all the keys and values of the Hash Table.
     * @returns {Array} - An array containing all the keys and values.
     */
    entries() { // O(n)
        // Create an array to store all the key value pairs
        const entriesArray = [];
        // Loop through the Hash Table
        for (let i = 0; i < this.keyMap.length; i++) {
            // Only look at indexes with data in them
            if (this.keyMap[i]) {
                // Loop through the array at index "i"
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // Add the keys and values
                    entriesArray.push(this.keyMap[i][j]);
                }
            }
        }
        // Return the array containing the keys
        return entriesArray;
    }
}

export default HashTable;