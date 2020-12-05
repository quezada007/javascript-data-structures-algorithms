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
}

export default HashTable;