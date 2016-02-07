# SteamRep API Wrapper for node.js

[![NPM version](http://img.shields.io/npm/v/steamrep.svg?style=flat)](https://www.npmjs.org/package/steamrep)
[![Dependency Status](https://david-dm.org/scholtzm/node-steamrep.svg)](https://david-dm.org/scholtzm/node-steamrep)
[![Build Status](https://travis-ci.org/scholtzm/node-steamrep.svg?branch=master)](https://travis-ci.org/scholtzm/node-steamrep)

Very thin wrapper for the API provided by [SteamRep.com](http://steamrep.com).

### Installation

`npm install steamrep`

### Usage

```js
var SteamRepAPI = require('steamrep');

// You can change the timeout value if you wish
SteamRepAPI.timeout = 5000;

// All methods are "static"
SteamRepAPI.isScammer("76561197960435530", function(error, result) {
  if(error) {
    console.log(error);
  } else {
    if(result) {
      console.log("This user is tagged as 'SCAMMER' at SteamRep.");
    } else {
      console.log("This user is NOT tagged as 'SCAMMER' at SteamRep.");
    }
  }
});

SteamRepAPI.getProfile("76561197960435530", function(error, result) {
  if(error === null) {
    console.log(result);
  }
});
```

### Properties

##### timeout

Timeout value used for HTTP requests. Defaults to 10000ms (10 seconds).

### Methods

##### isScammer(steamID, callback)

- `steamID` - user's SteamID64 as string
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is either `true` or `false`

Provides simple yes/no answer about user's scammer status.

##### getProfile(steamID, callback)

- `steamID` - user's SteamID64 as string
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is object returned by the API

Provides SteamRep information about given SteamID64, such as VAC status,
reputation status, pending reports and more.

### Tests

`npm test`

### License

MIT. See `LICENSE`.
