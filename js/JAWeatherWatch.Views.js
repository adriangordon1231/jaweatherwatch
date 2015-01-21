"use strict"

JAWeatherWatch.module('Views', function(Views, JAWeatherWatch,Backbone,Marionette){
    
    /*  SideMenu
    *   The sidemenu itemview hold the tempate and actions affectting the app's 
    *   main side menu
    ___________________________________________________________________________*/
    Views.SideMenu = Marionette.ItemView.extend({
        template:'#menu-template'
    });
    
    Views.Dashboard = Marionette.LayoutView.extend({
        template:'#dashboard-template',
        regions:{
            notifications:'#notifications',
            forecast:'#forecast',
            averages:'#average'
        }
    });
    
    Views.Notifications = Marionette.ItemView.extend({
        template:"#notifications-template",
        initialize: function(){
            
            
            this.listenTo(this.model, 'change', function(){
                console.log(this.model.attributes);
            });
        }
    });
    
    Views.Forecast = Marionette.ItemView.extend({
        template:"#forecast-template"
    });
    
    Views.WeatherAverage = Marionette.ItemView.extend({
        template:'#weather-average-template'
    });
    
});




