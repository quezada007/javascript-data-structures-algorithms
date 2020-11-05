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

    test('inserting a node at the end of the list using the insertLast method', () => {
        const list = new SinglyLinkedList();
        expect(list.head).toEqual(null);
        expect(list.length).toEqual(0);
        list.insertLast('a');
        expect(list.head.data).toEqual('a');
        expect(list.length).toEqual(1);
        list.insertLast('b');
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.length).toEqual(2);
        list.insertLast('c');
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.next.data).toEqual('c');
        expect(list.length).toEqual(3);
    });

    test('inserting a node at a specific position of the list using the insert method', () => {
        const list = new SinglyLinkedList();
        expect(list.head).toEqual(null);
        expect(list.length).toEqual(0);
        list.insert('a', 1);
        expect(list.head.data).toEqual('a');
        expect(list.length).toEqual(1);
        list.insert('b', 2);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.length).toEqual(2);
        list.insert('c', 2);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.length).toEqual(3);
        list.insert('d', 4);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.next.data).toEqual('d');
        list.insert('e', 4);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.next.data).toEqual('e');
        expect(list.head.next.next.next.next.data).toEqual('d');
        list.insert('f', 6);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.next.data).toEqual('e');
        expect(list.head.next.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.next.next.data).toEqual('f');
        list.insert('g', 2);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('g');
        expect(list.head.next.next.data).toEqual('c');
        expect(list.head.next.next.next.data).toEqual('b');
        expect(list.head.next.next.next.next.data).toEqual('e');
        expect(list.head.next.next.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.next.next.next.data).toEqual('f');
    });

    test('throws on invalid position in the insert method', () => {
        const list = new SinglyLinkedList();
        expect(() => {
            list.insert('a', 0);
        }).toThrow();
        expect(() => {
            list.insert('a', -5);
        }).toThrow();
        expect(() => {
            list.insert('a', 'string');
        }).toThrow();
        expect(() => {
            list.insert('a', 2.4);
        }).toThrow();
        expect(() => {
            list.insert('a', 100);
        }).toThrow();
        expect(() => {
            list.insert('a', false);
        }).toThrow();
    });

    test('getting the data of the first node of the list', () => {
        const list = new SinglyLinkedList();
        expect(list.getFirst()).toEqual(null);
        list.insertFirst('a');
        expect(list.getFirst()).toEqual('a');
        list.insertFirst('b');
        expect(list.getFirst()).toEqual('b');
        list.insertLast('c');
        expect(list.getFirst()).toEqual('b');
    });
});