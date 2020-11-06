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

    test('getting the data of the last node of the list', () => {
        const list = new SinglyLinkedList();
        expect(list.getLast()).toEqual(null);
        list.insertFirst('a');
        expect(list.getLast()).toEqual('a');
        list.insertFirst('b');
        expect(list.getLast()).toEqual('a');
        list.insertLast('c');
        expect(list.getLast()).toEqual('c');
    });

    test('getting the data of the node at a given position', () => {
        const list = new SinglyLinkedList();
        list.insertFirst('a');
        expect(list.getPosition(1)).toEqual('a');
        list.insertFirst('b');
        expect(list.getPosition(1)).toEqual('b');
        expect(list.getPosition(2)).toEqual('a');
        list.insertFirst('c');
        expect(list.getPosition(1)).toEqual('c');
        expect(list.getPosition(2)).toEqual('b');
        expect(list.getPosition(3)).toEqual('a');
        list.insertLast('d');
        expect(list.getPosition(1)).toEqual('c');
        expect(list.getPosition(2)).toEqual('b');
        expect(list.getPosition(3)).toEqual('a');
        expect(list.getPosition(4)).toEqual('d');
    });

    test('throws on invalid position in the getPosition method', () => {
        const list = new SinglyLinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        expect(() => {
            list.getPosition(0);
        }).toThrow();
        expect(() => {
            list.getPosition(-5);
        }).toThrow();
        expect(() => {
            list.getPosition('string');
        }).toThrow();
        expect(() => {
            list.getPosition(2.4);
        }).toThrow();
        expect(() => {
            list.getPosition(100);
        }).toThrow();
        expect(() => {
            list.getPosition(false);
        }).toThrow();
    });

    test('deleting the first node of the list', () => {
        const list = new SinglyLinkedList();
        expect(list.removeFirst()).toEqual(null);
        list.insertFirst('a');
        expect(list.removeFirst()).toEqual('a');
        expect(list.removeFirst()).toEqual(null);
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        list.insertFirst('d');
        expect(list.removeFirst()).toEqual('d');
        expect(list.removeFirst()).toEqual('c');
        expect(list.removeFirst()).toEqual('b');
        expect(list.removeFirst()).toEqual('a');
        expect(list.removeFirst()).toEqual(null);
    });

    test('deleting the last node of the list', () => {
        const list = new SinglyLinkedList();
        expect(list.removeLast()).toEqual(null);
        list.insertFirst('a');
        expect(list.removeLast()).toEqual('a');
        expect(list.removeLast()).toEqual(null);
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        list.insertFirst('d');
        expect(list.removeLast()).toEqual('a');
        expect(list.removeLast()).toEqual('b');
        expect(list.removeLast()).toEqual('c');
        expect(list.removeLast()).toEqual('d');
        expect(list.removeLast()).toEqual(null);
    });
});