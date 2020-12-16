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

    test('queue is empty', () => {
        const queue = new PriorityQueueLinkedList();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('a');
        expect(queue.isEmpty()).toBe(false);
    });

    test('peek method of the queue', () => {
        const queue = new PriorityQueueLinkedList();
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
        const queue = new PriorityQueueLinkedList();
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