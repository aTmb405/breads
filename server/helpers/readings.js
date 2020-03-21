let db = require('../models'),
    { PythonShell } = require('python-shell');

// UPDATE, DELETE
exports.create = (url, id) => {
    let options = { args: [url, id] };
    let reading = new Promise((resolve, reject) => {
        PythonShell.run('reading_scraper.py', options, function (err, data) {
            if (err) reject(err);
            return resolve(data);
        });
    })
    return reading;
}

exports.findById = id => {
    let reading = new Promise(function (resolve, reject) {
        db.connection.query('SELECT * FROM readings WHERE id = ?', id, function (err, results) { //readings
            if (err) reject(err);
            else resolve(results);
        });
    });
    return reading;
}

exports.summarize = url => {
    let options = { args: [url] };
    let summary = new Promise((resolve, reject) => {
        PythonShell.run('reading_summary.py', options, function (err, data) {
            if (err) reject(err);
            return resolve(data);
        });
    });
    return summary;
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

exports.findByUserId = (userId) => {
    let id = new Promise(function(resolve, reject) {
        db.connection.query('SELECT * FROM readings WHERE user_id = ?', userId, function(err, results) {
            if (err) reject(err);
            return resolve(results);
        });
    });
    return id;
}



// *************************************************
// *******************OLD QUERIES*******************
// *************************************************

// exports.create = async (url, id) => {
//     let reading = new Promise(function (resolve, reject) {
//         db.connection.query('INSERT INTO readings SET ?', [url, id], function(err, results) {
//             if (err) reject(err);
//             return resolve(results);
//         })
//     });
//     return reading;
// }