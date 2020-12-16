import PriorityQueueLinkedList from './priority-queue-linked-list';

describe('Priority Queue Linked List', () => {
    test('adding data to a queue using the enqueue method', () => {
        const queue = new PriorityQueueLinkedList();
        expect(queue.head).toBeNull();
        queue.enqueue('a', 2);
        expect(queue.head.data).toEqual('a');
        queue.enqueue('b', 2);
        expect(queue.head.data).toEqual('a');
        expect(queue.head.next.data).toEqual('b');
        queue.enqueue('c', 3);
        expect(queue.head.data).toEqual('a');
        expect(queue.head.next.data).toEqual('b');
        expect(queue.head.next.next.data).toEqual('c');
        queue.enqueue('d', 1);
        expect(queue.head.data).toEqual('d');
        expect(queue.head.next.data).toEqual('a');
        expect(queue.head.next.next.data).toEqual('b');
        expect(queue.head.next.next.next.data).toEqual('c');
        queue.enqueue('e', 1);
        expect(queue.head.data).toEqual('d');
        expect(queue.head.next.data).toEqual('e');
        expect(queue.head.next.next.data).toEqual('a');
        expect(queue.head.next.next.next.data).toEqual('b');
        expect(queue.head.next.next.next.next.data).toEqual('c');
    });

    test('removing from the queue using the dequeue method', () => {
        const queue = new PriorityQueueLinkedList();
        expect(() => { queue.dequeue(); }).toThrow();
        queue.enqueue('a', 2);
        expect(queue.dequeue()).toEqual('a');
        expect(queue.head).toBeNull();
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
});