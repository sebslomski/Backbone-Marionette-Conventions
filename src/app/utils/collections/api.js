define([
    'app',
    'utils/helpers/api'
], function(App, UtilsHelpersAPI) {
  'use strict';

    var APICollection = Backbone.Collection.extend(UtilsHelpersAPI);

    return APICollection;
});
