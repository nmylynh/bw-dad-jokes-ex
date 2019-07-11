const express = require('express');
const server = express();
const configureMiddleware = require('./middleware/config-mw');
const auth = require('./routers/auth-router');
const users = require('./routers/users-router');
const jokes = require('./routers/jokes-router');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to DAD JOKES!</h2>`)
  });  


server.use('/auth', auth);
server.use('/api/users', users);
server.use('/api/jokes', jokes)


module.exports = server;