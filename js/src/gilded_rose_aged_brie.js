(function(exports){
  function AgedBrie(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
    this.update = new Update(sellIn, quality)
  };

  AgedBrie.prototype.updateSellIn = function () {
    this.sellIn -= 1
  };

  AgedBrie.prototype.updateQuality = function () {
    if (this.update.sellIn > 0) {
      this.update.qualityIncreaseOne()
    } else {
      this.update.qualityIncreaseOne()
      this.update.qualityIncreaseOne()
    }
  };

  exports.AgedBrie = AgedBrie;
})(this);
