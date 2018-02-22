'use strict';

// Env vars
if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv');
  dotenv.config();
}

// Deps
const Hapi = require('hapi');
const Logger = require('winston');

// Constants
const { PORT } = process.env;
const port = PORT || 4444;

// Server instance
const server = new Hapi.Server({ port });

// Run
(async () => {
  try {
    await server.start();
    Logger.info(`Server started on port ${port}`);
  } catch (error) {
    Logger.error('There was an error on server initialization', { error });
  }
})();
