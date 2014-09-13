'use strict';

var bzip2 = require('../');
var isJpg = require('is-jpg');
var path = require('path');
var read = require('vinyl-file').read;
var test = require('ava');

test('decompress a BZ2 file', function (t) {
    t.plan(2);

    read(path.join(__dirname, 'fixtures/test.jpg.bz2'), function (err, file) {
        t.assert(!err);

        var stream = bzip2();

        stream.on('data', function (file) {
            t.assert(isJpg(file.contents));
        });

        stream.end(file);
    });
});
