'use strict';
var fs = require('fs');
var path = require('path');
var pify = require('pify');
var Promise = require('pinkie-promise');
var rimraf = require('rimraf');
var xdgTrashdir = require('xdg-trashdir');

module.exports = function () {
	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	return xdgTrashdir().then(function (dir) {
		var paths = [
			path.join(dir, 'files'),
			path.join(dir, 'info')
		];

		return Promise.all(paths.map(function (pth) {
			return pify(fs.readdir, Promise)(pth).then(function (files) {
				return Promise.all(files.map(function (file) {
					return pify(rimraf, Promise)(path.join(pth, file));
				}));
			});
		}));
	});
};
