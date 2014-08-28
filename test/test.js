'use strict';

var bz2 = require('../');
var Decompress = require('decompress');
var exists = require('fs').exists;
var path = require('path');
var rm = require('rimraf');
var test = require('ava');

test('should decompress a BZ2 file', function (t) {
    t.plan(3);

    var decompress = new Decompress()
        .src(path.join(__dirname, 'fixtures/test.jpg.bz2'))
        .dest(path.join(__dirname, 'tmp'))
        .use(bz2());

    decompress.decompress(function (err) {
        t.assert(!err);

        exists(path.join(decompress.dest(), 'test.jpg'), function (exist) {
            t.assert(exist);

            rm(decompress.dest(), function (err) {
                t.assert(!err);
            });
        });
    });
});
