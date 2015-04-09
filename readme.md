# xdg-empty-trash [![Build Status](http://img.shields.io/travis/kevva/xdg-empty-trash.svg?style=flat)](https://travis-ci.org/kevva/xdg-empty-trash)

> Empty trash on Linux


## Install

```
$ npm install --save xdg-empty-trash
```


## Usage

```js
var xdgEmptyTrash = require('xdg-empty-trash');

xdgEmptyTrash(function (err) {
	console.log('Trash successfully emptied!');
});
```


## API

### xdgEmptyTrash(callback)

Empties the trash.

#### callback(err)

Type: `function`

Returns nothing but a possible exception.


## CLI

See the [empty-trash](https://github.com/sindresorhus/empty-trash#cli) CLI.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
