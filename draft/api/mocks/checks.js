'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  healthChecksState: healthChecksState,
  healthChecks: healthChecks,
  healthChecksRun: healthChecksRun
};


function healthChecksState(req, res) 
{
  //QUESTIONS:
  //1. do something similar to Lifecycle? have current state and pending state...
  //2. should we bail on first failure??? might be a good idea...
  var out =
  {
    id: "b8e10e6e4561442aa1dfbefc2becd179",
    state: "pending",
    start_time: "2017-06-13T16:06:06Z",
    current_time: "2017-06-13T16:07:06Z",
    total_checks: 20,
    selected_checks: 15,
    executed_checks: 7,
    failed_checks: 0

  };
  res.json(out);
}

function healthChecks(req, res) 
{
  var tags = null;
  var classifications = null;
  var IDs = null;
  var pathPattern = null;

  if(req.swagger.params.tag.value !== undefined)
  {
    tags = req.swagger.params.tag.value;
  }

  if(req.swagger.params.classification.value !== undefined)
  {
    classifications = req.swagger.params.classification.value;
  }

  if(req.swagger.params.id.value !== undefined)
  {
    IDs = req.swagger.params.id.value;
  }

  if(req.swagger.params.path.value !== undefined)
  {
    pathPattern = req.swagger.params.path.value;
  }

  console.log('healthChecks(tags=%s;classifications=%s;IDs=%s;path=%s)',
    tags,classifications,IDs,pathPattern);

  var out =
  [
    {
      id: "val",
      enabled: true,
      description: "...",
      tags: ["one","two"],
      classifications: ["x","y"],
      parameters:
      {
        one: "one",
        two: 2
      },
      schema:
      {
        properties:
        {
          one: {type: "string"},
          two: {type: "integer"}
        },
        required: []
      }
    }
  ];
  res.json(out);
}

function healthChecksRun(req, res) 
{
  //NOTE: to pass explicit parameters to a subset of selected health checks params are passed in the body

  var tags = null;
  var classifications = null;
  var IDs = null;
  var pathPattern = null;
  var wait = req.swagger.params.wait.value;
  var param_overrides = null;

  if(common.isEmptyValue(wait)) 
  {
    wait = 0;
  }

  if(req.swagger.params.tag.value !== undefined)
  {
    tags = req.swagger.params.tag.value;
  }

  if(req.swagger.params.classification.value !== undefined)
  {
    classifications = req.swagger.params.classification.value;
  }

  if(req.swagger.params.id.value !== undefined)
  {
    IDs = req.swagger.params.id.value;
  }

  if(req.swagger.params.path.value !== undefined)
  {
    pathPattern = req.swagger.params.path.value;
  }

  if(req.swagger.params.param_overrides.value !== undefined)
  {
    param_overrides = req.swagger.params.param_overrides.value;
  }

  console.log('healthChecksRun(wait=%s,tags=%s;classifications=%s;IDs=%s;path=%s;param_overrides=%s)',
    wait,tags,classifications,IDs,pathPattern,
    JSON.stringify(param_overrides,null,2));

  var out =
  {
    status: "accepted",
    state:
    {
      id: "b8e10e6e4561442aa1dfbefc2becd179",
      state: "pending",
      start_time: "2017-06-13T16:06:06Z",
      current_time: "2017-06-13T16:07:06Z",
      total_checks: 20,
      selected_checks: 15,
      executed_checks: 7,
      failed_checks: 0
    }
  };
  res.json(out);
}


