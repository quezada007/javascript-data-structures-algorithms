import SinglyLinkedList from './singly-linked-list';

describe('Singly Linked List', () => {
    test('inserting a node at the beginning of the list using the insertFirst method', () => {
        const list = new SinglyLinkedList();
        expect(list.head).toEqual(null);
        expect(list.length).toEqual(0);
        list.insertFirst('a');
        expect(list.head.data).toEqual('a');
        expect(list.length).toEqual(1);
        list.insertFirst('b');
        expect(list.head.data).toEqual('b');
        expect(list.head.next.data).toEqual('a');
        expect(list.length).toEqual(2);
        list.insertFirst('c');
        expect(list.head.data).toEqual('c');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.next.data).toEqual('a');
        expect(list.length).toEqual(3);
    });
});