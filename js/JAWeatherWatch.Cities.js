"use strict"

/*  Cities Module
 *  Contians the models and collections that are intended to model the weather patterns in each parish     
______________________________________________________________________________________________________*/
JAWeatherWatch.module('Cities', function(Cities, JAWeatherWatch, Backbone, Marionette){
    
    /*  Cities
    *   This model is used to model the data retured by the open weather api 
    *   for each individual city in jamaica (must provide parish name!!)
    ________________________________________________________________________*/
    Cities.City = Backbone.Model.extend({
        defaults:{
            // stores my api key as well the required query string to add to the request
            apiKey: '&APPID=84cb7efaf4ac2947aa6381637904ee5e',
            country:'jamaica',
            parishName: false,
            date: new Date(),
            weather: [{
                description: 'no description'
            }],
            main:{
                temp:0,
                pressure:0
            },
            wind:{
                speed:0
            }
        }, 
        url:'http://api.openweathermap.org/data/2.5/weather?q=',
        initialize: function(){
            
            // sets the desired url and fetches the model data
            this.url = this.setQuery();            
            this.fetch();
            
        },
        /*  Function
        *   creates the quersy string that will be sent off to the server
        _________________________________________________________________*/
        setQuery : function(){
            
            var query = this.url;
            var search = query.concat(this.get('parishName'),',',this.get('country'),this.get('apiKey'));
            
            return search;
        }
        
    });
    
    /*  Forecast Model
    *
    *   Models the data retured by the open weather api when making a 
    *   request for a daily weather forecast. This model extends the 
    *   City model and overrides the 'url' variable and the 'setQuery' method
    _________________________________________________________________________*/    
    Cities.Forecast = Cities.City.extend({
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=',
        defualts:{
            list: []
        },
        // refactors the set query method to return a jason array containg a daily weather forecast
        setQuery: function(){
            
            console.log('set query running');
            var query = this.url;
            var search = query.concat(this.get('parishName'),',',this.get('country'),this.get('apiKey'));
            
            return search;
        }
    });
    
    /*  Parish Model
    *
    *   This model exists for the sole purpose of controlling what parish/city is 
    *   to be fetched from the api. 
    _____________________________________________________________________________*/
    Cities.Parish = Backbone.Model.extend({
        defaults:{
            name:'kingston'
        }
    });
    
    
});


