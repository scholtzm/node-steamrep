# Vapor SteamRep Plugin

[Vapor](https://github.com/scholtzm/vapor) plugin for easy SteamRep checks.

### Features

- Wrapper for the super simple SteamRep API.

### Methods

After being loaded by Vapor, this plugin will be injected into `Vapor.extension`
and available as `Vapor.extension.SteamRepAPI`.

##### SteamRepAPI.IsTagged(steamID, tag, callback)

- `steamID` - user's SteamID64 as string.
- `tag` - should be either "SCAMMER" or "CAUTION".
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is either `true` or `false` 

### Installation

1. Go to your Vapor folder.
2. Run `npm install git+https://github.com/scholtzm/vapor-steamrep.git`.

### License

MIT. See `LICENSE`.
