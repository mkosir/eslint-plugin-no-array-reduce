# eslint-plugin-no-array-reduce

[![npm version][npm-badge]][npm-url]
[![CI][build-badge]][build-url]
[![semantic-release][semantic-badge]][semantic-url]
[![TypeScript][typescript-badge]][typescript-url]

_ESLint rule to disallow `Array.reduce()` method._

To keep you code easy to read and maintainable do yourself and other developers a favour by disallowing `Array.reduce()` method.

![](code.png)

## Install

```bash
npm install --save-dev eslint-plugin-no-array-reduce
```

Then extend eslint config:

```js
{
  "extends": [
    // ...
    "plugin:no-array-reduce/recommended"
  ]
}
```

## Fail

```js
const groceries = [
  { name: 'milk', type: 'dairy' },
  { name: 'cheese', type: 'dairy' },
  { name: 'beef', type: 'meat' },
];

// Filter dairy products
const dairy = groceries.reduce((acc, grocery) => (grocery.type === 'dairy' ? acc.concat(grocery) : acc), []);
```

## Pass

```js
// Filter dairy products
const dairy = groceries.filter((grocery) => grocery.type === 'dairy');
```

Subjectively there are cases where you might want use it with `eslint-disable` but strongly recommended you write it differently.

## Discussions, debates and other resources:

- [Jake Archibald](https://twitter.com/jaffathecake/status/1213077702300852224)
- [Ekrem Aktaş - Write more readable JavaScript](https://betterprogramming.pub/think-again-before-you-use-array-reduce-28f785b5aea9)

## Contributing

All contributions are welcome!

[npm-url]: https://www.npmjs.com/package/eslint-plugin-no-array-reduce
[npm-badge]: https://img.shields.io/npm/v/eslint-plugin-no-array-reduce.svg
[build-badge]: https://github.com/mkosir/eslint-plugin-no-array-reduce/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/mkosir/eslint-plugin-no-array-reduce/actions/workflows/main.yml
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
