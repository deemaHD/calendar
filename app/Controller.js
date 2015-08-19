(function (This) {
    This.Controller = function () {
        var startDate = new Date(collections.weeks.toJSON()[0].startDate),
            monthView = new App.MonthView(),
            $main = $('#main');
        
        start();
        
        function start () {
            $('#main').append(monthView.render(startDate).el);
            startDate.setMonth(startDate.getMonth() + 1);
            $('#main').append(monthView.render(startDate).el);
            startDate.setMonth(startDate.getMonth() + 1);
            $('#main').append(monthView.render(startDate).el);
            
            setUpMediator();
            findFirstWeek(); // add class 'start' to every first week
        }
        
        function setUpMediator () {
            App.mediator.subscribe('ShowCalendar', showCalendar, {}, this);
            App.mediator.subscribe('ShowWeek', showWeek, {}, this);
            App.mediator.subscribe('ShowWeekById', showWeekById, {}, this);
        }
        
        function showCalendar () {
            $('.calendar').removeClass('hiden');
            $('.preview').remove();
        }
        
        function showWeek (previewWeek) {
            hideAll();
            var weekPreView = new WeekPreView({model: previewWeek});
            
            $('#main').append(weekPreView.render(previewWeek.id).el);
        }
        
        function showWeekById (id) {
            getWeekById(id, showWeek);
        }
        
        function findFirstWeek () {
            monthView.findFirstWeek();
        }
        
        function hideAll () {
            $('#main').children().addClass('hiden');
        }
        
        function getWeekById (id, callback) {
            var weeks = collections.weeks.toJSON();
            _.each(weeks, function (week) {
                if (week.id == id) {
                    callback(week);
                }    
            }, this);

        }
    }
})(App);