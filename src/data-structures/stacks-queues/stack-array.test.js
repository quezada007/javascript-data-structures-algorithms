import StackArray from './stack-array';

describe('Stack Array', () => {
    test('adding data to a stack using the push method', () => {
        const stack = new StackArray();
        expect(stack.stack).toHaveLength(0);
        stack.push('a');
        expect(stack.stack[0]).toEqual('a');
        stack.push('b');
        expect(stack.stack[0]).toEqual('a');
        expect(stack.stack[1]).toEqual('b');
        stack.push('c');
        expect(stack.stack[0]).toEqual('a');
        expect(stack.stack[1]).toEqual('b');
        expect(stack.stack[2]).toEqual('c');
    });

    test('removing from the stack using the pop method', () => {
        const stack = new StackArray();
        expect(stack.stack).toHaveLength(0);
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
        const stack = new StackArray();
        expect(stack.stack).toHaveLength(0);
        expect(stack.isEmpty()).toBe(true);
        stack.push('a');
        expect(stack.isEmpty()).toBe(false);
    });
});