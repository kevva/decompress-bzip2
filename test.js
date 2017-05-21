import fs from 'fs';
import path from 'path';
import isJpg from 'is-jpg';
import pify from 'pify';
import test from 'ava';
import m from './';

const fsP = pify(fs);

test('extract file', async t => {
	const buf = await fsP.readFile(path.join(__dirname, 'fixture.jpg.bz2'));
	const files = await m({path: 'test.jpg'})(buf);

	t.is(files[0].path, 'test.jpg');
	t.true(isJpg(files[0].data));
});

test('throw on wrong input', async t => {
	await t.throws(m()('foo'), 'Expected a Buffer, got string');
});
