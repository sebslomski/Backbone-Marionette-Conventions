define([
    'app',
    'utils/models/api',
], function(App, APIModel) {
    'use strict';

    var GroupModel = APIModel.extend({
        urlRoot: '/group/'
    });

    return GroupModel;
});
