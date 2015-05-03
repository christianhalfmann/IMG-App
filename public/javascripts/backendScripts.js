/**
 * JavaScript objects and methods used in the backend section.
 *
 * @author Andreas Willems
 * @version 03 MAY 2015
 */

(function() {
    document.addEventListener('DOMContentLoaded', function(event) {

        // some stuff, that has to be written again, because the use of
        // jQuery etc is forbidden

        function NotSupportedError(msg) {
            this.name = 'NotSupportedError';
            this.message = msg || 'Functionality not supported';
        }

        NotSupportedError.prototype = Error.prototype;

        function WrongTypeError(msg) {
            this.name = 'wrongTypeError';
            this.message = msg || 'Wrong type';
        }

        WrongTypeError.prototype = Error.prototype;

        var findElementById = function (elemId) {
            return document.getElementById(elemId);
        };

        var findElementByClass = function (className) {
            return document.getElementsByClassName(className);
        };

        var findElement = function (selector) {
            if (typeof selector == 'string') {
                var selectorType = selector.substring(0, 1);
                if (selectorType == '#') {
                    return findElementById(selector.substring(1));
                } else if (selectorType == '!') {
                    return findElementByClass(selector.substring(1));
                } else {
                    throw new NotSupportedError('selector not supported');
                }
            } else {
                throw new WrongTypeError('selector is not a string');
            }
        };

        var $ = findElement;

        function XHR() {
            this.request = new XMLHttpRequest();

            this.get = function(url, callback) {
                this.request.onreadystatechange = callback;
                this.request.open('GET', url, true);
                this.request.setRequestHeader('Content-Type', 'application/json');
                this.request.send();
            };

            this.getReadyState = function() {
                return this.request.readyState;
            };

            this.getStatusCode = function() {
                return this.request.status;
            };

            this.getResponse = function() {
                return this.request.responseText;
            };
        }


        $('#btnShowAllSessions').addEventListener('click', function () {
            var xhr = new XHR();
            xhr.get('/admin/api/sessions', function() {
                if (xhr.getReadyState() == 4 && xhr.getStatusCode() == 200) {

                    var res = JSON.parse(xhr.getResponse());
                    $('#content-div').innerHTML = res[1]['msg'];
                }
            });
        });

        $('#btnShowSessionsWithId').addEventListener('click', function() {
            var xhr = new XHR();
            xhr.get('/admin/api/sessions/42', function() {
                if (xhr.getReadyState() == 4 && xhr.getStatusCode() == 200) {
                    $('#content-div').innerHTML = xhr.getResponse();
                }
            });
        });

    }); // close document.addEventListener

})(); // close and call self-invoking function

