# kote-api [![Build Status](https://travis-ci.org/CodeDotJS/kote-api.svg?branch=master)](https://travis-ci.org/CodeDotJS/kote-api)

> Easily fetch quote of the day from BrainyQuotes and Eduro.

## Install
```
$ npm install --save kote-api
```

## Usage

```js
'use strict';

const kote = require('kote-api');

kote.eduro().then(user => {
  console.log(user);
  // => { quote: 'Don’t cry because it’s over, smile because it happened.' }
});

kote.brainyQuote().then(quote => {
  console.log(quote);
  // { quote: 'Hope is but the dream of those wake.' }
});

// or

kote.brainyQuote('nature').then(quote => {
  console.log(quote);
  // { quote: A good garden may have some weeds. }
});
```

## API

- __`kote.brainyQuote()`__

- __`kote.brainyQuote(opts)`__

`opts`
- `love`
- `nature`
- `art`
- `funny`

__`Typeof`__

__`opts`__ `:` `string`

- __`kote.eduro()`__

## Related

- [`Kote`](https://github.com/CodeDotJS/kote) : `Daily injection of wisdom, fun and love through command line`

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
