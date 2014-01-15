define([
    'groups/views/group_list_item.tpl'
], function(GroupListItemTemplate) {
    'use strict';

    var GroupListItemView = Backbone.Marionette.ItemView.extend({
        template: GroupListItemTemplate
    });

    return GroupListItemView;
});
