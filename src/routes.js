'use strict';

const routes = [
  {
    method: 'GET',
    path: '/coinlist',
    options: require('./coinlist/fetch')
  }
];

module.exports = routes;
