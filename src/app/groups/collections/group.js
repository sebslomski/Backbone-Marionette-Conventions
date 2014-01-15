define([
    'app',
    'groups/models/group',
    'utils/collections/api',
], function(App, GroupModel, APICollection) {
    'use strict';

    var GroupCollection = APICollection.extend({
        model: GroupModel,

        urlRoot: '/group/'
    });

    return GroupCollection;
});
