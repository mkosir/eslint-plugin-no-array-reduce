# eslint-plugin-no-array-reduce

ESLint rule to disallow `Array.reduce()` method.

To keep you code easy to read and maintainable do yourself and other developers a favour by disallowing `Array.reduce()` method.

![](code-quality.png)

<!--
## Install

```bash
npm install eslint-plugin-no-array-reduce
```

Then extend the recommended eslint config:
```js
{
  "extends": [
    // ...
    "plugin:no-array-reduce/recommended"
  ]
}
```
-->

## Fail

```js
const groceries = [
  { name: "milk", type: "dairy" },
  { name: "cheese", type: "dairy" },
  { name: "beef", type: "meat" },
];

// Filter dairy products
const dairy = groceries.reduce(
  (acc, grocery) => (grocery.type === "dairy" ? acc.concat(grocery) : acc),
  []
);
```

## Pass

```js
// Filter dairy products
const dairy = groceries.filter((grocery) => grocery.type === "dairy");
```

Subjectively there are cases where you might want use it with `eslint-disable` but strongly recommended you write it differently.

## Discussions, debates and other resources:

- [Jake Archibald](https://twitter.com/jaffathecake/status/1213077702300852224)
- [Ekrem Aktaş - Write more readable JavaScript](https://betterprogramming.pub/think-again-before-you-use-array-reduce-28f785b5aea9)

## Contributing

All contributions are welcome!
