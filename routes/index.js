/**
 * Routes for home-section of the site.
 * @author Andreas Willems
 */

var express = require('express');
var router = express.Router();
var path = require('path');

var root = path.join(__dirname, '../public');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.type('text/html');
    res.sendFile('index.html', {
        "root": root
    });
});

module.exports = router;
