export default class BinaryTreeNode<T> {
    protected value: T;
    private left: BinaryTreeNode<T> | null;
    private right: BinaryTreeNode<T> | null;


    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    setLeft(child: BinaryTreeNode<T>): BinaryTreeNode<T> {
        this.left = child;
        return this;
    }

    setRight(child: BinaryTreeNode<T>): BinaryTreeNode<T> {
        this.right = child;
        return this;
    }
}
