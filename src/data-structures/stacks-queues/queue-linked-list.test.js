import QueueLinkedList from './queue-linked-list';

describe('Queue Linked List', () => {
    test('adding data to a queue using the enqueue method', () => {
        const queue = new QueueLinkedList();
        expect(queue.head).toBeNull();
        expect(queue.tail).toBeNull();
        queue.enqueue('a');
        expect(queue.head.data).toEqual('a');
        expect(queue.tail.data).toEqual('a');
        queue.enqueue('b');
        expect(queue.head.data).toEqual('a');
        expect(queue.tail.data).toEqual('b');
        queue.enqueue('c');
        expect(queue.head.data).toEqual('a');
        expect(queue.head.next.data).toEqual('b');
        expect(queue.tail.data).toEqual('c');
    });

    test('removing from the queue using the dequeue method', () => {
        const queue = new QueueLinkedList();
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
        const queue = new QueueLinkedList();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('a');
        expect(queue.isEmpty()).toBe(false);
    });
});