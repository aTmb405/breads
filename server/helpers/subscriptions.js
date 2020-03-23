let db = require('../models');

// READ, UPDATE
exports.create = (sub_id, pub_id) => {  
    let subscription = new Promise((resolve, reject) => {
        db.connection.query('INSERT INTO subscriptions SET ?', [sub_id, pub_id], function(err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return subscription;
}

exports.findBySubId = sub_id => {
    let subscription = new Promise((resolve, reject) => {
        db.connection.query('SELECT * FROM subscriptions WHERE subscriber_id = ?', sub_id, function(err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return subscription;
}

exports.findPubReadings = sub_id => {
    let subscription = new Promise((resolve, reject) => {
        db.connection.query('SELECT * FROM subscriptions LEFT JOIN readings ON publisher_id = readings.user_id WHERE subscriber_id = ?', sub_id, function(err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return subscription;
}

// SELECT * FROM subscriptions LEFT JOIN readings ON publisher_id = readings.user_id;

exports.delete = (sub_id, pub_id) => {
    let subscription = new Promise((resolve, reject) => {
        db.connection.query('DELETE FROM subscriptions WHERE SET ?', [sub_id, pub_id], function(err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
    return subscription;
}