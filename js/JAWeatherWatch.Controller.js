"use strict"

JAWeatherWatch.module('App', function(App,JAWeatherWatch, Backbone, Marionette){
    
    /*      Controller
    *       This controller is used to orchestrate the general flow of the appliction
    *       Bacially, it is used to pull everything together
    */
    App.Controller = Marionette.Controller.extend({
        
        dashboard: new JAWeatherWatch.Views.Dashboard(),
        parish: new JAWeatherWatch.Cities.Parish(),
        jamaica: new JAWeatherWatch.Cities.City({parishName:""}),
        start:function(){
            
            this.showMenu();
            this.showDashboard();
            
            this.listenTo(this.parish, 'change', function(){
                this.dashboard.getRegion('notifications').show(this.notificationsInit());
                this.dashboard.getRegion('forecast').show(this.forecastInit());
            });
            this.listenTo(this.jamaica, 'change', function(){
                this.dashboard.getRegion('averages').show(this.averagesInit());
            });
            
            new JAWeatherWatch.App.Router();
        },
        // loads the SideMenu item view in the menu region of the app
        showMenu:function(){
            JAWeatherWatch.menu.show(new JAWeatherWatch.Views.SideMenu({model:this.parish}));
        },
        // loads all the views related to the main application dashbaord
        showDashboard: function(){            
            
            // rennders the dashbord in the content section of hte DOM
            JAWeatherWatch.content.show(this.dashboard);
            
            // renders the sub views within the daskboard
            this.dashboard.getRegion('notifications').show(this.notificationsInit());  
            this.dashboard.getRegion('forecast').show(this.forecastInit());
            this.dashboard.getRegion('averages').show(this.averagesInit());
            
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
            
        },
        averagesInit: function(){
            
            //initialize a new Cities Module with no parish name            
            var averages = new JAWeatherWatch.Views.WeatherAverage({model:this.jamaica});
            
            this.jamaica.fetch({
                success: function(){
                    console.log('jamaica weather pattern data fetched successfully');
                },
                error: function(){
                    alert('could not weather average data');
                }
            });
            
            return  averages;
        }, 
        forecastInit: function(){
            
            var estimates = new JAWeatherWatch.Cities.Forecast({parishName:this.parish.get('name')});
            
            var forecast = new JAWeatherWatch.Views.Forecast({model:estimates});
            
            estimates.fetch({
                success: function(){
                    console.log('forecast data fetched successfully');
                    
                },
                error: function(){
                    alert('could not fetch forecast data');
                }
            });
            
            return forecast; 
        },
        // Dynamically sets the parish name based on the entered url
       changeCity: function(query){
           this.parish.set('name',query);
       }
        
    });
    
    /*  Router
    *   This object is used to controll routing within the application (I am not touching this for now lol)
    */
    App.Router = Marionette.AppRouter.extend({
        appRoutes:{
            ':query':'changeCity'
        }
    });
    
    
    
});