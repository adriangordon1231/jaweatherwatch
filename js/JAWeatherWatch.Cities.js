"use strict"

/*  Cities Module
 *  Contians the models and collections that are intended to model the weather patterns in each parish     
______________________________________________________________________________________________________*/
JAWeatherWatch.module('Cities', function(Cities, JAWeatherWatch, Backbone, Marionette){
    
    /*  Cities
    *   This model is used to model the datat retued by the open weather api 
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
    
    Cities.Forecast = Cities.City.extend({
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=',
        defualts:{
            list: []
        },
        setQuery: function(){
            
            console.log('set query running');
            var query = this.url;
            var search = query.concat(this.get('parishName'),',',this.get('country'),this.get('apiKey'));
            
            return search;
        }
    });
    
    Cities.Parish = Backbone.Model.extend({
        defaults:{
            name:'kingston'
        }
    });
    
    
});



/*  Forecast Model Test => Success
_________________________________*/
/*
var test = new JAWeatherWatch.Cities.Forecast({parishName:'kingston'});

test.fetch({
    success: function(){
        console.log(test.get('list')[0].clouds);
    },
    error: function(){
        alert('error when fetching data');
    }
});
*/