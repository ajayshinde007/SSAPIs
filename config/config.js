var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ssapis'
    },
    port: 3000,
    db: 'mongodb://localhost/ssapidb'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ssapis'
    },
    port: 3000,
    db: 'mongodb://localhost/ssapidb'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ssapis'
    },
    port: 3000,
    db: 'mongodb://localhost/ssapidb'
  }
};

module.exports = config[env];
