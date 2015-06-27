# SteamRep API Wrapper for node.js

Very thin wrapper for the API provided by [SteamRep.com](http://steamrep.com).

### Installation

`npm install steamrep`

### Usage

```js
var SteamRepAPI = require('steamrep');

// All methods are "static"
SteamRepAPI.IsScammer("76561197960435530", function(error, result) {
	if(error) {
		console.log(error);
	} else {
		if(result) {
			console.log("This user is tagged as 'SCAMMER' at SteamRep.");
		} else {
			console.log("This user is not tagged as 'SCAMMER' at SteamRep.");
		}
	}
});
```

### Methods

##### SteamRepAPI.IsScammer(steamID, callback)

- `steamID` - user's SteamID64 as string.
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is either `true` or `false`

### Tests

`npm test`

### License

MIT. See `LICENSE`.
