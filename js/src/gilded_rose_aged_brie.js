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
      this.quality = QualityContoller.changeQuality(1,this.quality)
    } else {
      this.quality = QualityContoller.changeQuality(2,this.quality)
    }
  };

  exports.AgedBrie = AgedBrie;
})(this);
