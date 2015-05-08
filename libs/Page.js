/**
 * Implements an html page object that makes use
 * of templates.
 *
 * @author Andreas Willems
 * @version 08 MAY 2015
 */

var Template = require('./template');

function HTMLPage() {

    this.head = '';
    this.foot = '';
    this.body = '';

    this.createHead = function() {
        var template = new Template();
        template.loadTemplate('header.tpl');
        return template.getContent();
    };

    this.createFoot = function() {
        var template = new Template();
        template.loadTemplate('footer.tpl');
        return template.getContent();
    };

    this.addBody = function(bodyContent) {
        this.body = bodyContent;
    };

    this.toHTML = function() {
        var html = this.head;
        html += this.body;
        html += this.foot;
        return html;
    };

    this.toString = function() {
        return this.toHTML();
    }
}

exports = module.exports = HTMLPage;