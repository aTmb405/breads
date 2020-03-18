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
        // res.redirect("/articles");
        next();
    });
}

exports.createReading = async function(req, res, next) {
    try {
        let newReading = new Reading(req.params.username, req.body.url);
        let createdReading = await select.create(newReading);
        return res.status(200).json(createdReading);
    }
    catch (err) {
        console.log("switched to try catch block");
        return next(err);
    }
    // let newReading = new Reading(req.params.username, req.body.url);
    // select.create(newReading).then(function(reading) {
    //     return res.status(200).json(reading);
    // }).catch(function(err) {
    //     console.log("postReading error");
    //     res.status(400).json(err);
    // });
}

exports.listAllArticles = async function(req, res, next) {
    try {
        let articles = await select2.findAll();
        return res.status(200).json(articles);
    }
    catch (err) {
        console.log("switched to try catch block");
        return next(err);
    }
    // select2.findAll().then(function(articles) {
    //     console.log(articles);
    //     return res.status(200).json(articles);
    // }).catch(function(err) {
    //     // return next(err);
    //     res.status(400).json(err);
    // });
}

exports.listUserArticles = async function(req, res, next) {
    try {
        let userArticles = await select.findByUserId(req.params.id);
        return res.status(200).json(userArticles);
    }
    catch (err) {
        console.log('listUserArticles error');
        return next(err);
    }
}