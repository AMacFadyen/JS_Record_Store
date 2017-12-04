var _ = require("lodash");

var RecordStore = function(name, city, balance){
    this.name = name;
    this.city = city;
    this.balance = balance;
    this.inventory = [];
}

RecordStore.prototype.add = function (record) {
        this.inventory.push(record);
};

RecordStore.prototype.printRecordDetails = function (record) {
    console.log(record.printDetails());
    return record.printDetails();
};

RecordStore.prototype.listInventory = function () {
    console.log(this.inventory);
    return true;
};

RecordStore.prototype.stockSum = function () {
    return _.sumBy(this.inventory, 'price');
    // var stockValue = 0
    // for(record of this.inventory){
    //     stockValue += record.price;
    // };
    // return stockValue;
};

RecordStore.prototype.sellRecord = function (record, index) {
    this.inventory.splice(index, 1);
    this.balance+= record.price;
};

RecordStore.prototype.financialStatment = function () {
    return "Current Balance: £" + (this.balance/100) + ", Current Inventory Value: £" + (this.stockSum()/100);
};

RecordStore.prototype.findByGenre = function (genre) {
    var foundRecords = [];
    for(record of this.inventory){
        if(record.genre == genre){
            foundRecords.push(record);
        };
    };
    console.log(foundRecords);
    return true;
};

module.exports = RecordStore;
