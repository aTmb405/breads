let db = require("../models"),
    select = require("./users");

// READ, UPDATE, DELETE

exports.create = (reading) => {
    let user = '',
        article = '';

    //refactor
    let articleId = new Promise(function (resolve, reject) {
        db.connection.query("SELECT * FROM articles WHERE url = ?", reading.url, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    
    select.findByUsername(reading.username).then(function(results) {
        user = results[0].id;
        return articleId;
    }).then(function(results) {
        article = results[0].id;
        let post = new Promise(function (resolve, reject) {
            db.connection.query("INSERT INTO readings (user_id, article_id) VALUES (?)", [[user, article]], function (err, results) {
                if (err) reject(err);
                return resolve(results);
            });
        });
        return post;
    }).catch(function(err) {
        console.log("createReading error");
        throw err;
    });
}

exports.findByUserId = (userId) => {
    let articles = [];
    let readings = new Promise(function(resolve, reject) {
        db.connection.query('SELECT * FROM readings WHERE user_id = ?', userId, function(err, results) {
            if (err) reject(err);
            return resolve(results);
        });
    });

    return readings.then(function(results) {
        results.forEach(res => {
            articles.push(res.article_id);
        });
        if (articles.length) { //if the user has read articles
            let getArticle = new Promise(function (resolve, reject) {
                db.connection.query("SELECT * FROM articles WHERE id IN (?)", [articles], function (err, results) {
                    if (err) reject(err);
                    return resolve(results);
                });
            });
            return getArticle;
        } else { //return empty array if not
            return articles;
        }
        
    }).catch(function(err) {
        console.log("findByUserId error");
        throw err;
    });
}