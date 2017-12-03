var assert = require("assert");
var Record = require("../record.js");

describe("tests for record", function(){

    var record;

    beforeEach(function(){
        record = new Record("Queens of the Stone Age", "Songs for the Deaf", "Rock", 1999);
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
        assert.strictEqual(record.price, 1999);
    });

    it("should return a record details pitch", function(){
        assert.strictEqual(record.printDetails(), "Queens of the Stone Age released a great album called Songs for the Deaf, a classic Rock genre selling for £19.99");
    });

});
