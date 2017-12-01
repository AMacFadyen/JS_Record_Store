var assert = require("assert");
var RecordStore = require("../recordStore.js");
var Record = require("../record.js");

describe("tests for Record Store", function(){
    var store, record1, record2;

    beforeEach(function(){
        record1 = new Record("Queens of the Stone Age", "Songs for the Deaf", "Rock", 1000);
        record2 = new Record("AC/DC", "Back in Black", "Rock", 700);
        store = new RecordStore("Metal-Ricks", "Glasgow", [], 10000);
    });

    xit("should be able to access name", function(){
        assert.strictEqual(store.name, "Metal-Ricks");
    });

    xit("should be able to access city", function(){
        assert.strictEqual(store.city, "Glasgow");
    });

    xit("should be able to access store balance", function(){
        assert.strictEqual(store.balance, 10000);
    });

    xit("should be able to add to store inventory", function(){
        store.add(record1);
        store.add(record2);
        assert.strictEqual(store.inventory.length, 2);
    });
});
