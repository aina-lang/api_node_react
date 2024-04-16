import service from "./service";
import mysql from "mysql2";

export default class Model<T> implements service<T>{

    table: string;
    db: any;
    dbConfig:object;

    constructor(table: string) {
        this.table = table;
        this.dbConfig = {
            host: '127.0.0.1',
            user: 'mercia',
            password: 'learning',
            database: 'learning'
        };
        this.db=mysql.createConnection(this.dbConfig);
        this.db.connect();
    };

    getAll(): T[] {
        let query: string = `SELECT * FROM ${this.table}`;
        let result: T[] = [];
        return result;
    }

    getById(id: number): T {
        let query: string = `SELECT * FROM ${this.table} WHERE id= ${id}`;
        let result: T;
        result =this.db.query(query);
        return result;
    }

    delete(id: number): void {

    }

    save(data: T): void {

    }
}