var util = require('util');
var request = require('request');
var SteamID = require('steamid');

// Main API object
var SteamRepAPI = {
  _API_URL: 'http://steamrep.com/id2rep.php',
  _PROFILE_URL: 'http://steamrep.com/api/beta4/reputation/%s',

  // default timeout value
  timeout: 10000
};

/**
 * Static method which checks user's "SCAMMER" status.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
SteamRepAPI.isScammer = function(steamID, callback) {
  var steamID32 = new SteamID(steamID);

  var options = {
    url: this._API_URL,
    method: 'GET',
    timeout: this.timeout,
    qs: {
      steamID32: steamID32.getSteam2RenderedID()
    }
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      if(body.toLowerCase().indexOf('scammer') > -1) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    } else {
      callback(error, null);
    }
  });
};

/**
 * Returns users's extended SteamRep profile.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
SteamRepAPI.getProfile = function(steamID, callback) {
  var finalUrl = util.format(this._PROFILE_URL, steamID);

  var options = {
    url: finalUrl,
    method: 'GET',
    timeout: this.timeout,
    json: true,
    qs: {
      json: 1,
      extended: 1
    }
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      callback(null, body);
    } else {
      callback(error, null);
    }
  });
};

// Export API object
module.exports = SteamRepAPI;
