# Reading Commandline Arguments

## Recap

- `process` is a [global](https://nodejs.org/api/globals.html) [variable](https://stackabuse.com/using-global-variables-in-node-js/).
- [`argv`](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) is a property on `process` which is an [array that receives the command line arguments](https://www.quora.com/What-does-process-argv-mean-in-Node-How-does-it-work) at the beginning of the program.
- The first two shell parameters are always the program being run (in this case `node`) and the file being run (in this case whatever script you're running)
- These are followed by any extra command line arguments you pass to it.
