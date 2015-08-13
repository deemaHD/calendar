'use strict';

var collections = {},
    calendar = {},
    templates = {},
    App = {};

setUp(App, [
    'Router', 'Month', 'MonthCollection', 
    'Controller', 'MonthCollectionView', 
    'Event', 'EventsCollection', 'Resource', 
    'ResourcesCollection', 'WeekView'
]);


$(function () {
    collections.events = new App.EventsCollection(eventsCollection);
    collections.resources = new App.ResourcesCollection(resourcesCollection);
    collections.weeks = new App.WeekCollection(scheduleCollection);
    
    var router = new App.Router();
    
    Backbone.history.start({pushState: true});
});

function setUp (parent, modules) {
    modules.forEach(function (module) {
        parent[module] = {};
    });
};