var request = require('request');
var SteamID = require('steamid');

var timeout = 10000; // 10s, hardcoded for now

// Main API object
var SteamRepAPI = {
    _API_URL: "http://steamrep.com/id2rep.php?steamID32=",
    _PROFILE_URL: "http://steamrep.com/api/beta3/reputation/"
};

/**
 * Static method which checks user's "SCAMMER" status.
 * @param {string}   steamID  User's SteamID64 as string.
 * @param {function} callback Callback function.
 */
SteamRepAPI.IsScammer = function(steamID, callback) {
    if(typeof(callback) !== 'function')
        throw new Error('Callback is not a function.');

    var steamID32 = new SteamID(steamID);
    var finalUrl = this._API_URL + steamID32.getSteam2RenderedID();

    var options = {
        url: finalUrl,
        method: "GET",
        timeout: timeout
    };

    request(options, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            if(body.toLowerCase().indexOf("scammer") > -1) {
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
SteamRepAPI.GetProfile = function(steamID, callback) {
    var finalUrl = this._PROFILE_URL + steamID + "?json=1&extended=1";

    var options = {
        url: finalUrl,
        method: "GET",
        timeout: timeout,
        json: true
    };

    request(options, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            callback(null, body);
        } else {
            callback(error, null);
        }
    });
};

// Export API object
module.exports = SteamRepAPI;
