import fs from 'fs';
import path from 'path';
import test from 'ava';
import xdgTrash from 'xdg-trash';
import xdgTrashdir from 'xdg-trashdir';
import fn from './';

test('empty trash', async t => {
	t.plan(2);

	const dir = await xdgTrashdir();

	fs.writeFileSync('f0', '');
	const files = path.join(dir, 'files');

	await xdgTrash(['f0']);
	t.ok(fs.readdirSync(files).length);

	await fn();
	t.is(fs.readdirSync(files).length, 0);
});
