let db = require('../models'),
    users = require('./users');
    articles = require('./articles');

// READ, UPDATE, DELETE
exports.create = async (reading) => {
    try {
        let userId = reading.id,
            url = reading.url;
        return await this.insert(url, userId);
    }
    catch (err) {
        console.log('create - helpers/readings');
        throw err;
    }
}

exports.findByUserId = async (userId) => {
    try {
        return await this.getUserId(userId);
    }
    catch (err) {
        console.log('findByUserId - helpers/readings');
        throw err;
    }
}

exports.insert = (url, id) => {
    let reading = new Promise(function (resolve, reject) {
        db.connection.query('INSERT INTO readings (article_url, user_id) VALUES (?)', [[url, id]], function(err, results) {
            if (err) reject(err);
            return resolve(results);
        })
    });
    return reading;
}

exports.getUserId = (userId) => {
    let id = new Promise(function(resolve, reject) {
        db.connection.query('SELECT * FROM readings WHERE user_id = ?', userId, function(err, results) {
            if (err) reject(err);
            return resolve(results);
        });
    });
    return id;
}