'use strict';

var util = require('util');
var common = require('./common');

module.exports = {
  secretsInfo: secretsInfo
};

//Returns the metadata for the current service secrets (no values)
function secretsInfo(req, res) 
{
  //Q: SHOULD IT BE A MAP INSTEAD?
  var out =
  [
  	{
  	  key: "unique.key.name",
  	  update_time: "2017-07-13T17:07:07Z",
  	  hash: "77bf57a3bea0ba1d7f0e082583cce0cca8d48c37e44187c8f3ca3d13d901f473",
  	  type: "external",
  	  location: "https://secret-store-location"
  	}
  ];
  res.json(out);
}
