/* jshint expr:true */

var SteamRepAPI = require('../');
var expect = require('chai').expect;
var nock = require('nock');

var isScammerFalse = nock("http://steamrep.com")
                     .get("/id2rep.php?steamID32=STEAM_0:0:84901")
                     .reply(200, "_& &STEAM_0:0:84901");

var isScammerTrue = nock("http://steamrep.com")
                    .get("/id2rep.php?steamID32=STEAM_0:0:21026124")
                    .reply(200, "_&IS A SCAMMER,SR SCAMMER,SKIAL SCAMMER,FoG SCAMMER,REDDIT SCAMMER &STEAM_0:0:21026124");

describe('SteamRepAPI Wrapper', function () {

    it('IsScammer returns false for clean profile', function(done) {
        SteamRepAPI.IsScammer("76561197960435530", function(error, result) {
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
