(function(exports){
  function AgedBrie(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
  };

  AgedBrie.prototype.updateSellIn = function () {
    this.sellIn -= 1
  };

  AgedBrie.prototype.updateQuality = function () {
    if (this.sellIn > 0) {
      this.quality += 1
    } else {
      this.quality += 2
    }
    this.capQualityAtFifty()
  };

  AgedBrie.prototype.capQualityAtFifty = function () {
    if (this.quality > 50) {
      this.quality = 50
    }
  };

  exports.AgedBrie = AgedBrie;
})(this);
