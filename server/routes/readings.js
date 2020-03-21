let express = require('express'),
    router = express.Router({ mergeParams: true }),
    readings = require('../controllers/readings');

router.post('/', readings.createReading);

module.exports = router;