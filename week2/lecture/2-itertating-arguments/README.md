# `argv` is just an array

## Recap

- `process.argv` is just an array
- Whatever you can do with an array, you can do with `process.argv`

### You can Iterate Over It

```js
for (let i = 0; i < process.argv.length; i++) {
	console.log(`The ${i}th argument is ${process.argv[i]}`)
}
```

### You can Slice It

```js
const usableArguments = process.argv.slice(2);
```

### Access Nth Element

```js
const fourthElement = process.argv[3];
```
