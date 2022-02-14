const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require('./router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipesRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
