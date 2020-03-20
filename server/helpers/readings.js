let db = require('../models'),
    users = require('./users');
    articles = require('./articles');

// READ, UPDATE, DELETE
exports.create = async (reading) => {
    try {
        let userId = reading.id,
            url = reading.url;

        return await this.insert(url, userId);

        // let user = await users.findByUsername(username),
        //     article = await articles.findByUrl(url);
        // return this.insert(user[0].id, article[0].id);
    }
    catch (err) {
        console.log('create - helpers/readings');
        throw err;
    }
}

exports.findByUserId = async (userId) => {
    try {
        // let articleIds = [];
        return await this.getUserId(userId);

        // readings.forEach(res => {
        //     articleIds.push(res.article_id);
        // })

        // if (articleIds.length) return await this.findArticlesById(articleIds);
        // else return articleIds;
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
        // db.connection.query('INSERT INTO readings (user_id, article_id) VALUES (?)', [[user, article]], function (err, results) {
        //     if (err) reject(err);
        //     return resolve(results);
        // });
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

// exports.findArticlesById = (ids) => {
//     let articles = new Promise(function(resolve, reject) {
//         db.connection.query('SELECT * FROM articles WHERE id IN (?)', [ids], function(err, results) {
//             if (err) reject(err);
//             return resolve(results);
//         });
//     });
//     return articles;
// }

// exports.findReadingByArticle = (articleId) => {
//     let readings = new Promise(function(resolve, reject) {
//         db.connection.query('SELECT * FROM readings WHERE article_id = ?', articleId, function(err, results) {
//             if (err) reject(err);
//             return resolve(results);
//         });
//     });
//     return readings;
// }