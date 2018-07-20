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
      this.quality = Update.changeQuality(1,this.quality)
    } else if (this.sellIn > 5) {
      this.quality = Update.changeQuality(2,this.quality)
    } else if (this.sellIn > 0) {
      this.quality = Update.changeQuality(3,this.quality)
    } else if (this.sellIn < 1) {
      this.quality = 0
    }
  };

  exports.BackstagePass = BackstagePass;
})(this);
