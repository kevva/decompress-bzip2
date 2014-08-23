'use strict';

var bz2 = require('seek-bzip');
var isBzip2 = require('is-bzip2');
var path = require('path');

/**
 * bzip2 decompress plugin
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function () {
    return function (file, decompress, cb) {
        var files = [];

        if (!isBzip2(file.contents)) {
            cb();
            return;
        }

        files.push({ contents: bz2.decode(file.contents), path: path.basename(file.path).slice(0, -4) });
        decompress.files = files;
        cb();
    };
};
