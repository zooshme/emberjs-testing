define([
	'ember',
	'data',
	'qunit'
], function() {
	var App = window.App = Ember.Application.create();

	App.Router.map(function() {

	});

	/* ================= Testing ==================== */

	App.setupForTesting();
	App.rootElement = '#ember-testing';

	test('test visit / and click button', function() {
		expect(1);
		ok(0);
	});

	/* ================= End ======================== */
})