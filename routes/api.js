var express = require('express');
var router = express.Router();

/* GET request to server.de/api. */
router.get('/', function(req, res, next) {
    var testData = {
        message: 'Hello World'
    };
    res.json(testData);
});

/* GET request to server.de/api/:id */
router.get('/:sessionId', function(req, res, next) {
    var testData = {
        session: req.params.sessionId
    };
    res.json(testData);
});

module.exports = router;
