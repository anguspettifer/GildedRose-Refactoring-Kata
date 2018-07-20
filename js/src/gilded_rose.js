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
      this.items[i].sellIn = item.sellIn
      this.items[i].quality = item.quality
    }

    // function item_chooser(sellIn, quality){
    //   var choice = {
    //     'Sulfuras, Hand of Ragnaros': Sulfuras,
    //     Give the actual constructor function, not an instance thereof
    //     'Aged Brie': new AgedBrie(sellIn, quality),
    //     'Backstage passes to a TAFKAL80ETC concert': new BackstagePass(sellIn, quality),
    //   }
    // }
    //
    // for (var i = 0; i < this.items.length; i++) {
    //   console.log(item_chooser);
    //   item_chooser(this.items[i].sellIn, this.items[i].quality)
    //   var item = item_chooser.choice[this.items[i]].name
    //
    //   item.updateQuality();
    //   item.updateSellIn();
    //   this.items[i].sellIn = item.update.sellIn
    //   this.items[i].quality = item.update.quality
    // }

    return this.items;
  }
}
