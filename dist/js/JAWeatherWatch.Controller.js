"use strict";JAWeatherWatch.module("App",function(e,o,t,n){e.Controller=n.Controller.extend({start:function(){this.showMenu(),this.showDashboard()},showMenu:function(){o.menu.show(new o.Views.SideMenu)},showDashboard:function(){var e=new o.Views.Dashboard,t=new o.Views.Notifications,n=new o.Views.Forecast({});o.content.show(e),e.getRegion("notifications").show(t),e.getRegion("forecast").show(n)}}),e.Router=n.AppRouter.extend({})});