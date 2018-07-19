// spy time?

(function(exports){
  function Foo(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
    this.update = new Update(sellIn, quality)
  };

  Foo.prototype.updateQuality = function () {
    if (this.update.sellIn > 0) {
      this.update.qualityReduceOne()
    } else {
      this.update.qualityReduceOne()
      this.update.qualityReduceOne()
    }
  };

  exports.Foo = Foo;
})(this);
