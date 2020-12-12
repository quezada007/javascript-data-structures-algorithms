import Graph from './undirected-weighted-graph';

describe('Undirected Weighted Graph', () => {
    test('adding a vertex to the graph', () => {
        const g = new Graph();
        expect(g.adjacencyList).toMatchObject({});
        g.addVertex('A');
        expect(g.adjacencyList).toMatchObject({
            A: []
        });
        g.addVertex('B');
        expect(g.adjacencyList).toMatchObject({
            A: [],
            B: []
        });
        g.addVertex('C');
        expect(g.adjacencyList).toMatchObject({
            A: [],
            B: [],
            C: []
        });
        g.addVertex('D');
        expect(g.adjacencyList).toMatchObject({
            A: [],
            B: [],
            C: [],
            D: []
        });
        g.addVertex('E');
        expect(g.adjacencyList).toMatchObject({
            A: [],
            B: [],
            C: [],
            D: [],
            E: []
        });
        g.addVertex('E');
        expect(g.adjacencyList).toMatchObject({
            A: [],
            B: [],
            C: [],
            D: [],
            E: []
        });
    });
});