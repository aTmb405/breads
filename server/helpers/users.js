let db = require("../models"),
    bcrypt = require('bcrypt');

// UPDATE, DELETE
exports.create = async function(user) {  
    try {
        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(user.password, salt);
        
        user.password = hash;
        return await this.insert(user);
    }
    catch (err) {
        console.log('create - helpers/users');
        throw err;
    }
}

exports.findById = (id) => {
    let user = new Promise(function(resolve, reject) {
        db.connection.query("SELECT * FROM users WHERE id = ?", id, function(err, results) {
            if (err) reject(err);
            else resolve(results);  
        });
    });
    return user;
}

exports.findByUsername = (username) => {
    let user = new Promise(function(resolve, reject) {
        db.connection.query("SELECT * FROM users WHERE username = ?", username, function(err, results) {
            if (err) reject(err);
            else resolve(results);  
        });
    });
    return user;
}

exports.findByIds = (ids) => {
    let user = new Promise(function(resolve, reject) {
        db.connection.query("SELECT * FROM users WHERE id IN (?)", [ids], function(err, results) {
            if (err) reject(err);
            else resolve(results);  
        });
    });
    return user;
}

// fix next
// exports.delete = function(username, password) {
//     db.connection.query("DELETE FROM users WHERE username = ? AND password = ?", [username, password], function(err, results) {
//         if (err) throw err;
//         else return this.values;
//     });
// }

exports.insert = (user) => {
    let newUser = new Promise(function(resolve, reject) {
        db.connection.query("INSERT INTO users set ?", user, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return newUser;
}