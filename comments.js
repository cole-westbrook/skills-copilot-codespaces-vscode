// Create web server
// Create a web server that listens to requests on port 3000 and responds with the comments array.
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000);

// Path: comments.js
// Create a comments array
// Create a comments array with the following comments:
// - 'I love your post'
// - 'You are the best'
// - 'Awesome work'
const comments = [
  'I love your post',
  'You are the best',
  'Awesome work',
];

module.exports = comments;

// Path: index.js
// Import the comments module
// Import the comments module and log the comments array to the console.
const comments = require('./comments');

console.log(comments);

// Path: index.js
// Create a web server
// Create a web server that listens to requests on port 3000 and responds with the comments array.
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000);

// Path: comments.js
// Create a comments array
// Create a comments array with the following comments:
// - 'I love your post'
// - 'You are the best'
// - 'Awesome work'
const comments = [
  'I love your post',
  'You are the best',
  'Awesome work',
];

module.exports = comments;

// Path: index.js
// Import the comments module
// Import the comments module and log the comments array to the console.
const comments = require('./comments');

console.log(comments);

// Path: index.js
// Create a web server
// Create a web server that listens to requests on port 3000 and responds with the comments array.
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000);

// Path: comments.js
// Create a comments array
// Create a comments array with the following comments:
// - 'I love your post'
// - 'You