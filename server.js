const express = require('express')
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express()

app.use(express.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body);
})