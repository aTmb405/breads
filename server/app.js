// readings/util
    // pythonscraper
// routes
    // users
// tests
    // articles/readings
    // auth
    // users
    // python
    // errorhandler?

require('dotenv').config();
let express = require('express'),
    app = express(),
    bodyParser  = require('body-parser'),
    errorHandler = require('./controllers/error').errorHandler,
    authRoutes = require('./routes/auth'),
    readingRoutes = require('./routes/readings'),
    cors = require('cors'),
    auth = require('./middleware/auth'),
    readings = require('./controllers/readings'),
    users = require('./controllers/users'),
    subscriptions = require('./controllers/subscriptions');

const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cors()); //{origin: true, credentials: true}
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/api/auth/', authRoutes);
// /api/users/:username (read)
// /api/users/create, update, delete
app.use('/api/users/:id/readings',
        auth.loginRequired, auth.ensureCorrectUser,
        readingRoutes);

// refactor
app.get('/api/users', users.findAllUsers);
app.get('/api/readings', readings.findAllReadings);
app.get('/api/readings/:id', readings.findUserReadings); //how to get any user id into params???
app.get('/api/summary/:id', readings.summarizeReading);
app.post('/api/subscribe', subscriptions.createSubscription);
app.get('/api/subscriptions/:id', subscriptions.findUserSubscriptions);

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});