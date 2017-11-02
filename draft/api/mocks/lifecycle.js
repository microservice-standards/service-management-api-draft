'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  submitCommand: submitCommand,
  commandInfo: commandInfo,
  stateInfo: stateInfo,
  activityStats: activityStats
};


function submitCommand(req, res) 
{
  var action = req.swagger.params.action.value;
  var wait = req.swagger.params.wait.value;
  var deadline = req.swagger.params.deadline.value;
  var expire = req.swagger.params.expire.value;
  var force = req.swagger.params.force.value;
  var returnState = req.swagger.params.return_state.value;

  //note: need a default for empty values in the swagger lib
  if(common.isEmptyValue(force)) 
  {
    force = true;
  }

  //note: need a default for empty values in the swagger lib
  if(common.isEmptyValue(returnState)) 
  {
    returnState = true;
  }

  console.log('submitCommand(%s,%s,%s,%s,%s,%s)',action,wait,deadline,expire,force,returnState);

  var out =
  {
    status: "accepted",
    command:
    {
      id: "36c21e6e4561442aa1dfbefc2beaf241",
      action: action,
      status: "pending",
      progress: 0,
      accept_time: "2017-06-13T16:06:06Z",
      start_expire: expire,
      exec_deadline: deadline
    }
  };

  if(returnState)
  {
    out.state =
    {
      update_count: 3,
      update_time: "2017-06-13T16:06:06Z",
      current: "active",
      previous: "paused"
    };
  }
  res.json(out);
}

function commandInfo(req, res) 
{
  var out =
  {
    id: "427d1e6e4561442aa1dfcebc2beaf159",
    action: "drain.all",
    status: "accepted",
    progress: 0,
    accept_time: "2017-06-13T16:06:06Z",
    start_expire: 120,
    exec_deadline: 600
  };

  res.json(out);
}

//NOTE: 
//* all lifecycle commands and state changes need to generate metrics
//* TBD if lifecycle state events need to be generated too

function stateInfo(req, res) 
{
  var out =
  {
    update_count: 4,
    update_time: "2017-07-13T16:08:05Z",
    current: "active",
    previous: "reloading.config"
  };

  res.json(out);
}

function activityStats(req, res) 
{
  var out =
  {
    tasks: 12,
    ingress_requests: 2,
    egress_requests: 173
  };
  res.json(out);
}



