/*global Backbone */
'use strict';

window.JAWeatherWatch = new Backbone.Marionette.Application();


JAWeatherWatch.addRegions({
    menu:'#main-menu',
    content:'#page-wrapper'
});

/*  Begins the Backbone history api on Applicaiton Start
________________________________________________________*/
JAWeatherWatch.on('start',function(){
    //tmp
    console.log(this.content);
    
    Backbone.history.start();
});

