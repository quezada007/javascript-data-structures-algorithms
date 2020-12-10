/**
 * Class representing an Undirected Unweighted Graph.
 */
class Graph {
    /**
     * Create an Undirected Unweighted Graph.
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
     */
    addEdge(vertex1, vertex2) { // O(1)
        // Make sure the vertices are in the graph
        if (this.adjacencyList[vertex1] && !this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    /**
     * Remove an edge connecting 2 vertices.
     * @param {string} vertex1 - The first vertex.
     * @param {string} vertex2 - The second vertex.
     */
    removeEdge(vertex1, vertex2) { // O(E)
        // Check to make sure that the vertices have a connection
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2] && this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
        }
    }

    /**
     * Remove a vertex from the graph.
     * @param {string} vertex - The vertex to remove from graph.
     */
    removeVertex(vertex) { // O(V)
        // Check to make sure the vertex is in the graph
        if (this.adjacencyList[vertex]) {
            // Remove all edges from the vertex
            while (this.adjacencyList[vertex].length > 0) {
                // Get the first vertex on the list
                const adjacentVertex = this.adjacencyList[vertex][0];
                // Remove the connection to other vertices
                this.removeEdge(vertex, adjacentVertex);
            }
            // Delete the vertex from the graph
            delete this.adjacencyList[vertex];
        }
    }
}

export default Graph;