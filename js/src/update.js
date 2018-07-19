(function(exports){
  function Update(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
  }

  Update.prototype.sellOut = function () {
    this.sellIn -= 1
  };

  Update.prototype.qualityIncreaseOne = function () {
    this.quality += 1
    if (this.quality > 50) {
      this.quality = 50
    }
  };

  Update.prototype.qualityReduceOne = function () {
    this.quality -= 1
    if (this.quality < 0) {
      this.quality = 0
    }
  };

  Update.prototype.qualitySetToZero = function () {
    this.quality = 0
  };

  exports.Update = Update;
})(this);
