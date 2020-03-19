let { PythonShell } = require('python-shell'),
    Reading = require("../models/reading").Reading,
    readings = require("../helpers/readings"),
    articles = require("../helpers/articles");

// fix next
exports.scrapeArticle = function(req, res, next) {
    let options = { args: [req.body.url] }
    PythonShell.run('article_scraper.py', options, function (err, data) {
        if (err) {
            console.log("scrapeArticle - controllers/articles");
            return next(err);
        }
        next();
    });
}

exports.createReading = async function(req, res, next) {
    try {
        let newReading = new Reading(req.params.username, req.body.url);
        let createdReading = await readings.create(newReading);
        return res.status(200).json(createdReading);
    }
    catch (err) {
        console.log('createReading - controllers/articles');
        if (err.code === 'ER_DUP_ENTRY') {
            err.message = 'You have already read that!';
        }
        return next(err);
    }
}

exports.listAllArticles = async function(req, res, next) {
    try {
        let allArticles = await articles.findAll();
        return res.status(200).json(allArticles);
    }
    catch (err) {
        console.log('listAllArticles - controllers/articles');
        return next(err);
    }
}

exports.listUserArticles = async function(req, res, next) {
    try {
        let userArticles = await readings.findByUserId(req.params.id);
        return res.status(200).json(userArticles);
    }
    catch (err) {
        console.log('listUserArticles - controllers/readings');
        return next(err);
    }
}