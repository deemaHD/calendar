(function (This) {
    This.Router = Backbone.Router.extend({
        routes: {
            '': 'mainView',
            'calendar': 'mainView',
            'week/:id': 'showWeek'
        },

        initialize: function () {
            this.controller = new This.Controller();
            
            This.mediator.subscribe('ShowWeek', this.navigateShowWeek, {}, this);
            This.mediator.subscribe('ShowCalendar', this.navigateShowCalendar, {}, this);
        },
        
        mainView: function () {
            This.mediator.publish('ShowCalendar');
        },
        
        navigateShowWeek: function (week) {
            this.navigate('week/' + week.id);
        },
        
        navigateShowCalendar: function () {
            this.navigate('calendar');    
        },
        
        showWeek: function (id) {
            This.mediator.publish('ShowWeek', id);
        }
    });
})(App);