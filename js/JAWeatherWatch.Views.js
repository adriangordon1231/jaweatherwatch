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
                console.log(this.model.attributes);
            });
        }
    });
    
    Views.Forecast = Marionette.ItemView.extend({
        template:"#forecast-template"
    });
    
    Views.WeatherAverage = Marionette.ItemView.extend({
        template:'#weather-average-template',
        ui:{
            chart:'#donut-chart'
        },
        onShow: function(){
            this.initializeDonut(); 
        },
        initializeDonut: function(){
            
            var doughnutData = [
				{
					value: 100,
					color:"#F7464A",
					highlight: "#5CB85C",
					label: "Temperature"
				},
				{
					value: 100,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Pressure"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Wind Speed"
				}
			];
            
            var context = this.ui.chart.get(0).getContext("2d");
            
            new Chart(context).Doughnut(doughnutData, {responsive:true});
            
           
            
            
        }
    });
    
});




