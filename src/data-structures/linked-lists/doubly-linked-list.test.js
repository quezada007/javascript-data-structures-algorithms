import DoublyLinkedList from './doubly-linked-list';

describe('Doubly Linked List', () => {
    test('inserting a node at the beginning of the list using the insertFirst method', () => {
        const list = new DoublyLinkedList();
        expect(list.head).toEqual(null);
        list.insertFirst('a');
        expect(list.head.data).toEqual('a');
        list.insertFirst('b');
        expect(list.head.data).toEqual('b');
        expect(list.head.next.data).toEqual('a');
        expect(list.head.next.prev.data).toEqual('b');
        list.insertFirst('c');
        expect(list.head.data).toEqual('c');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.prev.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('a');
        expect(list.head.next.next.prev.data).toEqual('b');
        expect(list.head.next.next.next).toEqual(null);
        expect(list.head.next.next.prev.data).toEqual('b');
        expect(list.head.next.next.prev.prev.data).toEqual('c');
        expect(list.head.next.next.prev.prev.prev).toEqual(null);
    });
});