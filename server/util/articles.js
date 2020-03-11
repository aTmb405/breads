let db = require("../models");
// CREATE, UPDATE, DELETE

exports.findByUrl = (url) => {
    let article = new Promise(function (resolve, reject) {
        db.connection.query("SELECT * FROM articles WHERE url = ?", url, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return article;
}

exports.findAll = () => {
    let articles = new Promise(function (resolve, reject) {
        db.connection.query("SELECT url FROM articles", function (err, results) {
            console.log("results - " + results);
            if (err) reject(err);
            else resolve(results);
        });
    });
    return articles;
}