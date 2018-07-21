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

  // Do alter this
  update() {

    var choice = {
      'Sulfuras, Hand of Ragnaros': Sulfuras,
      'Aged Brie': AgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
    }

    for (var i = 0; i < this.items.length; i++) {
      if (choice[this.items[i].name] != undefined) {
        var item = new choice[this.items[i].name](this.items[i].sellIn, this.items[i].quality)
      } else {
        var item = new Foo(this.items[i].sellIn, this.items[i].quality)
      }
      item.updateQuality();
      item.updateSellIn();
      this.items[i].sellIn = item.sellIn
      this.items[i].quality = item.quality
    }

    return this.items;
  }
}
