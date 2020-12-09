import Graph from './undirected-unweighted-graph';

describe('Undirected Unweighted Graph', () => {
    test('adding a vertex to the graph', () => {
        const g = new Graph();
        expect(g.adjacencyList).toMatchObject({});
        g.addVertex('Los Angeles');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': []
        });
        g.addVertex('Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': [],
            Dallas: []
        });
        g.addVertex('New York');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': [],
            Dallas: [],
            'New York': []
        });
        g.addVertex('Los Angeles');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': [],
            Dallas: [],
            'New York': []
        });
    });

    test('adding an edge between vertices', () => {
        const g = new Graph();
        g.addVertex('Los Angeles');
        g.addVertex('Dallas');
        g.addEdge('Los Angeles', 'Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas'],
            Dallas: ['Los Angeles']
        });
        g.addEdge('Los Angeles', 'Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas'],
            Dallas: ['Los Angeles']
        });
        g.addVertex('New York');
        g.addEdge('Dallas', 'New York');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas'],
            Dallas: ['Los Angeles', 'New York'],
            'New York': ['Dallas']
        });
        g.addVertex('Chicago');
        g.addEdge('Los Angeles', 'Chicago');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles']
        });
        g.addEdge('Dallas', 'Chicago');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York', 'Chicago'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.addEdge('Dallas', 'Miami');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York', 'Chicago'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.addEdge('Phoenix', 'Seattle');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York', 'Chicago'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles', 'Dallas']
        });
    });
});