define([
    'marionette'
], function (Marionette) {
    'use strict';

    var app = new Marionette.Application();

    app.addInitializer(function() {
        console.log('initializer');
    });

    return app;
});
