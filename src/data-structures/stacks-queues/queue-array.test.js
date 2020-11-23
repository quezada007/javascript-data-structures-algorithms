import QueueArray from './queue-array';

describe('Queue Array', () => {
    test('adding data to a queue using the enqueue method', () => {
        const queue = new QueueArray();
        expect(queue.queue).toHaveLength(0);
        queue.enqueue('a');
        expect(queue.queue[0]).toEqual('a');
        queue.enqueue('b');
        expect(queue.queue[0]).toEqual('a');
        expect(queue.queue[1]).toEqual('b');
        queue.enqueue('c');
        expect(queue.queue[0]).toEqual('a');
        expect(queue.queue[1]).toEqual('b');
        expect(queue.queue[2]).toEqual('c');
    });
});