let db = require('../models');
// CREATE, UPDATE, DELETE - create is in python scraper

exports.findByUrl = url => {
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
        db.connection.query('SELECT * FROM readings ORDER BY id DESC', function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return readings;
}

exports.findById = id => {
    let reading = new Promise(function (resolve, reject) {
        db.connection.query('SELECT * FROM info WHERE id = ?', id, function (err, results) { //readings
            if (err) reject(err);
            else resolve(results);
        });
    });
    return reading;
}

exports.findInfo = () => {
    let info = new Promise(function (resolve, reject) {
        db.connection.query('SELECT * FROM info ORDER BY id DESC', function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return info;
}