"use strict"

JAWeatherWatch.module('App', function(App,JAWeatherWatch, Backbone, Marionette){
    
    /*      Controller
    *       This controller is used to orchestrate the general flow of the appliction
    *       Bacially, it is used to pull everything together
    */
    App.Controller = Marionette.Controller.extend({
        
        dashboard: new JAWeatherWatch.Views.Dashboard(),
        parish: new JAWeatherWatch.Cities.Parish(),
        start:function(){
            
            this.showMenu();
            this.showDashboard();
            
            this.listenTo(this.parish, 'change', function(){
                this.showDashboard();
            });
        },
        // loads the SideMenu item view in the menu region of the app
        showMenu:function(){
            JAWeatherWatch.menu.show(new JAWeatherWatch.Views.SideMenu({model:this.parish}));
        },
        // loads all the views related to the main application dashbaord
        showDashboard: function(){            
            
            
            
            var forecast = new JAWeatherWatch.Views.Forecast({});
            var averages = new JAWeatherWatch.Views.WeatherAverage({});
            
            // rennders the dashbord in the content section of hte DOM
            JAWeatherWatch.content.show(this.dashboard);
            
            // renders the sub views within the daskboard
            this.dashboard.getRegion('notifications').show(this.notificationsInit());
            
            
            this.dashboard.getRegion('forecast').show(forecast);
            this.dashboard.getRegion('averages').show(averages);
            
        },
       // initilizes the notifications view and returns a notification Marionette.ItemView Object
        notificationsInit: function(){
            
            var city = new JAWeatherWatch.Cities.City({parishName:this.parish.get('name')});
            var notifications = new JAWeatherWatch.Views.Notifications({model:city});
            city.fetch({
                success: function(){                    
                    console.log('city data fetched sucessfully');                
                                        
                },
                error: function(){
                    alert('could not get weather data');
                    
                }
            });
            
            return notifications;
            
        }
        
    });
    
    /*  Router
    *   This object is used to controll routing within the application (I am not touching this for now lol)
    */
    App.Router = Marionette.AppRouter.extend({});
    
    
    
});