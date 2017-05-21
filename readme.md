# decompress-bzip2 [![Build Status](https://travis-ci.org/kevva/decompress-bzip2.svg?branch=master)](https://travis-ci.org/kevva/decompress-bzip2)

> bzip2 decompress plugin


## Install

```
$ npm install --save decompress-bzip2
```


## Usage

```js
const decompress = require('decompress');
const decompressBzip2 = require('decompress-bzip2');

decompress('unicorn.jpg.bz2', 'dist', {
	plugins: [
		decompressBzip2({path: 'unicorn.jpg'})
	]
}).then(() => {
	console.log('Files decompressed');
});
```


## API

### decompressBzip2()(input)

#### input

Type: `Buffer`

Buffer to decompress.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
