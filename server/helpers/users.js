let db = require('../models'),
    bcrypt = require('bcrypt');

// UPDATE, DELETE
exports.create = async (user) => {  
    let salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(user.password, salt);
    
    user.password = hash;
    let newUser = new Promise((resolve, reject) => {
        db.connection.query('INSERT INTO users set ?', user, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return newUser;
}

exports.findByUsername = (username) => {
    let user = new Promise((resolve, reject) => {
        db.connection.query('SELECT * FROM users WHERE username = ?', username, function(err, results) {
            if (err) reject(err);
            else resolve(results);  
        });
    });
    return user;
}

exports.update = (updated, identifier) => {
    let user = new Promise((resolve, reject) => {
        db.connection.query('UPDATE users SET ? WHERE ?', [updated, identifier], function(err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return user;
}

exports.delete = username => {
    let user = new Promise((resolve, reject) => {
        db.connection.query('DELETE FROM users WHERE username = ?', username, function(err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return user;
}

exports.findAll = () => {
    let users = new Promise(function (resolve, reject) {
        db.connection.query('SELECT id, first_name, last_name, username, image FROM users ORDER BY id DESC', function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return users;
}

exports.findBySubId = sub_id => {
    let pubs = new Promise(function (resolve, reject) {
        db.connection.query('SELECT id, first_name, last_name, username, image FROM subscriptions LEFT JOIN users ON publisher_id = users.id WHERE subscriber_id = ? ORDER BY id DESC', sub_id, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return pubs;
}

// fix next
// exports.delete = function(username, password) {
//     db.connection.query('DELETE FROM users WHERE username = ? AND password = ?', [username, password], function(err, results) {
//         if (err) throw err;
//         else return this.values;
//     });
// }