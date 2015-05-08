/**
 * Routes for the admin-section of the site.
 *
 * @author Andreas Willems
 * @version 03 MAY 2015
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var root = path.join(__dirname, '../backend');
var ListController = require(root + '/controllers/ListController');

/* GET admin page. */
router.get('/', function(req, res) {
    res.type('text/html');
    res.sendFile('views/admin.html', {
        "root": root
    });
});

/*
 * GET request to /admin/api/sessions to return a list of all sessions
 */
router.get('/api/sessions', function(req, res) {
    console.log("Request to /admin/sessions");
    var sessions = ListController.getAllSessions();
    res.json(sessions);
});

/*
 * GET request to /admin/api/sessions/:sessionId to return the session
 * with the given id
 */
router.get('/api/sessions/:sessionId', function(req, res) {
    var sessionId = req.params.sessionId;
    console.log("Request to /admin/sessions/" + sessionId);
    var session = ListController.getSessionById(sessionId);
    res.json(session);
});

/*
 * POST request to /admin/api/sessions
 */
router.post('/api/sessions', function(req, res) {
    res.redirect('/admin');
});

module.exports = router;