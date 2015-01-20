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
        template:'#dashboard-template'
    });
    
});




