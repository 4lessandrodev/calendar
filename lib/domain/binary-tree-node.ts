export default class BinaryTreeNode<T> {
    protected value: T;
    private left: BinaryTreeNode<T> | null;
    private right: BinaryTreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /** @ts-ignore */
    toObject() {
        return {
            /** @ts-ignore */
            value: this.value ? this.value.toObject() : null,
            left: this.left ? this.left.toObject() : null,
            right: this.right ? this.right.toObject() : null,
        }
    }

    head(): T {
        return this.value;
    }

    leftNode(): BinaryTreeNode<T> | null {
        return this.left;
    }

    rightNode(): BinaryTreeNode<T> | null {
        return this.right;
    }

    setLeft(child: BinaryTreeNode<T>): BinaryTreeNode<T> {
        this.left = child;
        return this;
    }

    setRight(child: BinaryTreeNode<T>): BinaryTreeNode<T> {
        this.right = child;
        return this;
    }

    addItem(nodeRef: BinaryTreeNode<T>, item: BinaryTreeNode<T>, compareFn: (a: BinaryTreeNode<T>, b: BinaryTreeNode<T>) => 'left' | 'right' | undefined): void {
        const direction = compareFn(nodeRef, item) ?? '' as 'left';
        if(nodeRef?.[direction]?.head()){
            const ref = nodeRef[direction]!;
            return ref.addItem(ref, item, compareFn);
        }
        nodeRef[direction] = item;
        return;
    }
}
