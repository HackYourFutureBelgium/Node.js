'use strict'

const fs = require('fs')

// Reading a file
fs.readFile('./sample-file.txt', 'utf8', function (err, data) {

    if (err) {
        throw err
    }

    console.log(data)

    // appending to a file
    fs.appendFile('./sample-file.txt', 'Class 5 is awesome!\n', function (err) {
        if (err) {
            throw err
        }

        // Reading back some file to confirm changes
        fs.readFile('./sample-file.txt', 'utf8', function (err, data) {

            if (err) {
                throw err
            }

            console.log(data)

            fs.writeFile('./sample-file.txt', 'Good job, class 5!', function (err) {
                if (err) {
                    throw err
                }

                fs.readFile('./sample-file.txt', 'utf8', function (err, data) {

                    if (err) {
                        throw err
                    }

                    console.log(data)
                })
            })
        })
    })
})
