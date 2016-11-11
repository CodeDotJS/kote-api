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
    // => { quote: Each of us has a unique part to play in the healing of the world. }
});

kote.brainyQuote().then(quote => {
    console.log(quote);
    // { quote: 'Hope is but the dream of those wake.' }

});

kote.eduro().then(user => {
    console.log(user);
    // => { quote: 'Don’t cry because it’s over, smile because it happened.' }
});
```

## API

- __`kote.goodReads()`__ : Returns `Quote of the Day` from `GoodReads`

- __`kote.eduro()`__ : Returns `Quote of the Day` from `Eduro`

- __`kote.brainyQuote()`__ : Returns `Quote of the Day` from `BrainyQuote`

## Related

- [`Kote`](https://github.com/CodeDotJS/kote) : `Daily injection of wisdom, fun and love through command line`

__`✒`__ API suggested by @NerdDiffer [`✒`](https://github.com/CodeDotJS/kote/issues/1)

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
