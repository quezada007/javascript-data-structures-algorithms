import BinarySearchTree from './binary-search-tree';

describe('Binary Search Tree', () => {
    test('inserting a tree node using the insert method', () => {
        const bst = new BinarySearchTree();
        expect(bst.root).toBeNull();
        bst.insert(10);
        expect(bst.root.data).toEqual(10);
        bst.insert(2);
        expect(bst.root.data).toEqual(10);
        expect(bst.root.left.data).toEqual(2);
        bst.insert(14);
        expect(bst.root.data).toEqual(10);
        expect(bst.root.left.data).toEqual(2);
        expect(bst.root.right.data).toEqual(14);
        bst.insert(9);
        expect(bst.root.data).toEqual(10);
        expect(bst.root.left.data).toEqual(2);
        expect(bst.root.left.right.data).toEqual(9);
        expect(bst.root.right.data).toEqual(14);
        bst.insert(1);
        expect(bst.root.data).toEqual(10);
        expect(bst.root.left.data).toEqual(2);
        expect(bst.root.left.left.data).toEqual(1);
        expect(bst.root.left.right.data).toEqual(9);
        expect(bst.root.right.data).toEqual(14);
        bst.insert(14);
        expect(bst.root.left.data).toEqual(2);
        expect(bst.root.left.right.data).toEqual(9);
        expect(bst.root.right.data).toEqual(14);
        bst.insert(21);
        expect(bst.root.right.right.data).toEqual(21);
        bst.insert(11);
        expect(bst.root.right.left.data).toEqual(11);
        bst.insert(12);
        expect(bst.root.right.left.right.data).toEqual(12);
        bst.insert(13);
        expect(bst.root.right.left.right.right.data).toEqual(13);
        bst.insert(15);
        expect(bst.root.right.right.left.data).toEqual(15);
    });
});