# xdg-empty-trash [![Build Status](http://img.shields.io/travis/kevva/xdg-empty-trash.svg?style=flat)](https://travis-ci.org/kevva/xdg-empty-trash)

> Empty trash on Linux


## Install

```
$ npm install --save xdg-empty-trash
```


## Usage

```js
const xdgEmptyTrash = require('xdg-empty-trash');

xdgEmptyTrash().then(() => {
	console.log('Trash successfully emptied!');
});
```


## API

### xdgEmptyTrash()

Empties the trash. Returns a promise that resolves nothing.


## CLI

See the [empty-trash](https://github.com/sindresorhus/empty-trash#cli) CLI.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
