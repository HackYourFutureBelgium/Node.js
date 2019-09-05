# HackYourFuture Node.js Week 2 - Homework

## Assignment 1
Refactor last week's homework to make it dry, modular and as easy to read as possible.
You can find some inspiration in the [notes from class](../../wiki/Writing-readable,-DRY-&-modular-code).

## Assignment 2

The second assignment is to create a command line application like we did in class. Instead of keeping a state we will now keep a to-do list. Make sure that at least the following specification works, but you are also free to add extra stuff to it.

- Write a Node.js command line application
- The user must be able to run the file using `node index.js` or `node .` in the
  project directory
- There must be a `help` section that lists all the commands and a short
  description for each of them
- The user must be able to `add`, `remove`, `update` and `list` to-dos.
- The user must be able to remove all to-dos at once.

You can draw some inspiration from the [examples given in class](../lecture). Keep in mind that these examples have not been refactored to dry, modular code yet!

The following commands must be present:

### No command or `help`

Shows help section

```
node index.js
```

or

```
node index.js help
```

### `list`

Shows current to-dos, or shows an appropriate text if there are no to-dos

```
node index.js list
```

### `add`

Adds a to-do item. All the words behind `add` are entered as 1 to-do item to the
list.

```
node index.js add "Buy groceries"
```

### `remove`

Removes a to-do item by its 1-base index, e.g. to remove second item, execute:

```
node index.js remove 2
```

### `update`

Updates a to-do item with new text:

```
node index.js update 3 "Brush teeth"
```

### `reset`

Removes all to-do items from the list:

```
node index.js reset
```

## Things to consider  

- Handle edge cases, i.e. control what happens if user enters unexpected input,
  e.g. `remove -100`.
- Write [dry, modular code that is easy to read](../../wiki/Writing-readable,-DRY-&-modular-code): choose good variable and function names, keeps code involving a single task bundled together in a function or module, refactor repeated code into a function.

## Bonus  
- Use [commander](https://www.npmjs.com/package/commander) library to implement
  command line interface

