import mysql from "mysql2";

export default class Model {
    static db;

    constructor(table) {
        this.table = table;
        this.dbConfig = {
            host: '127.0.0.1',
            user: 'mercia',
            password: 'learning',
            database: 'learning'
        };
        if (!Model.db) {
            try {
                Model.db = mysql.createConnection(this.dbConfig);
                Model.db.connect();
                console.log("MYSQL CONNECTED ...");
            } catch (error) {
                console.log("MYSQL NOT CONNECTED [!]");
                console.error(error);
            }
        }
    }

    promiseGetAll() {
        let query = `SELECT * FROM ${this.table}`;
        return new Promise((resolve, reject) => {
            Model.db.query(query, (err, res) => {
                if (err) {
                    console.error("Error during SELECT query:", err);
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
            console.error('Error during SELECT query:', err);
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
            if (data.id) {
                // Si l'ID est présent, exécute une mise à jour
                let id = data.id;
                delete data.id; // Supprimez l'ID des données à mettre à jour
                let query = `UPDATE ${this.table} SET ? WHERE id=${id}`;
                Model.db.query(query, data, (err, result) => {
                    if (err) {
                        console.error('Error during update:', err);
                        throw err;
                    }
                    console.log('Update successful:', result);
                });
            } else {
                // Si l'ID n'est pas présent, exécute une insertion
                let query = `INSERT INTO ${this.table} SET ?`;
                Model.db.query(query, data, (err, result) => {
                    if (err) {
                        console.error('Error during insertion:', err);
                        throw err;
                    }
                    console.log('Insertion successful:', result);
                });
            }
        } catch (err) {
            console.error('Error during save:', err);
            throw err;
        }
    }
}
