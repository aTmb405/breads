let db = require('../models');
// CREATE, UPDATE, DELETE - create is in python scraper

exports.findByUrl = (url) => {
    let reading = new Promise(function (resolve, reject) {
        db.connection.query('SELECT * FROM readings WHERE article_url = ?', url, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return reading;
}

exports.findAll = () => {
    let readings = new Promise(function (resolve, reject) {
        db.connection.query('SELECT * FROM readings', function (err, results) { // ORDER BY id DESC
            if (err) reject(err);
            else resolve(results);
        });
    });
    return readings;
}