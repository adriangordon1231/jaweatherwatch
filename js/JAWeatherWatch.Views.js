"use strict"

JAWeatherWatch.module('Views', function(Views, JAWeatherWatch,Backbone,Marionette){
    
    /*  SideMenu
    *   The sidemenu itemview hold the tempate and actions affectting the app's 
    *   main side menu
    ___________________________________________________________________________*/
    Views.SideMenu = Marionette.ItemView.extend({
        template:'#menu-template',
        ui:{
            selector:'#parish-selector'
        },
        events:{
            "change @ui.selector":'updateParish'
        },
        onRender: function(){
            
            //this.$el.find('#parish-selector').on('change', this.updateParish);
            
        },
        /* Updates the value of the model once the selector value changes*/
        updateParish: function(){
            
            this.model.set('name', this.ui.selector.val().toLocaleLowerCase() );
            
        }
    });
    
    Views.Dashboard = Marionette.LayoutView.extend({
        template:'#dashboard-template',
        regions:{
            notifications:'#notifications',
            forecast:'#forecast',
            averages:'#average'
        }
    });
    
    Views.Notifications = Marionette.ItemView.extend({
        template:"#notifications-template",
        initialize: function(){
            
            // rerenders everytime the model changes
            this.listenTo(this.model, 'change', function(){
                this.render();
            });
        }
    });
    
    Views.Forecast = Marionette.ItemView.extend({
        template:"#forecast-template"
    });
    
    Views.WeatherAverage = Marionette.ItemView.extend({
        template:'#weather-average-template',
        ui:{
            chart:'#bar-chart'
        },
        onShow: function(){
            this.initializeDonut(); 
        },
        initializeDonut: function(){
            
            var mainData = this.model.get('main');
            var temperature = mainData.temp; 
            var pressure = mainData.pressure;
            var wind = this.model.get('wind').speed;
            
            
            var barChartData = {
                labels : ["Temperature","Pressure","Wind Speed"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data : [temperature,pressure,wind]
                    }
                ]

            };

            var context = this.ui.chart.get(0).getContext("2d");
            
            new Chart(context).Bar(barChartData, {responsive:true});
            
           
            
            
        }
    });
    
});




