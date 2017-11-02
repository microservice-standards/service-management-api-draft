'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  logTail: logTail,
  logLast: logLast,
  logConfig: logConfig,
  logConfigUpdate: logConfigUpdate,
  logFile: logFile,
  logList: logList
};


//"Tails"/"streams" current logs from the service
function logTail(req, res) 
{
  var out = '{"time":"2017-06-13T16:06:06Z","message":"one"}';
  res.end(out);
}

//GET /logs/{key}/last
//Returns the last X number of log records (100 by default)
function logLast(req, res) 
{
  //qs param: last
  //numeric: minimum 1, default 100
  //var recordCount = req.swagger.params.records.value;

  var out = '{"time":"2017-06-13T16:06:06Z","message":"one"}\n{"time":"2017-07-13T17:07:07Z","message":"two"}';
  res.end(out);
}

//GET /logs/{key}/file
//Returns the log file info for the key
function logFile(req, res, next) 
{
  var key = req.swagger.params.key.value;
  if(key in logFiles)
  {
    var out = logFiles[key];
    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no log"}));
}

//GET /logs/{key}/config
//Returns the runtime log config for the selected log key
function logConfig(req, res, next) 
{
  var key = req.swagger.params.key.value;
  if(key in logFiles)
  {
    var out = 
    {
      enabled: true,
      level: "warn",
      update_time: "2017-07-14T16:06:07Z"
    };

    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no log"}));
}

//PUT /logs/{key}/config
function logConfigUpdate(req, res, next) 
{
  var key = req.swagger.params.key.value;
  var enabled = req.swagger.params.enabled.value;
  var level = req.swagger.params.level.value;

  if(key in logFiles)
  {
    var out = 
    {
      enabled: enabled,
      level: level,
      update_time: "2017-07-14T16:06:08Z"
    };

    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no log"}));
}

//GET /logs
//Returns all available log keys and the associated log files
function logList(req, res) 
{
  res.json(logFiles);
}

//Q: 
//DOES IT MAKE SENSE TO EXPOSE THE NATIVE SCHEMA FOR THE LOG FILE IN THE schema FIELD 
//INSTEAD OF REQUIRING TO HAVE A JSON SCHEMA FOR ALL TYPES?
var logFiles =
{
  error_log: 
  {
    key: "error_log",
    path: "/some/path/errors.json",
    format: "json",
    size: 1234,
    create_time: "2017-06-13T16:06:06Z",
    update_time: "2017-07-14T16:06:07Z"
  },
  security_log: 
  {
    key: "security_log",
    path: "/some/other/path/security.json",
    format: "json",
    size: 2345,
    create_time: "2017-06-13T16:06:07Z",
    update_time: "2017-07-15T16:06:08Z"
  },
  event_log: 
  {
    key: "event_log",
    path: "/yet/another/path/events.json",
    format: "json",
    size: 3456,
    create_time: "2017-06-13T16:06:08Z",
    update_time: "2017-07-16T16:06:09Z"
  }
};



