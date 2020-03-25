const fs = require("fs")

fs.readFile("keyboard.txt", (err, text) => {
    console.log(text.toString())
})