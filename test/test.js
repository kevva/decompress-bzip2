'use strict';

var bzip2 = require('../');
var isJpg = require('is-jpg');
var path = require('path');
var read = require('vinyl-file').read;
var test = require('ava');
var vinylFile = require('vinyl-file');

test('decompress a BZ2 file', function (t) {
	t.plan(1);

	var file = vinylFile.readSync(path.join(__dirname, 'fixtures/test.jpg.bz2'));
	var stream = bzip2();

	file.extract = true;

	stream.on('data', function (file) {
		t.assert(isJpg(file.contents));
	});

	stream.end(file);
});
