// Create web server
// Define port
const port = 3000;

// Import express
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import comments.js
const comments = require('./comments.js');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  let comment = comments.getComment(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a comment
app.post('/comments', (req, res) => {
  let comment = comments.createComment(req.body);
  res.json(comment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  let comment = comments.updateComment(req.params.id, req.body);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  let comment = comments.deleteComment(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on port', port);
});