'use strict';
var fs = require('fs');
var path = require('path');
var test = require('ava');
var xdgTrash = require('xdg-trash');
var xdgTrashdir = require('xdg-trashdir');
var xdgEmptyTrash = require('./');

test('empty trash', function (t) {
	t.plan(2);

	xdgTrashdir().then(function (dir) {
		fs.writeFileSync('f0', '');
		dir = path.join(dir, 'files');

		xdgTrash(['f0']).then(function () {
			t.assert(fs.readdirSync(dir).length, fs.readdirSync(dir).length);

			xdgEmptyTrash().then(function () {
				t.assert(!fs.readdirSync(dir).length, fs.readdirSync(dir).length);
			});
		});
	});
});
