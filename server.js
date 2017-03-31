const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

// Set up the express app
const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Entry to routes located in server/controllers/index.js
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const server = http.createServer(app);
server.listen(port);