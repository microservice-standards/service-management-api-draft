'use strict';

var util = require('util');

module.exports = {
  serviceInfo: serviceInfo,
  apiCurrentVersionInfo: apiCurrentVersionInfo,
  apiAllVersionsInfo: apiAllVersionsInfo,
  buildVersionInfo: buildVersionInfo,
  serviceUptime: serviceUptime,
  processIdInfo: processIdInfo,
  processMemInfo: processMemInfo,
  osEnvInfo: osEnvInfo,
  cloudEnvInfo: cloudEnvInfo,
  runtimeInfo: runtimeInfo,
  dynamicPackageInfo: dynamicPackageInfo,
  staticPackageInfo: staticPackageInfo,
  connectionInfo: connectionInfo
};

function serviceInfo(req, res) 
{
  var out =
  {
    name: "service.x",
    type: "http.service",
    subsystem: "subsystem.a",
    capabilities: ["api","resources","service_calls"],
    is_proxy: false
  };
  res.json(out);
}

function apiCurrentVersionInfo(req, res) 
{
  var out =
  {
    version: "1.1",
    date: "2017-06-15",
    path: "/api/1.1",
    http_port: 11000,
    spec: "/api/1.1/spec"
  };
  res.json(out);
}

function apiAllVersionsInfo(req, res) 
{
  var out =
  [
    {
      version: "1.1",
      date: "2017-06-15",
      path: "/api/1.1",
      http_port: 11000,
      spec: "/api/1.1/spec"
    },
    {
      version: "1.0",
      date: "2016-09-20",
      path: "/api/1.0",
      http_port: 11000,
      spec: "/api/1.0/spec"
    }
  ];

  res.json(out);
}

function buildVersionInfo(req, res) 
{
  var out =
  {
    time: "2017-06-13T16:06:06Z",
    id: "172_something_something",
    commit: "c7fdea8821a7d6c5b1d0065f99ab465a75d68bc6",
    tag: "some-tag-or-branch-name"
  };
  res.json(out);
}

function serviceUptime(req, res) 
{
  var out =
  {
    uptime: 1497483390,
    start_time: "2017-06-13T16:06:06Z"
  };
  res.json(out);
}

function processIdInfo(req, res) 
{
  var out =
  {
    id: 12356,
    parent: 12345,
    children: [2345,3456]
  };
  res.json(out);
}

function processMemInfo(req, res) 
{
  var memInfo = process.memoryUsage();

  var out =
  {
    rss: memInfo.rss,
    vsz: memInfo.rss * 2,
    runtime: memInfo
  };
  res.json(out);
}

function osEnvInfo(req, res) 
{
  var out = process.env;
  res.json(out);
}

function cloudEnvInfo(req, res) 
{
  var out =
  {
    CloudTagKeyOne: "cloud tag value one",
    CLOUD_TAG_KEY_TWO: "cloud tag value two"
  };
  res.json(out);
}

function runtimeInfo(req, res) 
{
  var out =
  {
    name: "node",
    version: process.version,
    lang: "js",
    runtime:
    {
      versions: process.versions
    }
  };
  res.json(out);
}

function dynamicPackageInfo(req, res) 
{
  var out =
  [
    {
      name: "dynamic_package_name",
      version: "1.3.3",
      path: "install_path",
      hash: "hash_or_signature",
      hash_type: "hash_or_signature_type",
      license: "MIT"
    }
  ];
  res.json(out);
}

function staticPackageInfo(req, res) 
{
  var out =
  [
    {
      name: "static_package_name",
      version: "0.8.2",
      path: "package_path",
      hash: "hash_or_signature",
      hash_type: "hash_or_signature_type",
      license: "MIT"
    }
  ];
  res.json(out);
}

function connectionInfo(req, res) 
{
  var out =
  {
    ingress:
    [
      {
        ip: "192.14.17.138",
        port: 8080,
        protocol: "tcp",
        request:
        {
          type: "http",
          method: "get",
          endpoint: "/api/some/endpoint"
        }
      }
    ],
    egress:
    [
      {
        ip: "10.11.15.13",
        port: 80,
        protocol: "tcp"
      }
    ]
  };
  res.json(out);
}

