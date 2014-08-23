'use strict';

var bz2 = require('../');
var Decompress = require('decompress');
var fs = require('fs');
var path = require('path');
var test = require('ava');

test('should decompress a BZ2 file', function (t) {
    var decompress = new Decompress()
        .src(path.join(__dirname, 'fixtures/test.jpg.bz2'))
        .dest(path.join(__dirname, 'tmp'))
        .use(bz2());

    decompress.decompress(function (err) {
        t.assert(!err);

        fs.exists(path.join(decompress.dest(), 'test.jpg'), function (exists) {
            t.assert(exists);
        });
    });
});
