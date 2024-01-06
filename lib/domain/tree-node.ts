export default class TreeNode<T> {
    protected value: T;
    protected children: Array<TreeNode<T>>;

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }

    addChild(child: TreeNode<T>): TreeNode<T> {
        this.children.push(child);
        return this;
    }

    toObject(): any {
        return {
            /** @ts-ignore */
            value: this.value.toObject(),
            children: this.children.map((value): any => value.toObject())
        }
    }
}
