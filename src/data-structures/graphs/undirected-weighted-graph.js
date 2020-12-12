/**
 * Class representing an Undirected Weighted Graph.
 */
class Graph {
    /**
     * Create an Undirected Weighted Graph.
     */
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * Add a vertex to the graph.
     * @param {string} vertex - The vertex to add to the graph.
     */
    addVertex(vertex) { // O(1)
        // Check to make sure the vertex is not in the list
        if (!this.adjacencyList[vertex]) {
            // Add vertex as key with an empty array as the value
            this.adjacencyList[vertex] = [];
        }
    }
}

export default Graph;