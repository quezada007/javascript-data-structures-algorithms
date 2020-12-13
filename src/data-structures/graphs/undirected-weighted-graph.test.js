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

    test('adding an edge between vertices', () => {
        const g = new Graph();
        g.addVertex('A');
        g.addVertex('B');
        g.addEdge('A', 'B', 6);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }],
            B: [{ vertex: 'A', weight: 6 }]
        });
        g.addVertex('D');
        g.addEdge('A', 'D', 1);
        g.addEdge('B', 'D', 2);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }]
        });
        g.addVertex('E');
        g.addEdge('E', 'B', 2);
        g.addEdge('E', 'D', 1);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }]
        });
        g.addVertex('C');
        g.addEdge('C', 'B', 5);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
        g.addEdge('C', 'F', 5);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
        g.addEdge('X', 'Y', 5);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
    });

    test('removing an edge between vertices', () => {
        const g = new Graph();
        g.addVertex('A');
        g.addVertex('B');
        g.addEdge('A', 'B', 6);
        g.addVertex('D');
        g.addEdge('A', 'D', 1);
        g.addEdge('B', 'D', 2);
        g.addVertex('E');
        g.addEdge('E', 'B', 2);
        g.addEdge('E', 'D', 1);
        g.addVertex('C');
        g.addEdge('C', 'B', 5);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
        g.removeEdge('B', 'D');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
        g.removeEdge('B', 'C');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'E', weight: 2 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: []
        });
        g.removeEdge('A', 'B');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'D', weight: 1 }],
            B: [{ vertex: 'E', weight: 2 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: []
        });
        g.removeEdge('X', 'Y');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'D', weight: 1 }],
            B: [{ vertex: 'E', weight: 2 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: []
        });
    });

    test('removing a vertex from the graph', () => {
        const g = new Graph();
        g.addVertex('A');
        g.addVertex('B');
        g.addEdge('A', 'B', 6);
        g.addVertex('D');
        g.addEdge('A', 'D', 1);
        g.addEdge('B', 'D', 2);
        g.addVertex('E');
        g.addEdge('E', 'B', 2);
        g.addEdge('E', 'D', 1);
        g.addVertex('C');
        g.addEdge('C', 'B', 5);
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
        g.removeVertex('X');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'B', weight: 6 }, { vertex: 'D', weight: 1 }],
            B: [{ vertex: 'A', weight: 6 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 2 }, { vertex: 'C', weight: 5 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'B', weight: 2 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'B', weight: 2 }, { vertex: 'D', weight: 1 }],
            C: [{ vertex: 'B', weight: 5 }]
        });
        g.removeVertex('B');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'D', weight: 1 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'D', weight: 1 }],
            C: []
        });
        g.removeVertex('C');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'D', weight: 1 }],
            D: [{ vertex: 'A', weight: 1 }, { vertex: 'E', weight: 1 }],
            E: [{ vertex: 'D', weight: 1 }]
        });
        g.removeVertex('E');
        expect(g.adjacencyList).toMatchObject({
            A: [{ vertex: 'D', weight: 1 }],
            D: [{ vertex: 'A', weight: 1 }]
        });
    });
});