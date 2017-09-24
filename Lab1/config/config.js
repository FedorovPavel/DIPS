var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'lab1'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/lab1-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'lab1'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/lab1-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'lab1'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/lab1-production'
  }
};

module.exports = config[env];
