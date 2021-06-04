jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"smartform/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"smartform/test/integration/pages/App",
	"smartform/test/integration/pages/Browser",
	"smartform/test/integration/pages/Master",
	"smartform/test/integration/pages/Detail",
	"smartform/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "smartform.view."
	});

	sap.ui.require([
		"smartform/test/integration/MasterJourney",
		"smartform/test/integration/NavigationJourney",
		"smartform/test/integration/NotFoundJourney",
		"smartform/test/integration/BusyJourney",
		"smartform/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});