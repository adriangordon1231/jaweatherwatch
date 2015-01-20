"use strict"

JAWeatherWatch.module('App', function(App,JAWeatherWatch, Backbone, Marionette){
    
    /*      Controller
    *       This controller is used to orchestrate the general flow of the appliction
    *       Bacially, it is used to pull everything together
    */
    App.Controller = Marionette.Controller.extend({
        
        start:function(){
            
            this.showMenu();
            this.showDashboard();
        },
        // loads the SideMenu item view in the menu region of the app
        showMenu:function(){
            JAWeatherWatch.menu.show(new JAWeatherWatch.Views.SideMenu());
        },
        // loads all the views related to the main application dashbaord
        showDashboard: function(){
            
            // initialize all of the dashboard related views
            var dashboard = new JAWeatherWatch.Views.Dashboard();
            var notifications = new JAWeatherWatch.Views.Notifications();
            var forecast = new JAWeatherWatch.Views.Forecast({});
            var averages = new JAWeatherWatch.Views.WeatherAverage({});
            
            // rennders the dashbord in the content section of hte DOM
            JAWeatherWatch.content.show(dashboard);
            
            // renders the sub views within the daskboard
            dashboard.getRegion('notifications').show(notifications);
            dashboard.getRegion('forecast').show(forecast);
            dashboard.getRegion('averages').show(averages);
            
        }
        
    });
    
    /*  Router
    *   This object is used to controll routing within the application (I am not touching this for now lol)
    */
    App.Router = Marionette.AppRouter.extend({});
    
    
    
});