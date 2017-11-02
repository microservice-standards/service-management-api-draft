'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  configInfo: configInfo,
  configSourceList: configSourceList,
  configSource: configSource,
  configSourceData: configSourceData,
  configVersionList: configVersionList,
  configVersion: configVersion,
  configVersionData: configVersionData,
  currentConfigVersion: currentConfigVersion
};


//GET /config
//qs: json or kv
function configInfo(req, res) 
{
  var out =
  {
  	section_one:
  	{
  		key_one: 1,
  		key_two: "two",
  		key_three: ["one","two","three"],
  		key_four:
  		{
  			key_one: "one"
  		}
  	}
  };
  res.json(out);
}

//GET /config/sources
function configSourceList(req, res) 
{
  res.json(configSources);
}

//GET /config/sources/{key}
function configSource(req, res) 
{
  var key = req.swagger.params.key.value;
  if(key in configSources)
  {
    var out = configSources[key];
    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no source"}));
}

//GET /config/sources/{key}/data
function configSourceData(req, res) 
{
  var key = req.swagger.params.key.value;
  if(key in configSources)
  {
  	//NOTES:
  	//1. can also return binary or text data (res.end(out))
  	//2. raw data doesn't have to have the same structure as the final config data
    var out =
    {
    	one: 1,
    	two: "two",
    	three: ["one","two","three"]
    };
    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no source"}));
}

//GET /config/versions
function configVersionList(req, res) 
{
  res.json(configVersionInfo);
}

//GET /config/versions/{id}
function configVersion(req, res) 
{
  var id = req.swagger.params.id.value;
  if((id => 0) && (id < configVersionInfo.length))
  {
    var out = configVersionInfo[id];
    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no version"}));
}

//GET /config/version
function currentConfigVersion(req, res) 
{
  var out = configVersionInfo[currentConfigVersionIdx];
  return res.json(out);
}

//GET /config/versions/{id}/data
function configVersionData(req, res) 
{
  var id = req.swagger.params.id.value;
  if((id => 0) && (id < configVersionData.length))
  {
    var out = configVersionData[id];
    return res.json(out);
  }
  
  res.statusCode = 404; //note: doesn't set the status due to a 'bug' in hapi middleware
  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify({message: "no version"}));
}

var currentConfigVersionIdx = 1;
var configVersionInfo =
[
	{
		id: 0,
		time: "2017-06-13T16:06:06.123Z",
		hash: "12c461a3bea0ba1d7f0e082583cce0cca8d48c37e44187c8f3ca3d13d901f316",
		is_stored: true,
		location: "file:///opt/service_name/config/versions/0/config.json",
	},
	{
		id: 1,
		time: "2017-07-13T17:07:07.234Z",
		hash: "81a251a3bea0ba1d7f0e082583cce0cca8d48c37e44187c8f3ca3d13d902d461",
		is_stored: false
  	}
];


var configVersionData =
[
	{
	  	section_one:
	  	{
	  		key_one: 0,
	  		key_two: "one",
	  		key_three: ["one","two","three"],
	  		key_four:
	  		{
	  			key_one: "one"
	  		}
	  	}
	},
	{
	  	section_one:
	  	{
	  		key_one: 1,
	  		key_two: "two",
	  		key_three: ["one","two","three"],
	  		key_four:
	  		{
	  			key_one: "one"
	  		}
	  	}
  	}
];


var configSources =
{
	file_one:
	{
		key: "file_one",
		update_time: "2017-06-13T16:06:06.123Z",
		hash: "77bf57a3bea0ba1d7f0e082583cce0cca8d48c37e44187c8f3ca3d13d901f473",
		type: "file",
		location: "file:///opt/service_name/config/file_one.yaml",
		format: "yaml"
	},
	file_two:
	{
		key: "file_two",
		update_time: "2017-06-13T16:06:06.123Z",
		hash: "31cf57a3bea0ba1d7f0e082583cce0cca8d48c37e44187c8f3ca3d13d901f251",
		type: "file",
		location: "file:///opt/service_name/config/file_two.json",
		format: "json"
	},
	env:
	{
		key: "env",
		update_time: "2017-06-13T16:06:06.123Z",
		type: "env"
	},
	etcd:
	{
		key: "etcd",
		update_time: "2017-06-13T16:06:06.123Z",
		type: "external",
		location: "http://some-location:2379"
	}
};


