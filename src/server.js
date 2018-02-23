'use strict';

// Env vars
if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv');
  dotenv.config();
}

// Deps
const Hapi = require('hapi');
const Logger = require('winston');
const routes = require('./routes');

// Constants
const { PORT } = process.env;
const port = PORT || 4444;

// Server instance
const server = new Hapi.Server({
  port,
  address: '0.0.0.0',
  routes: { cors: true }
});

// Run
(async () => {
  try {
    server.route(routes);
    await server.start();
    Logger.info(`Server started on port ${port}`);
  } catch (error) {
    Logger.error('There was an error on server initialization', { error });
  }
})();
