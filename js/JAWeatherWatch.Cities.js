"use strict"

/*  Parishes Module
 *  Contians the models and collections that are intended to model the weather patterns in each parish     
*/
JAWeatherWatch.module('Cities', function(Cities, JAWeatherWatch, Backbone, Marionette){
    
    Cities.City = Backbone.Model.extend({
        defaults:{
            // stores my api key as well the required query string to add to the request
            apiKey: '&APPID=84cb7efaf4ac2947aa6381637904ee5e',
            country:'jamaica',
            parishName: false
        }, 
        initialize: function(){
            
            // get json data from api
        }
    });
    
    
});


var test = new JAWeatherWatch.Cities.City({parishName:'kingston'});

console.log(test.attributes);