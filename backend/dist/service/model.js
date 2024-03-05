import mysql from "mysql2";
export default class Model {
    static db;
    constructor(table) {
        this.table = table;
        this.dbConfig = {
            host: '127.0.0.1',
            user: 'dev',
            password: 'ainachelicoco',
            database: 'jlc'
        };
        if (!Model.db) {
            try {
                Model.db = mysql.createConnection(this.dbConfig);
                Model.db.connect();
                console.log("MYSQ CONNCETED ...");
            } catch (error) {
                console.log("MYSQ NOT CONNCETED [!]");
                console.error(error);
            }
        }
    }
    ;


    promiseGetAll() {
        let query = `SELECT * FROM ${this.table}`;
        return new Promise((resolve, reject) => {
            Model.db.query(query, (err, res) => {
                if (err) {
                    console.error("Erreur lors de la requête SELECT :", err);
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    }

    async getAll() {
        try {
            let result = await this.promiseGetAll();
            console.log(result);
            return result;
        } catch (err) {
            console.error('Erreur lors de la requête SELECT :', err);
            throw err;
        }
    }

    getById(id) {
        let query = `SELECT * FROM ${this.table} WHERE id= ${id}`;
        let result = Model.db.query(query);
        return result;
    }

    delete(id) {
        let query = `DELETE FROM ${this.table} WHERE id= ${id}`;
        Model.db.query(query);
    }
    save(data) {
        try {
            console.log(data);
            let query = `INSERT INTO ${this.table} SET ?`;

            Model.db.query(query, data, (err, result) => {
                if (err) {
                    console.error('YEEESS Error during insertion:', err);
                    throw err;
                }
                console.log('Insertion successful:', result);
            });

        } catch (err) {
            console.error('Error during insertion:', err);
            throw err;
        }
    }
}
//# sourceMappingURL=model.js.map