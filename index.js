'use strict';
const fileType = require('file-type');
const seekBzip = require('seek-bzip');

module.exports = opts => input => {
	opts = opts || {};

	if (!Buffer.isBuffer(input)) {
		return Promise.reject(new TypeError(`Expected a Buffer, got ${typeof input}`));
	}

	if (!fileType(input) || fileType(input).ext !== 'bz2') {
		return Promise.resolve([]);
	}

	return new Promise((resolve, reject) => {
		try {
			const data = seekBzip.decode(input);

			resolve([{
				data,
				path: opts.path
			}]);
		} catch (err) {
			reject(err);
		}
	});
};
