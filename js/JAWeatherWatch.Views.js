"use strict"

JAWeatherWatch.module('Views', function(Views, JAWeatherWatch,Backbone,Marionette){
    
    /*  SideMenu
    *   The sidemenu itemview hold the tempate and actions affectting the app's 
    *   main side menu
    ___________________________________________________________________________*/
    Views.SideMenu = Marionette.ItemView.extend({
        template:'#menu-template'
    });
    
});


/* Side Menu Test  => works*/
/*
var test = new JAWeatherWatch.Views.SideMenu({el:"#test-row"});
test.render();
*/

