"use strict";JAWeatherWatch.module("Views",function(e,t,i,a){e.SideMenu=a.ItemView.extend({template:"#menu-template"}),e.Dashboard=a.LayoutView.extend({template:"#dashboard-template",regions:{notifications:"#notifications"}}),e.Notifications=a.ItemView.extend({template:"#notifications-template"})});