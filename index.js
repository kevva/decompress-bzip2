'use strict';

var bz2 = require('seek-bzip');
var File = require('vinyl');
var isBzip2 = require('is-bzip2');
var path = require('path');
var through = require('through2');

/**
 * bzip2 decompress plugin
 *
 * @api public
 */

module.exports = function () {
    return through.obj(function (file, enc, cb) {
        var files = [];

        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new Error('Streaming is not supported'));
            return;
        }

        if (!isBzip2(file.contents)) {
            cb();
            return;
        }

        files.push(new File({
            contents: bz2.decode(file.contents),
            path: path.basename(file.path).slice(0, -4)
        }));

        cb(null, files);
    });
};
