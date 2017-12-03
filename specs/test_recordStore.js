var assert = require("assert");
var RecordStore = require("../recordStore.js");
var Record = require("../record.js");

describe("tests for Record Store", function(){
    var store, record1, record2;

    beforeEach(function(){
        record1 = new Record("Queens of the Stone Age", "Songs for the Deaf", "Rock", 1000);
        record2 = new Record("AC/DC", "Back in Black", "Rock", 700);
        store = new RecordStore("Metal-Ricks", "Glasgow", 10000);
    });

    it("should be able to access name", function(){
        assert.strictEqual(store.name, "Metal-Ricks");
    });

    it("should be able to access city", function(){
        assert.strictEqual(store.city, "Glasgow");
    });

    it("should be able to access store balance", function(){
        assert.strictEqual(store.balance, 10000);
    });

    it("should be able to add to store inventory", function(){
        store.add(record1);
        store.add(record2);
        assert.strictEqual(store.inventory.length, 2);
    });

    it("should print records details", function(){
        store.add(record1);
        assert.strictEqual(store.printRecordDetails(store.inventory[0]), "Queens of the Stone Age released a great album called Songs for the Deaf, a classic Rock genre selling for £10");
    });

    xit("should list inventory", function(){
        store.add(record1);
        assert.strictEqual(store.listInventory(), [record1]);
    });

    it("should remove record from store inventory and adjust store balance", function(){
        store.add(record1);
        store.add(record2);
        store.sellRecord(record1);
        assert.strictEqual(store.balance, 11000);
        assert.strictEqual(store.inventory.length, 1);
    });

    xit("should return financial statment of inventory", function(){
        store.add(record1);
        store.add(record2);
        assert.strictEqual(store.financialStatment, "Current Balance: £100.00, Current Inventory Value: £17.00")
    })
});
