requirejs.config({
	baseUrl: '/emberjs-testing/js/',
	shim: {
		'ember': {
			deps: ['jquery', 'handlebars'],
			exports: 'Ember'
		}, 
		'data': {
			deps: ['ember'],
			exports: 'DS'
		},
		'qunit': {
			deps: ['jquery', 'handlebars', 'ember'],
			exports: 'QUnit'
		}
	},
	paths: {
		ember: 'lib/ember',
		data: 'lib/ember-data',
		jquery: 'lib/jquery-2.1.1.min',
		text: 'lib/text',
		handlebars: 'lib/handlebars-v1.3.0',
		start: 'app/start',
		qunit: 'lib/qunit-1.15.0',
	}
});

requirejs(['/emberjs-testing/js/load.js'], function() {

});