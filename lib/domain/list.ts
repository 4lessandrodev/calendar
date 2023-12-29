export default class List<T> {
    constructor(private items: Array<T>) { }
    
    add(item: T): void {
        this.items.push(item);
    }

    remove(query: (item: T) => void): void {
        this.items = this.items.filter(query)
    }
}
