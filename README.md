# SteamRep API Wrapper for node.js

[![NPM version](http://img.shields.io/npm/v/steamrep.svg?style=flat)](https://www.npmjs.org/package/steamrep)
[![Dependency Status](https://david-dm.org/scholtzm/node-steamrep.svg)](https://david-dm.org/scholtzm/node-steamrep)

Very thin wrapper for the API provided by [SteamRep.com](http://steamrep.com).

### Installation

`npm install steamrep`

### Usage

```js
var SteamRepAPI = require('steamrep');

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

##### getProfile(steamID, callback)

- `steamID` - user's SteamID64 as string
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is object returned by the API

An example of stringified result object:

```json
{
  "steamrep":{
    "flags":{
      "status":"exists"
    },
    "steamID32":"STEAM_0:0:84901",
    "steamID64":"76561197960435530",
    "steamrepurl":"http://steamrep.com/profiles/76561197960435530",
    "displayname":"Robin",
    "rawdisplayname":"Robin",
    "avatar":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1dd60a188883caf82d0cbfccfe6aba0af1732d4_medium.jpg",
    "membersince":"1063407589",
    "customurl":"robinwalker",
    "tradeban":"1",
    "vacban":"0",
    "lastsynctime":"1436568717",
    "reputation":{
      "full":"VALVE ADMIN",
      "summary":"ADMIN"
    }
  }
}
```

### Tests

`npm test`

### License

MIT. See `LICENSE`.
