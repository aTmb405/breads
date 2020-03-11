// helpers/util
    // pythonscraper
// routes
    // users
// tests
    // articles/readings
    // auth
    // users
    // python
    // errorhandler?
// CLIENT
    // what would be views
    // what would be public

require("dotenv").config();
let express = require('express'),
    app = express(),
    bodyParser  = require("body-parser"),
    errorHandler = require("./controllers/error").errorHandler,
    authRoutes = require("./routes/auth"),
    articleRoutes = require("./routes/articles"),
    cors = require('cors'),
    auth = require('./middleware/auth'),
    db = require("./models");

const PORT = 8080;

app.set('views', './views');
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use("/api/auth/", authRoutes);
// /api/users/:username (read)
// /api/users/create, update, delete
app.use("/api/users/:username/articles",
        auth.loginRequired, auth.ensureCorrectUser,
        articleRoutes);

// *****************************
// **********NOT REACT**********
// *****************************
//HOME
app.get("/", function(req, res) {
    res.render("home");
});

//SIGNIN
app.get("/signin", function(req, res) {
    res.render("login");
});

// READINGS - need to display with React and JSON
app.get("/articles", function(req, res, next) {
    let q = "SELECT url, word_count AS words FROM articles";
    db.connection.query(q, function (err, results) {
        if (err) return next(err);
        let sum = 0;
        let reading_list = [];
        for (let words in results) {
            if (results.hasOwnProperty(words)) {
            sum += results[words].words;
            }
        }
        for (let url in results) {
            if (results.hasOwnProperty(url)) {
            reading_list.push(results[url].url);
            }
        }
        res.render('articles', {sum: sum, reading_list: reading_list});
    });
});

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});