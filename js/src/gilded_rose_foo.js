(function(exports){
  function Foo(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
  };

  Foo.prototype.updateSellIn = function () {
    this.sellIn -= 1
  };

  Foo.prototype.updateQuality = function () {
    if (this.sellIn > 0) {
      this.qualityReduceOne()
    } else {
      this.qualityReduceOne()
      this.qualityReduceOne()
    }
    this.floorQualityAtZero()
  };

  Foo.prototype.qualityReduceOne = function () {
    this.quality -= 1
  };

  Foo.prototype.floorQualityAtZero = function () {
    if (this.quality < 0) {
      this.quality = 0
    }
  };

  exports.Foo = Foo;
})(this);
