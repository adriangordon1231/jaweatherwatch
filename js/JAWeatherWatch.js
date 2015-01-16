window.JAWeatherWatch = new Backbone.Marionette.Application();


/*  Begins the Backbone history api on Applicaiton Start
________________________________________________________*/
JAWeatherWatch.on('start',function(){
    Backbone.history.start();
});