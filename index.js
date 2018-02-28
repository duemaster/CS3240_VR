const express = require('express');
const path = require('path');
const app = express()

// app.get('/', (req, res) => res.sendFile("index.html"));

app.use('/', express.static(path.join(__dirname, '.')));

app.listen(3000, () => console.log('App Started on Port 3000'));