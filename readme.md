# xdg-empty-trash [![Build Status](http://img.shields.io/travis/kevva/xdg-empty-trash.svg?style=flat)](https://travis-ci.org/kevva/xdg-empty-trash)

> Empty trash on Linux

## Install

```sh
$ npm install --save xdg-empty-trash
```

## Usage

```js
var empty = require('xdg-empty-trash');

empty(function (err) {
	if (err) {
		throw err;
	}

	console.log('Trash successfully emptied!');
});
```

## CLI

See the [empty-trash](https://github.com/sindresorhus/empty-trash#cli) CLI.

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
