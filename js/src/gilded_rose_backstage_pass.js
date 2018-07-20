(function(exports){
  function BackstagePass(sellIn, quality){
    this.update = new Update(sellIn, quality)
  };

  BackstagePass.prototype.updateSellIn = function () {
    this.update.sellOut()
  };

  BackstagePass.prototype.updateQuality = function () {
    if (this.update.sellIn > 10) {
      this.update.qualityIncreaseOne()
    } else if (this.update.sellIn > 5) {
      this.update.qualityIncreaseOne()
      this.update.qualityIncreaseOne()
    } else if (this.update.sellIn > 0) {
      this.update.qualityIncreaseOne()
      this.update.qualityIncreaseOne()
      this.update.qualityIncreaseOne()
    } else if (this.update.sellIn < 1) {
      this.update.qualitySetToZero()
    }
  };

  exports.BackstagePass = BackstagePass;
})(this);
