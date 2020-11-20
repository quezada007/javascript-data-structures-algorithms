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
});