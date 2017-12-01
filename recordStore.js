var RecordStore = function(name, city, balance){
    this.name = name;
    this.city = city;
    this.balance = balance;
    this.inventory = [];
}

RecordStore.prototype.add = function (record) {
        this.inventory.unshift(record);
};

module.exports = RecordStore;
