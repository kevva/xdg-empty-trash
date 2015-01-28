'use strict';

var empty = require('./');
var fs = require('fs');
var path = require('path');
var test = require('ava');
var trash = require('xdg-trash');

test('empty trash', function (t) {
	t.plan(5);

	var home = process.env.XDG_DATA_HOME || path.join(process.env.HOME,'.local/share');
	var files = path.join(home, 'Trash/files');

	fs.writeFile('file', '', function (err) {
		t.assert(!err, err);

		trash(['file'], function (err) {
			t.assert(!err, err);

			empty(function (err) {
				t.assert(!err, err);

				fs.readdir(files, function (err, paths) {
					t.assert(!err, err);
					t.assert(!paths.length);
				});
			});
		});
	});
});
