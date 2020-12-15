import PriorityQueueArray from './priority-queue-array';

describe('Priority Queue Array', () => {
    test('adding data to a queue using the enqueue method', () => {
        const queue = new PriorityQueueArray();
        expect(queue.queue).toHaveLength(0);
        queue.enqueue('a', 2);
        expect(queue.queue[0].data).toEqual('a');
        queue.enqueue('b', 2);
        expect(queue.queue[0].data).toEqual('a');
        expect(queue.queue[1].data).toEqual('b');
        queue.enqueue('c', 3);
        expect(queue.queue[0].data).toEqual('a');
        expect(queue.queue[1].data).toEqual('b');
        expect(queue.queue[2].data).toEqual('c');
        queue.enqueue('d', 1);
        expect(queue.queue[0].data).toEqual('d');
        expect(queue.queue[1].data).toEqual('a');
        expect(queue.queue[2].data).toEqual('b');
        expect(queue.queue[3].data).toEqual('c');
        queue.enqueue('e', 1);
        expect(queue.queue[0].data).toEqual('d');
        expect(queue.queue[1].data).toEqual('e');
        expect(queue.queue[2].data).toEqual('a');
        expect(queue.queue[3].data).toEqual('b');
        expect(queue.queue[4].data).toEqual('c');
    });
});