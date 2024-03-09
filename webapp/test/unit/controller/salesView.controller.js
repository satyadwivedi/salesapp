/*global QUnit*/

sap.ui.define([
	"comsatya/salesapp/controller/salesView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("salesView Controller");

	QUnit.test("I should test the salesView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
