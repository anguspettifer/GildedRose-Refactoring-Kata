(function(exports){
  function BackstagePass(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
  };

  BackstagePass.prototype.updateSellIn = function () {
    this.sellIn -= 1
  };

  BackstagePass.prototype.updateQuality = function () {
    if (this.sellIn > 10) {
      this.qualityIncreaseOne()
    } else if (this.sellIn > 5) {
      this.qualityIncreaseOne()
      this.qualityIncreaseOne()
    } else if (this.sellIn > 0) {
      this.qualityIncreaseOne()
      this.qualityIncreaseOne()
      this.qualityIncreaseOne()
    } else if (this.sellIn < 1) {
      this.quality = 0
    }
    this.capQualityAtFifty()
  };

  BackstagePass.prototype.qualityIncreaseOne = function () {
    this.quality += 1
  };

  BackstagePass.prototype.capQualityAtFifty = function () {
    if (this.quality > 50) {
      this.quality = 50
    }
  };

  exports.BackstagePass = BackstagePass;
})(this);
