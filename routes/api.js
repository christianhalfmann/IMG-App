var express = require('express');
var router = express.Router();

/* GET request to server.de/api. */
router.get('/api/', function(req, res, next) {
    var testData = {
        message: 'Hello World'
    };
    res.json(testData);
});

module.exports = router;
