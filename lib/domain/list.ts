export default class List<T> {

    constructor(private items: Array<T>) { }

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(
            (element): boolean => JSON.stringify(element) !== JSON.stringify(item)
        )
    }
}
