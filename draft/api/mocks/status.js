'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  serviceIsLive: serviceIsLive,
  serviceIsReady: serviceIsReady
};


function serviceIsLive(req, res) 
{
  var out =
  {
    status: "live"
  };
  res.json(out);
}

function serviceIsReady(req, res) 
{
  var wait = req.swagger.params.wait.value;
  if(common.isEmptyValue(wait)) 
  {
    wait = 30;
  }

  console.log('serviceIsReady(%s)',wait);

  var out =
  {
    status: "pending"
  };
  res.json(out);
}


