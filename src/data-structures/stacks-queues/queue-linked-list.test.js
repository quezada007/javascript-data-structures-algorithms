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
});