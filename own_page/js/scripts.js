$(document).ready(function() {
    $('.landscape').pgwSlider({
        maxHeight: 300,
        verticalCentering: true
    });
    var editor = new wysihtml5.Editor("textarea", {
        toolbar:      "toolbar",
        stylesheets:  "css/stylesheet.css",
        parserRules:  wysihtml5ParserRules
    });
});