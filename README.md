# kote-api [![Build Status](https://travis-ci.org/CodeDotJS/kote-api.svg?branch=master)](https://travis-ci.org/CodeDotJS/kote-api)

> API to fetch quote of the day from the sites like GoodReads, BrainyQuote and Eduro.

## install
```
$ npm install --save kote-api
```

## Usage

```js
'use strict';

const kote = require('kote-api');

kote.goodReads().then(quote => {
    console.log(quote);
    // =>
});

kote.brainyQuote().then(quote => {
    console.log(quote);
    // =>
});

kote.eduro().then(user => {
    console.log(user);
});
```

## API

- __`kote.goodReads()`__ : Returns `Quote of the Day` from `GoodReads`

- __`kote.eduro()`__ : Returns `Quote of the Day` from `Eduro`

- __`kote.brainyQuote()`__ : Returns `Quote of the Day` from `BrainyQuote`

## Related

- `Kote` : `Daily injection of wisdom, fun and love through command line`

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
