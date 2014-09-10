'use strict';

var bzip2 = require('../');
var File = require('vinyl');
var fs = require('fs');
var isJpg = require('is-jpg');
var path = require('path');
var test = require('ava');

test('decompress a BZ2 file', function (t) {
    t.plan(2);

    fs.readFile(path.join(__dirname, 'fixtures/test.jpg.bz2'), function (err, buf) {
        t.assert(!err);

        var stream = bzip2();
        var file = new File({
            contents: buf
        });

        stream.on('data', function (files) {
            t.assert(isJpg(files[0].contents));
        });

        stream.end(file);
    });
});
