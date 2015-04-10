'use strict';

var path = require('path');
var isJpg = require('is-jpg');
var test = require('ava');
var vinylFile = require('vinyl-file');
var decompressBzip2 = require('../');

test('decompress a BZ2 file', function (t) {
	t.plan(1);

	var file = vinylFile.readSync(path.join(__dirname, 'fixtures/test.jpg.bz2'));
	var stream = decompressBzip2();

	file.extract = true;

	stream.on('data', function (file) {
		t.assert(isJpg(file.contents));
	});

	stream.end(file);
});
