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

require("dotenv").config();
let express = require('express'),
    app = express(),
    bodyParser  = require("body-parser"),
    errorHandler = require("./controllers/error").errorHandler,
    authRoutes = require("./routes/auth"),
    articleRoutes = require("./routes/articles"),
    cors = require('cors'),
    auth = require('./middleware/auth'),
    helpers = require("./controllers/articles");

const PORT = 8080;

app.set('views', './views');
app.set("view engine", "ejs");
app.use(cors()); //{origin: true, credentials: true}
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use("/api/auth/", authRoutes);
// /api/users/:username (read)
// /api/users/create, update, delete
app.use("/api/users/:id/articles",
        auth.loginRequired, auth.ensureCorrectUser,
        articleRoutes);

app.get("/api/articles", helpers.listAllArticles); //refactor
app.get('/api/articles/:id', helpers.listUserArticles); //refactor
app.get('/api/summary/:article_id', helpers.summarizeArticle);

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});