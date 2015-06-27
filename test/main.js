/* jshint expr:true */

var SteamRepAPI = require('../');
var expect = require('chai').expect;

describe('SteamRepAPI Wrapper', function () {

    it('IsScammer returns false for clean profile', function(done) {
        SteamRepAPI.IsScammer("76561197995498740", function(error, result) {
            expect(error).to.be.null;
            expect(result).to.be.false;

            return done();
        });
    });

    it('IsScammer returns true for banned profile', function(done) {
        SteamRepAPI.IsScammer("76561198002317976", function(error, result) {
            expect(error).to.be.null;
            expect(result).to.be.true;

            return done();
        });
    });

});
