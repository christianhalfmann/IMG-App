var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile('index.html');
});

/* GET admin page*/
router.get('/admin', /*isAuthenticated,*/ function(req, res, next) {
    console.log(req.headers.authorization);
    res.sendfile('admin.html');
});

module.exports = router;
