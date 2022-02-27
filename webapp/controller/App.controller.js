sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.demo.d3.controller.App", {
		onInit:function(){
			MessageToast.show("Basic template works!");
		}
	});

});