/*global describe, it */
'use strict';

var assert = require('assert');
var bz2 = require('../');
var Decompress = require('decompress');
var fs = require('fs');
var path = require('path');

describe('bzip2()', function () {
    it('should decompress a BZ2 file', function (cb) {
        var decompress = new Decompress();

        decompress
            .src(path.join(__dirname, 'fixtures/test.jpg.bz2'))
            .dest(path.join(__dirname, 'tmp'))
            .use(bz2())
            .decompress(function (err) {
                assert(!err);
                assert(fs.existsSync(path.join(__dirname, 'tmp/test.jpg')));
                cb();
            });
    });
});
