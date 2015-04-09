'use strict';

var fs = require('fs');
var path = require('path');
var eachAsync = require('each-async');
var rimraf = require('rimraf');
var xdgTrashDir = require('xdg-trashdir');

module.exports = function (cb) {
	cb = cb || function () {};

	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	xdgTrashDir(function (err, dir) {
		if (err) {
			cb(err);
			return;
		}

		var paths = [
			path.join(dir, 'files'),
			path.join(dir, 'info')
		];

		eachAsync(paths, function (p, i, next) {
			fs.readdir(p, function (err, files) {
				if (err) {
					cb(err);
					return;
				}

				files = files.map(function (file) {
					return path.join(p, file);
				});

				eachAsync(files, function (file, i, n) {
					rimraf(file, function (err) {
						if (err) {
							n(err);
							return;
						}

						n();
					});
				}, function (err) {
					if (err) {
						next(err);
						return;
					}

					next();
				});
			});
		}, function (err) {
			if (err) {
				cb(err);
				return;
			}

			cb();
		});
	});
};
