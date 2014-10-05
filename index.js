'use strict';

var each = require('each-async');
var fs = require('fs');
var path = require('path');
var rm = require('rimraf');

/**
 * Empty trash on Linux
 *
 * @param {Function} cb
 * @api public
 */

module.exports = function (cb) {
	var home = process.env.XDG_DATA_HOME || path.join(process.env.HOME,'.local/share');
	var paths = [
		path.join(home, 'Trash/files'),
		path.join(home, 'Trash/info')
	];

	each(paths, function (p, i, next) {
		fs.readdir(p, function (err, files) {
			if (err) {
				cb(err);
				return;
			}

			files = files.map(function (file) {
				return path.join(p, file);
			});

			each(files, function (file, i, n) {
				rm(file, function (err) {
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
};