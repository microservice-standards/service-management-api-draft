'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  externalDependenciesInfo: externalDependenciesInfo,
  serviceDependenciesInfo: serviceDependenciesInfo,
  resourceDependenciesInfo: resourceDependenciesInfo
};


function externalDependenciesInfo(req, res) 
{
  var out =
  [
    {
      name: "sentry",
      endpoints: 
      [
        {
          domain: "metrics-api.librato.com",
          port: 443,
        }
      ]
    },
    {
      name: "datadog",
      endpoints: 
      [
        {
          domain: "app.datadoghq.com",
          port: 443
        }
      ]
    },
    {
      name: "some_service",
      endpoints: 
      [
        {
          port: 443,
          ips: ["10.10.10.10","10.11.11.11"]
        }
      ]
    }
  ];
  res.json(out);
}

function serviceDependenciesInfo(req, res) 
{
  var out =
  [
    {
      name: "service.y"
    },
    {
      name: "service.z"
    }
  ];
  res.json(out);
}

function resourceDependenciesInfo(req, res) 
{
  var out =
  [
    {
      id: "ds.pg.primary",
      name: "postgresql",
      version: "10.0",
      type: "data_store",
      endpoints:
      [
        {host: "10.1.1.1", port: 1234}
      ]
    },
    {
      id: "ds.cassandra",
      name: "cassandra",
      version: "3.0",
      type: "data_store",
      endpoints:
      [
        {host: "10.2.2.1", port: 1234},
        {host: "10.2.2.2", port: 1234},
        {host: "10.2.2.3", port: 1234}
      ]
    }
  ];
  res.json(out);
}


