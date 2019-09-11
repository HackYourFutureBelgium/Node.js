# Persisting State in Files

- We're reading files as `utf8`, this means `data` will be of type `string`
- To work with the data we need to convert the JSON (type string), to Javascript Objects (`JSON.parse(data)`)
- Before writing back to the file, we must convert it to JSON again (`JSON.stringify(data)`)

As an exercise, can you fill in the other commands?
