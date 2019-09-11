# Reading, Appending, Writing To Files

The `fs` module, which comes bundled with NodeJS, is used for file operations.

## Reading a File

- `fs.readFile` is the most commonly used function. It takes the file name, the [`encoding`](https://www.reddit.com/r/explainlikeimfive/comments/2a3tik/eli5_can_someone_explain_character_encoding_to_me/), and a callback function.
- If you forget to mention the encoding, you'll see the raw bytes (`Buffer <1a, 55, ...>`). Computers only understand numbers, so we must tell them what encoding to use to give us the text.
- Always check for errors in callbacks
