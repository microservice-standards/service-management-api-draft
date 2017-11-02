'use strict';

var path = require('path');
var SwaggerHapi = require('swagger-hapi');
var Hapi = require('hapi');
var app = new Hapi.Server();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerHapi.create(config, function(err, swaggerHapi) {
  if (err) { throw err; }

  var port = process.env.PORT || 1111;
  app.connection({ port: port });
  app.address = function() {
    return { port: port };
  };

  app.register(swaggerHapi.plugin, function(err) {
    if (err) { return console.error('Failed to load plugin:', err); }
    app.start(function() {
      if (swaggerHapi.runner.swagger.paths['/spec']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/.service/spec');
      }
    });
  });
});
