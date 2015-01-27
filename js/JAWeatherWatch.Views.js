"use strict"

JAWeatherWatch.module('Views', function (Views, JAWeatherWatch, Backbone, Marionette) {

    /*  SideMenu View
    *
    *   The sidemenu itemview hold the tempate and actions affectting the app's 
    *   main side menu
    ___________________________________________________________________________*/
    Views.SideMenu = Marionette.ItemView.extend({
        template: '#menu-template',
        ui: {
            selector: '#parish-selector'
        },
        initialize: function(){
            
            this.listenTo(this.model,'change', function(){
                //todo : change the value of the select box when it matches a url
            });
        },
        events: {
            "change @ui.selector": 'updateParish'
        },
        /* Updates the value of the model once the selector value changes*/
        updateParish: function () {

            this.model.set('name', this.ui.selector.val().toLocaleLowerCase());
            

        }
    });
    
    /*  DashBoard View
    *
    *   A simple layout view that stores the main app template and defines the 
    *   'active' sections of the application
    ___________________________________________________________________________*/
    Views.Dashboard = Marionette.LayoutView.extend({
        template: '#dashboard-template',
        regions: {
            notifications: '#notifications',
            forecast: '#forecast',
            averages: '#average'
        }
    });

    Views.Notifications = Marionette.ItemView.extend({
        template: "#notifications-template",
        initialize: function () {

            // rerenders everytime the model changes
            this.listenTo(this.model, 'change', function () {
                this.render();
            });
            
        }
    });
    
    /*  Forecast View
    *
    *   Controls the rendering of the weather forecast line graph that
    *   is displayed in the '#forecast' section of the application
    _________________________________________________________________*/

    Views.Forecast = Marionette.ItemView.extend({
        template: "#forecast-template",
        ui: {
            chart: '#forecast-canvas'
        },
        /*
        *   Generates the graph once the data has been fetched
        ________________________________________________________*/
        initialize: function(){
            this.listenTo(this.model, 'change', function(){
                this.initLineGraph();
            });
        },

        //  Generates a line Graph displaying forecast data
        initLineGraph: function () {
            
            // gets the values insude the 'list' attribute of the model
            var forecast = this.model.get('list');
            
            // filters the list by temperature
            var tempForecast = _.map(forecast, function(val){
                return val.temp.day; 
            });
            
            // initilizes the data values needed draw a line graph
            var lineChartData = {
                labels: ["day 1", "2", "3", "4", "5", "6", "7"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: tempForecast
                    }
                ]

            };
            
            // draws a line graph on the specified html5 cnavas
            var context = this.ui.chart.get(0).getContext("2d");
            new Chart(context).Line(lineChartData, {
                responsive: true
            });

        }
    });
    
    /*  Weather Average View
    *
    *   Controls the rendering of the bar graph in the '#averages'
    *   section of the application
    */
    Views.WeatherAverage = Marionette.ItemView.extend({
        template: '#weather-average-template',
        ui: {
            chart: '#bar-chart'
        },
        onShow: function () {
            this.initializeDonut();
        },
        initializeDonut: function () {
            
            // reteives the relevent data values from the model
            var mainData = this.model.get('main');
            var temperature = mainData.temp;
            var pressure = mainData.pressure;
            var wind = this.model.get('wind').speed;
            
            // initializes the data needed to draw the graph
            var barChartData = {
                labels: ["Temperature", "Pressure", "Wind Speed"],
                datasets: [
                    {
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: [temperature, pressure, wind]
                    }
                ]

            };
            
            // draws a bar graph in the specified html canvas element
            var context = this.ui.chart.get(0).getContext("2d");
            new Chart(context).Bar(barChartData, {
                responsive: true
            });

        }
    });

});