(function(exports){
  function AgedBrie(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
  };

  AgedBrie.prototype.updateSellIn = function () {
    this.sellIn -= 1
  };

  AgedBrie.prototype.updateQuality = function () {
    if (this.update.sellIn > 0) {
      this.quality = Update.changeQuality(1,this.quality)
    } else {
      this.update.qualityIncreaseOne()
      this.update.qualityIncreaseOne()
    }
  };

  exports.AgedBrie = AgedBrie;
})(this);
