'use strict';

var util = require('util');
var common = require('./common');
var _ = require('lodash');

module.exports = {
  healthTestsState: healthTestsState,
  healthTests: healthTests,
  healthTestsRun: healthTestsRun
};

function healthTestsState(req, res) 
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

var allTests =
[
  {
    id: "479b6171aa2f4a4695b3a1b19f0cc78a",
    enabled: true,
    description: "optional test description goes here",
    path: "/system/something/something_else",
    environments: ["env_one","env_two"],
    tags: ["tag_x","tag_y"],
    parameters:
    [
      {
        default: "value one",
        name: "one",
        position: 0,
        type: "string"
      },
      {
        default: 2,
        name: "two",
        position: 1,
        type: "integer"
      }
    ],
    schema:
    {
      properties:
      {
        one: {type: "string"},
        two: {type: "integer"}
      },
      required: []
    }
  },
  {
    id: "e00530fa9b82472499ebc7e5a6078f0e",
    enabled: true,
    description: "optional test description goes here",
    path: "/some/other/path",
    environments: ["env_one","env_two"],
    tags: ["tag_one","tag_two"],
    parameters:
    [
      {
        default: "data value one",
        name: "data",
        position: 0,
        type: "string"
      }
    ],
    schema:
    {
      properties:
      {
        data: {type: "string"}
      },
      required: []
    }
  },
  {
    id: "3e2ba9eecd2341e2890637a3ed6b9e70",
    enabled: true,
    description: "optional test description goes here",
    path: "/some/other/path/two",
    environments: ["env_three"],
    tags: ["tag_three"],
    parameters:
    [
      {
        default: "data value two",
        name: "data",
        position: 0,
        type: "string"
      }
    ],
    schema:
    {
      properties:
      {
        data: {type: "string"}
      },
      required: []
    }
  },
];

function healthTests(req, res) 
{
  var environments = null;
  var tags = null;
  var IDs = null;
  var pathPattern = null;

  if(req.swagger.params.environment.value !== undefined)
  {
    environments = req.swagger.params.environment.value;
  }

  if(req.swagger.params.tag.value !== undefined)
  {
    tags = req.swagger.params.tag.value;
  }

  if(req.swagger.params.id.value !== undefined)
  {
    IDs = req.swagger.params.id.value;
  }

  if(req.swagger.params.path.value !== undefined)
  {
    pathPattern = req.swagger.params.path.value;
  }

  console.log('healthTests(environments=%s;tags=%s;IDs=%s;path=%s)',
    environments,tags,IDs,pathPattern);

  var out = null;

  if(!environments && !tags && !IDs && !pathPattern)
  {
    out = allTests;
  }
  else
  {
    out = _.filter(allTests,
    function(testInfo)
    {
      if(IDs && (IDs.indexOf(testInfo.id) != -1))
      {
        return true;
      }

      var matched = false;

      //multiple selectors represent a logical AND
      if(tags)
      {
        var ssTags = _.sortBy(tags);
        var stTags = _.sortBy(testInfo.tags);
        var tagsMatch = _.intersection(stTags,ssTags);
        if(_.isEqual(tagsMatch,ssTags))
        {
          matched = true;
        }
        else
        {
          if(environments || (pathPattern && (pathPattern.length > 0)))
          {
            return false;
          }
        }
      }

      if(environments)
      {
        var ssEnvs = _.sortBy(environments);
        var stEnvs = _.sortBy(testInfo.environments);
        var envsMatch = _.intersection(stEnvs,ssEnvs);
        if(_.isEqual(envsMatch,ssEnvs))
        {
          matched = true;
        }
        else
        {
          if(tags || (pathPattern && (pathPattern.length > 0)))
          {
            return false;
          }
        }
      }

      if(pathPattern && (pathPattern.length > 0))
      {
        if('*' == pathPattern[pathPattern.length-1])
        {
          var prefix = _.trimEnd(pathPattern, '*');
          if(testInfo.path.indexOf(prefix) == 0)
          {
            matched = true;
          }
          else
          {
            if(tags || environments)
            {
              return false;
            }
          }
        }
        else
        {
          if(testInfo.path == pathPattern)
          {
            matched = true;
          }
          else
          {
            if(tags || environments)
            {
              return false;
            }
          }
        }
      }

      return matched;
    });
  }

  //the generic parameters don't align nicely with the 'schema' 
  //(might be good to have a special typed parameter set to go with the schema)
  res.json(out);
}

function healthTestsRun(req, res) 
{
  //NOTE: to pass explicit parameters to a subset of selected health checks params are passed in the body

  var environments = null;
  var tags = null;
  var IDs = null;
  var pathPattern = null;
  var wait = req.swagger.params.wait.value;
  var args = null;

  if(common.isEmptyValue(wait)) 
  {
    wait = 0;
  }

  if(req.swagger.params.environment.value !== undefined)
  {
    environments = req.swagger.params.environment.value;
  }

  if(req.swagger.params.tag.value !== undefined)
  {
    tags = req.swagger.params.tag.value;
  }

  if(req.swagger.params.id.value !== undefined)
  {
    IDs = req.swagger.params.id.value;
  }

  if(req.swagger.params.path.value !== undefined)
  {
    pathPattern = req.swagger.params.path.value;
  }

  if(req.swagger.params.arguments.value !== undefined)
  {
    args = req.swagger.params.arguments.value;
  }

  console.log('healthTestsRun(wait=%s,environments=%s;tags=%s;IDs=%s;path=%s;arguments=%s)',
    wait,environments,tags,IDs,pathPattern,
    JSON.stringify(args,null,2));

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


