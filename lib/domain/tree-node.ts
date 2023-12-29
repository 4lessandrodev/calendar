export default class TreeNode<T> {
    protected value: T;
    protected children: Array<TreeNode<T>>;

    constructor(value: T){
        this.value = value;
        this.children = [];
    }

    addChild(child: TreeNode<T>): void {
        this.children.push(child);
    }
}
