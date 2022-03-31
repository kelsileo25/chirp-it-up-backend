// set up for local mysql db

import mysql from 'mysql'

// let pool = mysql.createPool({
//     connectionLimit: 10,
//     password: 'chirperapp',
//     user: 'chirperapp',
//     database: 'chirperapp',
//     host: 'localhost',
//     port: '3000'
// });

let chirprapp = {};

chirprapp.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM chirps', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

chirprapp.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM chirps WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

chirprapp.del = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM chirps WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results)
        })
    })
}

chirprapp.put = (id, text) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE chirps SET text= ? WHERE id = ?', [text, id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results)
        })
    })
}

chirprapp.post = (user, text) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO chirps(name, text) VALUES (?, ?)', [user, text], (err, results) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(results)
                }
            })
    })
}

export default chirprapp;