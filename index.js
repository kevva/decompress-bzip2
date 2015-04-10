'use strict';

var path = require('path');
var isBzip2 = require('is-bzip2');
var seekBzip = require('seek-bzip');
var through = require('through2');
var Vinyl = require('vinyl');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		var self = this;

		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new Error('Streaming is not supported'));
			return;
		}

		if (!file.extract || !isBzip2(file.contents)) {
			cb(null, file);
			return;
		}

		self.push(new Vinyl({
			contents: seekBzip.decode(file.contents),
			path: path.basename(file.path).slice(0, -4)
		}));

		cb();
	});
};
