const express = require('express');
const app = express();
const path = require('path');

const filePath = path.join(__dirname, './public/index.html');
const errorPath = path.join(__dirname, './public/error.html');

const port = 5000;

app.get('/index.html', (req, res) => {
    res.status(200);
    res.sendFile(filePath);
    });

    app.get('*', (req, res) => {
        res.status(404);
        res.sendFile(errorPath);
        });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });