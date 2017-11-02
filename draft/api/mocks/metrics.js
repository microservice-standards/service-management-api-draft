'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  metricsInfo: metricsInfo
};

//Returns the base path for the metrics endpoints (path and port)
function metricsInfo(req, res) 
{
  var out =
  {
    type: "prometheus",
    path: "/metrics",
    port: 1111
  };
  res.json(out);
}

