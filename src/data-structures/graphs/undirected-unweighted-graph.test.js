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

    test('removing an edge between vertices', () => {
        const g = new Graph();
        g.addVertex('Los Angeles');
        g.addVertex('Dallas');
        g.addEdge('Los Angeles', 'Dallas');
        g.addVertex('New York');
        g.addEdge('Dallas', 'New York');
        g.addVertex('Chicago');
        g.addEdge('Los Angeles', 'Chicago');
        g.addEdge('Dallas', 'Chicago');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York', 'Chicago'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.removeEdge('New York', 'Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'Chicago'],
            'New York': [],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.removeEdge('Miami', 'Seattle');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'Chicago'],
            'New York': [],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.removeEdge('Chicago', 'New York');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'Chicago'],
            'New York': [],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.removeEdge('Chicago', 'Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles'],
            'New York': [],
            Chicago: ['Los Angeles']
        });
        g.removeEdge('Los Angeles', 'Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Chicago'],
            Dallas: [],
            'New York': [],
            Chicago: ['Los Angeles']
        });
    });

    test('removing a vertex from the graph', () => {
        const g = new Graph();
        g.addVertex('Los Angeles');
        g.addVertex('Dallas');
        g.addEdge('Los Angeles', 'Dallas');
        g.addVertex('New York');
        g.addEdge('Dallas', 'New York');
        g.addVertex('Chicago');
        g.addEdge('Los Angeles', 'Chicago');
        g.addEdge('Dallas', 'Chicago');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York', 'Chicago'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.removeVertex('Miami');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Dallas', 'Chicago'],
            Dallas: ['Los Angeles', 'New York', 'Chicago'],
            'New York': ['Dallas'],
            Chicago: ['Los Angeles', 'Dallas']
        });
        g.removeVertex('Dallas');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Chicago'],
            'New York': [],
            Chicago: ['Los Angeles']
        });
        g.removeVertex('New York');
        expect(g.adjacencyList).toMatchObject({
            'Los Angeles': ['Chicago'],
            Chicago: ['Los Angeles']
        });
        g.removeVertex('Los Angeles');
        expect(g.adjacencyList).toMatchObject({
            Chicago: []
        });
        g.removeVertex('Chicago');
        expect(g.adjacencyList).toMatchObject({});
    });
});