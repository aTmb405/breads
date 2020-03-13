let { PythonShell } = require('python-shell'),
    Reading = require("../models/reading").Reading,
    select = require("../helpers/readings"),
    select2 = require("../helpers/articles");

// fix next
exports.scrapeArticle = function(req, res, next) {
    let options = { args: [req.body.url] }
    PythonShell.run('article_scraper.py', options, function (err, data) {
        if (err) {
            console.log("scraper error");
            return next(err);
        }
        res.redirect("/articles");
        next();
    });
}

exports.createReading = function(req, res, next) {
    let newReading = new Reading(req.params.username, req.body.url);

    select.create(newReading).then(function(reading) {
        return res.status(200).json(reading);
    }).catch(function(err) {
        console.log("postReading error");
        res.status(400).json(err);
    });
}

exports.listAllArticles = function(req, res, next) {
    select2.findAll().then(function(articles) {
        console.log(articles);
        return res.status(200).json(articles);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}