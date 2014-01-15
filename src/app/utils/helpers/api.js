define(['app'], function(App) {
  'use strict';

    return {
        baseUrl: function() {
            return App.settings.api.url;
        }
    };
};
