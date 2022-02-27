sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../chart/donutChart"
], function (Controller, MessageToast, donutChart) {
	"use strict";

	return Controller.extend("com.demo.d3.controller.App", {
		onInit: function () {
			MessageToast.show("Basic template works!");
			// initialize a pie chart instance
			this.chart = donutChart()
			// configure the inner and outer radius for the chart
			this.chart.innerRadius(100)
			this.chart.outerRadius(140)
		},
		draw: function () {
			// sample data
			var data = [
				{
					'name': 'jun shen',
					'score': 30,
					'color': 'red'
				},
				{
					'name': 'aaron',
					'score': 60,
					'color': 'yellow'
				},
				{
					'name': 'atige',
					'score': 137,
					'color': 'purple'
				},
				{
					'name': 'linus',
					'score': 46,
					'color': 'black'
				},
				{
					'name': 'grass',
					'score': 8,
					'color': 'green'
				}
			]

			// configure the width and height for the chart
			this.chart.width($('#pieChart').width())
			this.chart.height($('#pieChart').height())

			// draw the chart
			d3.select('#pieChart').data([data])
				.call(this.chart)
		}
	});

});