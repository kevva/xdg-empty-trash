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
	var paths = [];

	fs.readdir(path.join(home, 'Trash/files'), function (err, files) {
		if (err) {
			cb(err);
			return;
		}

		files.forEach(function (file) {
			paths.push(path.join(home, 'Trash/files', file));
		});

		fs.readdir(path.join(home, 'Trash/info'), function (err, files) {
			if (err) {
				cb(err);
				return;
			}

			files.forEach(function (file) {
				paths.push(path.join(home, 'Trash/info', file));
			});

			each(paths, function (p, i, next) {
				rm(p, function (err) {
					if (err) {
						next(err);
						return;
					}

					next();
				});
			}, function (err) {
				if (err) {
					cb(err);
					return;
				}

				cb();
			});
		});
	});
};
