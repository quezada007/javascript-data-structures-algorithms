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

    test('removing from the queue using the dequeue method', () => {
        const queue = new PriorityQueueArray();
        expect(queue.queue).toHaveLength(0);
        expect(() => { queue.dequeue(); }).toThrow();
        queue.enqueue('a', 2);
        expect(queue.dequeue()).toEqual('a');
        expect(queue.queue).toEqual([]);
        queue.enqueue('a', 2);
        queue.enqueue('b', 2);
        queue.enqueue('c', 3);
        queue.enqueue('d', 1);
        queue.enqueue('e', 1);
        expect(queue.dequeue()).toEqual('d');
        expect(queue.dequeue()).toEqual('e');
        expect(queue.dequeue()).toEqual('a');
        expect(queue.dequeue()).toEqual('b');
        expect(queue.dequeue()).toEqual('c');
    });

    test('queue is empty', () => {
        const queue = new PriorityQueueArray();
        expect(queue.queue).toHaveLength(0);
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('a', 2);
        expect(queue.isEmpty()).toBe(false);
    });

    test('peek method of the queue', () => {
        const queue = new PriorityQueueArray();
        expect(queue.queue).toHaveLength(0);
        expect(() => { queue.peek(); }).toThrow();
        queue.enqueue('a', 2);
        expect(queue.peek()).toEqual('a');
        queue.enqueue('b', 2);
        queue.dequeue();
        expect(queue.peek()).toEqual('b');
        queue.enqueue('c', 1);
        queue.enqueue('d', 4);
        queue.enqueue('e', 5);
        expect(queue.peek()).toEqual('c');
    });
});