/**
 * JavaScript objects and methods used in the backend section.
 *
 * @author Andreas Willems
 * @version 04 MAY 2015
 */

(function(window) {
    document.addEventListener('DOMContentLoaded', function(event) {

        $('#btnShowAllSessions').addEventListener('click', function () {
            awQuery.ajax('/admin/api/sessions', {'method': 'GET'},
                function(response) {
                    var res = JSON.parse(response);
                    $('#content-div').innerHTML = res[1]['msg'];
                }
            );
        });

        $('#btnShowSessionsWithId').addEventListener('click', function() {
            awQuery.ajax('/admin/api/sessions',
                {
                    'method': 'POST',
                    'data': {'msg': 'testData'}
                },
                function(response) {
                    $('#content-div').innerHTML = JSON.parse(response);
                }
            );
        });

    }); // close document.addEventListener
})(); // close and call self-invoking function

