export default interface Dao<T> {
    getAll(): T[];
    getById(id: number): T;
    save(data: T): void;
    delete(id: number): void;
    db:any;
}