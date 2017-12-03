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
    return this.inventory;
};

RecordStore.prototype.sellRecord = function (record, index) {
    this.inventory.splice(index, 1);
    this.balance+= record.price;
};

RecordStore.prototype.methodName = function () {

};

module.exports = RecordStore;
