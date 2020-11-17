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

    test('inserting a node at the end of the list using the insertLast method', () => {
        const list = new DoublyLinkedList();
        expect(list.head).toEqual(null);
        list.insertLast('a');
        expect(list.head.data).toEqual('a');
        list.insertLast('b');
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.prev.data).toEqual('a');
        list.insertLast('c');
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.prev.data).toEqual('a');
        expect(list.head.next.next.data).toEqual('c');
        expect(list.head.next.next.prev.data).toEqual('b');
        expect(list.head.next.next.next).toEqual(null);
        expect(list.head.next.next.prev.data).toEqual('b');
        expect(list.head.next.next.prev.prev.data).toEqual('a');
        expect(list.head.next.next.prev.prev.prev).toEqual(null);
    });

    test('inserting a node at a specific position of the list using the insert method', () => {
        const list = new DoublyLinkedList();
        expect(list.head).toEqual(null);
        list.insert('a', 1);
        expect(list.head.data).toEqual('a');
        expect(list.head.prev).toEqual(null);
        expect(list.head.next).toEqual(null);
        list.insert('b', 2);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.prev.data).toEqual('a');
        list.insert('c', 2);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.prev.data).toEqual('c');
        expect(list.head.next.next.prev.prev.data).toEqual('a');
        list.insert('d', 4);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.prev.data).toEqual('b');
        list.insert('e', 4);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.next.data).toEqual('e');
        expect(list.head.next.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.next.prev.data).toEqual('e');
        list.insert('f', 6);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.next.data).toEqual('e');
        expect(list.head.next.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.next.next.data).toEqual('f');
        expect(list.head.next.next.next.next.next.prev.data).toEqual('d');
        list.insert('g', 2);
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('g');
        expect(list.head.next.prev.data).toEqual('a');
        expect(list.head.next.next.data).toEqual('c');
        expect(list.head.next.next.next.data).toEqual('b');
        expect(list.head.next.next.next.next.data).toEqual('e');
        expect(list.head.next.next.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.next.next.next.data).toEqual('f');
    });

    test('throws on invalid position in the insert method', () => {
        const list = new DoublyLinkedList();
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

    test('inserting a node after another node', () => {
        const list = new DoublyLinkedList();
        expect(list.head).toEqual(null);
        list.insertFirst('a');
        expect(list.head.data).toEqual('a');
        list.insertAfter('b', 'a');
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('b');
        expect(list.head.next.prev.data).toEqual('a');
        list.insertAfter('c', 'a');
        expect(list.head.data).toEqual('a');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.prev.data).toEqual('a');
        expect(list.head.next.next.data).toEqual('b');
        expect(list.head.next.next.prev.data).toEqual('c');
        expect(list.head.next.next.prev.prev.data).toEqual('a');
        list.insertAfter('d', 'b');
        expect(list.head.next.next.next.data).toEqual('d');
        expect(list.head.next.next.next.prev.data).toEqual('b');
        expect(list.head.next.next.next.prev.prev.data).toEqual('c');
        expect(list.head.next.next.next.prev.prev.prev.data).toEqual('a');
    });

    test('throws on invalid prevData in the insertAfter method', () => {
        const list = new DoublyLinkedList();
        expect(() => {
            list.insertAfter('a', 'b');
        }).toThrow();
        list.insertFirst('a');
        expect(() => {
            list.insertAfter('c', 'z');
        }).toThrow();
    });

    test('inserting a node before another node', () => {
        const list = new DoublyLinkedList();
        expect(list.head).toEqual(null);
        list.insertFirst('a');
        expect(list.head.data).toEqual('a');
        list.insertBefore('b', 'a');
        expect(list.head.data).toEqual('b');
        expect(list.head.next.data).toEqual('a');
        expect(list.head.next.prev.data).toEqual('b');
        list.insertBefore('c', 'a');
        expect(list.head.data).toEqual('b');
        expect(list.head.next.data).toEqual('c');
        expect(list.head.next.prev.data).toEqual('b');
        expect(list.head.next.next.data).toEqual('a');
        expect(list.head.next.next.prev.data).toEqual('c');
        expect(list.head.next.next.prev.prev.data).toEqual('b');
        list.insertBefore('d', 'a');
        expect(list.head.next.next.next.data).toEqual('a');
        expect(list.head.next.next.next.prev.data).toEqual('d');
        expect(list.head.next.next.next.prev.prev.data).toEqual('c');
        expect(list.head.next.next.next.prev.prev.prev.data).toEqual('b');
    });
});