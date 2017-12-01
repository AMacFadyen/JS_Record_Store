var Record = function(artist, title, genre, price){
    this.artist = artist;
    this.title = title,
    this.genre = genre,
    this.price = price;
}

Record.prototype.printDetails = function () {
    return (this.artist + " released a great album called " + this.title + ", a classic " + this.genre + " genre selling for £" + (this.price/100));
};

module.exports = Record;
