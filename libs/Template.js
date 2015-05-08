/**
 * Implements a custom templating engine.
 *
 * @author Andreas Willems
 * @version 08 MAY 2015
 */

var fs = require('fs');

function Template() {

    this.tplDir = '../templates';
    this.tplName = '';
    this.tplFile = '';
    this.template = '';
    this.leftDelimiter = '{{';
    this.rightDelimiter = '}}';

    this.setTemplateDir = function(templateDir) {
        this.tplDir = templateDir;
    };

    this.loadTemplate = function(templateName) {
        if (templateName == '' || templateName == null) {
            throw new Error('Template not existing');
        }
        this.tplName = templateName;
        this.tplFile = this.tplDir + templateName;
        this.template = fs.readFileSync(
            this.tplFile,
            {encoding: 'utf8'}
        );
    };

    this.getContent = function() {
        return this.template;
    };

    this.assign = function(toReplace, replacement) {
        var placeHolderToReplace =
            this.leftDelimiter + toReplace + this.rightDelimiter;
        this.template = this.template.replace(
            placeHolderToReplace,
            replacement
        );
    };
}

exports = module.exports = Template;
