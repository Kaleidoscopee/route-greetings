const express = require('express');
const app = express();
const port = 3000;

const name = "Jose"

app.get("/greeting", (req,res) => {
    res.send("<h1>Hello, welcome to the greeting screen!</h1>")
})

app.get("/name", (req,res) => {
    res.send(`<h1>Hello, ${name}, how are you?</h1>`)
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}/`)
})
