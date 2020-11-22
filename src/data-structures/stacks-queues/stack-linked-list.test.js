import StackLinkedList from './stack-linked-list';

describe('Stack Linked List', () => {
    test('adding data to a stack using the push method', () => {
        const stack = new StackLinkedList();
        expect(stack.head).toBeNull();
        stack.push('a');
        expect(stack.head.data).toEqual('a');
        stack.push('b');
        expect(stack.head.data).toEqual('b');
        expect(stack.head.next.data).toEqual('a');
        stack.push('c');
        expect(stack.head.data).toEqual('c');
        expect(stack.head.next.data).toEqual('b');
        expect(stack.head.next.next.data).toEqual('a');
    });
});