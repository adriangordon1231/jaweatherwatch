"use strict"

JAWeatherWatch.module('App', function(App,JAWeatherWatch, Backbone, Marionette){
    
    /*      Controller
    *       This controller is used to orchestrate the general flow of the appliction
    *       Bacially, it is used to pull everything together
    */
    App.Controller = Marionette.Controller.extend({
        
        start:function(){
            
            this.showMenu();
        },
        showMenu:function(){
            JAWeatherWatch.menu.show(new JAWeatherWatch.Views.SideMenu());
        }
        
    });
    
    /*  Router
    *   This object is used to controll routing within the application (I am not touching this for now lol)
    */
    App.Router = Marionette.AppRouter.extend({});
    
    
    
});