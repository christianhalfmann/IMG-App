/**
 * This controller fetches the data of all photo sessions from the database.
 *
 * @author Andreas Willems
 * @version 03 MAY 2015
 */

var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/photoapp-dev';

exports = module.exports = {

    getAllSessions: function() {
        MongoClient.connect(url, function(err, db) {
            assert.equal(err, null);
            console.log('Connected correctly to database');
            db.close(function() {
                console.log('Connection to database closed');
            });
        });

        // return test data
        return [
            {
                'msg': 'Hello'
            },
            {
                'msg': 'World'
            }
        ];
    },

    getSessionById: function(sessionId) {
        MongoClient.connect(url, function(err, db) {
            assert.equal(err, null);
            console.log('Connected correctly to database');
            db.close(function() {
                console.log('Connection to database closed');
            });
        });

        // return test data
        return ['1', '2', '3'];
    }
};