jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"smartform/test/integration/NavigationJourneyPhone",
		"smartform/test/integration/NotFoundJourneyPhone",
		"smartform/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});