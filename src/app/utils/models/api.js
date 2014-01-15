define([
    'app',
    'utils/helpers/api'
], function(App, UtilsHelpersAPI) {
  'use strict';

    var APIModel = Backbone.Model.extend(UtilsHelpersAPI);

    return APIModel;
});
