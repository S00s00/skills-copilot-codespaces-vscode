// create web server
// create a route for comments
// create a route for adding comments
// create a route for deleting comments
// create a route for updating comments

const express = require('express');
const app = express();
const comments = require('./comments');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json(comments);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.json(comments);
});

app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments[id] = req.body.comment;
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is running');
});