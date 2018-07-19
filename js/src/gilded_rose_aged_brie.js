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
      this.qualityIncreaseOne()
    } else {
      this.qualityIncreaseOne()
      this.qualityIncreaseOne()
    }
    this.capQualityAtFifty()
  };

  AgedBrie.prototype.qualityIncreaseOne = function () {
    this.quality += 1
  };

  AgedBrie.prototype.capQualityAtFifty = function () {
    if (this.quality > 50) {
      this.quality = 50
    }
  };

  exports.AgedBrie = AgedBrie;
})(this);
