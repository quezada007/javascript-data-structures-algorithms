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

    test('removing from the stack using the pop method', () => {
        const stack = new StackLinkedList();
        expect(stack.head).toBeNull();
        expect(() => { stack.pop(); }).toThrow();
        stack.push('a');
        expect(stack.pop()).toEqual('a');
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.push('d');
        expect(stack.pop()).toEqual('d');
        expect(stack.pop()).toEqual('c');
        expect(stack.pop()).toEqual('b');
        expect(stack.pop()).toEqual('a');
    });

    test('stack is empty', () => {
        const stack = new StackLinkedList();
        expect(stack.head).toBeNull();
        expect(stack.isEmpty()).toBe(true);
        stack.push('a');
        expect(stack.isEmpty()).toBe(false);
    });

    test('peek method of the stack', () => {
        const stack = new StackLinkedList();
        expect(stack.head).toBeNull();
        expect(() => { stack.peek(); }).toThrow();
        stack.push('a');
        expect(stack.peek()).toEqual('a');
        stack.push('b');
        expect(stack.peek()).toEqual('b');
        stack.push('c');
        stack.push('d');
        stack.push('e');
        expect(stack.peek()).toEqual('e');
    });
});