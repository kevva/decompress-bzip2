'use strict';

var archiveType = require('archive-type');
var bz2 = require('seek-bzip');
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

        if (archiveType(file.contents) !== 'bz2') {
            return cb();
        }

        files.push({ contents: bz2.decode(file.contents), path: path.basename(file.path).slice(0, -4) });
        decompress.files = files;
        cb();
    };
};
