fast-for
======

Optimize your collection looping by 2x faster.

[![npm version][npm-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
![License][license]

## Description

`fast-for` optimizes your collection looping by 2x faster. Fast For uses for loop that runs only half of your collection's length by returning 2 items per loop.

## Install

```console
$ npm install fast-for
```

## Usage

```js
import fastFor from 'fast-for';

const testArray = [...Array(1000).keys()];

fastFor(({ first, second }) => {
  console.log({ first, second }); // this loop will run 500x instead of 1000x
}, testArray);
```

## License

MIT License: Pj Salita &lt;pj.salita@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/fast-for.svg
[npm-url]: https://npmjs.org/package/fast-for
[npm-downloads-image]: https://img.shields.io/npm/dm/fast-for.svg
[license]: https://img.shields.io/npm/l/fast-for.svg