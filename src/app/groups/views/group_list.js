define([
    'groups/collections/group',
    'groups/views/group_list_item',
], function(GroupCollection, GroupListItemView) {
    'use strict';

    var GroupListView = Backbone.Marionette.CollectionView.extend({
        itemView: GroupListItemView
    });

    return GroupListView;
});
