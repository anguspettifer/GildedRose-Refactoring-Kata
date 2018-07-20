class Item {
  // Do not alter this
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  // Do not alter this
  constructor(items=[]){
    this.items = items;
  }
// whats my issue?
// this.items.sellIn has been passed as an argument, which is updated
// But the origonal piece of data is not updated.
// we need to pass the whole object, not just the data.


  // Do alter this
  update() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        var item = new Sulfuras(this.items[i].sellIn, this.items[i].quality)
      } else if (this.items[i].name == 'Aged Brie') {
        var item = new AgedBrie(this.items[i].sellIn, this.items[i].quality)
      } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        var item = new BackstagePass(this.items[i].sellIn, this.items[i].quality)
      } else {
        var item = new Foo(this.items[i].sellIn, this.items[i].quality)
      }
      item.updateQuality();
      item.updateSellIn();
      this.items[i].sellIn = item.update.sellIn
      this.items[i].quality = item.update.quality

    }

    return this.items;
  }
}
