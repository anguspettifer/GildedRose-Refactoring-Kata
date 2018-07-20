(function(exports){
  function AgedBrie(sellIn, quality){
    this.update = new Update(sellIn, quality)
  };

  AgedBrie.prototype.updateSellIn = function () {
    this.update.sellOut()
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
