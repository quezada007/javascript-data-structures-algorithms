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
});