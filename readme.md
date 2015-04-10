# decompress-bzip2 [![Build Status](http://img.shields.io/travis/kevva/decompress-bzip2.svg?style=flat)](https://travis-ci.org/kevva/decompress-bzip2)

> bzip2 decompress plugin


## Install

```
$ npm install --save decompress-bzip2
```


## Usage

```js
var Decompress = require('decompress');
var decompressBzip2 = require('decompress-bzip2');

var decompress = new Decompress()
	.src('foo.jpg.bz2')
	.dest('dest')
	.use(decompressBzip2())
	.run();
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var decompressBzip2 = require('decompress-bzip2');
var gulp = require('gulp');
var vinylAssign = require('vinyl-assign');

gulp.task('default', function () {
	return gulp.src('foo.jpg.bz2')
		.pipe(vinylAssign({extract: true}))
		.pipe(decompressBzip2())
		.pipe(gulp.dest('dest'));
});
```


## API

### decompressBzip2(options)

#### options.strip

Type: `number`  
Default: `0`

Remove leading directory components from extracted files.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
