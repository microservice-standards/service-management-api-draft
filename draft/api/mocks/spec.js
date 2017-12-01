'use strict';

var util = require('util');

module.exports = {
  specImplemented: specImplemented
};

function specImplemented(req, res) 
{
  var out =
  [
    {route: "/.service/spec"},
    {route: "/.service/spec/implemented",methods: ["get"]},
    {route: "/.service/info"},
    {route: "/.service/info/version/api"},
    {route: "/.service/info/version/api/all"},
    {route: "/.service/info/version/build"},
    {route: "/.service/lifecycle/control",methods: ["post","get"]},
    {route: "/.service/lifecycle/state"},
    {route: "/.service/lifecycle/state/log"},
    {route: "/.service/lifecycle/activity"},
    {route: "/.service/health/status/live"},
    {route: "/.service/health/status/ready"},
    {route: "/.service/health/checks",methods: ["get","post"]},
    {route: "/.service/health/checks/state"},
    {route: "/.service/info/uptime"},
    {route: "/.service/info/process"},
    {route: "/.service/info/process/memory"},
    {route: "/.service/info/env/os"},
    {route: "/.service/info/env/cloud"},
    {route: "/.service/info/runtime"},
    {route: "/.service/info/packages/dynamic"},
    {route: "/.service/info/packages/static"},
    {route: "/.service/info/connections"},
    {route: "/.service/dependencies/services/external"},
    {route: "/.service/dependencies/services/internal"},
    {route: "/.service/dependencies/resources"},
    {route: "/.service/logs/{key}/tail"},
    {route: "/.service/logs/{key}/last"},
    {route: "/.service/logs/{key}/file"},
    {route: "/.service/logs/{key}/config",methods: ["get","put"]},
    {route: "/.service/logs"},
    {route: "/.service/config"},
    {route: "/.service/config/sources"},
    {route: "/.service/config/sources/{key}"},
    {route: "/.service/config/sources/{key}/data"},
    {route: "/.service/config/versions"},
    {route: "/.service/config/versions/{id}"},
    {route: "/.service/config/versions/{id}/data"},
    {route: "/.service/secrets"},
    {route: "/.service/metrics"}
  ];
  res.json(out);
}

/* 
/debug/trace
/debug/trace/tasks
/debug/trace/api/request/in
/debug/trace/api/request/out
/debug/trace/resource/{name}/calls
/debug/trace/events
*/




