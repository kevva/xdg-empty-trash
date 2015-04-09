'use strict';

var fs = require('fs');
var path = require('path');
var test = require('ava');
var xdgTrash = require('xdg-trash');
var xdgTrashdir = require('xdg-trashdir');
var xdgEmptyTrash = require('./');

test('empty trash', function (t) {
	t.plan(4);

	xdgTrashdir(function (err, dir) {
		t.assert(!err, err);

		fs.writeFileSync('f0', '');
		dir = path.join(dir, 'files');

		xdgTrash(['f0'], function (err) {
			t.assert(!err, err);

			xdgEmptyTrash(function (err) {
				t.assert(!err, err);
				t.assert(!fs.readdirSync(dir).length, fs.readdirSync(dir).length);
			});
		});
	});
});
