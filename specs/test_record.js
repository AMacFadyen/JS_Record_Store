var assert = require("assert");
var Record = require("../record.js");

describe("tests for record", function(){

    var record;

    beforeEach(function(){
        record = new Record("Queens of the Stone Age", "Songs for the Deaf", "Rock", 2000);
    });

    xit("should access artist", function(){
        assert.strictEqual(record.artist, "Queens of the Stone Age");
    });

    xit("should access title", function(){
        assert.strictEqual(record.title, "Songs for the Deaf");
    });

    xit("should access genre", function(){
        assert.strictEqual(record.genre, "Rock");
    });

    xit("should access price", function(){
        assert.strictEqual(record.price, 2000);
    });
});
