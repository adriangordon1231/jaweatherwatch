"use strict";JAWeatherWatch.module("Cities",function(t,e,a){t.City=a.Model.extend({defaults:{apiKey:"&APPID=84cb7efaf4ac2947aa6381637904ee5e",country:"jamaica",parishName:!1},url:"http://api.openweathermap.org/data/2.5/weather?q=",initialize:function(){this.url=this.setQuery(),this.fetch()},setQuery:function(){var t=this.url,e=t.concat(this.get("parishName"),",",this.get("country"),this.get("apiKey"));return e}}),t.Forecast=t.City.extend({url:"http://api.openweathermap.org/data/2.5/forecast/daily?q=",setQuery:function(){console.log("set query running");var t=this.url,e=t.concat(this.get("parishName"),",",this.get("country"),this.get("apiKey"));return e}})});