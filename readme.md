# decompress-bzip2 [![Build Status](http://img.shields.io/travis/kevva/decompress-bzip2.svg?style=flat)](https://travis-ci.org/kevva/decompress-bzip2)

> bzip2 decompress plugin

## Install

```sh
$ npm install --save decompress-bzip2
```

## Usage

```js
var Decompress = require('decompress');
var bzip2 = require('decompress-bzip2');

var decompress = new Decompress()
	.src('foo.jpg.bz2')
	.dest('dest')
	.use(bzip2());

decompress.run(function (err, files) {
	if (err) {
		throw err;
	}

	console.log('Files extracted successfully!'); 
});
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var gulp = require('gulp');
var bzip2 = require('decompress-bzip2');

gulp.task('default', function () {
	return gulp.src('foo.jpg.bz2')
		.pipe(bzip2())
		.pipe(gulp.dest('dest'));
});
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
