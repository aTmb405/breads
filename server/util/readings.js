let db = require("../models"),
    select = require("./users");

// READ, UPDATE, DELETE

exports.create = (username, url) => {
    let user = '',
        article = '';
    
    let articleId = new Promise(function (resolve, reject) {
        db.connection.query("SELECT * FROM articles WHERE url = ?", url, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    
    select.findByUsername(username).then(function(results) {
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