# decompress-bzip2 [![Build Status](https://travis-ci.org/kevva/decompress-bzip2.svg?branch=master)](https://travis-ci.org/kevva/decompress-bzip2)

> bzip2 decompress plugin

## Install

```sh
$ npm install --save decompress-bzip2
```

## Usage

```js
var Decompress = require('decompress');
var zip = require('decompress-bzip2');

var decompress = new Decompress()
    .src('foo.jpg.bz2')
    .dest('destFolder')
    .use(bz2());

decompress.decompress();
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
