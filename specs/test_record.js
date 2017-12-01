var assert = require("assert");
var Record = require("../record.js");

describe("tests for record", function(){

    var record;

    beforeEach(function(){
        record = new Record("Queens of the Stone Age", "Songs for the Deaf", "Rock", 2000);
    });

    it("should access artist", function(){
        assert.strictEqual(record.artist, "Queens of the Stone Age");
    });

    it("should access title", function(){
        assert.strictEqual(record.title, "Songs for the Deaf");
    });

    it("should access genre", function(){
        assert.strictEqual(record.genre, "Rock");
    });

    it("should access price", function(){
        assert.strictEqual(record.price, 2000);
    });
});
