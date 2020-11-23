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

    test('removing from the queue using the dequeue method', () => {
        const queue = new QueueArray();
        expect(queue.queue).toHaveLength(0);
        expect(() => { queue.dequeue(); }).toThrow();
        queue.enqueue('a');
        expect(queue.dequeue()).toEqual('a');
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.enqueue('d');
        expect(queue.dequeue()).toEqual('a');
        expect(queue.dequeue()).toEqual('b');
        expect(queue.dequeue()).toEqual('c');
        expect(queue.dequeue()).toEqual('d');
    });

    test('queue is empty', () => {
        const queue = new QueueArray();
        expect(queue.queue).toHaveLength(0);
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('a');
        expect(queue.isEmpty()).toBe(false);
    });

    test('peek method of the queue', () => {
        const queue = new QueueArray();
        expect(queue.queue).toHaveLength(0);
        expect(() => { queue.peek(); }).toThrow();
        queue.enqueue('a');
        expect(queue.peek()).toEqual('a');
        queue.enqueue('b');
        queue.dequeue();
        expect(queue.peek()).toEqual('b');
        queue.enqueue('c');
        queue.enqueue('d');
        queue.enqueue('e');
        expect(queue.peek()).toEqual('b');
    });

    test('get the length of the queue', () => {
        const queue = new QueueArray();
        expect(queue.getLength()).toEqual(0);
        queue.enqueue('a');
        expect(queue.getLength()).toEqual(1);
        queue.enqueue('b');
        expect(queue.getLength()).toEqual(2);
        queue.enqueue('c', 2);
        expect(queue.getLength()).toEqual(3);
        queue.enqueue('d', 4);
        expect(queue.getLength()).toEqual(4);
        queue.dequeue();
        expect(queue.getLength()).toEqual(3);
        queue.dequeue();
        expect(queue.getLength()).toEqual(2);
        queue.dequeue('c');
        expect(queue.getLength()).toEqual(1);
        queue.dequeue();
        expect(queue.getLength()).toEqual(0);
    });
});