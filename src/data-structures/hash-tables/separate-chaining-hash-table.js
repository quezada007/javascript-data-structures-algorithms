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
}

export default HashTable;