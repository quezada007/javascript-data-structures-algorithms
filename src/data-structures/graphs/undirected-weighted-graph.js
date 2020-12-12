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

    /**
     * Add an edge connecting 2 vertices.
     * @param {string} vertex1 - The first vertex.
     * @param {string} vertex2 - The second vertex.
     * @param {number} weight - The weight of the edge.
     */
    addEdge(vertex1, vertex2, weight) { // O(1)
        // Make sure the vertices are in the graph
        if (this.adjacencyList[vertex1] && !this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
            this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
        }
    }
}

export default Graph;