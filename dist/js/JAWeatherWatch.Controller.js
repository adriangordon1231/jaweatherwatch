"use strict";JAWeatherWatch.module("App",function(o,e,n,t){o.Controller=t.Controller.extend({start:function(){this.showMenu(),this.showDashboard()},showMenu:function(){e.menu.show(new e.Views.SideMenu)},showDashboard:function(){var o=new e.Views.Dashboard,n=new e.Views.Notifications;e.content.show(o),o.getRegion("notifications").show(n)}}),o.Router=t.AppRouter.extend({})});