let { PythonShell } = require('python-shell'),
    Reading = require('../models/reading').Reading,
    readings = require('../helpers/readings'),
    articles = require('../helpers/articles'),
    users = require('../helpers/users');

// fix next
exports.scrapeArticle = function(req, res, next) {
    let options = { args: [req.body.url] };
    PythonShell.run('article_scraper.py', options, function (err, data) {
        if (err) {
            console.log('scrapeArticle - controllers/articles');
            return next(err);
        }
        next();
    });
}

exports.summarizeArticle = async (req, res, next) => {
    let article = await articles.findById(req.params.article_id);
    let options = { args: [article[0].article_url] };
    
    PythonShell.run('article_summary.py', options, function (err, data) {
        if (err) {
            console.log('summarizeArticle - controllers/articles');
            return next(err);
        }
        return res.status(200).json({
            id: req.params.article_id,    
            data
        });
    });
}

exports.createReading = async function(req, res, next) {
    try {
        let newReading = new Reading(req.body.url, req.params.id);
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
        let allReadings = await articles.findAll();
        let ids = [];
        allReadings.forEach(reading => {
            if (!ids.includes(reading.user_id)) ids.push(reading.user_id)
        })
        //readerUser info - how to return?
        let user = await users.findByIds(ids);
        return res.status(200).json(allReadings);
        // return res.status(200).json([
        //     {readings: allReadings},
        //     {user: user}
        // ]);
    }
    catch (err) {
        console.log('listAllArticles - controllers/articles');
        return next(err);
    }
}

exports.listUserArticles = async function(req, res, next) {
    try {
        let userReadings = await readings.findByUserId(req.params.id);
        return res.status(200).json(userReadings);
    }
    catch (err) {
        console.log('listUserArticles - controllers/readings');
        return next(err);
    }
}

exports.showSummary = () => {
    let pyshell = new PythonShell('article_summary.py');

    pyshell.on('message', async message => {
        console.log(message);
        return await message;
    });

    pyshell.end(err => {
        if (err) throw err;
    })
}