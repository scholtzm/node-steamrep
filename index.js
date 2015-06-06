var request = require('request');
var SteamID = require('steamid');

function SteamRepAPI() {
    this.API_URL = "http://steamrep.com/id2rep.php?steamID32=";
}

SteamRepAPI.prototype.IsTagged = function(steamID, tag, callback) {
    if(typeof(callback) !== 'function')
        throw new Error('Callback is not a function.');

    var steamID32 = new SteamID(steamID);
    var finalUrl = this.API_URL + steamID32.getSteam2RenderedID();

    var options = {
        url: finalUrl,
        method: "GET",
        timeout: 10000
    };

    request(options, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            if(body.indexOf(tag) > -1) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        } else {
            callback(error, null);
        }
    });
};

module.exports = function(Vapor) {

    Vapor.extension.SteamRepAPI = new SteamRepAPI();

};
